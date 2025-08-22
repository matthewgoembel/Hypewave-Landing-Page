"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 pb-32 bg-[#3ABEFF]">
      <p className="text-[#000e44]/80 text-lg md:text-xl lg:text-2xl mb-8 font-medium">
        The AI co-pilot built for traders
      </p>

        <motion.h1
        className="text-5xl md:text-6xl lg:text-8xl font-semibold text-[#000e44] leading-tight flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>Your Personal</span>
        <div className="flex items-center gap-3">
          <span>Trading Assistant</span>
        </div>
      </motion.h1>

      {/* 🔥 Animated Video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-8 w-32 w-200 rounded-lg overflow-hidden"
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
      <div className="-mt-0 flex flex-col items-center gap-3">
        <button className="flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full shadow hover:scale-105 transition">
          <Image src="/icons/appstore.svg" alt="Chrome" width={48} height={48} />
          Download on the Appstore
        </button>
        <p className="text-center text-sm md:text-base text-[#4f4f5a] font-normal leading-snug">
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
