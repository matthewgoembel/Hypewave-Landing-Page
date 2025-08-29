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
          <h2 className="mb-8 text-center text-[#0b1b3b] font-extrabold leading-[1.05] text-[clamp(32px,6vw,72px)] tracking-tight">
            {title}
          </h2>
        )}

        <div className="relative mx-auto w-full max-w-[480px]">
          {/* Soft halo behind the phone (optional) */}
          <div
            aria-hidden
            className="absolute -inset-[26px] -z-10 rounded-[2.6rem]
                       bg-[radial-gradient(600px_600px_at_50%_40%,rgba(61,173,255,0.28),transparent_70%)]
                       blur-xl"
          />

          {/* OUTSIDE gradient stroke (no overlap with the video) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[10px] rounded-[2.0rem]
                       bg-gradient-to-br from-[#3dadff] via-[#6fa8ff] to-[#a56bff]"
          />

          {/* Animated video (fills the box edge-to-edge) */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block w-full aspect-[9/16] rounded-[1.8rem] object-cover bg-black"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
