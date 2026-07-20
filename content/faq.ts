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
        question: "Can I visit Mikado before joining?",
        answer:
            "Absolutely. We invite you to walk in any day during operating hours for a free tour of the facility. There is no obligation — come see the two-floor gym, meet our trainers, and decide at your own pace.",
    },
    {
        id: "membership-start",
        category: "Getting Started",
        question: "How do I join Mikado Fitness Studio?",
        answer:
            "You can enquire online through our website or simply walk in and speak with our team. WhatsApp us at +91 8778995439 and we will guide you through the membership process.",
    },
    {
        id: "timing",
        category: "Hours & Access",
        question: "What are your operating hours?",
        answer:
            "We are open Monday to Saturday from 6:00 AM to 11:00 PM, and Sundays from 6:00 AM to 5:00 PM. Members can access the gym during all operating hours.",
    },
    {
        id: "membership-plans",
        category: "Memberships",
        question: "What membership plans do you offer?",
        answer:
            "We offer four flexible plans: Monthly (₹2,000), Quarterly (₹5,555), Half-Yearly (₹8,888), and Yearly (₹10,000). The Half-Yearly plan offers the best value per month at just ₹1,481/month.",
    },
    {
        id: "pause",
        category: "Memberships",
        question: "Can I pause my membership if I travel or face an emergency?",
        answer:
            "Yes. Speak with our team and we will work out a reasonable arrangement. Your membership is an investment in your health — we want you to get full value from every day.",
    },
    {
        id: "trainers",
        category: "Trainers",
        question: "Are personal trainers included in the membership?",
        answer:
            "Basic gym access is covered for all plans. Personal training sessions are included in our Quarterly plan (1 session), Half-Yearly plan (3 sessions), and Yearly plan (6 sessions). Additional sessions can be booked separately.",
    },
    {
        id: "equipment",
        category: "Facilities",
        question: "What equipment is available?",
        answer:
            "Mikado is spread across two floors with modern equipment including free weights, machines, cardio equipment (treadmills, cycles, ellipticals), a dedicated yoga space, and functional training zones.",
    },
    {
        id: "parking",
        category: "Facilities",
        question: "Is parking available?",
        answer:
            "Yes, limited parking is available near the facility. The gym is located near Shivan Kovil in Valasaravakkam and is easily accessible by auto, bike, and public transport.",
    },
    {
        id: "women",
        category: "Community",
        question: "Is Mikado welcoming to women?",
        answer:
            "Absolutely. Mikado is built for everyone — working professionals, homemakers, students, and families. We maintain a respectful, supportive environment where every member feels welcome and motivated.",
    },
    {
        id: "diet",
        category: "Programs",
        question: "Do you offer diet or nutrition guidance?",
        answer:
            "Basic diet guidance is available as part of the Half-Yearly and Yearly membership plans. Our trainers will help you understand nutrition principles aligned with your fitness goals.",
    },
];
