export const metadata = {
  title: 'Privacy Policy – Hypewave AI',
  description: 'How Hypewave AI collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-7 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-neutral-500 mb-8">Last updated: Aug 19, 2025</p>

      <p className="mb-6">
        This Privacy Policy explains how <strong>Hypewave AI</strong> (“we,” “our,” or “us”)
        collects, uses, and protects your information when you use our website, mobile app,
        and related services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Account Data:</strong> name, email, login credentials (from Google/Apple if used).</li>
        <li><strong>Usage Data:</strong> device type, IP address, interactions, preferences.</li>
        <li><strong>Optional Data:</strong> uploaded charts, images, or custom inputs.</li>
        <li><strong>Payment Data:</strong> processed by third-party providers; we do not store card info.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide, maintain, and improve Hypewave AI.</li>
        <li>Send trading alerts, updates, and educational material (if opted in).</li>
        <li>Ensure security, prevent fraud, and comply with legal obligations.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Legal Basis (GDPR Users)</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your consent.</li>
        <li>Contract performance.</li>
        <li>Legal compliance.</li>
        <li>Legitimate interests (service improvement, fraud prevention).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Sharing</h2>
      <p className="mb-4">
        We do not sell your personal data. We may share data with service providers
        (hosting, analytics, authentication) and with legal authorities when required by law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Retention</h2>
      <p className="mb-4">
        We retain personal data only as long as necessary for service provision or legal compliance.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-2">
        Depending on your location, you may have the right to access, correct, delete, or export your data,
        and to opt out of certain processing (e.g., marketing).
      </p>
      <p className="mb-4">
        California residents: additional rights under the CCPA/CPRA (access, delete, correct, opt-out of “sharing”).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Children’s Privacy</h2>
      <p className="mb-4">
        Hypewave AI is not directed at children under 18. We do not knowingly collect data from minors.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Security</h2>
      <p className="mb-4">
        We use industry-standard encryption, secure servers, and access restrictions to protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. International Users</h2>
      <p className="mb-4">
        Your data may be processed in the U.S. or other jurisdictions. By using Hypewave AI, you consent to such transfer.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Changes</h2>
      <p className="mb-8">
        We may update this Privacy Policy. Updates will be posted with a new effective date.
      </p>

      <p className="mt-8">
        📧 Contact us at: <a className="underline" href="mailto:contact@hypewave.ai">contact@hypewave.ai</a>
      </p>
    </main>
  );
}
