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

        {/* Phone container — gradient "outside" stroke via padding */}
        <div className="mx-auto w-full max-w-[480px]">
          <div
            className="
              inline-block
              rounded-[40px]              /* outer corner (stroke edge) */
              p-[14px]                     /* stroke thickness */
              bg-[conic-gradient(from_200deg_at_30%_0%,#3dadff,#6fa8ff_40%,#a56bff)]
              shadow-[0_24px_60px_rgba(0,0,0,0.35)]
            "
          >
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
              className="
                block w-full aspect-[9/16]
                rounded-[28px]             /* curve video edges */
                object-contain             /* prevents cropping */
                bg-black
              "
            >
              <source src={src} type="video/mp4" />
            </motion.video>
          </div>
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
