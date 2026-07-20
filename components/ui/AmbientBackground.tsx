"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

export default function AmbientBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate random particles (embers/sparks) only on the client
        // to avoid hydration mismatches
        const generateParticles = () => {
            const newParticles: Particle[] = [];
            const colors = [
                "#C8102E", // Mikado Red
                "#C8102E", // Mikado Red (weighted more)
                "#ffffff", // White spark
                "#ff4d4d", // Light red
            ];

            for (let i = 0; i < 60; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100, // Random starting X position (0-100vw)
                    y: Math.random() * 100, // Random starting Y position (0-100vh)
                    size: Math.random() * 6 + 3, // Size between 3px and 9px
                    duration: Math.random() * 15 + 10, // Float duration 10-25s
                    delay: Math.random() * 5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 z-[50] overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}vw`,
                        top: `${p.y}vh`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        boxShadow: `0 0 ${p.size * 2}px ${p.color}`, // Glow effect
                    }}
                    animate={{
                        y: ["0vh", "-100vh"],
                        x: ["0vw", `${Math.random() * 20 - 10}vw`],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}
