"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@portfolio/shared/components/icons/brand-icons";
import { cn } from "@/lib/utils";

/* Hallmark · component: footer · genre: editorial · theme: custom · archetype: Ft5 Statement */

const META = "font-mono text-[11px] uppercase tracking-[0.16em]";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: t("social.github"),
      url: "https://github.com/luisfrm/",
      icon: <GithubIcon className="h-3.5 w-3.5" />,
    },
    {
      name: t("social.linkedin"),
      url: "https://www.linkedin.com/in/luisrivasm/",
      icon: <LinkedinIcon className="h-3.5 w-3.5" />,
    },
    {
      name: "Email",
      url: `mailto:${t("contact.email")}`,
      icon: <Mail className="h-3.5 w-3.5" />,
    },
  ];

  return (
    <footer className="mt-16 w-full border-t border-border pt-10 pb-8 sm:mt-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-8 sm:grid-cols-12 sm:items-start">
          <div className="space-y-3 sm:col-span-6">
            {/* Real availability, stated once; the dot is static on purpose */}
            <p className={cn(META, "flex items-center gap-2 text-muted-foreground")}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>{t("footer.status")}</span>
            </p>

            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Luis Rivas
            </h3>

            <p className={cn(META, "flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground")}>
              <span>{t("personal.role")}</span>
              <span aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {t("contact.city")}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:col-span-6 sm:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={cn(
                  META,
                  "group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>

        <div
          className={cn(
            META,
            "flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-muted-foreground sm:flex-row sm:items-center"
          )}
        >
          <p>
            © {currentYear} Luis Rivas. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>{t("footer.sitemap")}</span>
            </a>
            <span aria-hidden="true">/</span>
            <p>{t("footer.builtWith")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
