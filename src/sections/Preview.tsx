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
    <section className="relative overflow-hidden bg-[#3dc1ff] px-6 md:px-10 py-20 md:py-24">
      <div className="mx-auto max-w-[560px]">
        {title && (
          <h2 className="mb-8 text-center text-[#0b1b3b] font-extrabold leading-[1.05] text-[clamp(32px,6vw,72px)] tracking-tight">
            {title}
          </h2>
        )}

        <div className="relative mx-auto w-full max-w-[480px]">
          {/* Soft halo, contained to the phone */}
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[2.6rem]
                       bg-[radial-gradient(600px_600px_at_50%_40%,rgba(61,173,255,0.35),transparent_70%)]
                       blur-xl"
          />

          {/* 🔵 Gradient phone frame (thick) */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2.3rem] p-4 shadow-2xl ring-1 ring-white/20
                        bg-gradient-to-br from-[#3dadff] via-[#6fa8ff] to-[#a56bff]"
            >
            {/* Bezel (no inner padding → no sliver gaps) */}
            <div className="rounded-[2rem] overflow-hidden bg-black">
                {/* Aspect wrapper */}
                <div className="relative w-full aspect-[9/16]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"  // <-- fills, no black bars
                >
                    <source src={src} type="video/mp4" />
                </video>
                </div>
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
