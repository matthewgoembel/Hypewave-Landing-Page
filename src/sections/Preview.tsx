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
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[#3dc1ff] px-6 md:px-10 py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        {title && (
          <h2 className="mb-8 text-center text-[#0b1b3b] font-extrabold leading-tight text-[clamp(32px,5vw,60px)] tracking-tight">
            {title}
          </h2>
        )}

        {/* Responsive phone frame with OUTSIDE stroke (via padding) */}
        <div className="mx-auto w-full max-w-[420px] sm:max-w-[460px] md:max-w-[520px]">
          <div
            className="
              inline-block
              rounded-[32px] sm:rounded-[36px] md:rounded-[44px]    /* outer corner */
              p-[10px] sm:p-[12px] md:p-[14px]                      /* stroke thickness */
              bg-[conic-gradient(from_200deg_at_30%_0%,#3dadff,#6fa8ff_40%,#a56bff)]
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
          >
            <motion.video
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20, scale: 0.985 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Hypewave preview"
              className="
                block w-full aspect-[9/16]
                rounded-[22px] sm:rounded-[26px] md:rounded-[30px]  /* slight curve on video ONLY */
                object-contain                                      /* show entire 9:16 frame */
                bg-black
              "
            >
              <source src={src} type="video/mp4" />
            </motion.video>
          </div>
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
