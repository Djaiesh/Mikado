export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category?: string;
}

export const FAQS: FAQ[] = [
    {
        id: "trial",
        category: "Getting Started",
        question: "Do you offer a free trial or day pass before joining?",
        answer:
            "We do not offer free trials, but we provide an official 1-Day Pass for just ₹149! This gives you full, unrestricted access to both floors of modern equipment, CrossFit turf, locker rooms, and shower facilities for an entire day so you can experience the workout culture at Mikado before committing to a membership.",
    },
    {
        id: "timing",
        category: "Hours & Access",
        question: "What are your operating hours?",
        answer:
            "We are open Monday to Saturday from 6:00 AM to 11:00 PM, and Sundays from 6:00 AM to 5:00 PM. Members can access the facility anytime during operating hours.",
    },
    {
        id: "membership-plans",
        category: "Memberships",
        question: "What membership plans do you offer?",
        answer:
            "We offer transparent General Training plans: Monthly (₹2,999), Quarterly (₹6,777), Half-Yearly (₹8,999), and Annual (₹12,999), along with our ₹149 1-Day Pass. We also provide dedicated 1-on-1 Personal Training packages starting at ₹12,000/month and Online Training programs (₹3,000/month for Group classes and ₹6,000/month for Personal Online).",
    },
    {
        id: "trainers",
        category: "Trainers",
        question: "Are personal trainers included in the membership?",
        answer:
            "Floor trainers and coaches are always present on the floor to guide form, equipment usage, and safety. For tailored 1-on-1 guidance, customized periodization, and continuous nutrition coaching, we offer dedicated Personal Training packages across Monthly, Quarterly, Half-Yearly, and Annual durations.",
    },
    {
        id: "pause",
        category: "Memberships",
        question: "Can I pause my membership if I travel or face an emergency?",
        answer:
            "Yes. Speak with our front desk team and we will work out a reasonable hold arrangement. Your membership is an investment in your health — we ensure you get full value from every single day.",
    },
];
