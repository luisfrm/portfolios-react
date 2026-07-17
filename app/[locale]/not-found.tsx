import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

interface NotFoundPageProps {
  params: Promise<{ locale: string }>;
}

export default async function NotFoundPage({ params }: NotFoundPageProps) {
  const { locale } = await params;
  const t = await getTranslations("notFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70dvh] px-4 text-center">
      <div className="relative mb-6">
        <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto" />
      </div>
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
        {t("code")}
      </h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
        {t("title")}
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        {t("description")}
      </p>
      <Button asChild variant="theme-primary" size="hero" className="mt-8">
        <Link href={`/${locale}`}>
          <Home className="w-5 h-5" />
          {t("homeButton")}
        </Link>
      </Button>
    </div>
  );
}
