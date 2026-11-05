// ─── Membership Plans ───────────────────────────────────────────────────────────

export interface MembershipPlan {
    id: string;
    name: string;
    category: "offline" | "online";
    subcategory?: "gym" | "pt" | "grouped" | "personal";
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
    // ── OFFLINE – General Training & Day Pass ─────────────────────────────────
    {
        id: "offline-day-pass",
        category: "offline",
        subcategory: "gym",
        name: "1-Day Pass",
        duration: "1 Day Access",
        price: 149,
        priceDisplay: "₹149",
        perMonth: "Single Day Pass",
        badge: "Trial Pass",
        features: [
            "Full 1-day gym floor access",
            "Both floors & modern equipment",
            "CrossFit turf & strength zone",
            "Locker room & shower amenities",
            "Experience the gym culture",
            "Pay at desk (UPI / Cash)",
        ],
        cta: "Get 1-Day Pass",
    },
    {
        id: "offline-monthly",
        category: "offline",
        subcategory: "gym",
        name: "General Training (Monthly)",
        duration: "1 Month",
        price: 2999,
        priceDisplay: "₹2,999",
        perMonth: "₹2,999 / month",
        features: [
            "Unlimited gym floor access",
            "Both floors & modern equipment",
            "CrossFit turf & strength zone",
            "Locker room & shower amenities",
            "Baseline fitness assessment",
            "Mon – Sat 6 AM – 11 PM, Sun 6 AM – 5 PM",
        ],
        cta: "Start Monthly",
    },
    {
        id: "offline-quarterly",
        category: "offline",
        subcategory: "gym",
        name: "General Training (Quarterly)",
        duration: "3 Months",
        price: 6777,
        priceDisplay: "₹6,777",
        perMonth: "₹2,259 / month",
        features: [
            "Unlimited gym floor access",
            "Both floors & modern equipment",
            "CrossFit turf & strength zone",
            "Locker room & shower amenities",
            "Baseline fitness assessment",
            "Periodic form & progress tracking",
        ],
        cta: "Start Quarterly",
    },
    {
        id: "offline-half-yearly",
        category: "offline",
        subcategory: "gym",
        name: "General Training (Half-Yearly)",
        duration: "6 Months",
        price: 8999,
        priceDisplay: "₹8,999",
        perMonth: "₹1,500 / month",
        featured: true,
        badge: "Popular",
        features: [
            "Unlimited gym floor access",
            "Both floors & modern equipment",
            "CrossFit turf & strength zone",
            "Locker room & shower amenities",
            "Comprehensive fitness assessment",
            "Diet & nutrition guidance",
            "Progress & body composition tracking",
        ],
        cta: "Join Half-Yearly",
    },
    {
        id: "offline-yearly",
        category: "offline",
        subcategory: "gym",
        name: "General Training (Annual)",
        duration: "12 Months",
        price: 12999,
        priceDisplay: "₹12,999",
        perMonth: "₹1,083 / month",
        badge: "Best Value",
        features: [
            "Unlimited gym floor access",
            "Both floors & modern equipment",
            "CrossFit turf & strength zone",
            "Locker room & shower amenities",
            "Full fitness assessment & goal setting",
            "Custom diet & nutrition guidance",
            "Year-round progress monitoring",
            "Priority member benefits",
        ],
        cta: "Commit to the Year",
    },

