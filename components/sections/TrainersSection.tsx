"use client";

import Image from "next/image";
import { TRAINERS } from "@/content/trainers";

export default function TrainersSection() {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#C8102E]/10 blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                            Our Experts
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none">
                            Guided by <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Professionals.</span>
                        </h2>
                    </div>
                    <p className="text-white/60 text-lg max-w-md font-medium">
                        Our certified trainers and physiotherapist are here to correct your form, build your program, and keep you training safely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TRAINERS.map((trainer) => (
                        <div key={trainer.id} className="group flex flex-col p-6 rounded-[2rem] border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-xl hover:bg-white/5 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                            
                            {/* Glass reflections */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Trainer Profile Image */}
                            <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-black mb-6 shadow-inner">
                                <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    fill
                                    className="object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-lighten"
                                    style={{ filter: "grayscale(0.4) contrast(1.15)" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />

                                <div className="absolute bottom-5 left-5 right-5 z-20">
                                    <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md">{trainer.name}</h3>
                                    <p className="text-[#C8102E] font-bold text-xs tracking-wider uppercase mt-1 drop-shadow-md leading-snug">{trainer.role}</p>
                                </div>
                            </div>

                            {/* Readout */}
                            <p className="text-white/70 text-xs leading-relaxed mb-6 font-medium line-clamp-4">
                                {trainer.bio}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {trainer.specializations.slice(0, 3).map((spec, i) => (
                                    <span key={i} className="text-[0.65rem] font-bold px-2.5 py-1 bg-white/5 text-white/80 rounded-full border border-white/10 uppercase tracking-wider backdrop-blur-md">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
