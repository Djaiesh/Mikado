import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, ExternalLink, Clock, Phone, Mail, Navigation } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import { NAV_LINKS } from "@/types/index";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappUrl = getWhatsAppUrl();

    // Direct Google Maps Link
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "Mikado Fitness Studio, 140 Kamarajar Street, Near Shivan Kovil, Valasaravakkam, Chennai, Tamil Nadu 600087"
    )}`;

    // Exact Location Embed URL
    const googleMapsEmbedUrl = `https://maps.google.com/maps?q=Mikado+Fitness+Studio,+140+Kamarajar+Street,+Valasaravakkam,+Chennai+600087&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

    return (
        <footer className="border-t border-white/10 bg-[#070707] mt-auto relative overflow-hidden">
            {/* Ambient top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-gradient-to-b from-[#C8102E]/8 via-transparent to-transparent blur-[120px] pointer-events-none" />

            <div className="container-wide py-16 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">

                    {/* Left 7 Columns: Brand Info, Navigation, Contact & Hours */}
                    <div className="lg:col-span-7 flex flex-col gap-12">
                        
                        {/* Top: Brand info */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                <Link href="/" className="inline-block shrink-0">
                                    <Image
                                        src="/assets/logo.jpg"
                                        alt={SITE.name}
                                        width={160}
                                        height={52}
                                        className="w-36 h-auto object-contain rounded-2xl bg-black p-2 border border-white/15 hover:border-[#C8102E] transition-all duration-300 shadow-xl"
                                    />
                                </Link>
                                <div>
                                    <h3 className="text-white font-extrabold text-lg tracking-tight">Mikado Fitness Studio</h3>
                                    <p className="text-white/50 text-xs font-semibold tracking-wider uppercase mt-0.5">
                                        Valasaravakkam · Chennai
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-red-950/40 hover:scale-105"
                            >
                                Book a Visit / Pass
                                <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {/* Mid Grid: Nav + Contact + Timings */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            
                            {/* Navigation */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-white/90 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                                    Navigation
                                </h4>
                                <nav className="flex flex-col gap-2.5">
                                    {NAV_LINKS.map((link) => (
                                        <Link
                                            key={link.id}
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium w-fit"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-white/90 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                                    Get In Touch
                                </h4>
                                <div className="flex flex-col gap-3 text-sm text-white/70">
                                    <p className="leading-relaxed text-xs text-white/60">
                                        140 Kamarajar Street, Near Shivan Kovil, Valasaravakkam, Chennai - 600087
                                    </p>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white/80 hover:text-[#C8102E] transition-colors font-medium text-xs"
                                    >
                                        <Phone size={13} className="text-[#C8102E]" />
                                        {SITE.phone}
                                    </a>
                                    <a
                                        href={`mailto:${SITE.email}`}
                                        className="inline-flex items-center gap-2 text-white/80 hover:text-[#C8102E] transition-colors font-medium text-xs break-all"
                                    >
                                        <Mail size={13} className="text-[#C8102E]" />
                                        {SITE.email}
                                    </a>
                                </div>
                            </div>

                            {/* Timings */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-white/90 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                                    Studio Hours
                                </h4>
                                <div className="flex flex-col gap-3 text-xs">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-white/40 uppercase font-bold tracking-wider text-[10px] mb-1">Mon – Sat</div>
                                        <div className="text-white font-bold">{SITE.hours.weekdays.open} – {SITE.hours.weekdays.close}</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-white/40 uppercase font-bold tracking-wider text-[10px] mb-1">Sunday</div>
                                        <div className="text-white font-bold">{SITE.hours.sunday.open} – {SITE.hours.sunday.close}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right 5 Columns: Significantly Bigger, Featured Map Card */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="rounded-[2.5rem] bg-[#111111]/90 border border-white/10 hover:border-white/20 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 relative group overflow-hidden">
                            {/* Subtle inner ambient glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8102E]/10 rounded-full blur-[70px] pointer-events-none" />

                            {/* Card Header */}
                            <div className="flex items-center justify-between gap-4 mb-4 relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#C8102E] mb-1">
                                        <MapPin size={13} />
                                        Studio Location
                                    </div>
                                    <h4 className="text-base font-bold text-white tracking-tight">
                                        Mikado Fitness Studio
                                    </h4>
                                    <p className="text-white/50 text-xs">
                                        Near Shivan Kovil, Valasaravakkam
                                    </p>
                                </div>

                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/10 hover:border-white/20 shrink-0"
                                >
                                    <span>Open Maps</span>
                                    <ExternalLink size={12} />
                                </a>
                            </div>

                            {/* Prominent High-Visibility Map Embed */}
                            <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-inner group/map">
                                <iframe
                                    src={googleMapsEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        filter: "invert(92%) hue-rotate(180deg) contrast(1.1) brightness(0.95)",
                                    }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mikado Fitness Studio Location Map"
                                    className="w-full h-full opacity-85 group-hover/map:opacity-100 transition-opacity duration-300"
                                />

                                {/* Floating Directions Pill over map */}
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-3 right-3 px-4 py-2 rounded-xl bg-black/90 hover:bg-[#C8102E] text-white text-xs font-bold tracking-wide border border-white/20 hover:border-[#C8102E] transition-all duration-300 backdrop-blur-md flex items-center gap-2 shadow-2xl"
                                >
                                    <Navigation size={13} />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright, Tags, Social */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-white/50">
                    <p>© {currentYear} {SITE.name}. All rights reserved.</p>

                    <p className="text-white/40 hidden md:block">
                        Certified Physiotherapist & Coaching · Two-Floor Training Facility
                    </p>

                    <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-all duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
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
                        <span>Follow on Instagram</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
