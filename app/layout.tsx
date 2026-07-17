import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
