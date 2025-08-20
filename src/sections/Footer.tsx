// components/Footer.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 rounded-3xl px-3 py-2 flex-1"
                required
              />
              <button
                type="submit"
                className="border border-black rounded-3xl px-4 py-2 hover:bg-black hover:text-white transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/blog">Blog</Link>
            <Link href="/announcements">Announcements</Link>
            <Link href="/media-kit">Explore</Link>
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
