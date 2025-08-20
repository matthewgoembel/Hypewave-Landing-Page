export const metadata = {
  title: 'Investment & Risk Disclosure – Hypewave AI',
  description: 'Important risk disclosures for using Hypewave AI.',
};

export default function RiskPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-7 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-3xl font-bold mb-2">Investment & Risk Disclosure</h1>
      <p className="text-sm text-neutral-500 mb-8">Last updated: Aug 20, 2025</p>

      <p className="mb-6">
        Information provided by <strong>Hypewave AI</strong> is for educational and informational
        purposes only and should not be considered financial, investment, legal, or tax advice.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Markets are volatile and involve the risk of loss.</li>
        <li>Past performance does not guarantee future results.</li>
        <li>You are solely responsible for trading decisions and outcomes.</li>
        <li>Before trading, consider your objectives, experience, and risk appetite.</li>
      </ul>

      <p className="mt-8">
        Questions? <a className="underline" href="mailto:contact@hypewave.ai">contact@hypewave.ai</a>
      </p>
    </main>
  );
}
