// src/sections/Preview.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  /** Path to your 9:16 mp4 in /public */
  src?: string;
  /** Optional heading above the preview */
  title?: string;
  /** Optional small caption under the preview */
  caption?: string;
};

export default function Preview({
  src = "/hypewave_preview.mp4",
  title = "Product Preview",
  caption = "A quick look inside Hypewave",
}: Props) {
  return (
    <section className="relative px-6 md:px-10 py-16 md:py-20">
      {/* Optional soft page background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(1200px_circle_at_50%_-200px,rgba(61,173,255,0.14),transparent_60%)] 
                   dark:bg-[radial-gradient(1200px_circle_at_50%_-200px,rgba(61,173,255,0.10),transparent_60%)]"
      />

      <div className="mx-auto max-w-[480px]">
        {title && (
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
            {title}
          </h2>
        )}

        <div className="relative">
          {/* Gradient halo behind the phone */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.2rem]
                       bg-gradient-to-br from-[#3dadff]/50 via-[#7aa7ff]/40 to-[#a56bff]/40
                       blur-2xl"
          />

          {/* Phone bezel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2rem] bg-neutral-900/90 p-2 shadow-2xl ring-1 ring-white/10"
          >
            <div className="relative">
              {/* Dynamic-Island style notch (optional) */}
              <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/10" />

              {/* Your 9:16 video with curved corners */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="block w-full aspect-[9/16] rounded-[1.6rem] overflow-hidden bg-black"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>

        {caption && (
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-300">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
