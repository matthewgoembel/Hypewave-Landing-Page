"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "/about", icon: "/icons/learn.svg" },
  { label: "Pricing", href: "/pricing", icon: "/icons/pricing.svg" },
  { label: "Support", href: "/support", icon: "/icons/support.svg" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close on click outside / Esc
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (menuRef.current?.contains(t)) return;
      if (btnRef.current?.contains(t)) return;
      setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#b4d8f4] bg-white/90 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 md:px-10">
        {/* LEFT GROUP — Hamburger then Logo+Title (mobile keeps name visible) */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {/* Hamburger (mobile only) */}
          <button
            ref={btnRef}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#b4d8f4] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#000e44]" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Logo + Title */}
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <Image
              src="/icons/hypewave_icon.svg"
              alt="Hypewave Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="truncate text-2xl md:text-3xl font-extrabold text-[#0a0a0a] tracking-tight">
              Hypewave AI
            </span>
          </Link>
        </div>

        {/* CENTER — Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 text-base font-semibold text-[#000e44]">
          {navLinks.map((link) => (
            <li key={link.href} className="px-2 py-1">
              <Link href={link.href} className="inline-flex items-center gap-2 hover:opacity-80">
                <Image src={link.icon} alt="" width={18} height={18} className="opacity-90" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT — Download (always right-aligned) */}
        <div className="flex shrink-0 items-center">
          <Link
            href="/download"
            className="rounded-full bg-black px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#3ABEFF] hover:text-black transition-colors md:px-6 md:py-3 md:text-base"
          >
            Download
          </Link>
        </div>

        {/* MOBILE MINI-DROPDOWN — anchored under the hamburger on the LEFT */}
        <div
          ref={menuRef}
          className={`
            md:hidden absolute left-6 top-[64px]
            w-48 rounded-2xl border border-[#b4d8f4] bg-white shadow-lg
            origin-top-left
            ${open ? "pointer-events-auto" : "pointer-events-none"}
            transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.98]"}
          `}
        >
          <ul className="py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-[15px] font-medium text-[#000e44] hover:bg-[#eaf5ff] active:scale-[0.99] transition-all"
                >
                  <Image src={l.icon} alt="" width={18} height={18} className="opacity-90" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
