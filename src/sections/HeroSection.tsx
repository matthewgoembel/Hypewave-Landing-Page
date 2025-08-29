"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="
        bg-[#3ABEFF]
        px-6
        py-12 md:py-16 lg:py-28
        min-h-[70vh] md:min-h-[80vh] lg:min-h-screen
        flex flex-col items-center justify-center text-center
      "
    >
      <p className="text-[#000e44]/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-5 md:mb-8 font-medium">
        The AI co-pilot built for traders
      </p>

      <motion.h1
        className="
          font-semibold text-[#000e44] leading-tight
          [font-size:clamp(28px,8vw,96px)]
          flex flex-col items-center gap-2 sm:gap-3
        "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>Your Personal</span>
        <div className="flex items-center gap-2 sm:gap-3">
          <span>Trading Assistant</span>
        </div>
      </motion.h1>

      {/* 🔥 Animated Video (responsive size) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 sm:mt-8 w-16 sm:w-24 md:w-28 lg:w-32 rounded-lg overflow-hidden"
      >
        <video
          src="/videos/iconflip.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* CTA Button */}
      <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3">
        <button className="flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full shadow hover:scale-105 transition">
          <Image src="/icons/appstore.svg" alt="App Store" width={48} height={48} />
          Download on the Appstore
        </button>
        <p className="text-center text-xs sm:text-sm md:text-base text-[#4f4f5a] font-normal leading-snug">
          Also available on other browsers and devices.
          <br />
          <a href="#" className="underline hover:text-[#3ABEFF] transition">
            Discover more
          </a>
        </p>
      </div>
    </section>
  );
}
