import HeroSection from "@/sections/HeroSection";
import FeatureSection from "@/sections/FeatureSection";
import Preview from "@/sections/Preview";            
import OutroSection from "@/sections/OutroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      {/* App-Store style phone preview */}
      <Preview
        src="/videos/hypewave_preview.mp4"
        title="See It in Action"
        caption="Signals • Chat • News • Calendar"
      />
      <OutroSection />
    </>
  );
}
