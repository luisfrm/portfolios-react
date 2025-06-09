import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HERO_STYLES, TYPOGRAPHY, SPACING } from '@/lib/constants';
import { AnimatedSection } from '@/components/common/AnimatedSection';

interface ModernHeroProps {
  children?: ReactNode;
  className?: string;
}

interface HeroContentProps {
  name: string;
  role: string;
  about: string;
  onDownloadCV: () => void;
  onContactClick: () => void;
}

function DecorativeElements() {
  return (
    <div className={HERO_STYLES.decorativeElements}>
      {/* Floating geometric shapes - with initial animation */}
      <AnimatedSection animation="fade-scale" delay={1000} threshold={0}>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 dark:bg-blue-600/20 rounded-full opacity-60 animate-pulse"></div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-scale" delay={1200} threshold={0}>
        <div className="absolute top-40 right-20 w-32 h-32 bg-slate-600/10 dark:bg-slate-600/20 rounded-full opacity-40 animate-bounce"></div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-scale" delay={1400} threshold={0}>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gray-600/10 dark:bg-gray-600/20 rounded-full opacity-50 animate-pulse"></div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-scale" delay={1600} threshold={0}>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-slate-700/10 dark:bg-slate-700/20 rounded-full opacity-30 animate-bounce"></div>
      </AnimatedSection>
      
      {/* Gradient orbs - subtle background */}
      <AnimatedSection animation="fade-scale" delay={800} threshold={0}>
        <div className="absolute top-2/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-600/10 to-slate-600/10 dark:from-blue-600/20 dark:to-slate-600/20 rounded-full opacity-20 blur-xl animate-pulse"></div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-scale" delay={1000} threshold={0}>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-slate-600/10 to-gray-700/10 dark:from-slate-600/20 dark:to-gray-700/20 rounded-full opacity-15 blur-2xl animate-pulse"></div>
      </AnimatedSection>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <AnimatedSection animation="fade-up" delay={2000} threshold={0}>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
          <div className="text-sm mb-2">Scroll</div>
          <div className="w-px h-8 bg-current"></div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current mt-1"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ModernHero({ children, className }: ModernHeroProps) {
  return (
    <section className={cn(
      "min-h-screen relative overflow-hidden flex items-center justify-center w-full",
      className
    )}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-background"></div>
      
      {/* Decorative elements */}
      <DecorativeElements />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className={SPACING.HERO_SPACING}>
          {children}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

export function HeroContent({ name, role, about, onDownloadCV, onContactClick }: HeroContentProps) {
  return (
    <>
      {/* Name with gradient effect - Main entrance */}
      <AnimatedSection animation="fade-scale" delay={200} threshold={0}>
        <h1 className={cn(TYPOGRAPHY.HERO_NAME, HERO_STYLES.nameGradient)}>
          {name}
        </h1>
      </AnimatedSection>
      
      {/* Role/Title - Second element */}
      <AnimatedSection animation="fade-up" delay={400} threshold={0}>
        <h2 className={cn(TYPOGRAPHY.HERO_ROLE, HERO_STYLES.roleHighlight)}>
          {role}
        </h2>
      </AnimatedSection>
      
      {/* About description - Third element */}
      <AnimatedSection animation="fade-up" delay={600} threshold={0}>
        <p className={cn(
          TYPOGRAPHY.HERO_ABOUT, 
          "text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        )}>
          {about}
        </p>
      </AnimatedSection>
      
      {/* Call to action buttons - Final elements */}
      <AnimatedSection animation="fade-up" delay={800} threshold={0}>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button 
            onClick={onDownloadCV}
            className={cn(HERO_STYLES.ctaButton, "hover:scale-105 transition-transform duration-300")}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
          
          <button 
            onClick={onContactClick}
            className={cn(HERO_STYLES.secondaryButton, "hover:scale-105 transition-transform duration-300")}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </button>
        </div>
      </AnimatedSection>
    </>
  );
} 