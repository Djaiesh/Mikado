import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import MembershipsSection from "@/components/sections/MembershipsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
    title: "Memberships",
    description: "Transparent, zero-hidden-fee pricing. Choose from Monthly, Quarterly, Half-Yearly, and Yearly membership plans.",
    path: "/memberships",
});

export default function MembershipsPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="Invest in Yourself."
                description="Transparent pricing designed for pure value. Explore our flexible membership tiers crafted to support your long-term transformation."
                breadcrumbs="Pricing & Plans"
                imageUrl="/assets/gym-training-1.png"
            />
            <MembershipsSection />
            <FaqSection />
            <CtaSection />
        </main>
    );
}
