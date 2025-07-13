import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import FeatureSection from "@/sections/FeatureSection";
import OutroSection from "@/sections/OutroSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-[#28a4ff]">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <OutroSection />
      <Footer />
    </main>
  );
}
