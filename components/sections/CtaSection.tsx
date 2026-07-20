import { ArrowRight, Phone } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import Image from "next/image";

export default function CtaSection() {
    return (
        <section className="relative w-full py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
            {/* Blended Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image src="/assets/crossfit-man.png" alt="Transform" fill className="object-cover mix-blend-lighten opacity-30" style={{ filter: "contrast(1.2)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.3)_0%,transparent_70%)] blur-[50px]" />
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 lg:p-20 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                    
                    <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#C8102E]/40 rounded-full blur-[60px]" />
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-[60px]" />

                    <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tighter text-white mb-6 leading-none drop-shadow-xl">
                        Ready to <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Transform?</span>
                    </h2>

                    <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
                        Join the premium community of over 500 members achieving their true potential in Valasaravakkam.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto relative z-10">
                        <a
                            href={getWhatsAppUrl("Hi, I want to book a free visit to Mikado Fitness Studio.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C8102E] text-white px-10 py-5 rounded-full font-bold text-[0.95rem] tracking-wide uppercase transition-all duration-500 hover:scale-[1.02] hover:bg-[#A00D24] shadow-[0_0_40px_rgba(200,16,46,0.5)] hover:shadow-[0_0_60px_rgba(200,16,46,0.8)]"
                        >
                            Book a Visit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>

                        <a
                            href={`tel:${SITE.phone}`}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-[0.95rem] tracking-wide uppercase hover:bg-white/10 hover:border-white/20 transition-colors duration-300 shadow-xl"
                        >
                            <Phone size={18} className="text-white/80" /> {SITE.phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
