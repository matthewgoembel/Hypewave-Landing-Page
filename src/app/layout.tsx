import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hypewave AI – Trade Smarter",
  description: "AI-powered signals, bots, and CT alpha.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        {/* Lottie element loader */}
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="afterInteractive"
        />
        <Navbar />
        <main className="min-h-[calc(100vh-240px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
