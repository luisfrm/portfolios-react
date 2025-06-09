import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LAYOUT } from '@/lib/constants';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("relative flex flex-col mx-auto min-h-dvh overflow-x-hidden max-w-full", LAYOUT.CONTENT_GAP, className)}>
      {children}
    </div>
  );
} 