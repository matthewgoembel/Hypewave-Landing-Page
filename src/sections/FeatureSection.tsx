// src/sections/FeatureSection.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import lottie, { AnimationItem } from "lottie-web";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (custom as number) * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const CARD_W = 360;   // base card width
const CARD_H = 420;   // base card height
const GAP = 20;       // carousel gap

const SimplifyTradingSection: React.FC = () => {
  // Existing refs
  const chatRef = useRef<HTMLDivElement | null>(null);
  const signalsRef = useRef<HTMLDivElement | null>(null);
  const chatAnim = useRef<AnimationItem | null>(null);
  const signalsAnim = useRef<AnimationItem | null>(null);

  // NEW: refs for autoplaying Lotties (economic, money, news)
  const economicRef = useRef<HTMLDivElement | null>(null);
  const moneyRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  const economicAnim = useRef<AnimationItem | null>(null);
  const moneyAnim = useRef<AnimationItem | null>(null);
  const newsAnim = useRef<AnimationItem | null>(null);

  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Existing hover-play animations
    if (chatRef.current && !chatAnim.current) {
      chatAnim.current = lottie.loadAnimation({
        container: chatRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/animations/chat.json",
      });
    }
    if (signalsRef.current && !signalsAnim.current) {
      signalsAnim.current = lottie.loadAnimation({
        container: signalsRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/animations/signals.json",
      });
    }

    // NEW: always-on animations (loop + autoplay)
    if (economicRef.current && !economicAnim.current) {
      economicAnim.current = lottie.loadAnimation({
        container: economicRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/economic.json",
      });
    }
    if (moneyRef.current && !moneyAnim.current) {
      moneyAnim.current = lottie.loadAnimation({
        container: moneyRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/money.json",
      });
    }
    if (newsRef.current && !newsAnim.current) {
      newsAnim.current = lottie.loadAnimation({
        container: newsRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/news.json",
      });
    }

    // Hover handlers only for chat/signals (keep your original behavior)
    const onHover = (el: HTMLElement, anim: AnimationItem) => {
      const enter = () => { anim.setDirection(1); anim.play(); };
      const leave = () => { anim.setDirection(-1); anim.play(); };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    };

    const cleanups: Array<() => void> = [];
    if (chatRef.current && chatAnim.current) cleanups.push(onHover(chatRef.current, chatAnim.current));
    if (signalsRef.current && signalsAnim.current) cleanups.push(onHover(signalsRef.current, signalsAnim.current));

    return () => {
      cleanups.forEach((fn) => fn());
      chatAnim.current?.destroy();
      signalsAnim.current?.destroy();
      economicAnim.current?.destroy();
      moneyAnim.current?.destroy();
      newsAnim.current?.destroy();
      chatAnim.current = null;
      signalsAnim.current = null;
      economicAnim.current = null;
      moneyAnim.current = null;
      newsAnim.current = null;
    };
  }, []);

  // scroll controls
  const scrollByCard = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const delta = (CARD_W + GAP) * (dir === "next" ? 1 : -1);
    trackRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Updated cards list (adds Economic + Profit, replaces News image with Lottie)
  const cards = [
    {
      title: "A trading partner and clarity when you\n need it. No more\nguessing.",
      body: (
        <div className="w-full h-[220px] rounded-xl overflow-hidden flex items-center justify-center">
          <div ref={chatRef} className="w-full h-full" />
        </div>
      ),
      bg: "bg-white/95",
      text: "text-[#000e44]",
    },
    {
      title: "24/7 News as soon as\nit comes out.",
      body: (
        <div className="w-full h-[220px] rounded-xl overflow-hidden flex items-center justify-center">
          {/* replaced JPG with continuous Lottie */}
          <div ref={newsRef} className="w-full h-full" />
        </div>
      ),
      bg: "bg-white/95",
      text: "text-[#000e44]",
    },
    {
      title: "Economic Pulse.\nAlawys know the macro.",
      body: (
        <div className="w-full h-[220px] rounded-xl overflow-hidden flex items-center justify-center">
          <div ref={economicRef} className="w-full h-full" />
        </div>
      ),
      bg: "bg-white/95",
      text: "text-[#000e44]",
    },
    {
      title: "Become a more profitable and Confidence Trader.",
      body: (
        <div className="w-full h-[220px] rounded-xl overflow-hidden flex items-center justify-center">
          <div ref={moneyRef} className="w-full h-full" />
        </div>
      ),
      bg: "bg-white/95",
      text: "text-[#000e44]",
    },
    {
      title: "Actionable trade\nsetups 24/7.",
      body: (
        <div className="w-full h-[220px] rounded-xl overflow-hidden flex items-center justify-center">
          <div ref={signalsRef} className="w-full h-full" />
        </div>
      ),
      bg: "bg-[#000D43]",
      text: "text-white/90",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-[#3ABEFF] text-center overflow-hidden py-24"
    >
      {/* Title */}
      <div className="sticky top-0 z-10 bg-[#3ABEFF] py-8 pb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#000e44]">
          Never trade alone again.
        </h2>
      </div>

      {/* Sub-label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-6 px-6 text-left"
      >
        <span className="inline-block px-4 py-2 bg-white/90 text-[#000e44] text-lg font-semibold tracking-wide rounded-3xl">
          Features
        </span>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-2 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => {
            const el = trackRef.current;
            if (!el) return;

            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;

            const onMouseMove = (ev: MouseEvent) => {
              const x = ev.pageX - el.offsetLeft;
              const walk = x - startX;
              el.scrollLeft = scrollLeft - walk;
            };

            const onMouseUp = () => {
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
          }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className={`snap-center flex-shrink-0 rounded-3xl shadow-xl ${c.bg} ${c.text} p-5 text-left grid grid-rows-[auto_1fr]`}
              style={{ width: CARD_W, height: CARD_H }}
            >
              <div className="text-2xl md:text-3xl font-semibold leading-snug whitespace-pre-line">
                {c.title}
              </div>
              <div className="mt-4">{c.body}</div>
            </motion.div>
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          aria-label="Previous"
          onClick={() => scrollByCard("prev")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#000e44] shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollByCard("next")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#000e44] shadow hover:bg-white"
        >
          ›
        </button>
      </div>
    </motion.section>
  );
};

export default SimplifyTradingSection;
