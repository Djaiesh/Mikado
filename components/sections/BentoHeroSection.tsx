"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Activity, Users, HeartPulse, Trophy, Calendar } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import Image from "next/image";

export default function BentoHeroSection() {
    return (
        <section className="relative w-full min-h-[90dvh] bg-black/30 pt-28 pb-12 lg:pt-32 lg:pb-16 px-4 md:px-8 flex items-center justify-center">
            
            <div className="w-full max-w-[1400px] h-full grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
                
                {/* Main Media Block (Spans 8 columns on large screens) */}
                <div className="md:col-span-12 lg:col-span-8 relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 group min-h-[60vh] lg:min-h-0 lg:h-[75vh] flex flex-col justify-between p-8 md:p-12 z-10">
                    <video
                        src="/assets/hero-section-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten transition-transform duration-1000 group-hover:scale-105 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-0" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-transparent z-0" />
                    
                    {/* Top Content (Quote) */}
                    <div className="relative z-10 w-full flex justify-between items-start">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[0.7rem] font-bold tracking-widest uppercase text-white/90 shadow-inner">
                            <MapPin size={14} className="text-[#C8102E]" /> Valasaravakkam, Chennai
                        </span>
                        <div className="hidden md:block max-w-sm text-right">
                            <p className="text-white/80 font-medium italic text-lg leading-relaxed border-r-2 border-[#C8102E] pr-4 drop-shadow-lg">
                                "Discipline is the bridge between your goals and your ultimate accomplishment."
                            </p>
                        </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="relative z-10 mt-auto">
                        <div className="md:hidden max-w-sm mb-6">
                            <p className="text-white/80 font-medium italic text-lg leading-relaxed border-l-2 border-[#C8102E] pl-4 drop-shadow-lg">
                                "Discipline is the bridge between your goals and your ultimate accomplishment."
                            </p>
                        </div>
                        <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black tracking-tighter leading-[0.9] text-white uppercase drop-shadow-2xl">
                            Train.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#C8102E]">Dominate.</span>
                        </h1>
                    </div>
                </div>

                {/* Right Side Column (Stats & CTA) */}
                <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 lg:gap-6 lg:h-[75vh]">
                    
                    {/* Grid for new stats */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 flex-1">
                        {/* Stat 1: 4+ Trainers */}
                        <div className="rounded-[2.5rem] p-6 bg-[#111111] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                            <Image src="/assets/elite-trainer.png" alt="Trainer" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/80 to-transparent" />
                            <div className="relative z-10">
                                <Users size={24} className="text-[#C8102E] mb-4" />
                                <h3 className="text-4xl font-extrabold text-white tracking-tight mb-1">4+</h3>
                                <p className="text-white/50 font-semibold uppercase tracking-widest text-[10px]">Elite Trainers</p>
                            </div>
                        </div>

                        {/* Stat 2: 1 Physio */}
                        <div className="rounded-[2.5rem] p-6 bg-[#111111] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                            <Image src="/assets/crossfit-woman.png" alt="Physio" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/80 to-transparent" />
                            <div className="relative z-10">
                                <HeartPulse size={24} className="text-[#C8102E] mb-4" />
                                <h3 className="text-4xl font-extrabold text-white tracking-tight mb-1">1</h3>
                                <p className="text-white/50 font-semibold uppercase tracking-widest text-[10px]">In-House Physio</p>
                            </div>
                        </div>
                        
                        {/* Stat 3: 10+ Yrs Exp */}
                        <div className="rounded-[2.5rem] p-6 bg-[#111111] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                            <Image src="/assets/gym-training-1.png" alt="Experience" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-tl from-[#111111]/80 to-transparent" />
                            <div className="relative z-10">
                                <Trophy size={24} className="text-[#C8102E] mb-4" />
                                <h3 className="text-4xl font-extrabold text-white tracking-tight mb-1">10+</h3>
                                <p className="text-white/50 font-semibold uppercase tracking-widest text-[10px]">Years Experience</p>
                            </div>
                        </div>

                        {/* Stat 4: 4 Months Old */}
                        <div className="rounded-[2.5rem] p-6 bg-[#111111] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                            <Image src="/assets/transformation-1.png" alt="New Facility" fill className="object-cover opacity-10 filter grayscale mix-blend-lighten transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-tl from-[#111111]/80 to-transparent" />
                            <div className="relative z-10">
                                <Calendar size={24} className="text-[#C8102E] mb-4" />
                                <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">New</h3>
                                <p className="text-white/50 font-semibold uppercase tracking-widest text-[10px]">Fresh Facility (4 Mo)</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Block */}
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden h-28 rounded-[2.5rem] bg-[#C8102E] flex items-center justify-between px-8 text-white group hover:bg-[#A00D24] transition-colors duration-300 shadow-[0_0_30px_rgba(200,16,46,0.3)] hover:shadow-[0_0_50px_rgba(200,16,46,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="font-bold text-xl uppercase tracking-widest relative z-10">Book a Visit</span>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                            <ArrowRight size={24} />
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}
