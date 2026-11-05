import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import GallerySection from "@/components/sections/GallerySection";
import CtaSection from "@/components/sections/CtaSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
    title: "Gallery",
    description: "Take a visual tour inside Valasaravakkam's most premium fitness space. 7,000+ sq ft of pure performance.",
    path: "/gallery",
});

export default function GalleryPage() {
    return (
        <main className="w-full overflow-x-clip flex flex-col">
            <PageHeader
                title="Inside The Studio."
                description="Take a visual tour of our 7,000+ square foot, two-floor premium facility in Valasaravakkam, Chennai."
                breadcrumbs="Gallery"
                imageUrl="/assets/transformation-1.png"
            />
            <ScrollReveal>
                <GallerySection />
            </ScrollReveal>
            <ScrollReveal>
                <CtaSection />
            </ScrollReveal>
        </main>
    );
}
