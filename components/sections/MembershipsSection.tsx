"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Wifi, Dumbbell, UserCheck, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import { MembershipPlan, HOME_PLANS } from "@/content/memberships";

const categoryIcon = (plan: MembershipPlan) => {
    if (plan.category === "online") return <Wifi className="w-4 h-4" />;
    if (plan.subcategory === "pt") return <UserCheck className="w-4 h-4" />;
    return <Dumbbell className="w-4 h-4" />;
};

export default function MembershipsSection() {
    return (
        <section className="relative w-full py-20 md:py-28 bg-[#0A0A0A] overflow-hidden" id="memberships">
            {/* Decorative gradient blurs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#C8102E]/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-4">
                            Memberships
                        </span>
                        <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight text-white leading-tight">
                            Train Your Way.{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">
                                Online & Offline.
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                        <p className="text-white/60 text-base max-w-sm">
                            Transparent plans designed for real long-term value.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact?purpose=daypass#contact-form"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#C8102E]/20 hover:bg-[#C8102E] border border-[#C8102E]/40 px-3.5 py-1.5 rounded-full transition-all duration-300"
                            >
                                ⚡ 1-Day Pass @ ₹149
                            </Link>
                            <Link
                                href="/memberships"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] hover:text-white transition-colors group"
                            >
                                <span>Explore All Plans</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Asymmetric Tiered Grid: Featured Plan is visually elevated with stronger presence */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    
                    {/* Card 1: Featured Online Plan (spans 5 cols on desktop, elevated with glowing highlight) */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col relative rounded-[2.5rem] p-8 md:p-10 bg-gradient-to-b from-[#C8102E]/20 via-[#0A0A0A]/80 to-[#0A0A0A] border border-[#C8102E]/60 shadow-[0_30px_70px_rgba(200,16,46,0.25)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C8102E] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#C8102E]/50 w-fit mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            {HOME_PLANS[0].badge}
                        </div>

                        <div className="relative z-10 flex flex-col flex-1">
                            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/50 mb-2">
                                {categoryIcon(HOME_PLANS[0])}
                                Online · {HOME_PLANS[0].duration}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{HOME_PLANS[0].name}</h3>

                            <div className="mb-6">
                                <span className="text-[clamp(2.5rem,4vw,3.25rem)] font-black text-white tracking-tighter">
                                    {HOME_PLANS[0].priceDisplay}
                                </span>
                                {HOME_PLANS[0].perMonth && (
                                    <p className="text-white/50 text-sm mt-1 font-semibold">{HOME_PLANS[0].perMonth}</p>
                                )}
                            </div>

                            <div className="h-[1px] w-full bg-gradient-to-r from-[#C8102E]/50 via-white/20 to-transparent mb-6" />

                            <ul className="flex-1 space-y-3 mb-8">
                                {HOME_PLANS[0].features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#C8102E]" />
                                        <span className="leading-tight">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`/contact?purpose=membership&plan=${encodeURIComponent(HOME_PLANS[0].name)}#contact-form`}
                                className="w-full text-center py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-[#C8102E] hover:bg-[#a50d25] text-white shadow-[0_0_30px_rgba(200,16,46,0.6)] hover:shadow-[0_0_40px_rgba(200,16,46,0.9)] transition-all duration-300 block cursor-pointer"
                            >
                                {HOME_PLANS[0].cta}
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 & 3: Standard Offline & PT Plans (span 7 cols total = 3.5 cols each) */}
                    <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {HOME_PLANS.slice(1, 3).map((plan) => (
                            <div
                                key={plan.id}
                                className="flex flex-col relative rounded-[2.25rem] p-7 md:p-8 bg-white/[0.03] border border-white/10 hover:border-white/25 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1.5"
                            >
                                {plan.badge && (
                                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 border border-white/15 w-fit mb-5">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col flex-1">
                                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">
                                        {categoryIcon(plan)}
                                        Offline · {plan.duration}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>

                                    <div className="mb-5">
                                        <span className="text-[clamp(1.85rem,3vw,2.5rem)] font-black text-white tracking-tighter">
                                            {plan.priceDisplay}
                                        </span>
                                        {plan.perMonth && (
                                            <p className="text-white/40 text-xs mt-1 font-semibold">{plan.perMonth}</p>
                                        )}
                                    </div>

                                    <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/20 to-transparent mb-5" />

                                    <ul className="flex-1 space-y-3 mb-6">
                                        {plan.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/70 font-medium">
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                                                <span className="leading-tight">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/contact?purpose=membership&plan=${encodeURIComponent(plan.name)}#contact-form`}
                                        className="w-full text-center py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all duration-300 block hover:border-[#C8102E]/60 cursor-pointer"
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
