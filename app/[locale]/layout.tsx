import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/lib/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? routing.defaultLocale;
  const messages = await getMessages({ locale });
  const t = messages as {
    meta?: { title?: string; description?: string; keywords?: string };
  };

  const title = t.meta?.title ?? "Luis Rivas — Senior Full Stack Developer & AI Engineer";
  const description =
    t.meta?.description ??
    "Professional portfolio of Luis Rivas, Senior Full Stack Engineer specializing in React, Next.js, Node.js, .NET, and AI Engineering.";
  const keywords = t.meta?.keywords ?? "Luis Rivas, Full Stack Developer, Next.js, React, TypeScript";

  const baseUrl = "https://luisrivas.dev";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Luis Rivas",
    },
    description,
    keywords,
    authors: [{ name: "Luis Rivas", url: "https://github.com/luisfrm/" }],
    creator: "Luis Rivas",
    publisher: "Luis Rivas",
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Luis Rivas — Senior Full Stack Developer",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@luisrivasm",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? routing.defaultLocale;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  // JSON-LD Person Structured Data for Search Engine indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luis Rivas",
    jobTitle: "Senior Full Stack Developer",
    url: "https://luisrivas.dev",
    sameAs: [
      "https://github.com/luisfrm/",
      "https://www.linkedin.com/in/luisrivasm/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      ".NET",
      "AI Engineering",
      "Serverless Architecture",
      "Cloud Computing",
    ],
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      <Toaster position="top-right" expand richColors closeButton />
    </NextIntlClientProvider>
  );
}
