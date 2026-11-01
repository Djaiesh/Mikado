"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Dumbbell, Users, Flame, Trophy } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import { motion } from "framer-motion";

const STATS = [
    {
        icon: <Dumbbell className="w-5 h-5 text-[#C8102E]" />,
        value: "200+",
        label: "Workouts & Programs",
    },
    {
        icon: <Users className="w-5 h-5 text-[#C8102E]" />,
        value: "50+",
        label: "Expert Trainers",
    },
    {
        icon: <Flame className="w-5 h-5 text-[#C8102E]" />,
        value: "10K+",
        label: "Active Members",
    },
    {
        icon: <Trophy className="w-5 h-5 text-[#C8102E]" />,
        value: "24/7",
        label: "Open Gym Access",
    },
];

export default function CleanHeroSection() {
    const whatsappUrl = getWhatsAppUrl("Hi! I'm interested in getting started at Mikado Fitness Studio.");

    return (
        <section className="relative w-full min-h-[92vh] md:min-h-screen bg-black flex flex-col justify-between overflow-hidden pt-28 md:pt-32">
            
            {/* Background Athlete Image with cinematic right-aligned hero positioning */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/assets/hero-training.jpg"
                    alt="Mikado Fitness Training Athlete"
                    fill
                    priority
                    className="object-cover object-right md:object-[75%_center] opacity-80 md:opacity-90"
                />

                {/* Left-to-right gradient to keep text ultra legible on dark backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent w-full md:w-[75%]" />
                
                {/* Top fade for clean navbar merge */}
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent" />
                
                {/* Bottom fade for stats bar */}
                <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>

            {/* Main Content Area */}
            <div className="container-wide relative z-10 my-auto py-12 md:py-16">
                <div className="max-w-2xl">
                    
                    {/* Badge / Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                        Mikado Fitness Studio · Valasaravakkam
                    </motion.div>

                    {/* Bold Punchy Headline (inspired by reference image) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-[clamp(2.75rem,7vw,5.5rem)] font-black tracking-tight leading-[0.95] text-white uppercase mb-6"
                    >
                        Train Hard.<br />
                        <span className="text-[#C8102E]">Stay Strong.</span>
                    </motion.h1>

                    {/* Concise Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-white/70 text-base md:text-xl font-medium leading-relaxed max-w-lg mb-8"
                    >
                        Build strength, boost confidence, become your best self. Precision equipment, certified coaches, and transformative programs.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(200,16,46,0.35)] hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm md:text-base tracking-wide border border-white/10 backdrop-blur-md transition-all duration-300"
                        >
                            <Play className="w-4 h-4 fill-white" />
                            Watch Video
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom 4-Column Stat Bar (just like reference image) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 w-full border-t border-white/10 bg-black/60 backdrop-blur-xl"
            >
                <div className="container-wide py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {STATS.map((stat, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-4 ${idx !== 0 ? "pt-4 md:pt-0 md:pl-8" : ""}`}
                            >
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/50 text-xs md:text-sm font-semibold uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
