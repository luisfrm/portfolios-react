import { useState } from 'react';
import { Send, User, Mail, MessageSquare, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { LAYOUT, TYPOGRAPHY, SPACING } from '@/lib/constants';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { toast } from 'sonner';

interface ContactFormProps {
  title: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendButtonText: string;
  messages: {
    validationError: string;
    validationDescription: string;
    successMessage: string;
    successDescription: string;
    errorMessage: string;
    errorDescription: string;
    sendingText: string;
  };
}

const CONTACT_FORM_STYLES = {
  container: cn(LAYOUT.CONTAINER_MAX_WIDTH, SPACING.SECTION, "py-16 sm:py-20 lg:py-24"),
  title: cn(
    TYPOGRAPHY.SECTION_TITLE,
    "bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
    "dark:from-blue-400 dark:via-slate-400 dark:to-gray-300",
    "mb-4"
  ),
  decorativeLine: "w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mb-8 sm:mb-12 lg:mb-16 rounded-full",
  formContainer: "max-w-2xl mx-auto border border-gray-200 dark:border-gray-800 p-8 rounded-xl shadow-xl",
  form: "space-y-6",
  inputGroup: "space-y-2",
  label: "flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300",
  input: cn(
    "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600",
    "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "transition-all duration-200",
    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
    // iOS Safari fixes
    "appearance-none focus:outline-none",
    "transform-gpu will-change-transform"
  ),
  textarea: cn(
    "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600",
    "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
    "focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    "transition-all duration-200 resize-vertical min-h-[120px]",
    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
    // iOS Safari fixes
    "appearance-none focus:outline-none",
    "transform-gpu will-change-transform"
  ),
  button: cn(
    "w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white",
    "hover:from-blue-700 hover:to-slate-800 transform hover:scale-105",
    "transition-all duration-300 shadow-lg hover:shadow-xl",
    "py-3 px-6 rounded-lg font-medium"
  ),
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-6"
} as const;

export function ContactForm({
  title,
  namePlaceholder,
  emailPlaceholder,
  subjectPlaceholder,
  messagePlaceholder,
  sendButtonText,
  messages
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(messages.validationError, {
        description: messages.validationDescription,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgqkavr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(messages.successMessage, {
          description: messages.successDescription,
        });
        resetForm();
      } else {
        throw new Error("Error en el servidor");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(messages.errorMessage, {
        description: messages.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className={CONTACT_FORM_STYLES.container}>
      {/* Section title with gradient effect */}
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center">
          <h2 className={CONTACT_FORM_STYLES.title}>
            {title}
          </h2>
          <div className={CONTACT_FORM_STYLES.decorativeLine}></div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <div className={CONTACT_FORM_STYLES.formContainer}>
        <AnimatedSection animation="fade-up" delay={200}>
          <form onSubmit={handleSubmit} className={CONTACT_FORM_STYLES.form}>
            {/* Name and Email Row */}
            <div className={CONTACT_FORM_STYLES.gridContainer}>
              <AnimatedSection animation="fade-right" delay={300}>
                <div className={CONTACT_FORM_STYLES.inputGroup}>
                  <label htmlFor="name" className={CONTACT_FORM_STYLES.label}>
                    <User className="w-4 h-4" />
                    <span>Nombre</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={namePlaceholder}
                    className={CONTACT_FORM_STYLES.input}
                    required
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={300}>
                <div className={CONTACT_FORM_STYLES.inputGroup}>
                  <label htmlFor="email" className={CONTACT_FORM_STYLES.label}>
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={emailPlaceholder}
                    className={CONTACT_FORM_STYLES.input}
                    required
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Subject */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className={CONTACT_FORM_STYLES.inputGroup}>
                <label htmlFor="subject" className={CONTACT_FORM_STYLES.label}>
                  <FileText className="w-4 h-4" />
                  <span>Asunto</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={subjectPlaceholder}
                  className={CONTACT_FORM_STYLES.input}
                  required
                />
              </div>
            </AnimatedSection>

            {/* Message */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className={CONTACT_FORM_STYLES.inputGroup}>
                <label htmlFor="message" className={CONTACT_FORM_STYLES.label}>
                  <MessageSquare className="w-4 h-4" />
                  <span>Mensaje</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={messagePlaceholder}
                  className={CONTACT_FORM_STYLES.textarea}
                  rows={6}
                  required
                />
              </div>
            </AnimatedSection>

            {/* Submit Button */}
            <AnimatedSection animation="fade-up" delay={600}>
              <Button
                type="submit"
                className={CONTACT_FORM_STYLES.button}
                size="lg"
                disabled={isSubmitting}
              >
                <Send className={`w-5 h-5 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? messages.sendingText : sendButtonText}
              </Button>
            </AnimatedSection>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
} 