"use client";

import { SITE } from "@/lib/site";
import Image from "next/image";

export default function GallerySection() {
    // Simulating 6 placeholder gallery slots
    const placeholders = [1, 2, 3, 4, 5, 6];

    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                            Inside Mikado
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none">
                            Raw Energy. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Refined Space.</span>
                        </h2>
                    </div>
                    <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 font-bold tracking-widest uppercase text-sm shadow-xl hover:-translate-y-1"
                    >
                        Follow on Instagram
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {placeholders.map((i) => {
                        // Assigning generated images to placeholders
                        let bgImage = "/assets/logo.jpg";
                        let invert = true;
                        
                        if (i === 1) { bgImage = "/assets/gym-training-1.png"; invert = false; }
                        else if (i === 4) { bgImage = "/assets/gym-training-2.png"; invert = false; }
                        else if (i === 2) { bgImage = "/assets/transformation-1.png"; invert = false; }
                        else if (i === 5) { bgImage = "/assets/transformation-2.png"; invert = false; }
                        else if (i === 3) { bgImage = "/assets/elite-trainer.png"; invert = false; }

                        return (
                            <div
                                key={i}
                                className={`relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] group shadow-2xl hover:shadow-[0_20px_50px_rgba(200,16,46,0.3)] transition-all duration-500 hover:-translate-y-2 ${i === 1 || i === 4 ? "aspect-square md:aspect-[4/5]" : "aspect-square"}`}
                            >
                                {/* Inner Glass Glow */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#C8102E]/30 rounded-full blur-[40px] group-hover:bg-[#C8102E]/50 transition-colors duration-500 pointer-events-none z-10" />

                                <div className="absolute inset-0 transition-all duration-700 group-hover:scale-105">
                                    <Image 
                                        src={bgImage} 
                                        alt={`Gallery Image ${i}`} 
                                        fill 
                                        className={`object-cover ${invert ? 'p-12 opacity-20 filter invert object-contain' : 'opacity-60 mix-blend-lighten'}`} 
                                    />
                                    {!invert && <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
