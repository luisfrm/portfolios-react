import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { routing } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = (resolvedParams?.locale ?? routing.defaultLocale) as Locale;
  const dict = await getDictionary(locale);

  return {
    title: dict.workExperiences.pageTitle,
    description: dict.workExperiences.pageSubtitle,
    openGraph: {
      title: dict.workExperiences.pageTitle,
      description: dict.workExperiences.pageSubtitle,
    },
  };
}

// Layout wrapper to supply unique SEO metadata for the work experience route
export default function WorkExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
