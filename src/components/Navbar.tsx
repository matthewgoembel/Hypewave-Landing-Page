"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about", icon: "/icons/learn.svg" },
  { label: "Explore", href: "/explore", icon: "/icons/explore.svg" },
  { label: "Pricing", href: "/pricing", icon: "/icons/pricing.svg" },
  { label: "Support", href: "/support", icon: "/icons/support.svg" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6 bg-[#FFFFFF] shadow-md z-50 border-b border-[#b4d8f4]">
      {/* Logo + Text */}
      <div className="flex items-center">
        <Image
          src="/icons/hypewave_icon.svg"
          alt="Hypewave Logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <span className="text-3xl font-extrabold text-[#0a0a0a] tracking-tight leading-none">
          Hypewave AI
        </span>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-4 pl-24 text-base font-semibold text-[#000e44]">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group px-4 py-2 cursor-pointer overflow-hidden"
            >
              <Link href={link.href} className="relative z-10 flex items-center gap-2 text-nowrap">
                {/* Swipe background */}
                <span className="absolute inset-0 bg-[#3ABEFF] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-full z-0" />

                {/* Icon + Label */}
                <span className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Image
                    src={link.icon}
                    alt={`${link.label} icon`}
                    width={16}
                    height={16}
                  />
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button className="bg-black text-white text-base font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-[#3ABEFF] hover:text-black">
        Download
      </button>
    </nav>
  );
}
