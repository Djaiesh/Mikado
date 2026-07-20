import { ReactNode } from "react";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    description: string;
    breadcrumbs: string;
    videoUrl?: string;
    imageUrl?: string;
}

export default function PageHeader({ title, description, breadcrumbs, videoUrl, imageUrl }: PageHeaderProps) {
    return (
        <section className="relative w-full pt-40 pb-20 lg:pt-56 lg:pb-32 flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-white/5">
            {/* Optional Background Video */}
            {videoUrl && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <video
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-40 mix-blend-lighten"
                        style={{ filter: "contrast(1.1) grayscale(0.3)" }}
                    />
                    {/* Gradients to blend video into the dark aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_80%)]" />
                </div>
            )}
            
            {/* Optional Background Image (If no video) */}
            {!videoUrl && imageUrl && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src={imageUrl}
                        alt="Header Background"
                        fill
                        className="object-cover opacity-40 mix-blend-lighten"
                        style={{ filter: "contrast(1.1) grayscale(0.3)" }}
                    />
                    {/* Gradients to blend image into the dark aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_80%)]" />
                </div>
            )}

            {/* Subtle radial glow for premium feel if no video/image */}
            {!videoUrl && !imageUrl && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
            )}

            <div className="container-wide relative z-10 text-center flex flex-col items-center">
                <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#C8102E] font-bold tracking-widest uppercase text-[0.75rem] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-xl">
                    {breadcrumbs}
                </p>
                <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold tracking-tighter leading-[1.05] text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both drop-shadow-2xl">
                    {title}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both font-medium">
                    {description}
                </p>
            </div>
        </section>
    );
}
