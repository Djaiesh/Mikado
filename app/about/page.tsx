import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
    title: "About Us",
    description: "Learn about Mikado Fitness Studio, Valasaravakkam's premium 7,000 sq ft fitness destination.",
    path: "/about",
});

export default function AboutPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="More Than a Gym."
                description="Mikado Fitness Studio was engineered to provide Valasaravakkam with an uncompromising, premium fitness space. Two floors, top-tier equipment, and a culture of pure discipline."
                breadcrumbs="Inside Mikado"
                imageUrl="/assets/gym-training-header.png"
            />
            <WhyChooseUsSection />
            <FacilitiesSection />
            <TestimonialsSection />
            <CtaSection />
        </main>
    );
}
