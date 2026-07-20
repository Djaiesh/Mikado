"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function AppleHeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // We make the section 250vh so the user has to scroll down significantly before the next section appears.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Animate the main text scaling up enormously and fading out
    const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 50]);
    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
    
    // Background image scales down slightly and brightens as text fades out
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const bgBrightness = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 1, 0.3]);

    // Secondary text fades in after the main text is gone
    const secondaryOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.8], [0, 1, 0]);
    const secondaryY = useTransform(scrollYProgress, [0.35, 0.5], [50, 0]);

    return (
        <section ref={containerRef} className="relative w-full h-[250vh] bg-[#0A0A0A]">
            <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden flex items-center justify-center">
                
                {/* Background Media */}
                <motion.div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{ scale: bgScale, opacity: bgBrightness }}
                >
                    <Image
                        src="/assets/gym-training-header.png"
                        alt="Mikado Fitness"
                        fill
                        className="object-cover"
                        style={{ filter: "contrast(1.2)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </motion.div>

                {/* Massive Typography */}
                <motion.div 
                    className="relative z-10 flex flex-col items-center justify-center pointer-events-none"
                    style={{ scale: textScale, opacity: textOpacity }}
                >
                    <h1 className="text-[clamp(5rem,18vw,15rem)] font-black tracking-tighter text-white leading-none mix-blend-overlay">
                        MIKADO
                    </h1>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/50"
                    style={{ opacity: textOpacity }}
                >
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] mb-4 font-bold">Scroll to enter</span>
                    <ArrowDown size={20} className="animate-bounce" />
                </motion.div>

                {/* Secondary Title (Fades in) */}
                <motion.div 
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6"
                    style={{ opacity: secondaryOpacity, y: secondaryY }}
                >
                    <h2 className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tighter text-white text-center leading-none drop-shadow-2xl">
                        Not Just a Gym.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">An Architecture for Discipline.</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
