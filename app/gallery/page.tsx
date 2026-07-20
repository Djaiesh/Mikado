import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/layout/PageHeader";
import GallerySection from "@/components/sections/GallerySection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = buildMetadata({
    title: "Gallery",
    description: "Take a visual tour inside Valasaravakkam's most premium fitness space. 7,000+ sq ft of pure performance.",
    path: "/gallery",
});

export default function GalleryPage() {
    return (
        <main className="w-full overflow-hidden flex flex-col">
            <PageHeader
                title="Inside The Studio."
                description="Take a visual tour of our 7,000+ square foot, two-floor premium facility in Valasaravakkam, Chennai."
                breadcrumbs="Gallery"
                imageUrl="/assets/transformation-1.png"
            />
            {/* We reuse the generic Gallery component as a starting point. Later this could be expanded into a massive masonry grid. */}
            <GallerySection />
            <CtaSection />
        </main>
    );
}
