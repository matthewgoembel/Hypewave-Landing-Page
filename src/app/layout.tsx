import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hypewave.ai – Trade Smarter",
  description: "AI-powered signals, bots, and CT alpha.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-midnight text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
