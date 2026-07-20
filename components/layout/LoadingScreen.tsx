"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * MIKADO FITNESS STUDIO — Loading Screen
 *
 * Behaviour:
 * - First visit (per tab session): plays intro video up to 3 seconds, then fades out.
 * - If video ends before 3s: transitions immediately.
 * - Revisiting within the same session: skipped entirely (zero flash).
 * - prefers-reduced-motion: skipped entirely (zero flash).
 * - After fade-out completes: fully unmounted from DOM.
 */

const SESSION_KEY = "mikado-intro-seen";
const MAX_DURATION_MS = 7000; // Hard cap: 7 seconds
const FADE_DURATION_MS = 600; // CSS fade-out duration

export default function LoadingScreen() {
    const [mounted, setMounted] = useState(true);
    const [visible, setVisible] = useState(true);

    const videoRef = useRef<HTMLVideoElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dismissedRef = useRef(false);

    // Dismiss: trigger fade-out → unmount after transition
    const dismiss = () => {
        if (dismissedRef.current) return;
        dismissedRef.current = true;

        // Cancel the cap timer if video ended first
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        // Mark as seen for this session
        try {
            sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
            // Private browsing may block sessionStorage — degrade gracefully
        }

        // Trigger CSS fade-out
        setVisible(false);

        // Unmount after fade completes
        setTimeout(() => setMounted(false), FADE_DURATION_MS + 50);
    };

    useEffect(() => {
        // 1. Already seen this session → skip immediately (no flash at all)
        let alreadySeen = false;
        try {
            alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
        } catch {
            // sessionStorage unavailable — treat as not seen
        }

        // Temporarily disabled so you can test the 7-second video!
        // if (alreadySeen) {
        //     setMounted(false);
        //     return;
        // }

        // 2. prefers-reduced-motion → skip immediately (no animation, no video)
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) {
            try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ }
            setMounted(false);
            return;
        }

        // 3. Normal path: start hard-cap timer
        timerRef.current = setTimeout(dismiss, MAX_DURATION_MS);

        // 4. Attempt to play video
        const video = videoRef.current;
        if (video) {
            video.play().catch(() => {
                // Autoplay blocked (e.g. restrictive browser policy) → dismiss immediately
                dismiss();
            });
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!mounted) return null;

    return (
        <div
            role="status"
            aria-label="Loading Mikado Fitness Studio"
            aria-live="polite"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                backgroundColor: "#0A0A0A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: visible ? 1 : 0,
                transition: `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
                pointerEvents: visible ? "all" : "none",
            }}
        >
            {/* Fullscreen Intro Video */}
            <video
                ref={videoRef}
                aria-hidden="true"
                muted
                playsInline
                preload="auto"
                loop
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 1, // Full brightness, no overlay
                }}
            >
                <source src="/assets/intro-video.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
