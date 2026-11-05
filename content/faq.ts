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
            "We do not offer free trials, but we offer an official 1-Day Pass for just ₹149! This gives you full, unrestricted access to both floors of modern equipment, locker rooms, and the gym facility for an entire day so you can experience the workout culture at Mikado before deciding on a membership. You can also walk in anytime for a free tour of the facility.",
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
            "We offer transparent offline plans: Monthly (₹2,000), Quarterly (₹5,555), Half-Yearly (₹8,888), and Yearly (₹10,000), plus our ₹149 1-Day Pass. We also provide online personal and group training programs.",
    },
    {
        id: "trainers",
        category: "Trainers",
        question: "Are personal trainers included in the membership?",
        answer:
            "Floor trainers are always present to assist with form and guidance. In addition, personal training sessions are included in our Quarterly plan (1 session), Half-Yearly plan (3 sessions), and Yearly plan (6 sessions). Dedicated 1-on-1 monthly PT packages are also available.",
    },
    {
        id: "pause",
        category: "Memberships",
        question: "Can I pause my membership if I travel or face an emergency?",
        answer:
            "Yes. Speak with our desk team and we will work out a reasonable hold arrangement. Your membership is an investment in your health — we ensure you get full value from every single day.",
    },
];
