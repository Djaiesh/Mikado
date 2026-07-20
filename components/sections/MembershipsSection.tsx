"use client";

import { CheckCircle2 } from "lucide-react";
import { MEMBERSHIPS } from "@/content/memberships";
import { getWhatsAppUrl } from "@/lib/site";

export default function MembershipsSection() {
    return (
        <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden" id="memberships">
            {/* Decorative gradient blurs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#C8102E]/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[0.75rem] font-bold tracking-widest uppercase text-[#C8102E] mb-6">
                        Memberships
                    </span>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tighter text-white leading-none mb-6">
                        Zero Hidden <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C8102E]">Fees.</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
                        Transparent pricing designed for pure value. Choose the commitment that fits your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {MEMBERSHIPS.map((plan, i) => {
                        const isYearly = plan.id === "yearly";
                        return (
                            <div
                                key={plan.id}
                                className={`flex flex-col relative rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 ${isYearly
                                        ? "bg-[#0A0A0A]/40 border border-[#C8102E]/50 shadow-[0_30px_60px_rgba(200,16,46,0.3)] backdrop-blur-2xl"
                                        : "bg-white/5 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl hover:bg-white/10"
                                    }`}
                            >
                                {/* Inner glow for Yearly plan */}
                                {isYearly && (
                                    <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none bg-gradient-to-b from-[#C8102E]/10 to-transparent" />
                                )}

                                {isYearly && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8102E] text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#C8102E]/50">
                                        Best Value
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-[clamp(2.5rem,4vw,3rem)] font-black text-white tracking-tighter">{plan.priceDisplay}</span>
                                        <p className="text-white/40 text-sm mt-1 font-semibold">{plan.perMonth}</p>
                                    </div>

                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                                    <ul className="flex-1 space-y-4 mb-10">
                                        {plan.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-white/70 font-medium">
                                                <CheckCircle2 className={`w-5 h-5 shrink-0 ${isYearly ? "text-[#C8102E]" : "text-white/30"}`} />
                                                <span className="leading-tight">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={getWhatsAppUrl(`Hi, I'm interested in the ${plan.name} membership.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full text-center py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 block ${isYearly
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
            </div>
        </section>
    );
}
