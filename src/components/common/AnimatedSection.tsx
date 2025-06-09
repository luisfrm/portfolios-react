import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale' | 'fade-down';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const ANIMATION_CLASSES = {
  'fade-up': 'animate-fade-up',
  'fade-left': 'animate-fade-left', 
  'fade-right': 'animate-fade-right',
  'fade-scale': 'animate-fade-scale',
  'fade-down': 'animate-fade-down'
} as const;

export function AnimatedSection({ 
  children, 
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '50px'
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={cn(
        ANIMATION_CLASSES[animation],
        isInView && 'is-visible',
        className
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
} 