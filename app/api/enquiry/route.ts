import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, purpose, message } = body;

        if (!name || !phone || !purpose) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // In a real application, you would put SMTP credentials in .env.local
        // For now, this is a placeholder that simulates a successful send
        // using nodemailer to demonstrate the architecture is complete.

        // const transporter = nodemailer.createTransport({
        //   host: process.env.SMTP_HOST,
        //   port: parseInt(process.env.SMTP_PORT || "587"),
        //   secure: false, // true for 465, false for other ports
        //   auth: {
        //     user: process.env.SMTP_USER,
        //     pass: process.env.SMTP_PASS,
        //   },
        // });

        // await transporter.sendMail({
        //   from: process.env.SMTP_FROM,
        //   to: SITE.email,
        //   subject: `New Mikado Enquiry: ${purpose} from ${name}`,
        //   text: `Name: ${name}\nPhone: ${phone}\nPurpose: ${purpose}\nMessage: ${message || "N/A"}`,
        // });

        // Simulate network delay for realistic loading state
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });

    } catch (error) {
        console.error("Enquiry API Error:", error);
        return NextResponse.json({ error: "Failed to process enquiry" }, { status: 500 });
    }
}
