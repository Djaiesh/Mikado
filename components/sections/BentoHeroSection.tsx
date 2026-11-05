"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";

export default function BentoHeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section ref={ref} className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
            
            {/* Full Bleed Background Video */}
            <motion.div style={{ scale: scaleVideo }} className="absolute inset-0 w-full h-full z-0">
                <video
                    src="/assets/hero-section-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Deep Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
            </motion.div>

            {/* Cinematic Content overlay */}
            <motion.div 
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center justify-center text-center mt-12 md:mt-24"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 100, delay: 0.2 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-[0.2em] uppercase text-white shadow-2xl mb-8">
                        <MapPin size={14} className="text-[#C8102E]" /> Valasaravakkam, Chennai
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 100, delay: 0.4 }}
                    className="text-[clamp(3.5rem,15vw,12rem)] font-black tracking-tighter leading-[0.85] text-white uppercase drop-shadow-2xl mb-6"
                >
                    Train.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/30">Dominate.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="max-w-lg text-white/50 font-medium text-lg md:text-xl leading-relaxed mb-12 italic"
                >
                    "Discipline is the bridge between your goals and your ultimate accomplishment."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100, delay: 1 }}
                >
                    <Link 
                        href="/contact#contact-form" 
                        className="group relative overflow-hidden inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 rounded-full bg-white text-black font-bold text-sm md:text-lg uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer"
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
