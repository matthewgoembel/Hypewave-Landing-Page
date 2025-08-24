// app/api/support/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SupportCategory = "support" | "billing" | "bug" | "feedback" | "partnership";

interface SupportBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  category?: SupportCategory;
}

/** Very small runtime validator (keeps zod out) */
function parseBody(x: unknown): { ok: true; data: SupportBody } | { ok: false; error: string } {
  if (typeof x !== "object" || x === null) return { ok: false, error: "Invalid JSON" };
  const o = x as Record<string, unknown>;

  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const subject = typeof o.subject === "string" ? o.subject.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";
  const categoryRaw = typeof o.category === "string" ? (o.category as SupportCategory) : "support";

  if (!name || !email || !subject || !message) {
    return { ok: false, error: "Missing required fields" };
  }
  const allowed: SupportCategory[] = ["support", "billing", "bug", "feedback", "partnership"];
  const category = allowed.includes(categoryRaw) ? categoryRaw : "support";

  return { ok: true, data: { name, email, subject, message, category } };
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = parseBody(json);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const { name, email, subject, message, category } = parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,           // STARTTLS on 587
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.SUPPORT_TO || "support@hypewave.ai";
    const from = process.env.SMTP_FROM || `Hypewave Support <${process.env.SMTP_USER}>`;

    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.5">
        <h2>New Support Message</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <pre style="white-space:pre-wrap;font-size:14px">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Support] ${subject}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Failed to send message";
    console.error("Support API error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
