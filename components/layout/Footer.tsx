import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import { NAV_LINKS } from "@/types/index";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappUrl = getWhatsAppUrl();

    return (
        <footer className="border-t border-white/5 bg-transparent mt-auto">
            <div className="container-wide section-pad-sm">
                <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-12">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-4">
                        <Image
                            src="/assets/logo.jpg"
                            alt={SITE.name}
                            width={160}
                            height={50}
                            className="w-32 h-auto object-contain mb-2 rounded-full bg-black p-1.5"
                        />
                        <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[300px]">
                            {SITE.description}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-100">
                            Navigation
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="text-white/60 hover:text-[#C8102E] transition-colors duration-150 w-fit text-[0.95rem]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-100">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-3 text-white/60 text-[0.95rem]">
                            <p className="leading-relaxed max-w-[250px]">
                                {SITE.address.full}
                            </p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 w-fit text-white/60 hover:text-[#C8102E] transition-colors duration-150"
                            >
                                {SITE.phone}
                                <ArrowUpRight size={14} />
                            </a>
                            <a
                                href={`mailto:${SITE.email}`}
                                className="w-fit text-white/60 hover:text-[#C8102E] transition-colors duration-150"
                            >
                                {SITE.email}
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Hours */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-100">
                            Hours
                        </h4>
                        <div className="flex flex-col gap-3 text-white/60 text-[0.95rem]">
                            <div className="flex justify-between max-w-[240px]">
                                <span>{SITE.hours.weekdays.label}</span>
                                <span className="text-neutral-100">{SITE.hours.weekdays.open} – {SITE.hours.weekdays.close}</span>
                            </div>
                            <div className="flex justify-between max-w-[240px]">
                                <span>{SITE.hours.sunday.label}</span>
                                <span className="text-neutral-100">{SITE.hours.sunday.open} – {SITE.hours.sunday.close}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Social */}
                <div className="flex flex-wrap justify-between items-center gap-6 pt-8 border-t border-white/5 text-sm text-white/50">
                    <p>© {currentYear} {SITE.name}. All rights reserved.</p>

                    <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/50 hover:bg-[#C8102E]/10 hover:text-[#C8102E] transition-all duration-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
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
        </footer>
    );
}
