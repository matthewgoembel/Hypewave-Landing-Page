"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-32 bg-[#3ABEFF]">
      <p className="text-[#000e44]/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-medium">
        The AI co-pilot built for traders
      </p>

      <motion.h1
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-8xl
          font-semibold text-[#000e44] leading-tight
          flex flex-col items-center gap-2 sm:gap-4
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

      {/* 🔥 Animated Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 sm:mt-8 w-24 sm:w-32 rounded-lg overflow-hidden"
      >
        <video
          src="/videos/iconflip.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* CTA Button */}
      <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3">
        <button className="flex items-center gap-3 bg-white text-black px-4 sm:px-5 py-2 rounded-full shadow hover:scale-105 transition">
          <Image src="/icons/appstore.svg" alt="Chrome" width={40} height={40} className="sm:w-12 sm:h-12" />
          <span className="text-sm sm:text-base">Download on the Appstore</span>
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
