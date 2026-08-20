import type { Metadata, Viewport } from "next";
import { Work_Sans, Bitter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

// Configure Work Sans for body typography
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

// Configure Bitter for heading typography
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
});

// Root layout metadata serves as a minimal fallback.
// The locale layout (app/[locale]/layout.tsx) provides full SEO metadata
// including canonical, hreflang, OpenGraph, and Twitter tags per locale.
export const metadata: Metadata = {
  title: {
    default: "Luis Rivas | Portfolio",
    template: "%s | Luis Rivas",
  },
  description:
    "Personal portfolio of Luis Rivas, a Full Stack Web Developer with 6+ years of experience.",
  metadataBase: new URL("https://luisrivas.site"),
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${bitter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

