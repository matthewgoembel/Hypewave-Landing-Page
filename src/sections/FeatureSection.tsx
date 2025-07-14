"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom as number) * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SimplifyTradingSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-[#3ABEFF] text-center overflow-hidden py-24"
    >
      {/* Sticky headline */}
      <div className="sticky top-0 z-20 bg-[#3ABEFF] py-8 pb-32">
        <h2 className="text-7xl font-semibold text-[#000e44]">
          Never trade alone again.
        </h2>
      </div>

      {/* Features label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-start max-w-7xl mx-auto mt-20 mb-8"
      >
        <h3 className="inline-block px-6 py-2 bg-white/90 text-[#000e44] text-2xl font-semibold tracking-wide rounded-3xl">
          Features
        </h3>
      </motion.div>

      {/* Horizontally scrollable cards */}
      <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory ml-64 px-6 pb-4">
        {[
          {
            title: "News as soon as\nit comes out.",
            img: "/icons/news1.png",
            bg: "bg-[#00abff]/90",
          },
          {
            img: "/icons/chat1.png",
            title: "Clarity when you\n need it. No more\nguessing.",
            bg: "bg-white/90",
          },
          {
            title: "Actionable trade\nsetups 24/7.",
            img: "/icons/signals1.png",
            bg: "bg-[#000D43]/90",
            text: "text-white/90",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`snap-start self-start ${card.bg} backdrop-bl-sm p-4 flex flex-col items-start flex-shrink-0 w-[320px] md:w-[340px] lg:w-[450px] shadow-xl rounded-3xl`}
          >
            {/* Title */}
            <div
              className={`text-left ml-4 mb-4 mt-4 text-4xl font-semibold leading-tight whitespace-pre-line ${
                card.text ?? "text-[#000e44]"
              }`}
            >
              {card.title}
            </div>
            {/* Image */}
            <div className="w-160 h-160 rounded-xl overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={420}
                height={200}
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SimplifyTradingSection;
