// app/components/Navbar.tsx or src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about", icon: "/icons/learn.svg" },
  { label: "Pricing", href: "/pricing", icon: "/icons/pricing.svg" },
  { label: "Support", href: "/support", icon: "/icons/support.svg" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#b4d8f4] bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* LEFT — Logo (icon only on mobile, icon+text on desktop) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/hypewave_icon.svg"
            alt="Hypewave Logo"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="hidden text-xl font-extrabold tracking-tight text-neutral-900 md:inline">
            Hypewave AI
          </span>
        </Link>

        {/* CENTER — Desktop nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group px-1">
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#000e44] hover:text-neutral-900"
              >
                <span className="w-4 h-4 opacity-70">
                  <Image src={link.icon} alt="" width={16} height={16} />
                </span>
                {link.label}
              </Link>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-[#3ABEFF] transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>

        {/* RIGHT — Download + Hamburger (mobile), Download bigger on desktop */}
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="rounded-full bg-black px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#3ABEFF] hover:text-black md:px-4 md:py-2 md:text-sm"
          >
            Download
          </Link>

          {/* Hamburger only on mobile */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#b4d8f4] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-3 space-y-2 rounded-2xl border border-[#b4d8f4] bg-white p-3 shadow-sm">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] font-medium text-neutral-800 hover:bg-[#dff0ff]"
            >
              <Image src={l.icon} alt="" width={18} height={18} />
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
