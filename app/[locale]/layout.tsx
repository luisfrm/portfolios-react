import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/lib/i18n/routing";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = (resolvedParams?.locale ?? routing.defaultLocale) as Locale;
  const dict = await getDictionary(locale);
  const { title, description, keywords } = dict.meta;

  const baseUrl = "https://luisrivas.site";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      absolute: title,
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
        "x-default": `${baseUrl}/en`,
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
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
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
    url: "https://luisrivas.site",
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
