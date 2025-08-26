// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongo";

// --- Simple in-memory rate limiter ---
const RATE_LIMIT_WINDOW_MS = 10_000; // 10 seconds
const ipTimestamps = new Map<string, number>();

function normalizeEmail(raw?: string) {
  return (raw || "").trim().toLowerCase();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source = "footer", company } = body as {
      email?: string;
      source?: string;
      company?: string; // honeypot
    };

    // 🕵️ Server-side honeypot: silently drop
    if (typeof company === "string" && company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // Extract IP
    const headers = new Headers(req.headers);
    const ip =
      (headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || "unknown";

    // 🚦 Rate limiting by IP
    const last = ipTimestamps.get(ip) || 0;
    const nowTs = Date.now();
    if (nowTs - last < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        { error: "Too many attempts. Please wait a few seconds." },
        { status: 429 }
      );
    }
    ipTimestamps.set(ip, nowTs);

    const normalized = normalizeEmail(email);
    if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const db = await getDb();
    const col = db.collection("user_emails");

    // Ensure unique index (idempotent)
    await col.createIndex({ email: 1 }, { unique: true });

    const now = new Date();
    const userAgent = headers.get("user-agent") || undefined;
    const referer = headers.get("referer") || undefined;

    const doc = {
      email: normalized,
      source,
      createdAt: now,
      userAgent,
      referer,
      ip,
      consent: {
        newsletter: true,
        doubleOptIn: false,
      },
    };

    // Upsert: if email exists → update timestamp, else insert
    const result = await col.updateOne(
      { email: normalized },
      { $setOnInsert: doc, $set: { updatedAt: now } },
      { upsert: true }
    );

    // If no document was inserted, it means it already existed
    if (result.upsertedCount === 0) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    if (err?.code === 11000) {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
