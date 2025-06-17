"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#05070a] to-[#0e1a2b] text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#3ABEFF] to-[#ff5400] text-transparent bg-clip-text"
      >
        Meet Hypewave
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-zinc-400 mt-6 max-w-xl text-lg md:text-xl"
      >
        Your AI-powered co-pilot for trading. Signals. Sentiment. Speed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex gap-4"
      >
        <button className="bg-[#3ABEFF] text-black px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition">
          🚀 Launch Extension
        </button>
        <button className="border border-zinc-600 text-white px-6 py-3 rounded-xl hover:bg-zinc-800 transition">
          🤖 Try Telegram Bot
        </button>
      </motion.div>
    </div>
  );
}
