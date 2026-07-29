import type { Metadata, Viewport } from "next";
import { Work_Sans, Bitter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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

export const metadata: Metadata = {
  title: {
    default: "Luis Rivas | Portfolio",
    template: "%s | Luis Rivas",
  },
  description:
    "Personal portfolio of Luis Rivas, a Full Stack Web Developer with 6+ years of experience.",
  metadataBase: new URL("https://luisrivas.work"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luisrivas.work",
    title: "Luis Rivas | Portfolio",
    description:
      "Personal portfolio of Luis Rivas, a Full Stack Web Developer with 6+ years of experience.",
    siteName: "Luis Rivas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Rivas | Portfolio",
    description:
      "Personal portfolio of Luis Rivas, a Full Stack Web Developer with 6+ years of experience.",
  },
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
      </body>
    </html>
  );
}

