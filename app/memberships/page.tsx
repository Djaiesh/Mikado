import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import MembershipsPageContent from "@/components/sections/MembershipsPageContent";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
    title: "Memberships",
    description: "Online & Offline training plans — group classes, personal training, gym access, couple plans and more. Transparent, zero-hidden-fee pricing.",
    path: "/memberships",
});

export default function MembershipsPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="Train Your Way."
                description="Online or offline, group or 1-on-1 — find the plan that fits your life and goals."
                breadcrumbs="Pricing & Plans"
                imageUrl="/assets/gym-training-1.png"
            />

            {/* Tab anchor pills for quick jump */}
            <div className="sticky top-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
                <div className="container-wide flex items-center gap-4 py-3">
                    <a
                        href="#offline"
                        className="px-5 py-2 rounded-full text-sm font-semibold border border-[#C8102E]/40 text-[#C8102E] hover:bg-[#C8102E]/10 transition-colors"
                    >
                        🏋️ Offline Plans
                    </a>
                    <a
                        href="#online"
                        className="px-5 py-2 rounded-full text-sm font-semibold border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 transition-colors"
                    >
                        🌐 Online Plans
                    </a>
                </div>
            </div>

            <MembershipsPageContent />
            <FaqSection />
            <CtaSection />
        </main>
    );
}
