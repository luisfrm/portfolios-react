import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export function HeroSection({ children, className }: HeroSectionProps) {
  return (
    <section className={cn(
      "h-screen lg:h-dvh flex justify-center items-center",
      className
    )}>
      <section className="flex flex-col gap-4 bg-card p-8 rounded-xl shadow-xl border border-gray-200 pb-8 dark:border-gray-800">
        {children}
      </section>
    </section>
  );
} 