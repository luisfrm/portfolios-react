"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { toast } from "sonner";

const CONTACT_FORM_STYLES = {
  container: cn(
    LAYOUT.CONTAINER_MAX_WIDTH,
    SPACING.SECTION,
    "py-16 sm:py-20 lg:py-24"
  ),
  title: cn(
    TYPOGRAPHY.SECTION_TITLE,
    "bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
    "dark:from-blue-400 dark:via-slate-400 dark:to-gray-300",
    "mb-4"
  ),
  decorativeLine:
    "w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mb-8 sm:mb-12 lg:mb-16 rounded-full",
  formContainer:
    "max-w-2xl mx-auto border border-gray-200 dark:border-gray-800 p-8 rounded-xl shadow-xl",
  form: "space-y-6",
  inputGroup: "space-y-2",
  label:
    "flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300",
  input: cn(
    "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-0",
    "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "transition-all duration-200",
    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
    "appearance-none focus:outline-none",
    "transform-gpu will-change-transform",
    "active:border-red-500"
  ),
  textarea: cn(
    "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-0",
    "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "transition-all duration-200 resize-vertical min-h-[120px]",
    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
    "appearance-none focus:outline-none",
    "transform-gpu will-change-transform"
  ),
  button: cn(
    "w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white",
    "hover:from-blue-700 hover:to-slate-800 transform hover:scale-105",
    "transition-all duration-300 shadow-lg hover:shadow-xl",
    "py-3 px-6 rounded-lg font-medium"
  ),
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible",
} as const;

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
      const response = await fetch(
        "https://formspree.io/f/mvgqkavr",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

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

  return (
    <section id="contact-form" className={CONTACT_FORM_STYLES.container}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center">
          <h2 className={CONTACT_FORM_STYLES.title}>
            {t("contactForm.title")}
          </h2>
          <div className={CONTACT_FORM_STYLES.decorativeLine} />
        </div>
      </AnimatedSection>

      <div className={CONTACT_FORM_STYLES.formContainer}>
        <AnimatedSection animation="fade-up" delay={200}>
          <form onSubmit={handleSubmit} className={CONTACT_FORM_STYLES.form}>
            <div className={CONTACT_FORM_STYLES.gridContainer}>
              <AnimatedSection
                animation="fade-right"
                delay={300}
                className="overflow-visible"
              >
                <div className={CONTACT_FORM_STYLES.inputGroup}>
                  <label htmlFor="name" className={CONTACT_FORM_STYLES.label}>
                    <User className="w-4 h-4" />
                    <span>{t("contactForm.nameLabel")}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contactForm.namePlaceholder")}
                    className={CONTACT_FORM_STYLES.input}
                    required
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection
                animation="fade-left"
                delay={300}
                className="overflow-visible"
              >
                <div className={CONTACT_FORM_STYLES.inputGroup}>
                  <label htmlFor="email" className={CONTACT_FORM_STYLES.label}>
                    <Mail className="w-4 h-4" />
                    <span>{t("contactForm.emailLabel")}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contactForm.emailPlaceholder")}
                    className={CONTACT_FORM_STYLES.input}
                    required
                  />
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className={CONTACT_FORM_STYLES.inputGroup}>
                <label htmlFor="subject" className={CONTACT_FORM_STYLES.label}>
                  <FileText className="w-4 h-4" />
                  <span>{t("contactForm.subjectLabel")}</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contactForm.subjectPlaceholder")}
                  className={CONTACT_FORM_STYLES.input}
                  required
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className={CONTACT_FORM_STYLES.inputGroup}>
                <label htmlFor="message" className={CONTACT_FORM_STYLES.label}>
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("contactForm.messageLabel")}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contactForm.messagePlaceholder")}
                  className={CONTACT_FORM_STYLES.textarea}
                  rows={6}
                  required
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <Button
                type="submit"
                className={CONTACT_FORM_STYLES.button}
                size="lg"
                disabled={isSubmitting}
              >
                <Send
                  className={`w-5 h-5 mr-2 ${
                    isSubmitting ? "animate-pulse" : ""
                  }`}
                />
                {isSubmitting
                  ? t("contactForm.sendingText")
                  : t("contactForm.sendButtonText")}
              </Button>
            </AnimatedSection>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ContactForm;
