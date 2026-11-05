"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

/**
 * Standard section / container level scroll reveal
 */
export default function ScrollReveal({ 
    children, 
    delay = 0,
    y = 30,
    className = "w-full"
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Item / card level scroll reveal with staggering support
 */
export function ScrollItem({
    children,
    delay = 0,
    y = 25,
    className = ""
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
