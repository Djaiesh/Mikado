"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import { NAV_LINKS } from "@/types/index";

export default function Footer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();
    const whatsappUrl = getWhatsAppUrl();

    // Direct Google Maps Search / Directions Link with exact place query
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "Mikado Fitness Studio, 140 Kamarajar Street, Near Shivan Kovil, Valasaravakkam, Chennai, Tamil Nadu 600087"
    )}`;

    // Exact Location Embed URL pointing directly to Mikado Fitness Studio / Valasaravakkam
    const googleMapsEmbedUrl = `https://maps.google.com/maps?q=Mikado+Fitness+Studio,+140+Kamarajar+Street,+Valasaravakkam,+Chennai+600087&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

    return (
        <footer className="relative border-t border-white/10 bg-[#070707] mt-auto overflow-hidden text-white">
            {/* Subtle background ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#C8102E]/[0.035] blur-[160px] rounded-full pointer-events-none" />

            {/* ── TOP SECTION: Dedicated Map Location Component ── */}
            <div className="border-b border-white/10 relative z-10 bg-black/40">
                <div className="container-wide py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 text-[#C8102E] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                                <MapPin className="w-3.5 h-3.5" />
                                Interactive Map
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                                Locate Our Studio on the Map
                            </h3>
                            <p className="text-white/60 text-sm md:text-base mt-1 max-w-xl">
                                Zoom in or out to explore the neighborhood. Easily accessible from Arcot Road, Porur, and Virugambakkam.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#C8102E] text-white text-xs md:text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 border border-white/10 hover:border-[#C8102E] shadow-lg shadow-black/50"
                            >
                                <span>Get Directions on Google Maps</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Full-width Responsive Map Frame */}
                    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#111111] group">
                        <iframe
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.9)",
                            }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mikado Fitness Studio Exact Google Map Location"
                            className="w-full h-full opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />

                        {/* Location Pill Overlay on Map */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg text-xs font-medium text-white/90 pointer-events-none">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-ping" />
                            <span>140 Kamarajar St, Near Shivan Kovil, Valasaravakkam</span>
                        </div>

                        {/* Direct Navigation Button */}
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-950/60 transition-transform duration-200 hover:scale-105"
                        >
                            <MapPin className="w-3.5 h-3.5" />
                            Open in Maps App
                        </a>
                    </div>
                </div>
            </div>

            {/* ── MAIN FOOTER: Left (Logo & Identity) | Center (Pill-Aligned Nav) | Right (Action & Contact) ── */}
            <div className="container-wide relative z-10 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-6 pb-12 border-b border-white/10">

                    {/* LEFT: Logo & Location Tag */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="inline-flex items-center h-[42px] group mb-3">
                            <Image
                                src="/assets/logo.jpg"
                                alt={SITE.name}
                                width={130}
                                height={42}
                                priority
                                className="h-full w-auto object-contain rounded-full border border-white/10 group-hover:border-[#C8102E]/60 transition-colors bg-black p-0.5"
                            />
                        </Link>
                        <p className="text-white/60 text-xs leading-relaxed max-w-xs mb-3">
                            {SITE.description}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-white/40">
                            <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                            <span>Valasaravakkam, Chennai</span>
                        </div>
                    </div>

                    {/* CENTER: Clean Floating Pill Navigation (Mirrors the Navbar exactly) */}
                    <div className="flex justify-center">
                        <nav className="flex flex-wrap justify-center items-center gap-1 px-3 py-2 bg-[#111111]/90 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                            {NAV_LINKS.map((link) => {
                                const isActive = link.href === "/"
                                    ? pathname === "/"
                                    : pathname === link.href || pathname.startsWith(link.href + "/");
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                                            isActive
                                                ? "bg-white text-black shadow-md shadow-white/10"
                                                : "text-white/70 hover:text-white hover:bg-white/10"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* RIGHT: Direct Contact & Action Button (Mirrors Navbar Join Now) */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 h-[40px] rounded-full bg-[#C8102E] hover:bg-[#a50d25] text-white text-[13px] font-bold tracking-wide transition-all duration-200 hover:scale-105 shadow-[0_8px_25px_rgba(200,16,46,0.4)]"
                        >
                            <MessageCircle size={15} />
                            Join Now via WhatsApp
                        </a>

                        <div className="flex flex-col items-center md:items-end text-xs text-white/50 space-y-1">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#C8102E] transition-colors"
                            >
                                {SITE.phone}
                            </a>
                            <div className="flex items-center gap-1.5 text-white/40">
                                <Clock className="w-3 h-3 text-[#C8102E]" />
                                <span>Mon–Sat: 6AM–11PM | Sun: 6AM–5PM</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── BOTTOM ROW: Copyright & Social ── */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/50">
                    <p>© {currentYear} {SITE.name}. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <span className="text-white/40">Follow Studio</span>
                        <a
                            href={SITE.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] transition-all duration-200"
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
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
