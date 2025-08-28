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
    <header className="sticky top-0 z-50 w-full border-b border-[#b4d8f4] bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo + Text always visible */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/hypewave_icon.svg"
            alt="Hypewave Logo"
            width={50}
            height={50}
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl md:text-3xl font-extrabold text-[#0a0a0a] tracking-tight leading-none">
            Hypewave AI
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-base font-semibold text-[#000e44]">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group px-2 py-1 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={18}
                  height={18}
                  className="opacity-80"
                />
                <Link href={link.href}>{link.label}</Link>
              </span>
            </li>
          ))}
        </ul>

        {/* Right side: Download + Hamburger (on mobile) */}
        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="rounded-full bg-black px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#3ABEFF] hover:text-black md:px-6 md:py-3 md:text-base"
          >
            Download
          </Link>

          {/* Hamburger only on mobile */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#b4d8f4] md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-[#000e44]"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mb-4 space-y-2 rounded-2xl border border-[#b4d8f4] bg-white p-4 shadow-sm">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] font-medium text-[#000e44] hover:bg-[#dff0ff]"
            >
              <Image
                src={l.icon}
                alt=""
                width={18}
                height={18}
                className="text-[#000e44]"
              />
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
