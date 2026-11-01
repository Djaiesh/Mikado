"use client";

import Image from "next/image";
import { Dumbbell, Shield, Wind, Target } from "lucide-react";

const HIGHLIGHTS = [
    {
        icon: <Dumbbell className="w-6 h-6 text-[#C8102E]" />,
        title: "High Intensity Turf",
        desc: "Dedicated functional training area with battle ropes, sleds, and plyo zones.",
        image: "/assets/battle-ropes.png",
    },
    {
        icon: <Target className="w-6 h-6 text-[#C8102E]" />,
        title: "Precision Biomechanics",
        desc: "Imported, biomechanically correct strength machines engineered for muscle isolation.",
        image: "/assets/gym-training-2.png",
    },
    {
        icon: <Shield className="w-6 h-6 text-[#C8102E]" />,
        title: "Elite Certified Coaches",
        desc: "Certified trainers who build systematic progressive overload protocols for your transformation.",
        image: "/assets/elite-trainer.png",
    },
];

const FEATURES_MINI = [
    {
        icon: <Wind className="w-5 h-5 text-[#C8102E]" />,
        title: "Climate Controlled",
        desc: "High-power AC filtration ensuring peak oxygen and stamina.",
    },
    {
        icon: <Dumbbell className="w-5 h-5 text-[#C8102E]" />,
        title: "Free Weights & Racks",
        desc: "Olympic barbells, bumper plates, and power cages for heavy lifts.",
    },
    {
        icon: <Target className="w-5 h-5 text-[#C8102E]" />,
        title: "Results-Driven Culture",
        desc: "Focused on consistency, discipline, and measurable physical metrics.",
    },
];

export default function BentoFeaturesSection() {
    return (
        <section className="relative w-full bg-black/40 py-20 md:py-28 px-4 md:px-8 border-t border-white/5">
            <div className="w-full max-w-[1300px] mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-4">
                        Facility & Standard
                    </span>
                    <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight text-white leading-none mb-4">
                        The Standard. <span className="text-white/40">Zero Compromises.</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed">
                        Every square foot engineered for maximum training output. Clean, focused, and equipped for results.
                    </p>
                </div>

                {/* 3 Main Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {HIGHLIGHTS.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-[2rem] overflow-hidden bg-[#111111] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col h-[380px]"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover opacity-50 group-hover:opacity-65 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            
                            <div className="relative z-10 mt-auto p-8">
                                <div className="p-3 w-fit rounded-xl bg-white/10 backdrop-blur-md border border-white/10 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-sm font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3 Mini Feature Pills */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {FEATURES_MINI.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="p-2.5 rounded-xl bg-[#C8102E]/10 border border-[#C8102E]/20 shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-base tracking-tight mb-0.5">
                                    {item.title}
                                </h4>
                                <p className="text-white/50 text-xs font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
