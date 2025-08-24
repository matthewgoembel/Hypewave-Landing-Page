// ================================
// app/api/support/route.ts
// ================================
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, category } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === "true"), // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.SUPPORT_TO || "support@hypewave.ai";

    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;line-height:1.5">
        <h2>New Support Message</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Category:</strong> ${category || "support"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <pre style="white-space:pre-wrap;font-size:14px">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `Hypewave Support <no-reply@hypewave.ai>`,
      to,
      replyTo: email,
      subject: `[Support] ${subject}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Support API error", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
