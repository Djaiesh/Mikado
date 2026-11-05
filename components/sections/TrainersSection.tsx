"use client";

import Image from "next/image";
import { TRAINERS } from "@/content/trainers";
import { ScrollItem } from "@/components/ui/ScrollReveal";
import { Crown } from "lucide-react";

export default function TrainersSection() {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#C8102E]/10 blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                            Our Coaching Team
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none">
                            Guided by <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Professionals.</span>
                        </h2>
                    </div>
                    <p className="text-white/60 text-lg max-w-md font-medium">
                        Meet our 5 certified coaches and physiotherapist led by Head Coach Lokesh. Form correction, personalized programs, and safe athletic progression.
                    </p>
                </div>

                {/* 5 Coaches Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {TRAINERS.map((trainer, i) => {
                        const isHeadCoach = trainer.id === "lokesh";
                        return (
                            <ScrollItem key={trainer.id} delay={i * 0.08} className="h-full">
                                <div className={`group flex flex-col h-full p-5 rounded-[2rem] border bg-[#0A0A0A]/60 backdrop-blur-xl transition-all duration-500 shadow-2xl relative overflow-hidden ${
                                    isHeadCoach 
                                        ? "border-[#C8102E]/60 hover:border-[#C8102E] shadow-[0_10px_35px_rgba(200,16,46,0.2)]" 
                                        : "border-white/10 hover:bg-white/5 hover:border-white/25"
                                }`}>
                                    
                                    {/* Glass reflection */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Trainer Profile Image (Exact 4:5 aspect ratio) */}
                                    <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-black mb-5 shadow-inner">
                                        <Image
                                            src={trainer.image}
                                            alt={trainer.name}
                                            fill
                                            className="object-cover object-center opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                        
                                        {/* Head Coach Badge */}
                                        {isHeadCoach && (
                                            <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-black uppercase tracking-wider shadow-lg">
                                                <Crown className="w-3 h-3 fill-black" />
                                                Head Coach
                                            </div>
                                        )}

                                        {/* Bottom vignette for label legibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                                        <div className="absolute bottom-4 left-4 right-4 z-20">
                                            <h3 className="text-lg font-black text-white tracking-tight drop-shadow-md">{trainer.name}</h3>
                                            <p className="text-[#C8102E] font-bold text-[11px] tracking-wider uppercase mt-0.5 drop-shadow-md leading-tight">
                                                {trainer.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-white/70 text-xs leading-relaxed mb-5 font-medium line-clamp-3">
                                        {trainer.bio}
                                    </p>

                                    {/* Specialization Tags */}
                                    <div className="flex flex-wrap gap-1 mt-auto">
                                        {trainer.specializations.slice(0, 3).map((spec, sIdx) => (
                                            <span key={sIdx} className="text-[0.62rem] font-bold px-2 py-0.5 bg-white/5 text-white/80 rounded-full border border-white/10 uppercase tracking-wider backdrop-blur-md">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollItem>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
