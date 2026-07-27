"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ 
    children, 
    delay = 0,
    y = 100
}: { 
    children: ReactNode, 
    delay?: number,
    y?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
