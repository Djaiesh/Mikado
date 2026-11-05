"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/content/testimonials";
import { ScrollItem } from "@/components/ui/ScrollReveal";

export default function TestimonialsSection() {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
            {/* Blended Background Images */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-0 w-[50vw] h-full hidden lg:block">
                    <Image src="/assets/transformation-1.png" alt="Transformation" fill className="object-cover mix-blend-lighten opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]" />
                </div>
                <div className="absolute top-0 right-0 w-[50vw] h-full hidden lg:block">
                    <Image src="/assets/transformation-2.png" alt="Transformation" fill className="object-cover mix-blend-lighten opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0A]" />
                </div>
                <div className="absolute inset-0 bg-[#0A0A0A]/80" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8102E]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-wide relative z-10 block">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                        Real Results
                    </span>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none">
                        The Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Speaks.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, idx) => (
                        <ScrollItem key={t.id} delay={idx * 0.08} className="h-full">
                            <div
                                className="h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 relative group hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <Quote className="absolute top-8 right-8 w-10 h-10 text-white/10 opacity-50 rotate-12 group-hover:opacity-100 group-hover:rotate-0 group-hover:text-[#C8102E]/40 transition-all duration-500" />

                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < t.rating ? "text-yellow-500 fill-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" : "text-white/20"}`} />
                                        ))}
                                    </div>

                                    <p className="text-white/80 leading-relaxed mb-10 text-lg font-medium min-h-[100px] relative z-10">
                                        "{t.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#C8102E]/20 flex items-center justify-center font-black text-white text-lg border border-[#C8102E]/40 shadow-inner">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold tracking-tight text-md">{t.name}</p>
                                        <p className="text-white/50 text-[0.7rem] tracking-widest uppercase font-bold mt-0.5">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollItem>
                    ))}
                </div>
            </div>
        </section>
    );
}
