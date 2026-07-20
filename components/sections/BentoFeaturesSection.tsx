"use client";

import Image from "next/image";
import { Dumbbell, Shield, Wind, Target } from "lucide-react";

export default function BentoFeaturesSection() {
    return (
        <section className="relative w-full bg-black/30 py-16 lg:py-24 px-4 md:px-8">
            <div className="w-full max-w-[1400px] mx-auto">
                
                <div className="mb-12 md:mb-16">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white">
                        The Standard.
                    </h2>
                    <p className="text-white/50 uppercase tracking-widest text-sm font-bold mt-2">Zero Compromises.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    
                    {/* Row 1 & 2: Large Image Block (spans 2x2) */}
                    <div className="md:col-span-2 md:row-span-2 rounded-[2.5rem] border border-white/5 bg-[#111111] overflow-hidden relative group">
                        <Image
                            src="/assets/battle-ropes.png"
                            alt="Intense Training"
                            fill
                            className="object-cover opacity-60 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
                            style={{ filter: "contrast(1.2) grayscale(0.2)" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90" />
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">High Intensity</h3>
                            <p className="text-white/60 font-medium md:text-lg max-w-md leading-relaxed">Turf area, battle ropes, and functional zones designed to push you past your limits.</p>
                        </div>
                    </div>

                    {/* Row 1: Small Text Block */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-[#111111] p-8 flex flex-col justify-between group overflow-hidden relative">
                        <Image src="/assets/gym-training-header.png" alt="BG" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
                        <Dumbbell size={32} className="text-[#C8102E] relative z-10" />
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-2">Bio-mechanic</h4>
                            <p className="text-white/50 text-sm font-medium leading-snug">Imported, precision-engineered equipment.</p>
                        </div>
                    </div>

                    {/* Row 1: Image Block 1 */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-[#111111] overflow-hidden relative group">
                         <Image
                            src="/assets/gym-training-1.png"
                            alt="Crossfit"
                            fill
                            className="object-cover opacity-60 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Row 2: Image Block 2 */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-[#111111] overflow-hidden relative group">
                         <Image
                            src="/assets/gym-training-2.png"
                            alt="Squat Training"
                            fill
                            className="object-cover opacity-60 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Row 2: Image Block 3 */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-[#111111] overflow-hidden relative group">
                         <Image
                            src="/assets/transformation-2.png"
                            alt="Transformation"
                            fill
                            className="object-cover opacity-60 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Row 3: Wide Text Block (spans 2) */}
                    <div className="md:col-span-2 rounded-[2.5rem] border border-white/5 bg-[#111111] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
                        <Image src="/assets/elite-trainer.png" alt="BG" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-transparent" />
                        <div className="absolute top-1/2 -translate-y-1/2 right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none hidden md:block">
                            <Shield size={160} />
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-3 z-10 tracking-tight">Elite Trainers</h4>
                        <p className="text-white/60 font-medium md:text-lg max-w-sm z-10 leading-relaxed">Certified professionals who do more than count reps. They build systems for your success.</p>
                    </div>

                    {/* Row 3: Small Block */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-[#111111] p-8 flex flex-col justify-between group relative overflow-hidden">
                        <Image src="/assets/crossfit-woman.png" alt="BG" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#111111]" />
                        <Wind size={32} className="text-[#C8102E] relative z-10" />
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-2">Climate</h4>
                            <p className="text-white/50 text-sm font-medium leading-snug">Fully air-conditioned environment.</p>
                        </div>
                    </div>

                    {/* Row 3: Small Block */}
                    <div className="rounded-[2.5rem] border border-white/5 bg-[#111111] p-8 flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#C8102E]/10 rounded-full blur-[40px] transition-all duration-500 group-hover:bg-[#C8102E]/30" />
                        <Target size={32} className="text-[#C8102E] relative z-10" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-2">Results</h4>
                            <p className="text-white/50 text-sm font-medium leading-snug">A culture built strictly on discipline.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
