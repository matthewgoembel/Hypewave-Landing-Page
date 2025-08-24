"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";
type SupportCategory = "support" | "billing" | "bug" | "feedback" | "partnership";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: SupportCategory;
}

export default function SupportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;

    // Build a typed payload explicitly (no Object.fromEntries → any)
    const formValues: FormValues = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      category: ((form.elements.namedItem("category") as HTMLSelectElement).value ||
        "support") as SupportCategory,
    };

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Try again.";
      setError(message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 outline-none"
            placeholder="Jane Trader"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Category</label>
          <select
            name="category"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 outline-none"
            defaultValue="support"
          >
            <option value="support">General Support</option>
            <option value="billing">Billing</option>
            <option value="bug">Bug Report</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Subject</label>
          <input
            name="subject"
            type="text"
            required
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 outline-none"
            placeholder="Short summary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 outline-none"
          placeholder="Tell us what’s going on…"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg border border-white/30 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {status === "success" && <span className="text-sm">✅ Sent! We’ll reply by email.</span>}
        {status === "error" && <span className="text-sm">❌ {error}</span>}
      </div>
    </form>
  );
}
