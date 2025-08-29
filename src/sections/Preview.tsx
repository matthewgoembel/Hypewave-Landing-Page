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
          <h2 className="mb-8 text-center text-[#0b1b3b] font-semibold leading-[1.05] text-[clamp(32px,6vw,72px)] tracking-tight">
            {title}
          </h2>
        )}

        {/* Phone wrapper (creates its own stacking context so the ring stays behind) */}
        <div className="relative isolate mx-auto w-full max-w-[480px]">
          {/* Outside gradient ring (no overlap) */}
          <div
            aria-hidden
            className="absolute -inset-[10px] rounded-[2.0rem] bg-gradient-to-br
                       from-[#3dadff] via-[#6fa8ff] to-[#a56bff] z-0 pointer-events-none"
          />
          {/* Optional soft halo behind the ring */}
          <div
            aria-hidden
            className="absolute -inset-[28px] rounded-[2.6rem] z-[-1]
                       bg-[radial-gradient(600px_600px_at_50%_40%,rgba(61,173,255,0.28),transparent_70%)]
                       blur-xl pointer-events-none"
          />

          {/* Video (always above ring) */}
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
            className="relative z-10 block w-full aspect-[9/16] rounded-[1.8rem] object-cover bg-black"
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
