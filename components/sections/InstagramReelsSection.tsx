"use client";

import { SITE } from "@/lib/site";
import { ArrowRight } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

// Add your Instagram Reel shortcodes here!
// You can find the shortcode in the URL of the reel: https://www.instagram.com/reel/SHORTCODE/
const REEL_SHORTCODES = [
    "Da0XZJNvvkG",
    "DaAyhbIvUGr",
    "DZrV4XZRdIb",
];

export default function InstagramReelsSection() {
    return (
        <section className="section-pad bg-background overflow-hidden relative border-t border-white/5">
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C8102E]/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#C8102E] font-bold tracking-widest uppercase text-[0.75rem] mb-6">
                            <InstagramIcon className="w-3.5 h-3.5" />
                            <span>@mikado_fitness_studio</span>
                        </div>
                        <h2 className="heading-lg text-white mb-4">
                            The Grind <span className="text-white/40">On Film.</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                            Real members. Real effort. Follow our channel to see the daily intensity inside Valasaravakkam's most premium fitness space.
                        </p>
                    </div>

                    <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium transition-all group shrink-0 w-fit"
                    >
                        Follow Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Reels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REEL_SHORTCODES.map((shortcode, idx) => (
                        <div
                            key={idx}
                            className="w-full relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[9/16] flex items-center justify-center group"
                        >
                            {/* 
                                If it's a dummy shortcode, show a placeholder UI. 
                                Otherwise, load the Instagram embed iframe.
                            */}
                            {shortcode.includes("placeholder") ? (
                                <div className="text-center p-6 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <InstagramIcon className="w-8 h-8 text-white/30" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">Reel Placeholder {idx + 1}</h3>
                                    <p className="text-white/40 text-sm text-center">
                                        Open <code className="text-[#C8102E] bg-black/50 px-1 rounded">InstagramReelsSection.tsx</code> and replace <b>{shortcode}</b> with your real Instagram shortcode.
                                    </p>
                                </div>
                            ) : (
                                <iframe
                                    src={`https://www.instagram.com/p/${shortcode}/embed`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: "none", overflow: "hidden" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
