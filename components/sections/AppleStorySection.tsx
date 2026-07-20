"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AppleStorySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // 400vh gives us 4 "screens" of scrolling distance to animate through
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // We have 3 "slides" of story
    // Slide 1: 0.0 to 0.33
    // Slide 2: 0.33 to 0.66
    // Slide 3: 0.66 to 1.0

    // Image Opacities
    const img1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const img2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
    const img3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

    // Text Y Positions (Slide up into view, then out)
    const text1Y = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.33], [50, 0, 0, -50]);
    const text2Y = useTransform(scrollYProgress, [0.25, 0.33, 0.48, 0.58, 0.66], [50, 50, 0, 0, -50]);
    const text3Y = useTransform(scrollYProgress, [0.58, 0.66, 0.81, 1], [50, 50, 0, 0]);

    // Text Opacities
    const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.33], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.48, 0.58, 0.66], [0, 0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 0.81, 1], [0, 0, 1, 1]);

    return (
        <section ref={containerRef} className="relative w-full h-[400vh] bg-[#0A0A0A]">
            <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden">
                
                {/* ── Background Images ── */}
                <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img1Opacity }}>
                    <Image src="/assets/crossfit-woman.png" alt="Mikado Standard" fill className="object-cover mix-blend-lighten opacity-40" style={{ filter: "contrast(1.2)" }} />
                </motion.div>
                
                <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img2Opacity }}>
                    <Image src="/assets/battle-ropes.png" alt="7000 sq ft Facility" fill className="object-cover mix-blend-lighten opacity-30" style={{ filter: "contrast(1.2)" }} />
                </motion.div>
                
                <motion.div className="absolute inset-0 w-full h-full" style={{ opacity: img3Opacity }}>
                    <Image src="/assets/elite-trainer.png" alt="Elite Trainers" fill className="object-cover mix-blend-lighten opacity-40" style={{ filter: "contrast(1.2) grayscale(0.5)" }} />
                </motion.div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent w-full md:w-2/3" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                {/* ── Text Content ── */}
                <div className="absolute inset-0 container-wide flex flex-col justify-center">
                    <div className="max-w-2xl">
                        
                        {/* Slide 1 */}
                        <motion.div 
                            className="absolute inset-y-0 left-4 md:left-8 flex flex-col justify-center pointer-events-none"
                            style={{ opacity: text1Opacity, y: text1Y }}
                        >
                            <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm mb-6 drop-shadow-md">
                                The Mikado Standard
                            </span>
                            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-extrabold tracking-tighter text-white leading-none mb-8 drop-shadow-xl">
                                Built for <br />
                                Those Who <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Show Up.</span>
                            </h2>
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
                                We strip away the gimmicks. What remains is pure, unadulterated training space designed for maximum output.
                            </p>
                        </motion.div>

                        {/* Slide 2 */}
                        <motion.div 
                            className="absolute inset-y-0 left-4 md:left-8 flex flex-col justify-center pointer-events-none"
                            style={{ opacity: text2Opacity, y: text2Y }}
                        >
                            <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm mb-6 drop-shadow-md">
                                Scale & Space
                            </span>
                            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-extrabold tracking-tighter text-white leading-none mb-8 drop-shadow-xl">
                                7,000 Sq Ft.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Zero Limits.</span>
                            </h2>
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
                                Spread across two dedicated floors. Whether you are hitting a new PR on the rack or dominating the turf, you have the space to move.
                            </p>
                        </motion.div>

                        {/* Slide 3 */}
                        <motion.div 
                            className="absolute inset-y-0 left-4 md:left-8 flex flex-col justify-center pointer-events-none"
                            style={{ opacity: text3Opacity, y: text3Y }}
                        >
                            <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm mb-6 drop-shadow-md">
                                Expert Guidance
                            </span>
                            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-extrabold tracking-tighter text-white leading-none mb-8 drop-shadow-xl">
                                Certified.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Relentless.</span>
                            </h2>
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
                                Our trainers do not just count reps. They correct form, build tailored systems, and push you beyond what you thought possible.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
