import type { Metadata } from "next";
import "./globals.css";

// ⬇️ import your shared header/footer
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Hypewave AI – Trade Smarter",
  description: "AI-powered signals, bots, and CT alpha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use your globals.css variables for colors */}
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <Navbar />
        {/* Content area */}
        <main className="min-h-[calc(100vh-240px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
