import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import OutroSection from "@/sections/OutroSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-[#28a4ff]">
      <Navbar />
      <HeroSection />
      <OutroSection />
      <Footer />
    </main>
  );
}
