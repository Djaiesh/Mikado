"use client";

import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import Image from "next/image";

export default function BmiCalculatorSection() {
    const [params, setParams] = useState({ weight: "", height: "" });
    const [result, setResult] = useState<{ value: number; category: string; color: string } | null>(null);

    const calculate = (e: React.FormEvent) => {
        e.preventDefault();
        const w = parseFloat(params.weight);
        const h = parseFloat(params.height) / 100; // cm to m

        if (w > 0 && h > 0) {
            const bmi = w / (h * h);
            let cat = "";
            let col = "";

            if (bmi < 18.5) { cat = "Underweight"; col = "text-blue-400"; }
            else if (bmi < 24.9) { cat = "Normal"; col = "text-green-400"; }
            else if (bmi < 29.9) { cat = "Overweight"; col = "text-yellow-400"; }
            else { cat = "Obese"; col = "text-[#C8102E]"; }

            setResult({ value: parseFloat(bmi.toFixed(1)), category: cat, color: col });
        }
    };

    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Image src="/assets/battle-ropes.png" alt="Background" fill className="object-cover mix-blend-lighten" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
            </div>

            <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left: Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/80 text-[0.75rem] font-bold tracking-widest uppercase mb-6 shadow-inner">
                        <Calculator size={14} className="text-[#C8102E]" /> Free Tool
                    </div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white mb-6 leading-none">
                        Know Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Baseline.</span>
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-medium">
                        Body Mass Index (BMI) is a starting point to understand your body composition. Calculate yours instantly to see where you stand.
                    </p>

                    <a
                        href={getWhatsAppUrl("Hi, I want a detailed fitness assessment.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-white bg-[#C8102E]/20 border border-[#C8102E]/30 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#C8102E] transition-all duration-300 backdrop-blur-md"
                    >
                        Get a Full Assessment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>

                {/* Right: Calculator Form (Heavy Glass) */}
                <div className="bg-[#0A0A0A]/40 border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <form onSubmit={calculate} className="relative z-10 flex flex-col gap-6">

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/60">
                                    Weight (kg)
                                </label>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 75"
                                    value={params.weight}
                                    onChange={(e) => setParams(p => ({ ...p, weight: e.target.value }))}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all font-bold text-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-white/60">
                                    Height (cm)
                                </label>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 175"
                                    value={params.height}
                                    onChange={(e) => setParams(p => ({ ...p, height: e.target.value }))}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all font-bold text-lg"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-2xl bg-white text-black font-extrabold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl mt-2"
                        >
                            Calculate BMI
                        </button>

                        {/* Results Area */}
                        <div className={`mt-2 pt-6 border-t border-white/10 transition-all duration-500 ${result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                            {result && (
                                <div className="flex items-end justify-between bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md">
                                    <div>
                                        <p className="text-white/50 text-[0.7rem] font-bold uppercase tracking-widest mb-1">Your BMI</p>
                                        <p className="text-5xl font-black tracking-tighter text-white drop-shadow-md">{result.value}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white/50 text-[0.7rem] font-bold uppercase tracking-widest mb-1">Category</p>
                                        <p className={`text-2xl font-black tracking-tight ${result.color} drop-shadow-md uppercase`}>{result.category}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
