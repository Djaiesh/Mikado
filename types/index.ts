/** Shared TypeScript types across the Mikado Fitness Studio application */

/** Generic key-value pair for feature lists */
export interface Feature {
    icon: string; // Lucide icon name
    title: string;
    description: string;
}

/** Page section metadata */
export interface PageSection {
    id: string;
    label: string;
    href: string;
}

/** Nav links used in Header and Footer */
export const NAV_LINKS: PageSection[] = [
    { id: "about", label: "About", href: "/about" },
    { id: "programs", label: "Programs", href: "/programs" },
    { id: "memberships", label: "Memberships", href: "/memberships" },
    { id: "trainers", label: "Trainers", href: "/trainers" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "contact", label: "Contact", href: "/contact" },
];

/** BMI categories */
export type BMICategory = "Underweight" | "Normal" | "Overweight" | "Obese";

export interface BMIResult {
    value: number;
    category: BMICategory;
    color: string;
    message: string;
}
