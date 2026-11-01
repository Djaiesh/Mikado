"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import { NAV_LINKS } from "@/types/index";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappUrl = getWhatsAppUrl();

    // Direct Google Maps Search / Directions Link
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "Mikado Fitness Studio, Near Shivan Kovil, Valasaravakkam, Chennai, Tamil Nadu 600087"
    )}`;

    // Interactive Google Maps Embed
    const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
        "Mikado Fitness Studio, Near Shivan Kovil, Valasaravakkam, Chennai 600087"
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <footer className="relative border-t border-white/10 bg-[#070707] mt-auto overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C8102E]/[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="container-wide relative z-10 pt-16 pb-12">
                {/* 3-Column Balanced Main Layout: Left (Brand & Nav) | Center (Contact & Hours) | Right (Interactive Map) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

                    {/* Column 1 (Left - 4 cols): Brand identity & quick links */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block group mb-4">
                                <Image
                                    src="/assets/logo.jpg"
                                    alt={SITE.name}
                                    width={160}
                                    height={50}
                                    className="w-36 h-auto object-contain rounded-full border border-white/10 group-hover:border-[#C8102E]/60 transition-colors p-1 bg-black"
                                />
                            </Link>
                            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                                {SITE.description}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E] mb-3">
                                Quick Navigation
                            </h4>
                            <nav className="flex flex-wrap gap-x-5 gap-y-2">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className="text-white/70 hover:text-white hover:underline underline-offset-4 text-sm font-medium transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Column 2 (Center - 4 cols): Contact Details & Operating Hours */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                        {/* Address & Direct Phone */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                                Studio Location
                            </h4>
                            <p className="text-white/80 text-sm leading-relaxed max-w-xs mb-3">
                                {SITE.address.full}
                            </p>
                            
                            <div className="flex flex-col gap-2 pt-2">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C8102E] transition-colors group w-fit"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#C8102E] group-hover:scale-110 transition-transform" />
                                    <span>{SITE.phone}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#C8102E] transition-colors group w-fit"
                                >
                                    <Mail className="w-3.5 h-3.5 text-[#C8102E] group-hover:scale-110 transition-transform" />
                                    <span>{SITE.email}</span>
                                </a>
                            </div>
                        </div>

                        {/* Operating Hours Card */}
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2.5 flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                                Opening Hours
                            </h5>
                            <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between text-white/70">
                                    <span>{SITE.hours.weekdays.label}</span>
                                    <span className="font-semibold text-white">{SITE.hours.weekdays.open} – {SITE.hours.weekdays.close}</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>{SITE.hours.sunday.label}</span>
                                    <span className="font-semibold text-white">{SITE.hours.sunday.open} – {SITE.hours.sunday.close}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 (Right - 4 cols): Interactive Google Map */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                                Map & Directions
                            </h4>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[#C8102E] hover:text-white transition-colors"
                            >
                                <span>Open Full Map</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Map Container with zoom & pan capability */}
                        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111111] group">
                            <iframe
                                src={googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mikado Fitness Studio Location"
                                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            {/* Overlay hover badge */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/10 hover:border-[#C8102E]/60 transition-all flex items-center gap-1.5"
                            >
                                <MapPin className="w-3 h-3 text-[#C8102E]" />
                                Directions
                            </a>
                        </div>
                        <span className="text-white/40 text-[11px] mt-2 block">
                            Located near Shivan Kovil, easily accessible from Porur & Virugambakkam.
                        </span>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Social */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/50">
                    <p>© {currentYear} {SITE.name}. All rights reserved.</p>

                    <div className="flex items-center gap-3">
                        <span className="text-white/40">Follow Us</span>
                        <a
                            href={SITE.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
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
