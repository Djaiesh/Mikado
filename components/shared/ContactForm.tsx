"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle, Ticket, User, Phone, Mail } from "lucide-react";
import { sendContactEnquiryEmail } from "@/lib/emailjs";

// The validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^[0-9+\s-]{8,15}$/, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
    purpose: z.enum(["general", "membership", "visit", "pt", "daypass"]),
    message: z.string().optional(),
});

type FormData = z.infer<typeof contactSchema>;

function ContactFormInner() {
    const searchParams = useSearchParams();
    const queryPurpose = searchParams.get("purpose");
    const queryPlan = searchParams.get("plan");

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const defaultPurpose = (queryPurpose === "daypass" || queryPurpose === "membership" || queryPurpose === "pt" || queryPurpose === "general")
        ? queryPurpose
        : "membership";

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            purpose: defaultPurpose,
            email: "",
            message: queryPlan ? `I would like to enquire about the ${queryPlan} plan.` : "",
        },
    });

    useEffect(() => {
        if (queryPurpose && ["daypass", "membership", "pt", "general"].includes(queryPurpose)) {
            setValue("purpose", queryPurpose as any);
        }
        if (queryPlan) {
            setValue("message", `I would like to enquire about the ${queryPlan} plan.`);
        }
    }, [queryPurpose, queryPlan, setValue]);

    const selectedPurpose = watch("purpose");

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        setErrorMessage("");
        try {
            // Attempt EmailJS dispatch first
            try {
                await sendContactEnquiryEmail({
                    name: data.name,
                    phone: data.phone,
                    email: data.email || undefined,
                    purpose: data.purpose,
                    message: data.message,
                });
            } catch (emailJsErr) {
                console.warn("EmailJS contact form dispatch info:", emailJsErr);
            }

            // Also call API route
            await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            setStatus("success");
            reset();

            // Reset back to idle after 6 seconds
            setTimeout(() => setStatus("idle"), 6000);
        } catch (e: any) {
            console.error(e);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try contacting us directly via WhatsApp or phone.");
        }
    };

    return (
        <div id="contact-form" className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden glass shadow-[0_20px_50px_rgba(0,0,0,0.6)] scroll-mt-28">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/10 rounded-full blur-[80px] pointer-events-none" />

            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-5 w-full">

                {/* 1-Day Pass Callout Badge */}
                {selectedPurpose === "daypass" && (
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#C8102E]/10 border border-[#C8102E]/30 text-white text-xs leading-relaxed animate-in fade-in duration-300">
                        <Ticket className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                        <div>
                            <strong className="text-white font-bold block mb-0.5">1-Day Studio Pass: ₹149 Only</strong>
                            We don&apos;t offer free trials — instead, you get full unrestricted access to both floors, all imported equipment, and locker rooms for a whole day. Pay ₹149 at the desk upon arrival via UPI or Cash.
                        </div>
                    </div>
                )}

                {/* Name & Phone in 2-columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                            <User size={12} className="text-[#C8102E]" /> Full Name
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="John Doe"
                            disabled={status === "loading"}
                            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all disabled:opacity-50 text-sm"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                            <Phone size={12} className="text-[#C8102E]" /> Phone Number
                        </label>
                        <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+91 99999 99999"
                            disabled={status === "loading"}
                            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all font-mono disabled:opacity-50 text-sm"
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-0.5">{errors.phone.message}</p>}
                    </div>
                </div>

                {/* Email Address (Optional) */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                        <Mail size={12} className="text-[#C8102E]" /> Email Address <span className="text-white/30 text-[10px] font-normal">(Optional — for confirmation)</span>
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        disabled={status === "loading"}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all disabled:opacity-50 text-sm"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email.message}</p>}
                </div>

                {/* Purpose */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/50">I want to...</label>
                    <div className="relative">
                        <select
                            {...register("purpose")}
                            disabled={status === "loading"}
                            className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all disabled:opacity-50 appearance-none cursor-pointer text-sm"
                        >
                            <option value="membership">Enquire about Memberships</option>
                            <option value="daypass">⚡ 1-Day Pass (₹149)</option>
                            <option value="pt">Enquire about Personal Training (1-on-1)</option>
                            <option value="general">Ask a General Question</option>
                        </select>
                    </div>
                    {errors.purpose && <p className="text-red-400 text-xs mt-0.5">{errors.purpose.message}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/50">Message / Goal (Optional)</label>
                    <textarea
                        {...register("message")}
                        rows={3}
                        placeholder={selectedPurpose === "daypass" ? "Preferred date or time to visit for your 1-day workout pass..." : "Anything specific we should know?"}
                        disabled={status === "loading"}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all resize-none disabled:opacity-50 text-sm"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="relative w-full h-14 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all overflow-hidden disabled:opacity-80 disabled:cursor-not-allowed group cursor-pointer mt-2"
                >
                    <span className={`inline-flex items-center gap-2 transition-transform duration-300 ${status !== "idle" ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>
                        {selectedPurpose === "daypass" ? "Reserve 1-Day Pass (₹149)" : "Send Request"}
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${status === "loading" ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center bg-green-500 text-white transition-all duration-300 ${status === "success" ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                        <CheckCircle2 className="w-5 h-5 mr-2" /> Request Received!
                    </span>
                </button>

                {/* Error Feedback */}
                {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="leading-tight">{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12 animate-pulse min-h-[400px]" />
        }>
            <ContactFormInner />
        </Suspense>
    );
}
