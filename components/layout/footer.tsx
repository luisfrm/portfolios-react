"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";

/* Hallmark · component: footer · genre: editorial · theme: custom · archetype: Ft5 Statement */

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: t("social.github"),
      url: "https://github.com/luisfrm/",
      icon: <GithubIcon className="w-3.5 h-3.5" />,
    },
    {
      name: t("social.linkedin"),
      url: "https://www.linkedin.com/in/luisrivasm/",
      icon: <LinkedinIcon className="w-3.5 h-3.5" />,
    },
    {
      name: "Email",
      url: `mailto:${t("contact.email")}`,
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-background/50 backdrop-blur-xs pt-12 pb-8 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Ft5 Statement Header: Brand Identity & Contact Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          {/* Identity & Status */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t("footer.status")}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Luis Rivas
            </h3>
            
            <p className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <span>{t("personal.role")}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {t("contact.city")}
              </span>
            </p>
          </div>

          {/* Social Links Matrix */}
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2 rounded-xl bg-card border border-slate-300 dark:border-slate-800 font-mono text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
                aria-label={link.name}
              >
                {link.icon}
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors ml-auto sm:ml-0" />
              </a>
            ))}
          </div>

        </div>

        {/* Legal & Tech Credit Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Luis Rivas. {t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>{t("footer.sitemap")}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <p>{t("footer.builtWith")}</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
