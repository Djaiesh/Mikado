import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
    title: "Programs",
    description: "From Powerlifting and HIIT to Yoga and Zumba. Discover the fitness programs available at Mikado Fitness Studio.",
    path: "/programs",
});

export default function ProgramsPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="Find Your Discipline."
                description="Whether your goal is raw strength, cardiovascular endurance, or holistic flexibility, our expertly designed programs deliver results. Built for beginners, challenging for athletes."
                breadcrumbs="Programs & Classes"
                imageUrl="/assets/battle-ropes.png"
            />
            <ProgramsSection />
            <CtaSection />
        </main>
    );
}
