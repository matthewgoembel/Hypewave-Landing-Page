// app/about/page.tsx
export const metadata = {
  title: "About — Hypewave AI",
  description:
    "Hypewave AI is a cross‑platform trading copilot that scans markets 24/7, detects high‑signal patterns, summarizes news, and explains the 'why' so traders can act with clarity and confidence.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-7 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-3xl font-bold mb-2">About Hypewave AI</h1>
      <p className="text-sm text-neutral-500 mb-8">Your Personal Trading Assistant</p>

      <p className="mb-6">
        <strong>Hypewave AI</strong> is a cross‑platform trading copilot that turns market
        chaos into clear, actionable insight. Built by traders and engineers, Hypewave scans
        markets 24/7, detects high‑signal patterns, summarizes real‑time news, and explains
        the “why” — so you can decide faster with more confidence.
      </p>

      <hr className="border-white/20 dark:border-white/10 my-8" />

      <section aria-labelledby="mission">
        <h2 id="mission" className="text-xl font-semibold mt-2 mb-2">Mission & Beliefs</h2>
        <p className="mb-4">
          <strong>Mission:</strong> Give individual traders an institutional‑grade edge by
          combining objective, math‑driven market logic with adaptive AI.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Noise kills performance; clarity compounds.</li>
          <li>Speed matters, but context matters more.</li>
          <li>
            Human judgment is irreplaceable—AI should <em>augment</em> it, not replace it.
          </li>
        </ul>
      </section>

      <section aria-labelledby="what" className="mt-8">
        <h2 id="what" className="text-xl font-semibold mb-2">What Hypewave Is</h2>
        <p className="mb-4">
          Hypewave unifies <strong>Signals</strong>, <strong>Chat</strong>, and <strong>News</strong> in one workflow, filtered by your watchlist and delivered where you trade.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>
            <strong>Signals</strong> — real‑time pattern detection (liquidity sweeps, SFPs, FVGs,
            BOS/CHOCH, HH/HL/LL/LH structure, order blocks, SMT/divergence, key S/R taps).
          </li>
          <li>
            <strong>Chat</strong> — an AI analyst that explains price action, decodes uploaded charts,
            and fuses live context with human‑readable reasoning.
          </li>
          <li>
            <strong>News</strong> — curated market‑moving headlines and an economic calendar so you’re
            never blindsided by macro catalysts.
          </li>
        </ol>
        <p className="mb-6">
          Surfaces include a TradingView‑side browser extension, iOS/Android mobile app, and{" "}
          <strong>Henri</strong> — our Telegram/Discord bot for alerts on the go.
        </p>
      </section>

      <section aria-labelledby="who" className="mt-8">
        <h2 id="who" className="text-xl font-semibold mb-2">Who Hypewave Is For</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Active traders in futures (SPX/NAS, metals), crypto (BTC/ETH/SOL + alts), and liquid equities.</li>
          <li>Analysts & quant‑curious builders who want programmable signals and clean APIs.</li>
          <li>Teams & communities that need a reliable signal and news layer to inform members.</li>
        </ul>
      </section>

      <section aria-labelledby="worth" className="mt-8">
        <h2 id="worth" className="text-xl font-semibold mb-2">Why Hypewave Is Worth It</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Signal Quality</strong>: Objective, rules‑first pattern logic—less noise, more signal.</li>
          <li><strong>Faster Awareness</strong>: Real‑time scanning + push alerts for setups and macro catalysts.</li>
          <li><strong>Explained Like a Human</strong>: Plain‑English reasoning behind every alert.</li>
          <li><strong>Personalized</strong>: Your watchlist, your preferences, your flow.</li>
          <li><strong>Everywhere You Trade</strong>: Extension for TradingView, mobile apps, and chat bots.</li>
        </ul>
        <blockquote className="border-l-4 pl-4 italic text-neutral-200/90 dark:text-neutral-100/80 border-white/30 mb-6">
          Bottom line: Hypewave is not a “call group.” It’s a disciplined, adaptive decision engine that helps you act faster and smarter.
        </blockquote>
      </section>

      <section aria-labelledby="how" className="mt-8">
        <h2 id="how" className="text-xl font-semibold mb-2">How Hypewave Works</h2>

        <h3 className="text-lg font-semibold mt-4 mb-1">1) Signals Engine</h3>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li><strong>Market Structure:</strong> BOS/CHOCH, HH/HL/LH/LL sequences</li>
          <li><strong>Liquidity Events:</strong> Sweeps, SFPs, equal highs/lows interactions</li>
          <li><strong>Imbalance Zones:</strong> FVGs, order blocks (OBs)</li>
          <li><strong>Momentum & Divergence:</strong> RSI/OBV/SMT‑style divergences (configurable)</li>
          <li><strong>Key Levels:</strong> Prior day/week H/L, session opens, daily/weekly opens</li>
          <li><strong>Confluence Checks:</strong> Volume spikes, funding/LS extremes, sentiment shifts</li>
        </ul>
        <p className="mb-4">
          When a setup is detected, Hypewave scores the setup (strength, confluence, context), attaches a rationale
          (“why now”), notes key levels, emits a structured alert to your chosen surfaces, and tracks feedback/outcomes
          to improve future scoring. Each setup shows detection time, context tags, and community feedback. Win‑rate and
          outcomes are aggregated over rolling windows by symbol/setup cohort — descriptive, not promises.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-1">2) Chat Analyst</h3>
        <p className="mb-4">
          Ask for an explanation of a fresh signal, an uploaded chart, or the implications of funding and sentiment
          regimes. Chat blends AI reasoning with live market context and your watchlist.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-1">3) News & Macro Layer</h3>
        <p className="mb-6">
          Curated, real‑time headlines from vetted sources, paired with an Economic Calendar (last/this/next week) so
          you can plan sessions and avoid surprise catalysts. Links to affected symbols when applicable.
        </p>
      </section>

      <section aria-labelledby="novel" className="mt-8">
        <h2 id="novel" className="text-xl font-semibold mb-2">Novel Capabilities</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Adaptive Scheduling:</strong> Per‑symbol state + “next check” timing concentrates compute on evolving setups.</li>
          <li><strong>Feedback Loop:</strong> Thumbs up/down tightens scoring over time.</li>
          <li><strong>Watchlist‑Scoped Scanning:</strong> Alerts only for what you track (optional global alerts for big moves).</li>
          <li><strong>Cross‑Surface Sync:</strong> Signals/news are consistent across extension, mobile, and Henri.</li>
          <li><strong>Human‑Readable Rationale:</strong> Every alert includes a concise justification and key levels.</li>
        </ul>
      </section>

      <section aria-labelledby="arch" className="mt-8">
        <h2 id="arch" className="text-xl font-semibold mb-2">Platform & Architecture (for Builders)</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Frontend:</strong> React/Next (web + TradingView side panel), Expo React Native (iOS/Android)</li>
          <li><strong>Auth:</strong> Firebase Google/Apple OAuth with secure token storage</li>
          <li><strong>Backend:</strong> FastAPI services; MongoDB for signals, users, feedback; task queues for scanning/notifications</li>
          <li><strong>Data & Context:</strong> Price streams, volume, funding/long‑short ratio, sentiment, curated news</li>
          <li><strong>Automation:</strong> Puppeteer workers for chart snapshots & auditability</li>
          <li><strong>Bots:</strong> Telegram/Discord bot (<strong>Henri</strong>) with role‑based access</li>
        </ul>
        <div className="rounded-md border border-white/20 p-4">
          <p className="font-medium mb-2">Representative API Endpoints (subject to change)</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>GET /signals/latest</code> — recent signals for a user/watchlist</li>
            <li><code>POST /signals/&lbrace;id&rbrace;/vote</code> — up/downvote feedback</li>
            <li><code>GET /news/latest?limit=…</code> — curated headlines/media</li>
            <li><code>GET /economic-calendar</code> — last/this/next week grouped payload</li>
            <li><code>POST /chat</code> — chart Q&A / market breakdowns</li>
            <li><code>GET /me</code> — profile; <code>POST /me/avatar</code> — avatar upload</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="ethics" className="mt-8">
        <h2 id="ethics" className="text-xl font-semibold mb-2">Data Ethics, Security & Privacy</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>No brokerage access required:</strong> Hypewave does not place trades on your behalf.</li>
          <li><strong>Data minimization:</strong> We store only what’s necessary (watchlists, preferences, feedback, session metadata).</li>
          <li><strong>Security:</strong> Encrypted transport, scoped tokens, least‑privilege services; media uploads validated/sanitized.</li>
          <li><strong>Transparency:</strong> We document how stats are computed and where context comes from.</li>
        </ul>
      </section>

      <section aria-labelledby="not" className="mt-8">
        <h2 id="not" className="text-xl font-semibold mb-2">What Hypewave Doesn’t Do (On Purpose)</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>No guaranteed returns.</strong> We don’t sell “winning trades.”</li>
          <li><strong>No black‑box hype.</strong> If we can’t explain a signal in plain language, we don’t ship it.</li>
          <li><strong>No misuse of PnL.</strong> Community outcomes are for learning, not marketing claims.</li>
        </ul>
        <p className="text-xs text-neutral-400">
          <strong>Disclaimer:</strong> Hypewave AI provides information, not financial advice. Markets are risky.
          Always do your own research and manage risk accordingly.
        </p>
      </section>

      <section aria-labelledby="roadmap" className="mt-8">
        <h2 id="roadmap" className="text-xl font-semibold mb-2">Roadmap (Selected)</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-white/20 p-4">
            <h3 className="font-semibold mb-2">Short‑Term</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>More detectors (session models, volatility regimes)</li>
              <li>Per‑symbol cohort stats & configurable dashboards</li>
              <li>Notification rules editor (conditions, quiet hours)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/20 p-4">
            <h3 className="font-semibold mb-2">Mid‑Term</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deeper sentiment & funding regime analysis</li>
              <li>Optional broker/webhook connectors</li>
              <li>Team/Community workspaces</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/20 p-4">
            <h3 className="font-semibold mb-2">Long‑Term</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pattern learning from user‑tagged outcomes</li>
              <li>Research APIs for quants (flags, A/B, export)</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-neutral-400 mt-3">
          Roadmap items are directional and may change as we learn from users.
        </p>
      </section>

      <section aria-labelledby="pricing" className="mt-8">
        <h2 id="pricing" className="text-xl font-semibold mb-2">Pricing & Plans (Preview)</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Starter</strong> — Real‑time news + limited signals (personal use)</li>
          <li><strong>Pro</strong> — Full signals + chat analysis + feedback loop + Henri access</li>
          <li><strong>Team</strong> — Pro features with multi‑seat admin, shared watchlists, audit logs</li>
        </ul>
        <p className="text-xs text-neutral-400">Contact us for educational/community pricing.</p>
      </section>

      <section aria-labelledby="support" className="mt-8">
        <h2 id="support" className="text-xl font-semibold mb-2">Support & Community</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Docs & How‑Tos</strong>: Getting started, best practices, troubleshooting</li>
          <li><strong>Status</strong>: Service health and incident history</li>
          <li><strong>Community</strong>: Private channels for release notes, roadmap votes, advanced sessions</li>
        </ul>
      </section>

      <section aria-labelledby="origin" className="mt-8">
        <h2 id="origin" className="text-xl font-semibold mb-2">Origin Story</h2>
        <p className="mb-6">
          Hypewave started with a simple frustration: traders drowning in alerts, tweets, and conflicting opinions.
          We built the tool we wished we had—objective, fast, and honest about uncertainty. The flame‑bot{" "}
          <strong>Henri</strong> is our playful nod that trading can be serious <em>and</em> fun—clarity without ego.
        </p>
      </section>

      <section aria-labelledby="faqs" className="mt-8">
        <h2 id="faqs" className="text-xl font-semibold mb-2">FAQs</h2>
        <details className="rounded-lg border border-white/20 p-4 mb-3">
          <summary className="font-medium cursor-pointer">Is this financial advice?</summary>
          <p className="mt-2">No. Hypewave provides information and tools to support your decisions.</p>
        </details>
        <details className="rounded-lg border border-white/20 p-4 mb-3">
          <summary className="font-medium cursor-pointer">Which markets are covered?</summary>
          <p className="mt-2">Major crypto pairs, index futures, select metals, and liquid equities. Coverage expands based on demand.</p>
        </details>
        <details className="rounded-lg border border-white/20 p-4 mb-3">
          <summary className="font-medium cursor-pointer">How accurate are the signals?</summary>
          <p className="mt-2">
            We publish descriptive stats (e.g., cohort win rates) to inform—not to promise results. Markets evolve; so do we.
          </p>
        </details>
        <details className="rounded-lg border border-white/20 p-4 mb-3">
          <summary className="font-medium cursor-pointer">Can I integrate Hypewave with my stack?</summary>
          <p className="mt-2">Yes. Reach out for partner/API access and webhook patterns.</p>
        </details>
        <details className="rounded-lg border border-white/20 p-4">
          <summary className="font-medium cursor-pointer">What about my privacy?</summary>
          <p className="mt-2">We collect minimal data, use secure storage, and never sell your information.</p>
        </details>
      </section>

      <footer className="pt-10">
        <p className="text-center text-base">
          If you’re ready to trade with clarity, join Hypewave and ride the next move with conviction—not guesswork.
          <br />
          <em>Welcome to the wave.</em> 🌊
        </p>
      </footer>
    </main>
  );
}
