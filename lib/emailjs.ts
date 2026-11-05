// EmailJS Client-side Configuration & Trigger helper

export const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_7al1n1n",
    gymTemplateId: process.env.NEXT_PUBLIC_EMAILJS_GYM_TEMPLATE_ID || "template_w8iia6j",
    userTemplateId: process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID || "template_n8h6xga",
    contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_contact",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "zcnFoGv78f7aXfdVb",
};

export interface AssessmentBookingData {
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    notes?: string;
}

export interface ContactEnquiryData {
    name: string;
    phone: string;
    email?: string;
    purpose: string;
    message?: string;
}

/**
 * Sends slot confirmation emails via EmailJS:
 * 1) To the Gym Gmail with full booking details
 * 2) To the User as their slot booking confirmation receipt
 */
export async function sendAssessmentBookingEmails(data: AssessmentBookingData) {
    const emailjs = (await import("@emailjs/browser")).default;

    const templateParams = {
        to_name: data.name,
        user_name: data.name,
        user_email: data.email,
        user_phone: data.phone,
        booking_date: data.date,
        booking_time: data.time,
        notes: data.notes || "None provided",
        price: "₹199",
        gym_name: "Mikado Fitness Studio",
        gym_address: "140, Kamarajar Street, Near Shivan Kovil, Valasaravakkam, Chennai - 600087",
        gym_phone: "+91 8778995439",
    };

    // Send Gym alert template
    const gymResult = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.gymTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
    );

    // If a dedicated user confirmation template is provided
    let userResult = null;
    if (EMAILJS_CONFIG.userTemplateId && EMAILJS_CONFIG.userTemplateId !== EMAILJS_CONFIG.gymTemplateId) {
        try {
            userResult = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.userTemplateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );
        } catch (err) {
            console.warn("User auto-confirmation trigger log:", err);
        }
    }

    return { gymResult, userResult };
}

/**
 * Sends general contact inquiries (Memberships, 1-Day Pass, PT, General) via EmailJS
 */
export async function sendContactEnquiryEmail(data: ContactEnquiryData) {
    const emailjs = (await import("@emailjs/browser")).default;

    const purposeLabels: Record<string, string> = {
        daypass: "1-Day Pass (₹149)",
        membership: "Membership Enquiry",
        pt: "Personal Training (1-on-1)",
        general: "General Enquiry",
        visit: "Studio Visit",
    };

    const templateParams = {
        user_name: data.name,
        user_phone: data.phone,
        user_email: data.email || "Not provided",
        purpose: purposeLabels[data.purpose] || data.purpose,
        message: data.message || "No additional message provided",
        gym_name: "Mikado Fitness Studio",
    };

    return await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.contactTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
    );
}
