import type { Metadata } from "next";
import "./globals.css";
import { inter, geistMono } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* LocalBusiness + FitnessCenter structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "SportsActivityLocation"],
              name: SITE.name,
              description: SITE.description,
              url: SITE.url,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.line1,
                addressLocality: SITE.address.area,
                addressRegion: SITE.address.state,
                postalCode: SITE.address.pincode,
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "06:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "06:00",
                  closes: "17:00",
                },
              ],
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Two-floor facility", value: true },
                { "@type": "LocationFeatureSpecification", name: "Personal trainers", value: true },
                { "@type": "LocationFeatureSpecification", name: "Modern equipment", value: true },
                { "@type": "LocationFeatureSpecification", name: "Cardio zone", value: true },
                { "@type": "LocationFeatureSpecification", name: "Yoga classes", value: true },
                { "@type": "LocationFeatureSpecification", name: "Changing rooms", value: true },
              ],
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI",
            }),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col antialiased relative" suppressHydrationWarning>
        
        {/* Ambient Premium Background Layer */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#0A0A0A]">
            {/* Soft Red/Dark Glow at top */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(200,16,46,0.08)_0%,transparent_60%)]" />
            {/* Subtle architectural grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
            {/* Vignette mask to fade grid at edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_20%,#0A0A0A_90%)]" />
        </div>
        
        {/* Dynamic Moving Orbs */}
        <AmbientBackground />

        <LoadingScreen />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
