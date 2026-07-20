"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/types/index";
import { SITE, getWhatsAppUrl } from "@/lib/site";

export default function Header() {
    const scrolled = useScrolled(20);
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    // Close on Escape key
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && menuOpen) {
                setMenuOpen(false);
                hamburgerRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);
    const whatsappUrl = getWhatsAppUrl();

    return (
        <>
            <header
                role="banner"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    transition: "background 350ms cubic-bezier(0.16,1,0.3,1), border-color 350ms cubic-bezier(0.16,1,0.3,1), box-shadow 350ms cubic-bezier(0.16,1,0.3,1)",
                    background: scrolled
                        ? "rgba(10, 10, 10, 0.78)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "1px solid transparent",
                    boxShadow: scrolled
                        ? "0 1px 40px rgba(0,0,0,0.4)"
                        : "none",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "1400px",
                        margin: "0 auto",
                        padding: "0 clamp(1rem, 4vw, 3rem)",
                        display: "grid",
                        gridTemplateColumns: "1fr auto 1fr",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    {/* ── LEFT: Logo ── */}
                    <Link
                        href="/"
                        aria-label={`${SITE.name} — Home`}
                        style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", textDecoration: "none" }}
                    >
                        <Image
                            src="/assets/logo.jpg"
                            alt={SITE.name}
                            width={120}
                            height={44}
                            priority
                            style={{
                                width: "auto",
                                height: "40px",
                                objectFit: "contain",
                                borderRadius: "999px",
                                padding: "4px",
                                backgroundColor: "#000",
                            }}
                        />
                    </Link>

                    {/* ── CENTER: Desktop nav ── */}
                    <nav
                        aria-label="Main navigation"
                        style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                        className="hidden-on-mobile"
                    >
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                            return (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    style={{
                                        padding: "0.4rem 0.75rem",
                                        borderRadius: "6px",
                                        fontSize: "0.875rem",
                                        fontWeight: isActive ? 600 : 400,
                                        letterSpacing: "0.01em",
                                        color: isActive ? "#C8102E" : "rgba(240,240,240,0.8)",
                                        textDecoration: "none",
                                        transition: "color 150ms ease, background 150ms ease",
                                        background: isActive ? "rgba(200,16,46,0.08)" : "transparent",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            (e.currentTarget as HTMLAnchorElement).style.color = "#C8102E";
                                            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,16,46,0.08)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,240,240,0.8)";
                                            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── RIGHT: CTA + Hamburger ── */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: "0.75rem",
                        }}
                    >
                        {/* Desktop CTA */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-hide-mobile"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.375rem",
                                padding: "0.5rem 1.125rem",
                                borderRadius: "999px",
                                background: "#C8102E",
                                color: "#ffffff",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                letterSpacing: "0.01em",
                                textDecoration: "none",
                                transition: "background 150ms ease, transform 150ms ease",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = "#a50d25";
                                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = "#C8102E";
                                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                            }}
                        >
                            <MessageCircle size={15} aria-hidden="true" />
                            Join Now
                        </a>

                        {/* Hamburger — mobile only */}
                        <button
                            ref={hamburgerRef}
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            className="hamburger-show-mobile"
                            style={{
                                display: "none", // overridden by CSS below
                                alignItems: "center",
                                justifyContent: "center",
                                width: "40px",
                                height: "40px",
                                borderRadius: "8px",
                                border: "none",
                                background: menuOpen ? "rgba(200,16,46,0.1)" : "transparent",
                                color: "#f0f0f0",
                                cursor: "pointer",
                                transition: "background 150ms ease",
                            }}
                        >
                            {menuOpen
                                ? <X size={22} aria-hidden="true" />
                                : <Menu size={22} aria-hidden="true" />
                            }
                        </button>
                    </div>
                </div>
            </header>

            {/* Offset so page content doesn't hide under fixed header */}
            <div style={{ height: "64px", flexShrink: 0 }} aria-hidden="true" />

            {/* ── Mobile full-screen menu ── */}
            <div
                id="mobile-menu"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 99,
                    background: "rgba(10,10,10,0.97)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    WebkitBackdropFilter: "blur(24px) saturate(180%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
                    pointerEvents: menuOpen ? "all" : "none",
                    transition: "opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)",
                }}
                onClick={(e) => {
                    // Close on backdrop tap (not on nav link clicks — they navigate)
                    if (e.target === menuRef.current) closeMenu();
                }}
            >
                <nav aria-label="Mobile navigation" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", width: "100%", maxWidth: "320px", padding: "0 2rem" }}>
                    {NAV_LINKS.map((link, i) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                        return (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={closeMenu}
                                aria-current={isActive ? "page" : undefined}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    textAlign: "center",
                                    padding: "0.875rem 1rem",
                                    borderRadius: "10px",
                                    fontSize: "1.125rem",
                                    fontWeight: isActive ? 600 : 400,
                                    color: isActive ? "#C8102E" : "rgba(240,240,240,0.85)",
                                    textDecoration: "none",
                                    background: isActive ? "rgba(200,16,46,0.08)" : "transparent",
                                    transition: `color 150ms ease, background 150ms ease, opacity 300ms ease ${i * 40}ms, transform 300ms ease ${i * 40}ms`,
                                    opacity: menuOpen ? 1 : 0,
                                    transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                                    minHeight: "48px",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile CTA */}
                <div style={{
                    marginTop: "1.5rem",
                    opacity: menuOpen ? 1 : 0,
                    transition: `opacity 300ms ease ${NAV_LINKS.length * 40 + 40}ms, transform 300ms ease ${NAV_LINKS.length * 40 + 40}ms`,
                    transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                }}>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.875rem 2.5rem",
                            borderRadius: "999px",
                            background: "#C8102E",
                            color: "#ffffff",
                            fontSize: "1rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            letterSpacing: "0.01em",
                        }}
                    >
                        <MessageCircle size={18} aria-hidden="true" />
                        Join Now
                    </a>
                </div>
            </div>

            {/* ── Responsive CSS ── */}
            <style>{`
        @media (max-width: 768px) {
          .hidden-on-mobile { display: none !important; }
          .cta-hide-mobile  { display: none !important; }
          .hamburger-show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          #mobile-menu { display: none !important; }
        }
        /* Remove focus outline jank on mouse click, keep it for keyboard */
        header a:focus:not(:focus-visible),
        header button:focus:not(:focus-visible) { outline: none; }
      `}</style>
        </>
    );
}
