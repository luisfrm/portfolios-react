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

// Root layout metadata serves as the foundational SEO configuration for the site.
// The locale layout (app/[locale]/layout.tsx) provides full localized metadata per route.
export const metadata: Metadata = {
  title: {
    default: "Luis Rivas — Senior Full Stack Developer & AI Engineer",
    template: "%s | Luis Rivas",
  },
  description:
    "Professional portfolio of Luis Rivas, Senior Full Stack Engineer with 6+ years of experience specializing in React, Next.js, Node.js, .NET, Serverless, and AI Solutions.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${bitter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

