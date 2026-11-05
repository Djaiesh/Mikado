import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/shared/ContactForm";
import { SITE } from "@/lib/site";
import { MapPin, Phone, Mail, ArrowUpRight, Ticket, Sparkles } from "lucide-react";
import FaqSection from "@/components/sections/FaqSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
    title: "Contact Us",
    description: "Get in touch with Mikado Fitness Studio. Grab a 1-day pass for ₹149, enquire about memberships, or visit our two-floor studio.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <main className="w-full overflow-x-clip flex flex-col">
            <PageHeader
                title="We're Here."
                description="Whether you're ready to start your journey, grab a 1-day workout pass, or have questions about memberships, our team is ready to help."
                breadcrumbs="Contact & Location"
                imageUrl="/assets/gym-training-2.png"
            />

            <ScrollReveal>
                <section className="section-pad bg-background overflow-hidden relative">
                    <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Left: Contact Info & 1-Day Pass Spotlight */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                                Connect With Us
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
                                Start Your Journey.
                            </h2>
                            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
                                Fill out the form to enquire about memberships, personal training, or get a 1-day pass. Our team responds promptly.
                            </p>

                            {/* 1-DAY PASS HIGHLIGHT CARD */}
                            <div className="mb-10 p-6 rounded-[2rem] bg-gradient-to-br from-[#C8102E]/15 via-white/[0.03] to-transparent border border-[#C8102E]/30 relative overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#C8102E] text-white flex items-center justify-center shadow-lg shadow-[#C8102E]/40">
                                        <Ticket className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">No Free Trials</span>
                                        <h3 className="text-xl font-black text-white">1-Day Studio Pass: ₹149</h3>
                                    </div>
                                </div>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                                    Want to experience our 2-floor studio before taking a membership? Come in for an unrestricted full-day workout. Pay ₹149 directly at the reception desk via UPI or Cash.
                                </p>
                                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">
                                    Includes: Free Weights · Machine Zone · Cardio Floor · Locker Access
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 mb-10">
                                <a
                                    href={SITE.address.full}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C8102E]/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-[#C8102E]/40">
                                        <MapPin className="text-[#C8102E] w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-[#C8102E] mb-1">Studio Location</p>
                                        <p className="text-white/70 leading-relaxed text-sm group-hover:text-white transition-colors">{SITE.address.full}</p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${SITE.phone}`}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C8102E]/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-[#C8102E]/40">
                                        <Phone className="text-[#C8102E] w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-[#C8102E] mb-1">Phone / WhatsApp</p>
                                        <p className="text-white/70 leading-relaxed text-sm group-hover:text-white transition-colors">{SITE.phone}</p>
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C8102E]/20 group-hover:scale-110 transition-all border border-white/5 group-hover:border-[#C8102E]/40">
                                        <Mail className="text-[#C8102E] w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-[#C8102E] mb-1">Email</p>
                                        <p className="text-white/70 leading-relaxed text-sm group-hover:text-white transition-colors">{SITE.email}</p>
                                    </div>
                                </a>
                            </div>

                            {/* Social */}
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Follow Us</p>
                                <a
                                    href={SITE.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 group text-white/70 hover:text-white transition-colors border border-white/10 rounded-full px-5 py-2.5 bg-white/5 hover:bg-white/10 text-xs font-semibold"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
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
                                    Instagram
                                    <ArrowUpRight size={14} className="text-white/30 group-hover:text-[#C8102E] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:mt-4">
                            <ContactForm />
                        </div>

                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <FaqSection />
            </ScrollReveal>
        </main>
    );
}
