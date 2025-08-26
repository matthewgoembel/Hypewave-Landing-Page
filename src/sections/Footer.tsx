// components/Footer.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // If honeypot is filled, silently drop
    if (company.trim() !== "") {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.duplicate) {
          setMessage("You're already subscribed ✅");
        } else {
          setMessage("Thanks for subscribing 🎉");
        }
        setEmail("");
      } else {
        setMessage(data?.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-white border-t border-gray-200 text-[#222] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left section */}
        <div className="flex flex-col max-w-md">
          <Link href="/">
            <Image
              src="/icons/hypewave_icon.svg"
              alt="Hypewave Logo"
              width={100}
              height={30}
              className="mb-6"
            />
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <Link href="https://x.com/hypewave_ai" aria-label="X / Twitter">
              <Image src="/icons/x.svg" alt="X" width={32} height={32} />
            </Link>
            <Link href="https://discord.gg/DEuy7p36">
              <Image src="/icons/discord.svg" alt="Discord" width={32} height={32} />
            </Link>
            <Link href="https://t.me/hypewaveai">
              <Image src="/icons/telegram.svg" alt="Telegram" width={32} height={32} />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Join the Hypewave Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Stay up to date with the latest news, signals, and updates.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              {/* Honeypot field */}
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-gray-300 rounded-3xl px-3 py-2 flex-1"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="border border-black rounded-3xl px-4 py-2 hover:bg-black hover:text-white transition disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && (
              <p className="mt-2 text-sm text-gray-600">{message}</p>
            )}
          </div>
        </div>

        {/* Right links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/support">Help</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/risk">Risk Disclosure</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hypewave AI. All rights reserved.
      </div>
    </footer>
  );
}
