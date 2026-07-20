export interface MembershipPlan {
    id: string;
    name: string;
    duration: string;
    price: number;
    priceDisplay: string;
    perMonth: string;
    featured?: boolean;
    features: string[];
    cta: string;
}

export const MEMBERSHIPS: MembershipPlan[] = [
    {
        id: "monthly",
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
            "Monday – Saturday 6AM–11PM",
            "Sunday 6AM–5PM",
        ],
        cta: "Start Monthly",
    },
    {
        id: "quarterly",
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
        id: "half-yearly",
        name: "Half-Yearly",
        duration: "6 Months",
        price: 8888,
        priceDisplay: "₹8,888",
        perMonth: "₹1,481 / month",
        featured: true,
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
        cta: "Best Value — Join Now",
    },
    {
        id: "yearly",
        name: "Yearly",
        duration: "12 Months",
        price: 10000,
        priceDisplay: "₹10,000",
        perMonth: "₹833 / month",
        features: [
            "Unlimited gym access",
            "All equipment included",
            "Locker room access",
            "Full fitness assessment",
            "6 personal training sessions",
            "Diet guidance",
            "Progress tracking",
            "Priority member benefits",
            "Guest pass (2/year)",
        ],
        cta: "Commit to the Year",
    },
];
