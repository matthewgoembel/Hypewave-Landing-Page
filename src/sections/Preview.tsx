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
          <h2 className="mb-12 text-center text-[#0b1b3b] font-semibold text-4xl leading-[1.05] md:text-[clamp(32px,6vw,72px)] tracking-tight">
            {title}
          </h2>
        )}

        {/* Phone wrapper */}
        {/* --r = video corner radius, --w = outside stroke width */}
        <div className="relative mx-auto w-full max-w-[480px] [--r:28px] [--w:16px]">
          {/* OUTSIDE GRADIENT RING (punched-out center so it never covers the video) */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute -inset-[var(--w)] z-0
              rounded-[calc(var(--r)+var(--w))]
              p-[var(--w)]
              [background:conic-gradient(from_140deg_at_20%_0%,#3dadff,#6fa8ff_45%,#a56bff_85%)]
              [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
              [mask-composite:exclude] [-webkit-mask-composite:xor]
              shadow-[0_24px_60px_rgba(0,0,0,0.35)]
            "
          />

          {/* Optional dark backing directly behind the video (same size as video) */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-0 z-0
              rounded-[var(--r)]
              [background:radial-gradient(120%_140%_at_80%_0%,rgba(9,88,207,0.35),rgba(61,193,255,0)_60%),linear-gradient(180deg,#0b1b3b,#1a2e5b)]
            "
          />

          {/* VIDEO — untouched, always above the ring */}
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
            className="relative z-10 block w-full h-auto rounded-[var(--r)] object-contain bg-black"
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
