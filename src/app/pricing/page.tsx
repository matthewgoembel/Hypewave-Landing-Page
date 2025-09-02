// src/app/pricing/page.tsx

export const metadata = {
  title: "Pricing — Hypewave AI",
  description:
    "Choose your plan. Start free, upgrade to Premium for pro features when you're ready.",
};

export default function Page() {
  return (
    <main className="px-6 md:px-10 lg:px-12 py-16 max-w-6xl mx-auto text-[var(--foreground)]">
      {/* Launch Banner (static) */}
      <div
        className="mb-8 flex items-center justify-center rounded-xl bg-emerald-500/90 text-white px-4 py-3 shadow-lg"
        role="status"
        aria-live="polite"
      >
        <p className="text-sm font-semibold text-center">
          🔥 <span className="underline">Launch special:</span> All plans are{" "}
          <span className="underline">100% free right now</span> — billing coming soon
        </p>
      </div>

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
          Pricing
        </h1>
        <p className="mt-3 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          When billing returns, Premium will be <span className="font-semibold">$4.99/mo</span>{" "}
          <span className="opacity-80">(regular&nbsp;$9.99/mo)</span>.
        </p>
      </section>

      {/* Plan cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Free */}
        <PlanCard
          name="Free"
          price="$0"
          period="/mo"
          badge="100% Free Now"
          ctaLabel="Current Plan"
          ctaDisabled
          features={[
            "Core signals preview",
            "Core News feed",
            "Hypewave chat questions",
            "Customize Account",
          ]}
        />

        {/* Premium */}
        <PlanCard
          highlight
          name="Premium"
          price="$4.99"
          compareAt="$9.99"
          saleNote="Launch sale"
          period="/mo"
          badge="Best value"
          ctaLabel="Upgrade (coming soon)"
          ctaDisabled
          features={[
            "Full real-time signals",
            "Real-time news feed",
            "Advanced filters & watchlists",
            "Unlimited chat with chart uploads",
            "Priority news + economic calendar",
            "Built in Ai Insights",
            "Support & feature voting",
            "Private Hypewave alpha group access",
          ]}
        />
      </section>

      {/* FAQ */}
      <section className="mt-16 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow-sm">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          <FAQ
            q="Is anything actually billed right now?"
            a="Nope — everything is 100% free during launch. Billing isn’t active yet, so no credit card is required."
          />
          <FAQ
            q="Can I switch plans later?"
            a="Yes. Once billing is enabled you’ll be able to upgrade, downgrade, or cancel any time from your account."
          />
          <FAQ
            q="Do you offer a student discount?"
            a="We’re considering it. If you’d benefit from a discount, let us know—your feedback helps us prioritize."
          />
        </div>
      </section>
    </main>
  );
}

function PlanCard({
  name,
  price,
  period,
  features,
  ctaLabel,
  ctaDisabled,
  badge,
  highlight,
  compareAt,
  saleNote,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  ctaDisabled?: boolean;
  badge?: string;
  highlight?: boolean;
  compareAt?: string;
  saleNote?: string;
}) {
  return (
    <div
      className={[
        "relative flex flex-col p-6 rounded-2xl border shadow-xl backdrop-blur",
        "bg-white/10 border-white/20",
        "hover:bg-white/15 transition-colors",
        highlight ? "ring-2 ring-white/60" : "",
      ].join(" ")}
    >
      {badge ? (
        <div className="absolute -top-3 left-6">
          <span
            className={`inline-block text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
              badge.includes("Free")
                ? "bg-emerald-500 text-white"
                : "bg-white/90 text-[#001F3F]"
            }`}
          >
            {badge}
          </span>
        </div>
      ) : null}

      <div className="mb-4">
        <h3 className="text-2xl font-bold drop-shadow-sm">{name}</h3>

        <div className="mt-3 flex items-end gap-3 flex-wrap">
          {compareAt ? (
            <span className="line-through opacity-70 text-lg mb-1">{compareAt}</span>
          ) : null}
          <div className="flex items-end gap-2">
            <span className="text-4xl md:text-5xl font-extrabold leading-none drop-shadow-sm">
              {price}
            </span>
            <span className="opacity-90 mb-1">{period}</span>
          </div>
        </div>

        {compareAt ? (
          <span className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white">
            {saleNote ?? "Launch sale"}
          </span>
        ) : null}
      </div>

      <ul className="mt-2 space-y-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckIcon className="mt-0.5" />
            <span className="opacity-95">{f}</span>
          </li>
        ))}
      </ul>

      <button
        disabled={ctaDisabled}
        className={[
          "mt-8 w-full px-4 py-3 rounded-xl font-semibold",
          highlight
            ? "bg-white text-[#001F3F] hover:opacity-90"
            : "bg-white/10 text-white hover:bg-white/20",
          ctaDisabled ? "opacity-60 cursor-not-allowed" : "",
          "transition",
        ].join(" ")}
        aria-disabled={ctaDisabled ? true : undefined}
      >
        {ctaLabel}
      </button>
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={"h-5 w-5 flex-none " + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.28a1 1 0 0 1-1.428.014L3.29 9.996a1 1 0 1 1 1.42-1.408l4.053 4.089 6.488-6.56a1 1 0 0 1 1.453.173z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white/10 border border-white/20 rounded-xl p-4">
      <summary className="list-none cursor-pointer select-none font-semibold flex items-center justify-between">
        <span>{q}</span>
        <svg
          className="h-5 w-5 transition-transform group-open:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <p className="mt-3 opacity-90">{a}</p>
    </details>
  );
}
