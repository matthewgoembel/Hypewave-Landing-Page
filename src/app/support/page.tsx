// app/support/page.tsx
import Link from "next/link";
import SupportForm from "@/components/SupportForm";

export const metadata = {
  title: "Support — Hypewave AI",
  description:
    "Get help with Hypewave AI: FAQs, troubleshooting, account & billing, privacy requests, and how to contact support.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold">Support</h1>
        <p className="text-sm opacity-80 mt-1">We’re here to help you trade with clarity.</p>
      </header>

      {/* Quick actions */}
      <section aria-labelledby="quick" className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <h2 id="quick" className="text-lg font-semibold mb-2">Quick help</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-lg border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
              href="/status"
            >
              Status Page
            </Link>
            <Link
              className="rounded-lg border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
              href="/docs/getting-started"
            >
              Docs: Getting Started
            </Link>
            <a
              className="rounded-lg border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
              href="mailto:support@hypewave.ai?subject=Hypewave%20Support%20Request"
            >
              Email Support
            </a>
            <a
              className="rounded-lg border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
              href="https://t.me/+placeholder"
              target="_blank"
              rel="noreferrer"
            >
              Telegram (Henri)
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              📧 <a className="underline" href="mailto:support@hypewave.ai">support@hypewave.ai</a>
            </li>
            <li>
              🧰 <Link className="underline" href="/docs">Product Docs</Link>
            </li>
            <li>
              🗒️ <Link className="underline" href="/changelog">Release Notes</Link>
            </li>
            <li>
              🔔 <Link className="underline" href="/status">Service Status</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Troubleshooting */}
      <section aria-labelledby="troubleshoot" className="mt-10">
        <h2 id="troubleshoot" className="text-xl font-semibold mb-3">Troubleshooting</h2>
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <details className="mb-3">
            <summary className="cursor-pointer font-medium">Signals aren’t showing up</summary>
            <ol className="list-decimal pl-6 mt-2 text-sm space-y-1">
              <li>Confirm your watchlist has at least one symbol selected.</li>
              <li>Check the <Link href="/status" className="underline">Status Page</Link> for incidents.</li>
              <li>Ensure notifications are enabled in your app settings and OS settings.</li>
              <li>Pull to refresh (mobile) or click refresh in the extension panel.</li>
            </ol>
          </details>

          <details className="mb-3">
            <summary className="cursor-pointer font-medium">Can’t log in (Google/Apple)</summary>
            <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
              <li>Verify you’re on the latest app version.</li>
              <li>Toggle Airplane mode (mobile) then try again.</li>
              <li>Clear site data (extension) and retry sign‑in.</li>
              <li>If it persists, email <a className="underline" href="mailto:support@hypewave.ai">support@hypewave.ai</a> with your device + screenshot.</li>
            </ul>
          </details>

          <details>
            <summary className="cursor-pointer font-medium">Bot (Henri) isn’t responding</summary>
            <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
              <li>Use the command <code>/help</code> to verify connectivity.</li>
              <li>Check the #announcements channel for maintenance notices.</li>
              <li>Try again in a new DM with the bot (rate limits may apply).</li>
            </ul>
          </details>
        </div>
      </section>

      {/* Contact form */}
      <section aria-labelledby="contact-form" className="mt-10">
        <h2 id="contact-form" className="text-xl font-semibold mb-3">Contact Support</h2>
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <SupportForm />
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq" className="text-xl font-semibold mb-3">FAQs</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <details>
              <summary className="cursor-pointer font-medium">Which markets are covered?</summary>
              <p className="mt-2 text-sm opacity-90">Major crypto pairs, index futures, select metals, and liquid equities. Coverage expands based on demand.</p>
            </details>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <details>
              <summary className="cursor-pointer font-medium">How accurate are signals?</summary>
              <p className="mt-2 text-sm opacity-90">We share descriptive stats and win‑rates by cohort to inform—not to promise results. Markets evolve.</p>
            </details>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <details>
              <summary className="cursor-pointer font-medium">Do you place trades for me?</summary>
              <p className="mt-2 text-sm opacity-90">No. Hypewave provides information and tools only. You control your trading decisions.</p>
            </details>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
            <details>
              <summary className="cursor-pointer font-medium">Can I export my data?</summary>
              <p className="mt-2 text-sm opacity-90">Yes. See the Privacy & Data section below for export and deletion requests.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Billing & Account */}
      <section aria-labelledby="billing" className="mt-10">
        <h2 id="billing" className="text-xl font-semibold mb-3">Billing & Account</h2>
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li>
              Update plan or payment method: <Link className="underline" href="/account">Account Settings</Link>
            </li>
            <li>
              Refunds: Contact <a className="underline" href="mailto:support@hypewave.ai?subject=Refund%20request">support@hypewave.ai</a> within 7 days of purchase.
            </li>
            <li>
              Invoices/Receipts: We can resend invoices on request.
            </li>
          </ul>
        </div>
      </section>

      {/* Privacy & Data */}
      <section aria-labelledby="privacy" className="mt-10">
        <h2 id="privacy" className="text-xl font-semibold mb-3">Privacy & Data</h2>
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li>
              Data export: Email <a className="underline" href="mailto:privacy@hypewave.ai?subject=Data%20Export%20Request">privacy@hypewave.ai</a> from your account email.
            </li>
            <li>
              Data deletion: Email <a className="underline" href="mailto:privacy@hypewave.ai?subject=Right%20to%20Erasure%20Request">privacy@hypewave.ai</a>.
            </li>
            <li>
              See our <Link href="/privacy" className="underline">Privacy Policy</Link> and <Link href="/terms" className="underline">Terms</Link>.
            </li>
          </ul>
        </div>
      </section>

      {/* Report a bug template */}
      <section aria-labelledby="bug" className="mt-10">
        <h2 id="bug" className="text-xl font-semibold mb-3">Report a Bug</h2>
        <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5">
          <p className="text-sm opacity-90 mb-3">Copy this template and email it to <a className="underline" href="mailto:support@hypewave.ai">support@hypewave.ai</a>.</p>
          <pre className="whitespace-pre-wrap text-xs leading-5 bg-black/40 p-4 rounded-lg border border-white/10">{`Subject: Bug Report — [short title]

Steps to Reproduce:
1.
2.
3.

What happened:
[describe the issue]

What you expected to happen:
[expected outcome]

Context:
• App/Surface: (iOS / Android / Extension / Web / Bot)
• App version:
• Device/OS:
• Time (with timezone):
• Screenshot / screen recording link:
`}</pre>
        </div>
      </section>

      {/* Footer note */}
      <footer className="mt-12 text-center opacity-80 text-sm">
        <p>We usually respond within one business day. For outages or degraded performance, check the <Link href="/status" className="underline">Status Page</Link>.</p>
      </footer>
    </main>
  );
}