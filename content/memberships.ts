// ─── Offline Plans ───────────────────────────────────────────────────────────

export interface MembershipPlan {
    id: string;
    name: string;
    category: "offline" | "online";
    subcategory?: string; // e.g. "gym" | "pt" | "couple" | "grouped" | "personal"
    duration: string;
    price: number;
    priceDisplay: string;
    perMonth?: string;
    featured?: boolean;
    badge?: string;
    features: string[];
    cta: string;
}

export const MEMBERSHIPS: MembershipPlan[] = [
    // ── OFFLINE – Gym Access ──────────────────────────────────────────────────
    {
        id: "offline-monthly",
        category: "offline",
        subcategory: "gym",
        name: "Monthly",
        duration: "1 Month",
        price: 2000,
        priceDisplay: "₹2,000",
        perMonth: "₹2,000 / month",
        features: [
            "Unlimited gym access",
            "All equipment included",
            "Locker room access",
            "Basic fitness assessment",
            "Mon – Sat  6 AM – 11 PM",
            "Sunday  6 AM – 5 PM",
        ],
        cta: "Start Monthly",
    },
    {
        id: "offline-quarterly",
        category: "offline",
        subcategory: "gym",
        name: "Quarterly",
        duration: "3 Months",
        price: 5555,
        priceDisplay: "₹5,555",
        perMonth: "₹1,852 / month",
        features: [
            "Unlimited gym access",
            "All equipment included",
            "Locker room access",
            "Fitness assessment",
            "1 personal training session",
            "Progress tracking",
        ],
        cta: "Start Quarterly",
    },
    {
        id: "offline-half-yearly",
        category: "offline",
        subcategory: "gym",
        name: "Half-Yearly",
        duration: "6 Months",
        price: 8888,
        priceDisplay: "₹8,888",
        perMonth: "₹1,481 / month",
        featured: true,
        badge: "Popular",
        features: [
            "Unlimited gym access",
            "All equipment included",
            "Locker room access",
            "Full fitness assessment",
            "3 personal training sessions",
            "Diet guidance",
            "Progress tracking",
            "Priority member benefits",
        ],
        cta: "Join Half-Yearly",
    },
    {
        id: "offline-yearly",
        category: "offline",
        subcategory: "gym",
        name: "Yearly",
        duration: "12 Months",
        price: 10000,
        priceDisplay: "₹10,000",
        perMonth: "₹833 / month",
        badge: "Best Value",
        features: [
            "Unlimited gym access",
            "All equipment included",
            "Locker room access",
            "Full fitness assessment",
            "6 personal training sessions",
            "Diet guidance & nutrition plan",
            "Progress tracking",
            "Priority member benefits",
            "Guest pass (2 / year)",
        ],
        cta: "Commit to the Year",
    },

    // ── OFFLINE – Couple Yearly ───────────────────────────────────────────────
    {
        id: "offline-couple-yearly",
        category: "offline",
        subcategory: "couple",
        name: "Couple Yearly",
        duration: "12 Months",
        price: 18000,
        priceDisplay: "₹18,000",
        perMonth: "₹1,500 / month",
        badge: "Couple Special",
        features: [
            "2-person unlimited gym access",
            "All equipment included",
            "Shared locker room access",
            "Full fitness assessment (both)",
            "6 personal training sessions (shared)",
            "Diet guidance for both",
            "Progress tracking",
            "Guest pass (2 / year per person)",
        ],
        cta: "Train Together",
    },

    // ── OFFLINE – Personal Trainer Monthly ───────────────────────────────────
    {
        id: "offline-pt-monthly",
        category: "offline",
        subcategory: "pt",
        name: "Personal Trainer",
        duration: "1 Month",
        price: 6000,
        priceDisplay: "₹6,000",
        perMonth: "₹6,000 / month",
        badge: "1-on-1",
        features: [
            "Includes gym membership",
            "12 dedicated PT sessions / month",
            "Personalised workout plan",
            "Weekly body composition check",
            "Custom diet & nutrition guidance",
            "Priority slot booking",
            "WhatsApp check-in support",
        ],
        cta: "Book a Trainer",
    },

    // ── ONLINE – Grouped Classes ──────────────────────────────────────────────
    {
        id: "online-grouped-monthly",
        category: "online",
        subcategory: "grouped",
        name: "Grouped Online Classes",
        duration: "1 Month",
        price: 1500,
        priceDisplay: "₹1,500",
        perMonth: "₹1,500 / month",
        features: [
            "Live group sessions (batch-based)",
            "Round-the-clock scheduling",
            "Strength, HIIT & Cardio formats",
            "Recorded session replay access",
            "Diet tips & healthy recipes",
            "Community group support",
        ],
        cta: "Join Group Classes",
    },
    {
        id: "online-grouped-yearly",
        category: "online",
        subcategory: "grouped",
        name: "Grouped Online – Yearly",
        duration: "12 Months",
        price: 12000,
        priceDisplay: "₹12,000",
        perMonth: "₹1,000 / month",
        badge: "Best Online Value",
        features: [
            "Live group sessions (batch-based)",
            "Round-the-clock scheduling",
            "Strength, HIIT & Cardio formats",
            "Recorded session replay access",
            "Full year diet plan",
            "Community group support",
            "Priority class registration",
        ],
        cta: "Start Full Year Online",
    },

    // ── ONLINE – Personal Online Classes ─────────────────────────────────────
    {
        id: "online-personal-monthly",
        category: "online",
        subcategory: "personal",
        name: "Personal Online Training",
        duration: "1 Month",
        price: 4000,
        priceDisplay: "₹4,000",
        perMonth: "₹4,000 / month",
        badge: "1-on-1 Online",
        features: [
            "12 personal live sessions / month",
            "Round-the-clock flexible timing",
            "Custom program built for you",
            "Weekly progress video review",
            "Nutrition & macro guidance",
            "WhatsApp support between sessions",
        ],
        cta: "Train Personally Online",
    },
    {
        id: "online-personal-yearly",
        category: "online",
        subcategory: "personal",
        name: "Personal Online – Yearly",
        duration: "12 Months",
        price: 40000,
        priceDisplay: "₹40,000",
        perMonth: "₹3,333 / month",
        badge: "Ultimate Online",
        featured: true,
        features: [
            "12 personal live sessions / month",
            "Round-the-clock flexible timing",
            "Custom annually adjusted program",
            "Monthly body composition analysis",
            "Full year nutrition plan",
            "Priority scheduling",
            "WhatsApp support between sessions",
            "Free session re-scheduling",
        ],
        cta: "Go All-In Online",
    },
];

// ── Convenience filter helpers ────────────────────────────────────────────────
export const OFFLINE_PLANS = MEMBERSHIPS.filter(p => p.category === "offline");
export const ONLINE_PLANS  = MEMBERSHIPS.filter(p => p.category === "online");

// ── Home page highlight (3 cards + explore CTA) ───────────────────────────────
export const HOME_PLANS = [
    MEMBERSHIPS.find(p => p.id === "online-yearly-with-pt")   // inline below
     ?? {
        id: "online-yearly-with-pt",
        category: "online" as const,
        subcategory: "personal",
        name: "Online Training (Yearly + PT)",
        duration: "12 Months",
        price: 40000,
        priceDisplay: "₹40,000",
        perMonth: "₹3,333 / month",
        badge: "Online · 1-on-1",
        featured: true,
        features: [
            "12 personal live sessions / month",
            "Round-the-clock flexible timing",
            "Custom annually adjusted program",
            "Full year nutrition plan",
            "WhatsApp support anytime",
        ],
        cta: "Train Online — All Year",
    },
    MEMBERSHIPS.find(p => p.id === "offline-yearly")!,
    MEMBERSHIPS.find(p => p.id === "offline-pt-monthly")!,
];
