import { Play } from "lucide-react";

export default function TransformationVideoSection() {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
            <div className="container-wide relative z-10">
                
                <div className="text-center mb-12 lg:mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-4">
                        Motivation & Results
                    </span>
                    <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-white leading-none">
                        See The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Transformation.</span>
                    </h2>
                </div>

                {/* Glassmorphic Video Container */}
                <div className="relative max-w-5xl mx-auto rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] aspect-video group cursor-pointer">
                    
                    {/* The Video (Using intro-video as a placeholder for the training/transformation video) */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-[1.05] group-hover:scale-100 transition-transform duration-700"
                        style={{ filter: "saturate(0.7) contrast(1.1) brightness(0.85)" }}
                    >
                        <source src="/assets/inner-video.mp4" type="video/mp4" />
                    </video>

                    {/* Overlays & Play Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#C8102E]/90 group-hover:border-[#C8102E] transition-all duration-300 shadow-2xl group-hover:scale-110">
                            <Play size={32} className="text-white ml-2" fill="currentColor" />
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
                        <p className="text-white font-bold text-2xl lg:text-3xl uppercase tracking-tight">Real Results.</p>
                        <p className="text-white/70 font-medium mt-1">Real Members, Real Training.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
