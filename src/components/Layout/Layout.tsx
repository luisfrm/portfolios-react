import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LAYOUT } from '@/lib/constants';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("relative flex flex-col mx-auto min-h-dvh", LAYOUT.CONTENT_GAP, className)}>
      <BackgroundEffects />
      {children}
    </div>
  );
}

function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
    </div>
  );
} 