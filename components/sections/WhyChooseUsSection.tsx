"use client";

import { Target, Users, LayoutDashboard, Dumbbell, Wallet } from "lucide-react";
import Image from "next/image";
import { ScrollItem } from "@/components/ui/ScrollReveal";

export default function WhyChooseUsSection() {
    const reasons = [
        {
            title: "Premium Experience",
            description: "Designed for those who want a focused, high-end environment. Clean spaces and top-tier hygiene.",
            icon: <Target className="w-6 h-6 text-[#C8102E]" />,
        },
        {
            title: "Expert Trainers",
            description: "Certified professionals committed to your goals. Friendly, approachable, and results-driven.",
            icon: <Users className="w-6 h-6 text-[#C8102E]" />,
        },
        {
            title: "7,000+ Sq Ft",
            description: "Two expansive floors ensuring you never feel crowded. Dedicated zones for every discipline.",
            icon: <LayoutDashboard className="w-6 h-6 text-[#C8102E]" />,
        },
        {
            title: "Modern Equipment",
            description: "Biomechanically accurate machines and a massive free-weights sector built for serious lifting.",
            icon: <Dumbbell className="w-6 h-6 text-[#C8102E]" />,
        },
        {
            title: "Fair Pricing",
            description: "Unmatched value in Valasaravakkam. Premium quality without the prohibitive luxury price tag.",
            icon: <Wallet className="w-6 h-6 text-[#C8102E]" />,
        },
    ];

    return (
        <section className="relative w-full min-h-[100dvh] py-24 bg-[#0A0A0A] overflow-hidden flex items-center">
            
            {/* ── Background Blend Athlete Image ── */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-start opacity-70 lg:opacity-100">
                <div className="relative w-full h-full lg:w-[60%] lg:h-[110%] -translate-x-1/4 lg:translate-x-0">
                    <Image
                        src="/assets/crossfit-woman.png"
                        alt="Female Athlete"
                        fill
                        className="object-cover object-top lg:object-center mix-blend-lighten"
                        style={{ filter: "contrast(1.1) brightness(0.9)" }}
                    />
                    {/* Fades to blend into background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0A0A0A]/80 lg:to-[#0A0A0A]" />
                    <div className="absolute top-0 w-full h-[20%] bg-gradient-to-b from-[#0A0A0A] to-transparent" />
                    <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>
            </div>

            <div className="container-wide relative z-10 w-full">
                
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    
                    {/* Empty left space for image breathing room on desktop */}
                    <div className="hidden lg:block lg:col-span-4" />

                    {/* Content on the Right */}
                    <div className="lg:col-span-8">
                        {/* Header */}
                        <div className="mb-12 lg:mb-16 max-w-2xl">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                                The Mikado Standard
                            </span>
                            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none mb-6">
                                Engineered for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Excellence.</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed font-medium">
                                We built Mikado to bridge the gap between hardcore lifting gyms and premium health clubs. Experience raw energy in a refined space.
                            </p>
                        </div>

                        {/* Glassmorphism Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {reasons.map((reason, i) => (
                                <ScrollItem key={i} delay={i * 0.08} className="h-full">
                                    <div className="group relative h-full p-8 rounded-[2rem] border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-xl overflow-hidden hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                                        {/* Glass reflection */}
                                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* Hover glow */}
                                        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#C8102E]/20 rounded-full blur-[40px] group-hover:bg-[#C8102E]/40 transition-colors duration-500 pointer-events-none" />

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#C8102E]/20 group-hover:border-[#C8102E]/30 transition-all duration-300">
                                                {reason.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                                {reason.title}
                                            </h3>
                                            <p className="text-white/60 leading-relaxed text-sm font-medium">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollItem>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
