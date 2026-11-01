import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import { Target, Compass, Sparkles, Dumbbell, ShieldCheck, HeartPulse } from "lucide-react";

export const metadata: Metadata = buildMetadata({
    title: "About Us",
    description: "Learn about Mikado Fitness Studio, Valasaravakkam's premium fitness destination, our mission, vision, and comprehensive training programs.",
    path: "/about",
});

export default function AboutPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="More Than a Gym."
                description="Mikado Fitness Studio was engineered to provide Valasaravakkam with an uncompromising, premium fitness space. Two floors, top-tier equipment, and a culture of pure discipline."
                breadcrumbs="Inside Mikado"
                imageUrl="/assets/gym-training-header.png"
            />

            {/* Vision & Mission Section */}
            <section className="relative w-full py-20 md:py-28 bg-[#0A0A0A] border-b border-white/5 overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8102E]/8 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container-wide relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 text-[#C8102E] text-xs font-bold tracking-[0.2em] uppercase mb-5">
                            <Sparkles className="w-3.5 h-3.5" />
                            Purpose & Ethos
                        </span>
                        <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight text-white leading-tight mb-4">
                            Forging Strength.{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">
                                Transforming Lives.
                            </span>
                        </h2>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed">
                            We don&apos;t just count repetitions — we build sustainable physical and mental resilience. Here is the foundation Mikado Fitness Studio stands upon.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                        {/* Mission Card */}
                        <div className="relative rounded-[2.5rem] p-8 md:p-10 bg-white/[0.03] border border-white/10 hover:border-[#C8102E]/40 hover:bg-white/[0.05] transition-all duration-300 group shadow-2xl">
                            <div className="w-14 h-14 rounded-2xl bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] block mb-2">Our Mission</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                                Transform 10,000+ Lives with Uncompromising Discipline
                            </h3>
                            <p className="text-white/70 text-base leading-relaxed">
                                To empower every individual who walks through our doors with science-backed training protocols, world-class equipment, personalized nutrition guidance, and elite coaching — turning fitness into a lifelong habit rather than a seasonal chore.
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4 text-white/50 text-sm">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                                    <span>Certified Coaches</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="w-4 h-4 text-[#C8102E]" />
                                    <span>Safe Progression</span>
                                </div>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="relative rounded-[2.5rem] p-8 md:p-10 bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 group shadow-2xl">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                <Compass className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/60 block mb-2">Our Vision</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                                Chennai&apos;s Benchmark For Modern Athletic Conditioning
                            </h3>
                            <p className="text-white/70 text-base leading-relaxed">
                                To be the premier destination where everyday people, working professionals, and athletes alike discover their peak physical potential. We envision a community free of intimidation, powered by camaraderie, state-of-the-art facilities, and measurable transformations.
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4 text-white/50 text-sm">
                                <div className="flex items-center gap-2">
                                    <Dumbbell className="w-4 h-4 text-white" />
                                    <span>Imported Biomechanics</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-white" />
                                    <span>Zero Compromises</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section integrated directly into About */}
            <section className="relative w-full py-20 md:py-24 bg-black/60 border-b border-white/5" id="programs">
                <div className="container-wide">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.75rem] font-bold tracking-widest uppercase text-white/70 mb-4">
                            Training Programs
                        </span>
                        <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight text-white leading-none mb-4">
                            Find Your Discipline.
                        </h2>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed">
                            Whether your goal is raw strength, cardiovascular endurance, or holistic flexibility, our expertly designed programs deliver results.
                        </p>
                    </div>

                    <ProgramsSection />
                </div>
            </section>

            <WhyChooseUsSection />
            <FacilitiesSection />
            <TestimonialsSection />
            <CtaSection />
        </main>
    );
}
