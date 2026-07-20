"use client";

import { PROGRAMS } from "@/content/programs";
import { Dumbbell, Activity, Sun, Zap, Music, UserCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";

// Map Lucide icons correctly
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "Dumbbell": return <Dumbbell className="w-8 h-8" />;
        case "Activity": return <Activity className="w-8 h-8" />;
        case "Sun": return <Sun className="w-8 h-8" />;
        case "Zap": return <Zap className="w-8 h-8" />;
        case "Music": return <Music className="w-8 h-8" />;
        case "UserCheck": return <UserCheck className="w-8 h-8" />;
        default: return <Activity className="w-8 h-8" />;
    }
};

export default function ProgramsSection() {
    return (
        <section className="section-pad bg-background overflow-hidden relative">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {PROGRAMS.map((prog) => (
                        <div
                            key={prog.id}
                            className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E] mb-8 group-hover:scale-110 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300">
                                {getIcon(prog.icon)}
                            </div>

                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-2 py-1 rounded-sm">
                                    {prog.category}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8102E]">
                                    {prog.level}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{prog.name}</h3>

                            <p className="text-white/60 leading-relaxed mb-8 flex-1">
                                {prog.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-6">
                                <span className="text-white/50 text-sm font-semibold tracking-widest uppercase">
                                    {prog.duration}
                                </span>
                                <a
                                    href={getWhatsAppUrl(`Hi, I want more details about the ${prog.name} program.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold hover:text-[#C8102E] transition-colors text-sm uppercase tracking-wider"
                                >
                                    Enquire
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
