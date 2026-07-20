export interface Testimonial {
    id: string;
    name: string;
    role: string;
    rating: number;
    text: string;
    memberSince?: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        name: "Priya Ramesh",
        role: "Working Professional",
        rating: 5,
        memberSince: "8 months",
        text: "Mikado changed how I look at fitness. The trainers push you in the best way possible — no pressure, just results. The two-floor setup means I always have the equipment I need.",
    },
    {
        id: "2",
        name: "Arun Kumar",
        role: "Software Engineer",
        rating: 5,
        memberSince: "1 year",
        text: "I've tried three gyms in Valasaravakkam. Mikado is on a different level. Clean, modern, and the trainers actually care about your progress. Worth every rupee.",
    },
    {
        id: "3",
        name: "Deepa Suresh",
        role: "Homemaker",
        rating: 5,
        memberSince: "6 months",
        text: "I was nervous about joining a gym. The moment I walked into Mikado, the team made me feel at home. Jeeva's yoga sessions have been life-changing for my flexibility and mental health.",
    },
    {
        id: "4",
        name: "Karthik S.",
        role: "College Student",
        rating: 5,
        memberSince: "4 months",
        text: "Perfect for someone starting out. Lokesh helped me understand the basics of strength training and I've already put on 4kg of muscle. The yearly plan is an absolute steal.",
    },
    {
        id: "5",
        name: "Meenakshi R.",
        role: "Teacher",
        rating: 5,
        memberSince: "10 months",
        text: "What I love most is the community here. Everyone encourages each other. Lakshman's HIIT sessions are intense but so rewarding — I've lost 8kg in 6 months.",
    },
    {
        id: "6",
        name: "Vijay T.",
        role: "Business Owner",
        rating: 5,
        memberSince: "2 years",
        text: "Been here since they opened. The quality has only gotten better. If you're serious about fitness in West Chennai, Mikado is where you need to be.",
    },
];
