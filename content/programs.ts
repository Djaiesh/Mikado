export interface Program {
    id: string;
    name: string;
    category: "strength" | "cardio" | "wellness" | "functional";
    description: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    icon: string; // Lucide icon name
    featured?: boolean;
    badge?: string;
}

export const PROGRAMS: Program[] = [
    {
        id: "hyrox",
        name: "HYROX Training",
        category: "functional",
        description: "Official HYROX race preparation & functional conditioning. Master the 8 workout stations (SkiErg, Sled Push & Pull, Burpee Broad Jumps, Rowing, Farmers Carry, Sandbag Lunges, Wall Balls) with running endurance.",
        duration: "50–60 min",
        level: "All Levels",
        icon: "Flame",
        featured: true,
        badge: "Official HYROX Prep",
    },
    {
        id: "strength",
        name: "Strength & Hypertrophy",
        category: "strength",
        description: "Build raw muscle, increase power, and transform your physique with progressive resistance training on modern biomechanical equipment.",
        duration: "45–60 min",
        level: "All Levels",
        icon: "Dumbbell",
    },
    {
        id: "hiit",
        name: "HIIT & Conditioning",
        category: "cardio",
        description: "High-Intensity Interval Training that burns calories, accelerates fat loss, and builds cardiovascular engine in minimal time.",
        duration: "30–45 min",
        level: "Intermediate",
        icon: "Zap",
    },
    {
        id: "personal-training",
        name: "1-on-1 Personal Coaching",
        category: "strength",
        description: "One-on-one coaching with certified trainers — customized periodized workouts, form correction, nutrition planning, and continuous accountability.",
        duration: "60 min",
        level: "All Levels",
        icon: "UserCheck",
    },
    {
        id: "cardio",
        name: "Cardio Endurance Deck",
        category: "cardio",
        description: "Commercial treadmills, cycles, and ellipticals — build aerobic stamina, boost resting metabolic rate, and improve cardiovascular health.",
        duration: "20–60 min",
        level: "Beginner",
        icon: "Activity",
    },
    {
        id: "yoga",
        name: "Mobility & Yoga",
        category: "wellness",
        description: "Improve joint mobility, flexibility, core stability, and achieve mental recovery through guided restorative and strength yoga sessions.",
        duration: "60 min",
        level: "All Levels",
        icon: "Sun",
    },
];
