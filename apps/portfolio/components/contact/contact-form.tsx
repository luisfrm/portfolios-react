"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@portfolio/shared/components/icons/brand-icons";
import { Button } from "@portfolio/ui/components/button";
import { cn } from "@/lib/utils";
import { LAYOUT } from "@/lib/constants";
import { SectionHead } from "@/components/layout/section-head";
import { toast } from "sonner";

/* Hallmark · component: contact-form · genre: editorial · theme: custom · archetype: Split 12-Col Ledger */

const META = "font-mono text-[11px] uppercase tracking-[0.16em]";

const FIELD =
  "w-full rounded-sm border border-input bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors";

export function ContactForm() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error(t("contactForm.messages.validationError"), {
        description: t("contactForm.messages.validationDescription"),
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgqkavr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("contactForm.messages.successMessage"), {
          description: t("contactForm.messages.successDescription"),
        });
        resetForm();
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(t("contactForm.messages.errorMessage"), {
        description: t("contactForm.messages.errorDescription"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
  ];

  return (
    <section id="contact-form" className={LAYOUT.CONTAINER_MAX_WIDTH}>
      <SectionHead index="05" title={t("contactForm.title")} />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left rail: identity and direct contact */}
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-4">
            <span className={cn(META, "block text-primary")}>
              {t("contactForm.subtitle")}
            </span>

            <h3 className="max-w-md font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {t("contactForm.headline")}
            </h3>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {t("personal.about")}
            </p>
          </div>

          <div className="space-y-3 border-t border-border pt-5">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{t("contactForm.responseTime")}</span>
            </p>

            <a
              href={`mailto:${t("contact.email")}`}
              className="flex w-fit items-center gap-2 text-sm text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{t("contact.email")}</span>
            </a>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{t("contact.city")}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(META, "inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary")}
              >
                {link.icon}
                <span>{link.name}</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Form panel: a bordered sheet, no glass */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5 border border-border bg-card p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className={cn(META, "block text-muted-foreground")}>
                  {t("contactForm.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contactForm.namePlaceholder")}
                  className={FIELD}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className={cn(META, "block text-muted-foreground")}>
                  {t("contactForm.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contactForm.emailPlaceholder")}
                  className={FIELD}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className={cn(META, "block text-muted-foreground")}>
                {t("contactForm.subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contactForm.subjectPlaceholder")}
                className={FIELD}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className={cn(META, "block text-muted-foreground")}>
                {t("contactForm.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contactForm.messagePlaceholder")}
                className={cn(FIELD, "min-h-[140px] resize-vertical")}
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? t("contactForm.sendingText") : t("contactForm.sendButtonText")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
