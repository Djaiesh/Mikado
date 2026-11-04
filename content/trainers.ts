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
        id: "priya",
        name: "Dr. Priya",
        role: "Physiotherapist & Rehab Coach",
        specializations: ["Physiotherapy", "Posture Correction", "Injury Rehab", "Mobility"],
        bio: "Licensed physiotherapist specializing in musculoskeletal rehabilitation, corrective exercises, and injury prevention. Helps members train pain-free while rebuilding functional mobility and core strength.",
        image: "/assets/crossfit-woman.png",
        experience: "6+ years",
    },
    {
        id: "lokesh",
        name: "Lokesh",
        role: "Head Trainer",
        specializations: ["Strength Training", "Muscle Building", "HIIT"],
        bio: "A dedicated fitness professional with a passion for helping members achieve their strength goals. Specializes in progressive overload techniques and body transformation programs.",
        image: "/assets/elite-trainer.png",
        experience: "5+ years",
    },
    {
        id: "lakshman",
        name: "Lakshman",
        role: "Senior Trainer",
        specializations: ["Cardio Fitness", "Weight Management", "Sports Conditioning"],
        bio: "Expert in cardiovascular training and endurance conditioning. Known for creating high-energy sessions that keep members motivated and results-driven.",
        image: "/assets/gym-training-1.png",
        experience: "4+ years",
    },
    {
        id: "jeeva",
        name: "Jeeva",
        role: "Wellness Trainer",
        specializations: ["Yoga", "Flexibility", "Core Strength", "Zumba"],
        bio: "Brings balance to the Mikado experience with expertise in yoga, flexibility training, and group fitness. Creates an inclusive, energetic environment for all fitness levels.",
        image: "/assets/gym-training-2.png",
        experience: "3+ years",
    },
];
