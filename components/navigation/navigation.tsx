"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { NavItem } from "./nav-item";
import { NavItemMobile } from "./nav-item-mobile";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SocialItem } from "@/components/social-media/social-item";
import Logo from "@/components/logo/logo";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { NAV_CONFIG, ANIMATION_CLASSES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useHeroActions, useLanguage } from "@/hooks";

export function Navigation() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const t = useTranslations();
  const { handleDownloadCV } = useHeroActions();
  const { changeLanguage, languageLabel } = useLanguage();

  const navItems = [
    { key: "experience", href: "experience" },
    { key: "projects", href: "projects" },
    { key: "contact", href: "contact-form" },
    { key: "skills", href: "skills" },
    { key: "about", href: "hero" },
  ];

  const socialItems = [
    {
      icon: <GithubIcon className="w-4 h-4" />,
      url: "https://github.com/luisfrm/",
      name: t("social.github"),
    },
    {
      icon: <LinkedinIcon className="w-4 h-4" />,
      url: "https://www.linkedin.com/in/luisfrm10/",
      name: t("social.linkedin"),
    },
  ];

  return (
    <>
      {isSheetOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 animate-in fade-in-0"
          onClick={() => setIsSheetOpen(false)}
        />
      )}
      <nav className="shadow-md fixed w-screen z-50 bg-gradient-to-b from-background via-background/90 to-background top-0 border-b border-b-[#ffffff77]">
        <div
          className={cn(
            NAV_CONFIG.MAX_WIDTH,
            "mx-auto",
            NAV_CONFIG.PADDING_X,
            NAV_CONFIG.PADDING_Y
          )}
        >
          <div className="flex justify-between relative">
            <div id="nav_logo" className="flex-shrink-0">
              <NavItem url="#">
                <Logo
                  className={cn(
                    "text-black dark:text-white h-8 w-8 md:h-14 md:w-14",
                    ANIMATION_CLASSES.HOVER_SCALE,
                    ANIMATION_CLASSES.TRANSITION
                  )}
                />
              </NavItem>
            </div>
            <div
              id="nav_listElement"
              className="hidden sm:flex gap-6 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            >
              {navItems.map((item) => (
                <NavItem key={item.key} url={item.href}>
                  {t(`nav.${item.key}`)}
                </NavItem>
              ))}
            </div>
            <div
              id="nav_actions"
              className="hidden sm:flex sm:items-center gap-2"
            >
              <Button
                id="nav-cv-button"
                variant="outline"
                size="sm"
                onClick={handleDownloadCV}
              >
                CV
              </Button>
              <Button
                id="nav-language-button"
                variant="outline"
                size="icon"
                onClick={changeLanguage}
                aria-label="Toggle language"
              >
                {languageLabel}
              </Button>
              {socialItems.map((item, i) => (
                <SocialItem
                  key={i}
                  icon={item.icon}
                  url={item.url}
                  size="icon"
                />
              ))}
              <ThemeToggle />
            </div>
            <div id="nav_actions" className="sm:hidden">
              <Sheet modal={false} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="bg-transparent" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">{t("common.menu")}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <NavItemMobile key={item.key} url={item.href}>
                        {t(`nav.${item.key}`)}
                      </NavItemMobile>
                    ))}
                    <div
                      id="nav_actions_mobile"
                      className="flex flex-col gap-3"
                    >
                      <section className="flex gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={changeLanguage}
                        >
                          {languageLabel}
                        </Button>
                        <ThemeToggle />
                        {socialItems.map((item, i) => (
                          <SocialItem
                            key={i}
                            icon={item.icon}
                            url={item.url}
                            size="icon"
                          />
                        ))}
                      </section>
                      <section>
                        <Button
                          id="nav-mobile-cv-button"
                          className="flex-1 w-100"
                          variant="outline"
                          onClick={handleDownloadCV}
                        >
                          {t("personal.downloadText")}
                        </Button>
                      </section>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
