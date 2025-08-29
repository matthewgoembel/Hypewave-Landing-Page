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
    // SECTION gets the same blue + spacing as your hero vibe
    <section className="relative overflow-hidden bg-[#3dc1ff] px-6 md:px-10 py-20 md:py-24 pb: 48">
      <div className="mx-auto max-w-[520px]">
        {/* BIG, NAVY, TIGHT HEADING */}
        {title && (
          <h2 className="mb-8 text-center text-[#0b1b3b]
                         font-semibold leading-[1.05]
                         text-[clamp(32px,6vw,72px)] tracking-tight">
            {title}
          </h2>
        )}

        {/* Keep the glow tied to the phone (not the whole section) */}
        <div className="relative mx-auto w-full max-w-[440px]">
          {/* Gradient halo behind the device */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.2rem]
                       bg-gradient-to-br from-[#3dadff]/60 via-[#7aa7ff]/40 to-[#a56bff]/40
                       blur-2xl"
          />

          {/* Device bezel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2rem] bg-neutral-900/90 p-2 shadow-2xl ring-1 ring-white/10"
          >
            <div className="relative">
              {/* Dynamic Island (optional) */}
              <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/10" />

              {/* Your 9:16 video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="block w-full aspect-[9/16] rounded-[1.6rem] overflow-hidden bg-black"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
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
