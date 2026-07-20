import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface PageMetaOptions {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
}

/**
 * Factory to generate consistent Next.js Metadata for every page.
 * Usage: export const metadata = buildMetadata({ title: "Memberships" })
 */
export function buildMetadata({
    title,
    description,
    path = "",
    image = "/assets/og-default.jpg",
}: PageMetaOptions = {}): Metadata {
    const pageTitle = title
        ? `${title} | ${SITE.name}`
        : `${SITE.name} – Premium Gym in Valasaravakkam, Chennai`;

    const pageDescription = description ?? SITE.description;
    const pageUrl = `${SITE.url}${path}`;

    return {
        title: pageTitle,
        description: pageDescription,
        metadataBase: new URL(SITE.url),
        alternates: { canonical: pageUrl },
        keywords: [...SITE.keywords],
        authors: [{ name: SITE.name }],
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
        },
        openGraph: {
            type: "website",
            locale: SITE.locale,
            url: pageUrl,
            siteName: SITE.name,
            title: pageTitle,
            description: pageDescription,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `${SITE.name} — Premium Fitness Studio in Valasaravakkam, Chennai`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: pageDescription,
            images: [image],
        },
    };
}
