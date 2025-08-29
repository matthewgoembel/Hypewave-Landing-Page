// src/sections/Preview.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  src?: string;
  title?: string;
  caption?: string;
};

export default function Preview({
  src = "/videos/hypewave_preview.mp4",
  title = "See It in Action",
  caption = "Signals • Chat • News • Calendar",
}: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative bg-[#3dc1ff] px-6 md:px-10 py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        {title && (
          <h2 className="mb-8 text-center text-[#0b1b3b] font-extrabold leading-tight text-[clamp(32px,5vw,60px)] tracking-tight">
            {title}
          </h2>
        )}

        {/* Wrapper draws the outside gradient stroke via ::before (mask) */}
        <div
          className="
            relative mx-auto w-full
            max-w-[420px] sm:max-w-[460px] md:max-w-[520px]
            [--stroke:14px] sm:[--stroke:12px] md:[--stroke:14px]
            [--radius:28px] sm:[--radius:28px] md:[--radius:32px]
            before:content-[''] before:absolute before:inset-0
            before:rounded-[calc(var(--radius)+var(--stroke))]
            before:[padding:var(--stroke)]
            before:[background:conic-gradient(from_200deg_at_30%_0%,#3dadff,#6fa8ff_40%,#a56bff)]
            before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
            before:[-webkit-mask-composite:xor]
            before:[mask-composite:exclude]
            before:pointer-events-none
            before:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          "
        >
          <motion.video
            initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.985 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Hypewave preview"
            className="
              block w-full aspect-[9/16]
              rounded-[var(--radius)]            /* gentle curve on VIDEO only */
              object-contain                      /* guarantees no content crop */
              bg-black
            "
          >
            <source src={src} type="video/mp4" />
          </motion.video>
        </div>

        {caption && (
          <p className="mt-6 text-center text-[#0b1b3b]/80 text-sm md:text-base">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
