// Fallback to robust, high-performance system font stacks
// This prevents Next.js / Vercel build failures when Google Fonts is unreachable or blocked in CI/CD.

export const inter = {
  variable: "--font-inter",
  className: "font-sans",
};

export const geistMono = {
  variable: "--font-geist-mono",
  className: "font-mono",
};
