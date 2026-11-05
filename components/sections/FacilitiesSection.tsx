"use client";

import { Activity, Dumbbell, Waves, Wind, Car, Shield, Droplets } from "lucide-react";
import Image from "next/image";
import { ScrollItem } from "@/components/ui/ScrollReveal";

export default function FacilitiesSection() {
    const facilities = [
        { name: "Strength Zone", status: "Functioning", icon: <Dumbbell className="w-5 h-5" /> },
        { name: "Cardio Deck", status: "Functioning", icon: <Activity className="w-5 h-5" /> },
        { name: "CrossFit Turf & Rig", status: "Functioning", icon: <Waves className="w-5 h-5" /> },
        { name: "Steam Bath", status: "Functioning", icon: <Wind className="w-5 h-5" /> },
        { name: "Premium Lockers", status: "Functioning", icon: <Shield className="w-5 h-5" /> },
        { name: "Clean Showers", status: "Functioning", icon: <Droplets className="w-5 h-5" /> },
        { name: "Air Conditioned", status: "Functioning", icon: <Wind className="w-5 h-5" /> },
        { name: "Dedicated Parking", status: "Functioning", icon: <Car className="w-5 h-5" /> },
    ];

    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
            <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">

                {/* Left: Text & Grid */}
                <div className="lg:col-span-6 relative">
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#C8102E]/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-white/80 mb-6">
                        Two Floors of Power
                    </p>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white mb-6 leading-none">
                        Everything <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">You Need.</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                        A 7,000+ sq ft facility designed to eliminate friction from your routine. All training zones including CrossFit are fully functioning and operational for your daily training.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {facilities.map((fac, i) => (
                            <ScrollItem key={i} delay={i * 0.05}>
                                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#C8102E]">
                                            {fac.icon}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-white/90 block leading-tight">{fac.name}</span>
                                            <span className="text-[10px] font-semibold uppercase tracking-wider block mt-0.5 text-emerald-400">
                                                ● Functioning
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollItem>
                        ))}
                    </div>
                </div>

                {/* Right: Glassmorphism Image Block */}
                <div className="lg:col-span-6 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                    <Image 
                        src="/assets/crossfit-man.png" 
                        alt="Facilities" 
                        fill 
                        className="object-cover object-top opacity-50 group-hover:scale-105 transition-transform duration-700 mix-blend-lighten"
                        style={{ filter: "contrast(1.2)" }}
                    />
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="absolute bottom-12 left-12 z-10">
                        <div className="p-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl inline-block shadow-2xl">
                            <h3 className="text-white font-black text-6xl tracking-tighter leading-none mb-2">
                                7K+
                            </h3>
                            <p className="text-[#C8102E] tracking-widest uppercase font-bold text-sm">
                                Sq Ft of Excellence
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
