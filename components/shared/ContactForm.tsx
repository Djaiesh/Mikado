"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// The validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^[0-9+\s-]{8,15}$/, "Please enter a valid phone number"),
    purpose: z.enum(["general", "membership", "visit", "pt"]),
    message: z.string().optional(),
});

type FormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { purpose: "membership" },
    });

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        setErrorMessage("");
        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send message.");

            setStatus("success");
            reset();

            // Reset back to idle after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (e: any) {
            console.error(e);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try contacting us directly via WhatsApp or phone.");
        }
    };

    return (
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden glass">
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-6 w-full">

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Full Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="John Doe"
                        disabled={status === "loading"}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all disabled:opacity-50"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Phone Number</label>
                    <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 99999 99999"
                        disabled={status === "loading"}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all font-mono disabled:opacity-50"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                {/* Purpose */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/50">I want to...</label>
                    <div className="relative">
                        <select
                            {...register("purpose")}
                            disabled={status === "loading"}
                            className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all disabled:opacity-50 appearance-none cursor-pointer"
                        >
                            <option value="membership">Enquire about Memberships</option>
                            <option value="visit">Book a Free Visit</option>
                            <option value="pt">Enquire about Personal Training</option>
                            <option value="general">Ask a General Question</option>
                        </select>
                    </div>
                    {errors.purpose && <p className="text-red-400 text-xs mt-1">{errors.purpose.message}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/50">Message (Optional)</label>
                    <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="Anything specific we should know?"
                        disabled={status === "loading"}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none transition-all resize-none disabled:opacity-50"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="relative w-full h-14 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all overflow-hidden disabled:opacity-80 disabled:cursor-not-allowed group"
                >
                    <span className={`inline-flex items-center gap-2 transition-transform duration-300 ${status !== "idle" ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>
                        Send Request
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${status === "loading" ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center bg-green-500 text-white transition-all duration-300 ${status === "success" ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                        <CheckCircle2 className="w-5 h-5 mr-2" /> Message Sent!
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
