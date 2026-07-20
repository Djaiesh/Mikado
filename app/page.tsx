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
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden flex flex-col bg-transparent">
      <ScrollReveal y={20}>
        <BentoHeroSection />
      </ScrollReveal>
      
      {/* 
        BentoFeaturesSection replaces WhyChooseUs, Facilities, and Gallery
        with a highly structured CSS grid showcase.
      */}
      <ScrollReveal>
        <BentoFeaturesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <TransformationVideoSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <InstagramReelsSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <MembershipsSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <TrainersSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <BmiCalculatorSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>
    </main>
  );
}
