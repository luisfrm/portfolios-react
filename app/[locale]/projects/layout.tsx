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
    title: dict.projects.pageTitle,
    description: dict.projects.pageSubtitle,
    openGraph: {
      title: dict.projects.pageTitle,
      description: dict.projects.pageSubtitle,
    },
  };
}

// Layout wrapper to supply unique SEO metadata for the projects showcase route
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
