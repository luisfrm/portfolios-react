"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, User, Mail, MessageSquare, FileText, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { toast } from "sonner";

/* Hallmark · component: contact-form · genre: editorial · theme: custom · archetype: Split 12-Col Ledger */

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
      icon: <GithubIcon className="w-3.5 h-3.5" />,
    },
    {
      name: t("social.linkedin"),
      url: "https://www.linkedin.com/in/luisrivasm/",
      icon: <LinkedinIcon className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section id="contact-form" className={cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION)}>
      
      {/* Title Section */}
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={cn(TYPOGRAPHY.SECTION_TITLE, "text-3xl sm:text-4xl font-bold tracking-tight text-foreground")}>
            {t("contactForm.title")}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
        </div>
      </AnimatedSection>

      {/* Asymmetric 12-Column Split Grid (Hallmark Anti-Slop Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        
        {/* Left Rail (5 Columns): Direct Contact Ledger & Identity */}
        <AnimatedSection animation="fade-right" delay={150} className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
              {t("contactForm.subtitle")}
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              {t("contactForm.headline")}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              {t("personal.about")}
            </p>
          </div>

          {/* Quick Response & Location Badges */}
          <div className="space-y-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{t("contactForm.responseTime")}</span>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs text-slate-600 dark:text-slate-400 pt-2">
              <a
                href={`mailto:${t("contact.email")}`}
                className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="underline underline-offset-4">{t("contact.email")}</span>
              </a>

              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{t("contact.city")}</span>
              </div>
            </div>
          </div>

          {/* Social Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-slate-300 dark:border-slate-800 font-mono text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group"
              >
                {link.icon}
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Right Panel (7 Columns): High-Contrast Form */}
        <AnimatedSection animation="fade-left" delay={250} className="lg:col-span-7">
          <div className="bg-card/90 backdrop-blur-md rounded-2xl border border-slate-300 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Email 2-Col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{t("contactForm.nameLabel")}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contactForm.namePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-foreground placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600 font-sans text-sm transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{t("contactForm.emailLabel")}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contactForm.emailPlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-foreground placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600 font-sans text-sm transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{t("contactForm.subjectLabel")}</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contactForm.subjectPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-foreground placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600 font-sans text-sm transition-all duration-200"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{t("contactForm.messageLabel")}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contactForm.messagePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-foreground placeholder:text-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600 font-sans text-sm transition-all duration-200 min-h-[140px] resize-vertical"
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50"
              >
                <Send className={cn("w-4 h-4 mr-2", isSubmitting && "animate-pulse")} />
                {isSubmitting ? t("contactForm.sendingText") : t("contactForm.sendButtonText")}
              </Button>

            </form>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

export default ContactForm;
