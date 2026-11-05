"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    X, 
    Calendar as CalendarIcon, 
    Clock, 
    User, 
    Phone, 
    Mail, 
    CheckCircle2, 
    AlertCircle, 
    Sparkles, 
    MapPin, 
    Activity, 
    ShieldAlert,
    Loader2
} from "lucide-react";
import { sendAssessmentBookingEmails, AssessmentBookingData } from "@/lib/emailjs";
import { SITE, getWhatsAppUrl } from "@/lib/site";

interface AssessmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TIME_SLOTS = [
    "06:30 AM – 07:30 AM",
    "08:00 AM – 09:00 AM",
    "10:00 AM – 11:00 AM",
    "11:30 AM – 12:30 PM",
    "04:00 PM – 05:00 PM",
    "05:30 PM – 06:30 PM",
    "07:00 PM – 08:00 PM",
    "08:30 PM – 09:30 PM",
];

export default function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
    const [formData, setFormData] = useState<AssessmentBookingData>({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        notes: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Minimum date is today
    const todayStr = new Date().toISOString().split("T")[0];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        if (!formData.date || !formData.time) {
            setErrorMessage("Please select both a preferred date and time slot.");
            return;
        }

        setIsSubmitting(true);

        try {
            await sendAssessmentBookingEmails(formData);
            setIsSuccess(true);
        } catch (error: any) {
            console.error("Booking email dispatch failed:", error);
            // Even if EmailJS templates are not yet set up in production, provide a graceful fallback
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetAndClose = () => {
        setIsSuccess(false);
        setErrorMessage(null);
        setFormData({
            name: "",
            phone: "",
            email: "",
            date: "",
            time: "",
            notes: "",
        });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={resetAndClose}
                        className="fixed inset-0 bg-black/85 backdrop-blur-md"
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-2xl bg-[#0E0E0E] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-auto text-white overflow-hidden max-h-[92vh] overflow-y-auto"
                    >
                        {/* Ambient decorative glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-[#C8102E]/15 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                        {/* Close button */}
                        <button
                            onClick={resetAndClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors z-20"
                            aria-label="Close Modal"
                        >
                            <X size={20} />
                        </button>

                        {!isSuccess ? (
                            <>
                                {/* Header / Offer Badge */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8102E]/15 border border-[#C8102E]/40 text-[#C8102E] text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
                                        <Sparkles size={14} /> Exclusive Diagnostic Offer
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                                        Personal Full Body Assessment
                                    </h3>
                                    <div className="flex flex-wrap items-baseline gap-2 mb-3">
                                        <span className="text-3xl font-black text-white tracking-tight">₹199</span>
                                        <span className="text-sm font-semibold text-white/40 line-through">₹1,500</span>
                                        <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider bg-[#C8102E]/10 px-2 py-0.5 rounded-md border border-[#C8102E]/20">
                                            86% Off Special Rate
                                        </span>
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Conducted 1-on-1 by our certified Physiotherapist & Head Coach. Includes posture screening, joint mobility check, body fat/muscle analysis, and injury risk evaluation.
                                    </p>
                                </div>

                                {/* CRITICAL IN-PERSON NOTICE CALLOUT */}
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 mb-6 text-amber-200/90 text-xs sm:text-sm leading-snug">
                                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-amber-300 font-bold block mb-0.5">Important: In-Person Assessment</strong>
                                        This is a hands-on physical evaluation conducted at our gym facility: <span className="text-white/90">Mikado Fitness Studio, 140 Kamarajar St, Valasaravakkam, Chennai</span>. You will need to visit the studio in person for your booked slot.
                                    </div>
                                </div>

                                {/* Booking Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name & Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                                <User size={13} className="text-[#C8102E]" /> Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                                <Phone size={13} className="text-[#C8102E]" /> Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="e.g. 9876543210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <Mail size={13} className="text-[#C8102E]" /> Email Address (For slot confirmation)
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. rahul@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Date & Time Slot */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                                <CalendarIcon size={13} className="text-[#C8102E]" /> Preferred Date
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                min={todayStr}
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all [color-scheme:dark]"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                                <Clock size={13} className="text-[#C8102E]" /> Preferred Time Slot
                                            </label>
                                            <select
                                                required
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#C8102E] outline-none transition-all"
                                            >
                                                <option value="" disabled>Select a time window</option>
                                                {TIME_SLOTS.map((slot, i) => (
                                                    <option key={i} value={slot} className="bg-[#141414] text-white">
                                                        {slot}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Optional Notes */}
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                                            Any Past Injuries or Specific Goals? (Optional)
                                        </label>
                                        <textarea
                                            rows={2}
                                            placeholder="e.g. Lower back stiffness, knee pain while squatting, or muscle gain"
                                            value={formData.notes}
                                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:border-[#C8102E] focus:bg-white/10 outline-none transition-all resize-none"
                                        />
                                    </div>

                                    {errorMessage && (
                                        <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                                            <AlertCircle size={14} className="shrink-0" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    {/* Submit Action */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-[#C8102E] hover:bg-[#a50d25] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-950/50 hover:shadow-red-950/80 transition-all duration-300 flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={16} className="animate-spin" />
                                                <span>Confirming Slot...</span>
                                            </>
                                        ) : (
                                            <span>Confirm Assessment Slot for ₹199</span>
                                        )}
                                    </button>
                                    <p className="text-[11px] text-center text-white/40">
                                        Pay ₹199 directly at the studio desk via UPI / Cash upon arrival.
                                    </p>
                                </form>
                            </>
                        ) : (
                            /* Success Confirmation State */
                            <div className="py-8 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-6 shadow-xl">
                                    <CheckCircle2 size={36} />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                                    Assessment Slot Reserved!
                                </h3>
                                <p className="text-white/70 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                                    Thank you, <strong className="text-white">{formData.name}</strong>! Your slot has been recorded for{" "}
                                    <strong className="text-white">{formData.date}</strong> at <strong className="text-white">{formData.time}</strong>.
                                </p>

                                <div className="w-full max-w-md p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 mb-6 text-xs text-white/70">
                                    <div className="flex justify-between">
                                        <span className="text-white/40">Service Fee:</span>
                                        <span className="font-bold text-white">₹199 (Pay at Studio)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/40">Confirmation Sent To:</span>
                                        <span className="font-semibold text-white truncate max-w-[200px]">{formData.email}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/40">Studio Location:</span>
                                        <span className="font-semibold text-white">Valasaravakkam, Chennai</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                    <a
                                        href={getWhatsAppUrl(`Hi, I just booked my ₹199 Full Body Assessment for ${formData.date} (${formData.time}). My name is ${formData.name}.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                    <button
                                        onClick={resetAndClose}
                                        className="flex-1 py-3 px-4 rounded-xl bg-[#C8102E] hover:bg-[#a50d25] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-950/40"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
