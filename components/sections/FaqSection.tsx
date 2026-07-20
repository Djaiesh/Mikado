"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/content/faq";

export default function FaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
            {/* Background Blur */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container-narrow relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6 shadow-inner">
                        Clarity First
                    </span>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none">
                        Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Questions.</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {FAQS.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className={`rounded-[1.5rem] border transition-all duration-300 overflow-hidden backdrop-blur-xl ${isOpen ? 'bg-[#0A0A0A]/80 border-white/20 shadow-2xl' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                            >
                                <button
                                    onClick={() => toggle(faq.id)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-bold text-lg leading-tight pr-4 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#C8102E] border-[#C8102E] text-white' : 'bg-white/5 border-white/10 text-white/50'}`}>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                    </div>
                                </button>
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                                >
                                    <div className="px-8 pb-8 text-white/60 leading-relaxed font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
