"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Home, Info, Play } from "lucide-react";
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
                    <Link href="/" className="flex items-center h-[40px]">
                        <Image
                            src="/assets/logo.jpg"
                            alt={SITE.name}
                            width={120}
                            height={40}
                            priority
                            className="h-full w-auto object-contain rounded-full"
                        />
                    </Link>
                </div>

                {/* Center Pill Nav */}
                <div className="flex justify-center">
                    <nav className="flex items-center gap-1 px-3 py-2 bg-[#111111]/80 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all ${isActive ? "bg-white text-black" : "text-white/60 hover:text-white hover:bg-white/10"
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
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 h-[40px] rounded-full bg-[#C8102E] hover:bg-[#a50d25] text-white text-[14px] font-bold tracking-wide transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(200,16,46,0.3)]"
                    >
                        <MessageCircle size={16} />
                        Join Now
                    </a>
                </div>
            </motion.header>

            {/* Mobile Bottom Dock (Hidden on Desktop) */}
            <motion.header
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.2 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex md:hidden items-center justify-between px-3 py-2 w-[92%] bg-[#111111]/80 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            >
                {/* Minimal Icons for Nav */}
                <Link href="/" className="p-3 text-white/60 hover:text-white transition-colors">
                    <Home size={22} />
                </Link>
                <Link href="/about" className="p-3 text-white/60 hover:text-white transition-colors">
                    <Info size={22} />
                </Link>

                {/* Primary Action Button (Join Now) */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C8102E] text-white shadow-lg shadow-red-500/20 transform -translate-y-4 border-[4px] border-black"
                >
                    <MessageCircle size={24} />
                </a>

                <Link href="/gallery" className="p-3 text-white/60 hover:text-white transition-colors">
                    <Play size={22} />
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-3 text-white/60 hover:text-white transition-colors relative z-[110]"
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
                        <nav className="flex flex-col gap-8">
                            {NAV_LINKS.map((link, i) => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
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
                                            className={`text-5xl font-black tracking-tighter uppercase transition-colors ${isActive ? "text-[#C8102E]" : "text-white/30 hover:text-white"
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
