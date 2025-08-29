// src/sections/Preview.tsx
"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="relative overflow-visible bg-[#3dc1ff] px-6 md:px-10 py-20 md:py-24">
      <div className="mx-auto max-w-[560px]">
        {title && (
          <h2 className="mb-48 text-center text-[#0b1b3b] font-semibold text- 4xl leading-[1.05] text-[clamp(32px,6vw,72px)] tracking-tight">
            {title}
          </h2>
        )}

        {/* Phone wrapper */}
        <div className="relative isolate mx-auto w-full max-w-[480px]">
          {/* THICK OUTER RING (visible border) – sits behind the phone */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute -inset-[12px] z-0
              rounded-[40px]
              [background:linear-gradient(135deg,#3dadff,#6fa8ff_40%,#a56bff)]
              shadow-[0_24px_60px_rgba(0,0,0,0.35)]
            "
          />

          {/* BOARD BACKING (directly behind the video, same size) */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-0 z-0
              rounded-[28px]
              [background:radial-gradient(120%_140%_at_80%_0%,rgba(9,88,207,0.35),rgba(61,193,255,0)_60%),linear-gradient(180deg,#0b1b3b,#1a2e5b)]
            "
          />

          {/* VIDEO – always on top, not cut off */}
          <motion.video
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="relative z-10 block w-full aspect-[9/16] rounded-[28px] overflow-hidden object-cover bg-black"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>

        {caption && (
          <p className="mt-4 text-center text-[#0b1b3b]/80 text-sm md:text-base">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
