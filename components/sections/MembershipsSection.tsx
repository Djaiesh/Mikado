"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Wifi, Dumbbell, UserCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";
import { MembershipPlan } from "@/content/memberships";

// ─── The 3 plans shown on the homepage ────────────────────────────────────────
const HOME_PLANS: MembershipPlan[] = [
    {
        id: "online-yearly-with-pt",
        category: "online",
        subcategory: "personal",
        name: "Online Training",
        duration: "12 Months",
        price: 40000,
        priceDisplay: "₹40,000",
        perMonth: "₹3,333 / month",
        badge: "Online · Yearly + PT",
        featured: true,
        features: [
            "12 personal live sessions / month",
            "Round-the-clock flexible timing",
            "Custom annually adjusted program",
            "Full year nutrition plan",
            "WhatsApp support anytime",
        ],
        cta: "Train Online — All Year",
    },
    {
        id: "offline-yearly",
        category: "offline",
        subcategory: "gym",
        name: "Offline Training",
        duration: "12 Months",
        price: 10000,
        priceDisplay: "₹10,000",
        perMonth: "₹833 / month",
        badge: "Offline · Yearly",
        features: [
            "Unlimited gym access",
            "All equipment included",
            "6 personal training sessions",
            "Diet guidance & nutrition plan",
            "Priority member benefits",
            "Guest pass (2 / year)",
        ],
        cta: "Commit to the Year",
    },
    {
        id: "offline-pt-monthly",
        category: "offline",
        subcategory: "pt",
        name: "Personal Trainer",
        duration: "1 Month",
        price: 6000,
        priceDisplay: "₹6,000",
        perMonth: "₹6,000 / month",
        badge: "Offline · PT Monthly",
        features: [
            "Includes gym membership",
            "12 dedicated PT sessions / month",
            "Personalised workout plan",
            "Custom diet & nutrition guidance",
            "WhatsApp check-in support",
        ],
        cta: "Book a Trainer",
    },
];

const categoryIcon = (plan: MembershipPlan) => {
    if (plan.category === "online") return <Wifi className="w-4 h-4" />;
    if (plan.subcategory === "pt") return <UserCheck className="w-4 h-4" />;
    return <Dumbbell className="w-4 h-4" />;
};

export default function MembershipsSection() {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden" id="memberships">
            {/* Decorative gradient blurs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#C8102E]/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                        Memberships
                    </span>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none mb-6">
                        Train Your Way.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">
                            Online & Offline.
                        </span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
                        Whether you prefer the gym floor or your living room — we have a plan built for you.
                    </p>
                </div>

                {/* 3 Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {HOME_PLANS.map((plan) => {
                        const isFeatured = !!plan.featured;
                        return (
                            <div
                                key={plan.id}
                                className={`flex flex-col relative rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
                                    isFeatured
                                        ? "bg-[#0A0A0A]/40 border border-[#C8102E]/50 shadow-[0_30px_60px_rgba(200,16,46,0.3)] backdrop-blur-2xl"
                                        : "bg-white/5 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10"
                                }`}
                            >
                                {/* Inner glow for featured */}
                                {isFeatured && (
                                    <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none bg-gradient-to-b from-[#C8102E]/10 to-transparent" />
                                )}

                                {/* Badge */}
                                {plan.badge && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap ${
                                        isFeatured
                                            ? "bg-[#C8102E] text-white shadow-[#C8102E]/50"
                                            : "bg-white/10 text-white/80 border border-white/20"
                                    }`}>
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col flex-1">
                                    {/* Category chip */}
                                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/40 mb-3">
                                        {categoryIcon(plan)}
                                        {plan.category === "online" ? "Online" : "Offline"} · {plan.duration}
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
                                                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isFeatured ? "text-[#C8102E]" : "text-white/30"}`} />
                                                <span className="leading-tight">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={getWhatsAppUrl(`Hi, I'm interested in the ${plan.name} (${plan.badge}) plan.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full text-center py-3.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 block ${
                                            isFeatured
                                                ? "bg-[#C8102E] hover:bg-[#a50d25] text-white shadow-[0_0_20px_rgba(200,16,46,0.5)] hover:shadow-[0_0_30px_rgba(200,16,46,0.8)]"
                                                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                                        }`}
                                    >
                                        {plan.cta}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Explore More CTA */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="/memberships"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold tracking-wide transition-all duration-300 group"
                    >
                        Explore All Plans
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
