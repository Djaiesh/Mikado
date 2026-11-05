import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import TrainersSection from "@/components/sections/TrainersSection";
import CtaSection from "@/components/sections/CtaSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
    title: "Our Trainers",
    description: "Meet the certified experts at Mikado Fitness Studio who will guide, push, and accountable you to your goals.",
    path: "/trainers",
});

export default function TrainersPage() {
    return (
        <main className="w-full overflow-x-clip flex flex-col">
            <PageHeader
                title="Guided by the Best."
                description="Our certified professionals don't just count reps. They correct form, build programs, and ensure you're making measurable progress every single week."
                breadcrumbs="The Team"
                imageUrl="/assets/elite-trainer.png"
            />
            <ScrollReveal>
                <TrainersSection />
            </ScrollReveal>
            <ScrollReveal>
                <CtaSection />
            </ScrollReveal>
        </main>
    );
}
