export interface Trainer {
    id: string;
    name: string;
    role: string;
    specializations: string[];
    bio: string;
    image: string; // path relative to /public
    experience: string;
}

export const TRAINERS: Trainer[] = [
    {
        id: "lokesh",
        name: "Lokesh",
        role: "Head Trainer",
        specializations: ["Strength Training", "Muscle Building", "HIIT"],
        bio: "A dedicated fitness professional with a passion for helping members achieve their strength goals. Specializes in progressive overload techniques and body transformation programs.",
        image: "/assets/generated/trainers/lokesh.webp",
        experience: "5+ years",
    },
    {
        id: "lakshman",
        name: "Lakshman",
        role: "Senior Trainer",
        specializations: ["Cardio Fitness", "Weight Management", "Sports Conditioning"],
        bio: "Expert in cardiovascular training and endurance conditioning. Known for creating high-energy sessions that keep members motivated and results-driven.",
        image: "/assets/generated/trainers/lakshman.webp",
        experience: "4+ years",
    },
    {
        id: "jeeva",
        name: "Jeeva",
        role: "Wellness Trainer",
        specializations: ["Yoga", "Flexibility", "Core Strength", "Zumba"],
        bio: "Brings balance to the Mikado experience with expertise in yoga, flexibility training, and group fitness. Creates an inclusive, energetic environment for all fitness levels.",
        image: "/assets/generated/trainers/jeeva.webp",
        experience: "3+ years",
    },
];
