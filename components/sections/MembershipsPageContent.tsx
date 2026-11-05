"use client";

import Link from "next/link";
import { CheckCircle2, Wifi, Dumbbell, Users, UserCheck, Star } from "lucide-react";
import { MembershipPlan, OFFLINE_PLANS, ONLINE_PLANS } from "@/content/memberships";
import { ScrollItem } from "@/components/ui/ScrollReveal";

// ─── Subcategory icon map ──────────────────────────────────────────────────────
const SubIcon = ({ sub }: { sub?: string }) => {
    if (sub === "pt") return <UserCheck className="w-4 h-4" />;
    if (sub === "personal") return <Star className="w-4 h-4" />;
    if (sub === "grouped") return <Users className="w-4 h-4" />;
    return <Dumbbell className="w-4 h-4" />;
};

// ─── Single Plan Card ──────────────────────────────────────────────────────────
function PlanCard({ plan, accentOnline, index = 0 }: { plan: MembershipPlan; accentOnline?: boolean; index?: number }) {
    const accent = accentOnline ? "#0ea5e9" : "#C8102E"; // sky-500 for online, crimson for offline
    const isFeatured = !!plan.featured;

    return (
        <ScrollItem delay={index * 0.05} className="h-full flex flex-col">
            <div
                className={`flex flex-col flex-1 relative rounded-[2.5rem] p-7 transition-all duration-500 hover:-translate-y-2 ${
                    isFeatured
                        ? `border shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl bg-[#0A0A0A]/60`
                        : "bg-white/5 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10"
                }`}
                style={isFeatured ? { borderColor: `${accent}80` } : {}}
            >
                {/* Inner glow for featured */}
                {isFeatured && (
                    <div
                        className="absolute inset-0 rounded-[2.5rem] pointer-events-none bg-gradient-to-b to-transparent"
                        style={{ backgroundImage: `linear-gradient(to bottom, ${accent}18, transparent)` }}
                    />
                )}

                {/* Badge */}
                {plan.badge && (
                    <div
                        className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap text-white"
                        style={isFeatured ? { backgroundColor: accent } : { backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                        {plan.badge}
                    </div>
                )}

                <div className="relative z-10 flex flex-col flex-1">
                    {/* Sub-category chip */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/40 mb-3">
                        <SubIcon sub={plan.subcategory} />
                        {plan.duration}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{plan.name}</h3>

                    <div className="mb-5">
                        <span className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-black text-white tracking-tighter">
                            {plan.priceDisplay}
                        </span>
                        {plan.perMonth && (
                            <p className="text-white/40 text-xs mt-1 font-semibold">{plan.perMonth}</p>
                        )}
                    </div>

                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5" />

                    <ul className="flex-1 space-y-2.5 mb-7">
                        {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/70 font-medium">
                                <CheckCircle2
                                    className="w-4 h-4 mt-0.5 shrink-0"
                                    style={{ color: isFeatured ? accent : "rgba(255,255,255,0.3)" }}
                                />
                                <span className="leading-tight">{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={plan.id === "offline-day-pass" ? "/contact?purpose=daypass#contact-form" : `/contact?purpose=membership&plan=${encodeURIComponent(plan.name)}#contact-form`}
                        className="w-full text-center py-3.5 rounded-full font-bold text-xs uppercase tracking-wide transition-all duration-300 block text-white cursor-pointer"
                        style={
                            isFeatured
                                ? {
                                      backgroundColor: accent,
                                      boxShadow: `0 0 24px ${accent}80`,
                                  }
                                : { backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)" }
                        }
                        onMouseEnter={e => {
                            if (isFeatured) (e.currentTarget as HTMLElement).style.filter = "brightness(1.15)";
                            else (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.18)";
                        }}
                        onMouseLeave={e => {
                            if (isFeatured) (e.currentTarget as HTMLElement).style.filter = "";
                            else (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                        }}
                    >
                        {plan.cta}
                    </Link>
                </div>
            </div>
        </ScrollItem>
    );
}

// ─── Section Divider label ─────────────────────────────────────────────────────
function SectionLabel({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <div
                className="flex items-center gap-2.5 px-4 py-2 rounded-full border font-bold tracking-widest uppercase text-xs md:text-sm"
                style={{ borderColor: `${color}50`, color, backgroundColor: `${color}12` }}
            >
                {icon}
                {label}
            </div>
            <div className="flex-1 h-[1px]" style={{ background: `linear-gradient(to right, ${color}30, transparent)` }} />
        </div>
    );
}

// ─── Main exported component ───────────────────────────────────────────────────
export default function MembershipsPageContent() {
    const gymPlans = OFFLINE_PLANS.filter(p => p.subcategory === "gym");
    const ptPlans  = OFFLINE_PLANS.filter(p => p.subcategory === "pt");

    const groupedPlans  = ONLINE_PLANS.filter(p => p.subcategory === "grouped");
    const personalPlans = ONLINE_PLANS.filter(p => p.subcategory === "personal");

    return (
        <div className="w-full bg-[#0A0A0A]">
            {/* ═══ OFFLINE SECTION ════════════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden border-b border-white/5" id="offline">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#C8102E]/8 to-transparent blur-[100px] pointer-events-none" />

                <div className="container-wide relative z-10">
                    {/* Section heading */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-5">
                            <Dumbbell className="w-3.5 h-3.5" />
                            Offline Training
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-white leading-none mb-4">
                            Train at the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">
                                Studio
                            </span>
                        </h2>
                        <p className="text-white/50 text-base max-w-xl mx-auto">
                            Step into Valasaravakkam&apos;s most premium fitness space. 7,000+ sq ft across two floors, imported equipment, CrossFit turf, and elite coaching.
                        </p>
                    </div>

                    {/* General Training & Day Pass */}
                    <SectionLabel icon={<Dumbbell className="w-4 h-4" />} label="General Training & Day Pass" color="#C8102E" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-20">
                        {gymPlans.map((p, idx) => <PlanCard key={p.id} plan={p} index={idx} />)}
                    </div>

                    {/* Personal Trainer Plans */}
                    <SectionLabel icon={<UserCheck className="w-4 h-4" />} label="Personal Training (PT)" color="#f59e0b" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                        {ptPlans.map((p, idx) => <PlanCard key={p.id} plan={p} index={idx} />)}
                    </div>

                    <ScrollItem delay={0.2} className="w-full mt-6">
                        <div className="rounded-[2.5rem] p-8 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Looking for a customized group or corporate package?</h4>
                                <p className="text-white/50 text-sm">We provide tailored fitness packages for corporate teams, sports athletes, and small groups.</p>
                            </div>
                            <Link
                                href="/contact#contact-form"
                                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/15 whitespace-nowrap"
                            >
                                Inquire With Team
                            </Link>
                        </div>
                    </ScrollItem>
                </div>
            </section>

            {/* ═══ ONLINE SECTION ═════════════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden" id="online">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#0ea5e9]/8 to-transparent blur-[100px] pointer-events-none" />

                <div className="container-wide relative z-10">
                    {/* Section heading */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-[0.75rem] font-bold tracking-widest uppercase text-sky-400 mb-5">
                            <Wifi className="w-3.5 h-3.5" />
                            Online Training
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-white leading-none mb-4">
                            Train From{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400">
                                Anywhere
                            </span>
                        </h2>
                        <p className="text-white/50 text-base max-w-xl mx-auto">
                            Round-the-clock live interactive sessions with certified coaches — group classes or 1-on-1 personal training, wherever you are in the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Grouped Online */}
                        {groupedPlans.map((p, idx) => (
                            <PlanCard key={p.id} plan={p} accentOnline index={idx} />
                        ))}
                        {/* Personal Online */}
                        {personalPlans.map((p, idx) => (
                            <PlanCard key={p.id} plan={p} accentOnline index={idx + 1} />
                        ))}
                    </div>

                    <ScrollItem delay={0.2} className="w-full mt-12 max-w-4xl mx-auto">
                        <div className="rounded-[2.5rem] p-8 border border-sky-500/20 bg-sky-500/[0.03] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Global Access & Round-the-Clock Flexibility</h4>
                                <p className="text-white/50 text-sm">Whether you are in Chennai, elsewhere in India, or abroad, our coaches adapt to your time zone and workout space.</p>
                            </div>
                            <Link
                                href="/contact?purpose=membership&plan=Online%20Training#contact-form"
                                className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.4)] whitespace-nowrap"
                            >
                                Get Started Online
                            </Link>
                        </div>
                    </ScrollItem>
                </div>
            </section>
        </div>
    );
}
