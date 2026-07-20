/**
 * MIKADO FITNESS STUDIO — Site-wide constants
 * Single source of truth for all business data.
 */

export const SITE = {
    name: "Mikado Fitness Studio",
    tagline: "Train Hard. Live Strong.",
    description:
        "Mikado Fitness Studio is a premium fitness destination in Valasaravakkam, Chennai. Two floors of modern equipment, expert trainers, and a community that drives results.",
    url: "https://mikadofitness.in", // Update when domain is purchased
    locale: "en_IN",

    // Contact
    phone: "+918778995439",
    whatsapp: {
        number: "918778995439",
        defaultMessage:
            "Hi, I'm interested in joining Mikado Fitness Studio. Can you share more details?",
    },
    email: "djaiesh37@gmail.com",

    // Location
    address: {
        line1: "Near Shivan Kovil",
        area: "Valasaravakkam",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600087",
        country: "India",
        full: "Near Shivan Kovil, Valasaravakkam, Chennai - 600 087",
    },

    // Hours
    hours: {
        weekdays: { label: "Monday – Saturday", open: "6:00 AM", close: "11:00 PM" },
        sunday: { label: "Sunday", open: "6:00 AM", close: "5:00 PM" },
    },

    // Social
    social: {
        instagram: "https://www.instagram.com/mikado_fitness_studio/",
    },

    // SEO
    keywords: [
        "gym in Valasaravakkam Chennai",
        "fitness studio Valasaravakkam",
        "personal trainer Chennai west",
        "gym near me Porur",
        "gym near me Virugambakkam",
        "affordable gym Chennai",
        "premium fitness studio Chennai",
        "Mikado Fitness Studio",
    ],
} as const;

/**
 * WhatsApp deep-link URL with pre-filled message
 */
export function getWhatsAppUrl(message?: string): string {
    const text = encodeURIComponent(message ?? SITE.whatsapp.defaultMessage);
    return `https://wa.me/${SITE.whatsapp.number}?text=${text}`;
}