    // ── OFFLINE – Personal Training ──────────────────────────────────────────
    {
        id: "offline-pt-monthly",
        category: "offline",
        subcategory: "pt",
        name: "Personal Training (Monthly)",
        duration: "1 Month",
        price: 12000,
        priceDisplay: "₹12,000",
        perMonth: "₹12,000 / month",
        badge: "1-on-1 PT",
        features: [
            "Dedicated personal certified coach",
            "Includes complete gym membership",
            "Personalized workout programming",
            "Continuous form correction & safety",
            "Customized diet & nutrition guidance",
            "Body composition monitoring",
            "Direct WhatsApp coach check-ins",
        ],
        cta: "Book PT Monthly",
    },
    {
        id: "offline-pt-quarterly",
        category: "offline",
        subcategory: "pt",
        name: "Personal Training (Quarterly)",
        duration: "3 Months",
        price: 33000,
        priceDisplay: "₹33,000",
        perMonth: "₹11,000 / month",
        badge: "Quarterly PT",
        features: [
            "Dedicated personal certified coach",
            "Includes complete gym membership",
            "Targeted 90-day transformation plan",
            "Progressive strength & stamina coaching",
            "Full nutrition & meal planning",
            "Bi-weekly body composition review",
            "Priority training slot booking",
        ],
        cta: "Book PT Quarterly",
    },
    {
        id: "offline-pt-half-yearly",
        category: "offline",
        subcategory: "pt",
        name: "Personal Training (Half-Yearly)",
        duration: "6 Months",
        price: 55000,
        priceDisplay: "₹55,000",
        perMonth: "₹9,167 / month",
        featured: true,
        badge: "Half-Yearly PT",
        features: [
            "Dedicated personal certified coach",
            "Includes complete gym membership",
            "Comprehensive 6-month periodized training",
            "Advanced biomechanics & strength gains",
            "Full lifestyle & macronutrient coaching",
            "Monthly body composition scans",
            "Priority trainer scheduling",
        ],
        cta: "Book PT 6-Months",
    },
    {
        id: "offline-pt-yearly",
        category: "offline",
        subcategory: "pt",
        name: "Personal Training (Annual)",
        duration: "12 Months",
        price: 100000,
        priceDisplay: "₹1,00,000",
        perMonth: "₹8,333 / month",
        badge: "Elite Annual PT",
        features: [
            "Dedicated personal certified coach all year",
            "Includes complete gym membership",
            "Complete athletic body transformation",
            "Advanced strength, conditioning & mobility",
            "Complete nutrition & supplement guidance",
            "Comprehensive ongoing health metrics",
            "Maximum priority scheduling & rescheduling",
        ],
        cta: "Book PT Annual",
    },

    // ── ONLINE – Group & Personal ─────────────────────────────────────────────
    {
        id: "online-grouped-monthly",
        category: "online",
        subcategory: "grouped",
        name: "Online Group Classes",
        duration: "1 Month",
        price: 3000,
        priceDisplay: "₹3,000",
        perMonth: "₹3,000 / month",
        badge: "Group Live",
        features: [
            "Live interactive group training",
            "Round-the-clock flexible batch timings",
            "Strength, HIIT & endurance conditioning",
            "Real-time posture & form guidance",
            "Recorded session replays on demand",
            "Nutrition tips & community support",
        ],
        cta: "Join Group Online",
    },
    {
        id: "online-personal-monthly",
        category: "online",
        subcategory: "personal",
        name: "Online Personal Training",
        duration: "1 Month",
        price: 6000,
        priceDisplay: "₹6,000",
        perMonth: "₹6,000 / month",
        badge: "1-on-1 Remote",
        featured: true,
        features: [
            "Dedicated 1-on-1 certified trainer",
            "Custom workout programming tailored to your setup",
            "Round-the-clock flexible scheduling",
            "Real-time live form correction & feedback",
            "Personalized diet & nutrition guidance",
            "Weekly progress reviews & WhatsApp check-ins",
        ],
        cta: "Train 1-on-1 Online",
    },
];

// ── Convenience filter helpers ────────────────────────────────────────────────
export const OFFLINE_PLANS = MEMBERSHIPS.filter(p => p.category === "offline");
export const ONLINE_PLANS  = MEMBERSHIPS.filter(p => p.category === "online");

// ── Home page highlight (3 cards: Online 1-on-1, Offline Annual, Offline PT) ─
export const HOME_PLANS: MembershipPlan[] = [
    MEMBERSHIPS.find(p => p.id === "online-personal-monthly")!,
    MEMBERSHIPS.find(p => p.id === "offline-yearly")!,
    MEMBERSHIPS.find(p => p.id === "offline-pt-monthly")!,
];
