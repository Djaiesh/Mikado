import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/shared/ContactForm";
import { SITE } from "@/lib/site";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = buildMetadata({
    title: "Contact Us",
    description: "Get in touch with Mikado Fitness Studio. Book a visit, enquire about memberships, or just say hello.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="We're Here."
                description="Whether you're ready to start your journey or just have a few questions, our team is ready to help."
                breadcrumbs="Contact & Location"
                imageUrl="/assets/gym-training-2.png"
            />

            <section className="section-pad bg-background overflow-hidden relative">
                <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left: Contact Info */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-8">
                            Reach Out.
                        </h2>

                        <div className="flex flex-col gap-8 mb-12">
                            <a
                                href={SITE.address.full}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                    <MapPin className="text-[#C8102E] w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-[#C8102E] mb-1">Location</p>
                                    <p className="text-white/60 leading-relaxed group-hover:text-white transition-colors">{SITE.address.full}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${SITE.phone}`}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                    <Phone className="text-[#C8102E] w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-[#C8102E] mb-1">Phone</p>
                                    <p className="text-white/60 leading-relaxed group-hover:text-white transition-colors">{SITE.phone}</p>
                                </div>
                            </a>

                            <a
                                href={`mailto:${SITE.email}`}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                    <Mail className="text-[#C8102E] w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-[#C8102E] mb-1">Email</p>
                                    <p className="text-white/60 leading-relaxed group-hover:text-white transition-colors">{SITE.email}</p>
                                </div>
                            </a>
                        </div>

                        {/* Social */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Follow Us</p>
                            <a
                                href={SITE.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 group text-white/60 hover:text-white transition-colors border border-white/10 rounded-full px-6 py-3 bg-white/5 hover:bg-white/10"
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
                                Instagram
                                <ArrowUpRight size={16} className="text-white/30 group-hover:text-[#C8102E] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:mt-4">
                        <ContactForm />
                    </div>

                </div>
            </section>

            <FaqSection />
        </main>
    );
}
