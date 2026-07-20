"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AppleGallerySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // We make the section 300vh tall to allow for horizontal scrolling of the track
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Translate the track horizontally as we scroll vertically
    // -60% is an estimate depending on the total width of the track.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const images = [
        "/assets/gym-training-1.png",
        "/assets/gym-training-2.png",
        "/assets/transformation-1.png",
        "/assets/transformation-2.png",
        "/assets/elite-trainer.png",
        "/assets/crossfit-man.png"
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[#0A0A0A]">
            <div className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden flex flex-col justify-center">
                
                {/* Header for the gallery */}
                <div className="container-wide mb-12">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white drop-shadow-lg">
                        The Atmosphere.
                    </h2>
                    <p className="text-white/60 font-medium max-w-md">
                        A glimpse inside Mikado. Where focus meets execution.
                    </p>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div 
                    className="flex gap-6 md:gap-12 px-[clamp(2rem,6vw,5rem)]"
                    style={{ x }}
                >
                    {images.map((src, idx) => (
                        <div 
                            key={idx} 
                            className="relative flex-shrink-0 w-[70vw] md:w-[40vw] max-w-[600px] h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                        >
                            <Image
                                src={src}
                                alt={`Mikado Gallery ${idx + 1}`}
                                fill
                                className="object-cover opacity-80 mix-blend-lighten"
                                style={{ filter: "contrast(1.1) grayscale(0.2)" }}
                            />
                            {/* Inner vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/30 pointer-events-none" />
                        </div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
}
