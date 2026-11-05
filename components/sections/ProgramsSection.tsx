"use client";

import { PROGRAMS } from "@/content/programs";
import { Dumbbell, Activity, Sun, Zap, UserCheck, Flame, Sparkles } from "lucide-react";
import Link from "next/link";
import { ScrollItem } from "@/components/ui/ScrollReveal";

// Map Lucide icons correctly
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "Flame": return <Flame className="w-8 h-8" />;
        case "Dumbbell": return <Dumbbell className="w-8 h-8" />;
        case "Activity": return <Activity className="w-8 h-8" />;
        case "Sun": return <Sun className="w-8 h-8" />;
        case "Zap": return <Zap className="w-8 h-8" />;
        case "UserCheck": return <UserCheck className="w-8 h-8" />;
        default: return <Activity className="w-8 h-8" />;
    }
};

export default function ProgramsSection() {
    return (
        <section className="section-pad bg-background overflow-hidden relative">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
                    {PROGRAMS.map((prog, idx) => {
                        const isFeatured = !!prog.featured;
                        return (
                            <ScrollItem key={prog.id} delay={idx * 0.06} className="h-full flex flex-col">
                                <div
                                    className={`flex flex-col flex-1 p-8 rounded-3xl transition-all duration-300 group relative ${
                                        isFeatured
                                            ? "bg-gradient-to-b from-[#C8102E]/20 via-white/[0.04] to-transparent border-2 border-[#C8102E]/70 shadow-[0_0_40px_rgba(200,16,46,0.25)] hover:shadow-[0_0_50px_rgba(200,16,46,0.4)] hover:-translate-y-1.5"
                                            : "bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:-translate-y-1"
                                    }`}
                                >
                                    {isFeatured && prog.badge && (
                                        <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C8102E] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-[#C8102E]/40">
                                            <Sparkles className="w-3 h-3" />
                                            {prog.badge}
                                        </div>
                                    )}

                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                                            isFeatured
                                                ? "bg-[#C8102E] text-white shadow-[0_0_20px_rgba(200,16,46,0.5)] group-hover:scale-110"
                                                : "bg-[#C8102E]/10 text-[#C8102E] group-hover:scale-110 group-hover:bg-[#C8102E] group-hover:text-white"
                                        }`}
                                    >
                                        {getIcon(prog.icon)}
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border ${
                                            isFeatured
                                                ? "border-[#C8102E]/40 text-white bg-[#C8102E]/20"
                                                : "border-white/10 text-white/50"
                                        }`}>
                                            {prog.category}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8102E]">
                                            {prog.level}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{prog.name}</h3>

                                    <p className="text-white/65 leading-relaxed mb-8 flex-1 text-sm md:text-base">
                                        {prog.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-6">
                                        <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">
                                            {prog.duration}
                                        </span>
                                        <Link
                                            href={`/contact?purpose=program&plan=${encodeURIComponent(prog.name)}#contact-form`}
                                            className={`font-bold transition-all text-xs uppercase tracking-wider ${
                                                isFeatured
                                                    ? "text-white bg-[#C8102E] px-4 py-2 rounded-full hover:bg-[#a50d25] shadow-[0_0_15px_rgba(200,16,46,0.4)]"
                                                    : "text-white hover:text-[#C8102E]"
                                            }`}
                                        >
                                            Enquire Now →
                                        </Link>
                                    </div>
                                </div>
                            </ScrollItem>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
