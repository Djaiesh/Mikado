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
        role: "Head Coach",
        specializations: ["Strength & Conditioning", "Hypertrophy", "Biomechanics", "Program Design"],
        bio: "Head Coach at Mikado Fitness Studio with over 6 years of expertise in periodized strength training, compound lifting, and physical transformation. Leads the gym's coaching team and athletic protocols.",
        image: "/assets/trainers/lokesh.jpg",
        experience: "6+ years",
    },
    {
        id: "priya",
        name: "Dr. Priya",
        role: "Physiotherapist & Rehab Coach",
        specializations: ["Physiotherapy", "Posture Correction", "Injury Rehab", "Joint Mobility"],
        bio: "Licensed physiotherapist specializing in musculoskeletal assessment, corrective movement patterns, and injury recovery. Directs the 1-on-1 ₹199 comprehensive diagnostic evaluations.",
        image: "/assets/crossfit-woman.png",
        experience: "6+ years",
    },
    {
        id: "saravana",
        name: "Saravana",
        role: "Senior Strength Coach",
        specializations: ["Powerlifting", "Strength Mechanics", "Hypertrophy", "Fat Loss"],
        bio: "Dedicated senior strength coach known for meticulous technical form correction, progressive overload coaching, and transformative muscle-building programs.",
        image: "/assets/trainers/saravana.jpg",
        experience: "5+ years",
    },
    {
        id: "vishva",
        name: "Vishva",
        role: "Functional & HYROX Coach",
        specializations: ["HYROX Training", "Functional Turf", "Cardio Conditioning", "Agility"],
        bio: "Performance coach spearheading Mikado's functional turf and HYROX race conditioning. Builds high-capacity cardiovascular endurance, power output, and stamina.",
        image: "/assets/trainers/vishva.jpg",
        experience: "4+ years",
    },
    {
        id: "lakshman",
        name: "Lakshman",
        role: "Senior Fitness Coach",
        specializations: ["Weight Management", "Athletic Conditioning", "Mobility", "Diet Strategy"],
        bio: "Results-oriented trainer specializing in sustainable weight management, cardiovascular fitness, and structured lifestyle progression.",
        image: "/assets/gym-training-1.png",
        experience: "4+ years",
    },
];
