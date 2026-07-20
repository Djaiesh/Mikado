import BentoHeroSection from "@/components/sections/BentoHeroSection";
import BentoFeaturesSection from "@/components/sections/BentoFeaturesSection";
import TransformationVideoSection from "@/components/sections/TransformationVideoSection";
import InstagramReelsSection from "@/components/sections/InstagramReelsSection";
import MembershipsSection from "@/components/sections/MembershipsSection";
import TrainersSection from "@/components/sections/TrainersSection";
import BmiCalculatorSection from "@/components/sections/BmiCalculator";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden flex flex-col bg-transparent">
      <BentoHeroSection />
      
      {/* 
        BentoFeaturesSection replaces WhyChooseUs, Facilities, and Gallery
        with a highly structured CSS grid showcase.
      */}
      <BentoFeaturesSection />
      
      <TransformationVideoSection />
      <InstagramReelsSection />
      <MembershipsSection />
      <TrainersSection />
      <BmiCalculatorSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
