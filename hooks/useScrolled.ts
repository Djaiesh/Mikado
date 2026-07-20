"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Uses a passive scroll listener — zero layout cost.
 */
export function useScrolled(threshold = 20): boolean {
    const [scrolled, setScrolled] = useState(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const check = () => {
            setScrolled(window.scrollY > threshold);
        };

        const onScroll = () => {
            if (rafRef.current !== null) return; // throttle to one rAF per frame
            rafRef.current = requestAnimationFrame(() => {
                check();
                rafRef.current = null;
            });
        };

        check(); // run once on mount in case page loads mid-scroll
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [threshold]);

    return scrolled;
}
