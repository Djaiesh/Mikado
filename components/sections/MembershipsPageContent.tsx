"use client";

import Link from "next/link";
import { CheckCircle2, Wifi, Dumbbell, Users, UserCheck, Heart, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import { MembershipPlan, OFFLINE_PLANS, ONLINE_PLANS } from "@/content/memberships";

// ─── Subcategory icon map ──────────────────────────────────────────────────────
const SubIcon = ({ sub }: { sub?: string }) => {
    if (sub === "pt") return <UserCheck className="w-4 h-4" />;
    if (sub === "couple") return <Heart className="w-4 h-4" />;
    if (sub === "personal") return <Star className="w-4 h-4" />;
    if (sub === "grouped") return <Users className="w-4 h-4" />;
    return <Dumbbell className="w-4 h-4" />;
};

// ─── Single Plan Card ──────────────────────────────────────────────────────────
function PlanCard({ plan, accentOnline }: { plan: MembershipPlan; accentOnline?: boolean }) {
    const accent = accentOnline ? "#0ea5e9" : "#C8102E"; // sky-500 for online, red for offline
    const isFeatured = !!plan.featured;

    return (
        <div
            className={`flex flex-col relative rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
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
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap text-white"
                    style={isFeatured ? { backgroundColor: accent } : { backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
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

                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>

                <div className="mb-6">
                    <span className="text-[clamp(2rem,4vw,2.75rem)] font-black text-white tracking-tighter">
                        {plan.priceDisplay}
                    </span>
                    {plan.perMonth && (
                        <p className="text-white/40 text-sm mt-1 font-semibold">{plan.perMonth}</p>
                    )}
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                            <CheckCircle2
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: isFeatured ? accent : "rgba(255,255,255,0.3)" }}
                            />
                            <span className="leading-tight">{feat}</span>
                        </li>
                    ))}
                </ul>

                <a
                    href={getWhatsAppUrl(`Hi, I'm interested in the ${plan.name}${plan.badge ? ` (${plan.badge})` : ""} plan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 block text-white"
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
                </a>
            </div>
        </div>
    );
}

// ─── Section Divider label ─────────────────────────────────────────────────────
function SectionLabel({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <div
                className="flex items-center gap-2.5 px-4 py-2 rounded-full border font-bold tracking-widest uppercase text-sm"
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
    // Split offline plans into gym/couple/pt groups
    const gymPlans    = OFFLINE_PLANS.filter(p => p.subcategory === "gym");
    const couplePlans = OFFLINE_PLANS.filter(p => p.subcategory === "couple");
    const ptPlans     = OFFLINE_PLANS.filter(p => p.subcategory === "pt");

    // Split online plans into grouped/personal
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
                            Step into Valasaravakkam&apos;s most premium fitness space. Unlimited access, expert equipment, and real results.
                        </p>
                    </div>

                    {/* Gym Access Plans */}
                    <SectionLabel icon={<Dumbbell className="w-4 h-4" />} label="Gym Access" color="#C8102E" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                        {gymPlans.map(p => <PlanCard key={p.id} plan={p} />)}
                    </div>

                    {/* Couple Plan */}
                    <SectionLabel icon={<Heart className="w-4 h-4" />} label="Couple Package" color="#e879a0" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                        {couplePlans.map(p => <PlanCard key={p.id} plan={p} />)}
                        {/* Explanatory callout card */}
                        <div className="rounded-[2.5rem] p-8 border border-white/5 bg-white/3 flex flex-col justify-center">
                            <p className="text-white/60 text-sm leading-relaxed">
                                <span className="text-white font-semibold block mb-2">Train Together, Save Together.</span>
                                The couple plan gives both of you full yearly access at a discounted combined rate — ideal for partners who want to stay fit as a team.
                            </p>
                            <Link href="#offline" className="mt-6 text-[#e879a0] text-sm font-semibold hover:underline underline-offset-4">
                                Contact us for custom group plans →
                            </Link>
                        </div>
                    </div>

                    {/* Personal Trainer Plans */}
                    <SectionLabel icon={<UserCheck className="w-4 h-4" />} label="Personal Trainer (PT)" color="#f59e0b" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {ptPlans.map(p => <PlanCard key={p.id} plan={p} />)}
                        <div className="rounded-[2.5rem] p-8 border border-white/5 bg-white/3 flex flex-col justify-center">
                            <p className="text-white/60 text-sm leading-relaxed">
                                <span className="text-white font-semibold block mb-2">Your Trainer. Your Schedule.</span>
                                PT sessions are fully customised — from workout plans to nutrition. Includes gym membership so you never need two memberships.
                            </p>
                        </div>
                    </div>
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
                            Round-the-clock live sessions — group or 1-on-1 — wherever you are in the world.
                        </p>
                    </div>

                    {/* Grouped Online Classes */}
                    <SectionLabel icon={<Users className="w-4 h-4" />} label="Group Online Classes" color="#0ea5e9" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                        {groupedPlans.map(p => <PlanCard key={p.id} plan={p} accentOnline />)}
                        <div className="rounded-[2.5rem] p-8 border border-white/5 bg-white/3 flex flex-col justify-center">
                            <p className="text-white/60 text-sm leading-relaxed">
                                <span className="text-white font-semibold block mb-2">Batch-based · Round the clock</span>
                                We run multiple batch timings so you can pick what suits your schedule. Sessions include HIIT, strength training, and cardio circuits with full replay access.
                            </p>
                        </div>
                    </div>

                    {/* Personal Online Classes */}
                    <SectionLabel icon={<Star className="w-4 h-4" />} label="Personal Online Classes" color="#a78bfa" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {personalPlans.map(p => <PlanCard key={p.id} plan={p} accentOnline />)}
                        <div className="rounded-[2.5rem] p-8 border border-white/5 bg-white/3 flex flex-col justify-center">
                            <p className="text-white/60 text-sm leading-relaxed">
                                <span className="text-white font-semibold block mb-2">1-on-1 · Your Time · Your Pace</span>
                                Personal online sessions give you the full trainer experience remotely — tailored programs, live feedback, nutrition guidance, and progress tracking every week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
