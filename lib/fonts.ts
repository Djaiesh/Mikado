import { Inter, Geist_Mono } from "next/font/google";

/**
 * Primary brand font — Inter
 * Used for all headings and body copy.
 * Loaded via next/font/google: zero FOUT, self-hosted on Vercel.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/**
 * Monospace fallback — for code/BMI values etc.
 */
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
