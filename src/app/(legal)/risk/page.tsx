// src/app/(legal)/terms/page.tsx
export const metadata = {
  title: 'Terms of Service – Hypewave AI',
  description: 'The terms that govern use of Hypewave AI.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-7 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-neutral-500 mb-8">Last updated: Aug 20, 2025</p>

      <p className="mb-6">
        Welcome to <strong>Hypewave AI</strong> (“Service”), operated by
        {' '}<strong>[Company Name, LLC]</strong>. By using Hypewave AI, you agree to these terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Eligibility</h2>
      <p>You must be 18 years or older to use this Service.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. No Financial Advice</h2>
      <p>
        Hypewave AI provides educational insights, signals, and data analysis. We are not financial
        advisors, brokers, or dealers. All trading decisions are your sole responsibility.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. User Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Keep account credentials secure.</li>
        <li>Do not misuse the Service (fraud, abuse, reverse-engineering, scraping).</li>
        <li>Comply with all applicable laws.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Subscription &amp; Payments</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Some features require a paid subscription.</li>
        <li>Payments are processed by third-party providers.</li>
        <li>Subscriptions renew automatically unless canceled.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Intellectual Property</h2>
      <p>
        All content, branding, software, and materials are owned by Hypewave AI. You may not copy,
        resell, or redistribute without permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The Service is provided “as is.”</li>
        <li>We make no warranties of accuracy, reliability, or profitability.</li>
        <li>
          We are not liable for trading losses, damages, or service interruptions. To the maximum
          extent allowed by law, our liability is limited to the subscription fees you paid in the
          past 12 months.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Termination</h2>
      <p>We may suspend or terminate accounts for violations of these terms.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law &amp; Arbitration</h2>
      <p>
        These terms are governed by the laws of <strong>[State, USA]</strong>. Disputes will be
        resolved through binding arbitration, waiving class actions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact</h2>
      <p>
        For questions, email <a className="underline" href="mailto:contact@hypewave.ai">contact@hypewave.ai</a>.
      </p>
    </main>
  );
}
