"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Home, Info, Play, Dumbbell } from "lucide-react";
import { NAV_LINKS } from "@/types/index";
import { SITE, getWhatsAppUrl } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const whatsappUrl = getWhatsAppUrl();

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* Desktop Pill Nav (Hidden on Mobile) */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="fixed top-6 left-0 right-0 z-[100] hidden md:grid grid-cols-3 items-center px-8 lg:px-12"
            >
                {/* Logo (Left) */}
                <div className="flex justify-start">
                    <Link href="/" className="flex items-center h-[40px] group transition-transform duration-200 hover:scale-105">
                        <Image
                            src="/assets/logo.jpg"
                            alt={SITE.name}
                            width={120}
                            height={40}
                            priority
                            className="h-full w-auto object-contain rounded-full border border-white/10 group-hover:border-[#C8102E]/60 transition-colors"
                        />
                    </Link>
                </div>

                {/* Center Pill Nav */}
                <div className="flex justify-center">
                    <nav className="flex items-center gap-1 px-3 py-2 bg-[#111111]/85 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                        {NAV_LINKS.map((link) => {
                            const isActive = link.href === "/" 
                                ? pathname === "/" 
                                : pathname === link.href || pathname.startsWith(link.href + "/");
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-[13.5px] font-semibold tracking-wide transition-all duration-200 ${
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

                {/* Join Now (Right) */}
                <div className="flex justify-end">
                    <Link
                        href="/contact#contact-form"
                        className="flex items-center justify-center gap-2 px-6 h-[40px] rounded-full bg-[#C8102E] hover:bg-[#a50d25] text-white text-[14px] font-bold tracking-wide transition-all duration-200 hover:scale-105 shadow-[0_8px_25px_rgba(200,16,46,0.4)] hover:shadow-[0_12px_35px_rgba(200,16,46,0.6)] cursor-pointer"
                    >
                        <MessageCircle size={16} />
                        Join Now
                    </Link>
                </div>
            </motion.header>

            {/* Mobile Bottom Dock (Hidden on Desktop) */}
            <motion.header
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.2 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex md:hidden items-center justify-between px-4 py-2 w-[92%] max-w-sm bg-[#111111]/90 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
                <Link href="/" className={`p-2.5 transition-colors ${pathname === "/" ? "text-[#C8102E]" : "text-white/70 hover:text-white"}`}>
                    <Home size={22} />
                </Link>
                <Link href="/about" className={`p-2.5 transition-colors ${pathname.startsWith("/about") ? "text-[#C8102E]" : "text-white/70 hover:text-white"}`}>
                    <Info size={22} />
                </Link>

                {/* Center Floating CTA */}
                <Link
                    href="/contact#contact-form"
                    className="flex items-center justify-center w-13 h-13 rounded-full bg-[#C8102E] text-white shadow-lg shadow-red-500/30 transform -translate-y-3 border-[3px] border-black cursor-pointer"
                    aria-label="Join Now / Contact Form"
                >
                    <MessageCircle size={22} />
                </Link>

                <Link href="/memberships" className={`p-2.5 transition-colors ${pathname.startsWith("/memberships") ? "text-[#C8102E]" : "text-white/70 hover:text-white"}`}>
                    <Dumbbell size={22} />
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Navigation Menu"
                    className="p-2.5 text-white/70 hover:text-white transition-colors relative z-[110]"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </motion.header>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "10%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "10%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 100 }}
                        className="fixed inset-0 z-[90] bg-[#000000]/95 backdrop-blur-3xl flex flex-col justify-center px-8 pb-32"
                    >
                        <nav className="flex flex-col gap-6">
                            {NAV_LINKS.map((link, i) => {
                                const isActive = link.href === "/"
                                    ? pathname === "/"
                                    : pathname === link.href || pathname.startsWith(link.href + "/");
                                return (
                                    <motion.div
                                        key={link.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, type: "spring" }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            className={`text-4xl font-black tracking-tight uppercase transition-colors ${
                                                isActive ? "text-[#C8102E]" : "text-white/40 hover:text-white"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
