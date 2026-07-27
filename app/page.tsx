import dynamic from "next/dynamic";
import BentoHeroSection from "@/components/sections/BentoHeroSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BentoFeaturesSection = dynamic(() => import("@/components/sections/BentoFeaturesSection"));
const TransformationVideoSection = dynamic(() => import("@/components/sections/TransformationVideoSection"));
const InstagramReelsSection = dynamic(() => import("@/components/sections/InstagramReelsSection"));
const MembershipsSection = dynamic(() => import("@/components/sections/MembershipsSection"));
const TrainersSection = dynamic(() => import("@/components/sections/TrainersSection"));
const BmiCalculatorSection = dynamic(() => import("@/components/sections/BmiCalculator"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const CtaSection = dynamic(() => import("@/components/sections/CtaSection"));

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden flex flex-col bg-transparent">
      <ScrollReveal y={20}>
        <BentoHeroSection />
      </ScrollReveal>
      
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
