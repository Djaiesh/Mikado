import Link from "next/link";
import { ArrowRight, MapPin, Play, Activity, Target } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import Image from "next/image";

export default function HeroSection() {
    const whatsappUrl = getWhatsAppUrl();

    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-20 pb-12 lg:py-0">
            
            {/* ── Background Blend Athlete Image ── */}
            {/* On Desktop it aligns right, on mobile it sits behind text and fades to black at bottom */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-end">
                <div className="relative w-full h-full lg:w-[65%] lg:h-[110%]">
                    <Image
                        src="/assets/crossfit-man.png"
                        alt="Crossfit Athlete"
                        fill
                        priority
                        className="object-cover object-top lg:object-center mix-blend-lighten opacity-60 lg:opacity-100"
                        style={{ filter: "contrast(1.2)" }}
                    />
                    {/* Fades to make him blend seamlessly into the #0A0A0A background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#0A0A0A]/80 lg:to-[#0A0A0A]" />
                    <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>
            </div>

            <div className="container-wide relative z-10 w-full h-full lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">

                {/* ── Left Content (Glassmorphism Card) ── */}
                <div className="lg:col-span-7 flex flex-col justify-end lg:justify-center h-full min-h-[65vh] lg:min-h-0 relative z-20 pt-10">
                    
                    {/* Glass Card Container */}
                    <div className="mikado-reveal [animation-delay:100ms] p-8 sm:p-10 lg:p-14 rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        
                        {/* Inner Glass Highlights and Glows */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#C8102E]/30 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-white/80 shadow-inner">
                                <MapPin size={14} className="text-[#C8102E]" />
                                Valasaravakkam, Chennai
                            </span>
                        </div>

                        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] text-white uppercase mb-6 drop-shadow-lg">
                            Train Hard.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#C8102E] filter drop-shadow-[0_0_15px_rgba(200,16,46,0.3)]">Live Strong.</span>
                        </h1>

                        <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-white/70 leading-relaxed max-w-[480px] mb-10 font-medium">
                            Two floors of modern equipment. Expert trainers. A community built on discipline and results. This is Mikado.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-2 bg-[#C8102E] text-white px-8 py-4.5 rounded-full font-bold text-[0.95rem] tracking-wide uppercase overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-[#A00D24] shadow-[0_0_40px_rgba(200,16,46,0.4)] hover:shadow-[0_0_60px_rgba(200,16,46,0.6)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Membership
                                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </a>
                            <Link
                                href="/programs"
                                className="flex items-center justify-center px-8 py-4.5 rounded-full font-bold text-[0.95rem] tracking-wide uppercase text-white bg-white/5 border border-white/10 transition-colors duration-300 hover:bg-white/10 hover:border-white/30 backdrop-blur-md"
                            >
                                View Programs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Right Content (Floating Glass Bento Widgets) ── */}
                <div className="hidden lg:flex lg:col-span-5 h-full flex-col justify-center gap-6 mt-8 mikado-reveal [animation-delay:300ms] relative z-10 pr-8">
                    
                    {/* Floating Widget 1 */}
                    <div className="self-end w-64 rounded-[2rem] border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-xl overflow-hidden relative group p-6 shadow-2xl transform translate-x-12 hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-[#C8102E]/20 flex items-center justify-center border border-[#C8102E]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Activity size={20} className="text-[#C8102E]" />
                            </div>
                            <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-1">Elite Facility</h3>
                            <p className="text-white/60 text-sm font-medium leading-snug">7,000+ sq ft space across 2 premium floors.</p>
                        </div>
                    </div>

                    {/* Floating Widget 2 */}
                    <div className="self-start w-64 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden relative p-6 shadow-2xl mt-12 hover:-translate-y-2 transition-all duration-500">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4">
                                <Target size={20} className="text-white" />
                            </div>
                            <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-1">Results</h3>
                            <p className="text-white/60 text-sm font-medium leading-snug">Proven coaching and dedicated community.</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Decorative vertical scroll line */}
            <div className="hidden lg:block absolute bottom-0 left-[clamp(2rem,6vw,5rem)] w-[1px] h-32 bg-white/5 mikado-reveal [animation-delay:700ms] z-20 overflow-hidden">
                <div className="w-full bg-gradient-to-b from-[#C8102E] to-transparent h-1/2 animate-scroll-line" />
            </div>

            <style>{`
        /* Smooth, bouncy Apple-like entrance */
        .mikado-reveal {
          opacity: 0;
          animation: mikadoRevealKeyframes 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes mikadoRevealKeyframes {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Continuous scroll down indicator */
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scrollLine 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .mikado-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
          .animate-scroll-line { animation: none !important; }
        }
      `}</style>
        </section>
    );
}
