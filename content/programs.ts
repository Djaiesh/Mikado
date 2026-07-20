export interface Program {
    id: string;
    name: string;
    category: "strength" | "cardio" | "wellness" | "group";
    description: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    icon: string; // Lucide icon name
}

export const PROGRAMS: Program[] = [
    {
        id: "strength",
        name: "Strength Training",
        category: "strength",
        description: "Build muscle, increase power, and transform your physique with progressive resistance training on modern equipment.",
        duration: "45–60 min",
        level: "All Levels",
        icon: "Dumbbell",
    },
    {
        id: "hiit",
        name: "HIIT",
        category: "cardio",
        description: "High-Intensity Interval Training that burns fat fast and improves cardiovascular fitness in minimal time.",
        duration: "30–45 min",
        level: "Intermediate",
        icon: "Zap",
    },
    {
        id: "cardio",
        name: "Cardio Fitness",
        category: "cardio",
        description: "Treadmills, cycles, and ellipticals — build endurance, burn calories, and improve heart health.",
        duration: "20–60 min",
        level: "Beginner",
        icon: "Activity",
    },
    {
        id: "yoga",
        name: "Yoga",
        category: "wellness",
        description: "Improve flexibility, build core strength, and achieve mental clarity through guided yoga sessions.",
        duration: "60 min",
        level: "All Levels",
        icon: "Sun",
    },
    {
        id: "zumba",
        name: "Zumba",
        category: "group",
        description: "High-energy group dance fitness that burns calories while you have fun. Perfect for all fitness levels.",
        duration: "45 min",
        level: "All Levels",
        icon: "Music",
    },
    {
        id: "personal-training",
        name: "Personal Training",
        category: "strength",
        description: "One-on-one coaching with our expert trainers — customized workouts, form correction, and accountability.",
        duration: "60 min",
        level: "All Levels",
        icon: "UserCheck",
    },
];
