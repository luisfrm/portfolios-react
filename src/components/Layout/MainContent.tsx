import { ReactNode } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { LAYOUT } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface MainContentProps {
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function MainContent({ children, footer, className }: MainContentProps) {
  return (
    <Card className={cn(
      "w-full rounded-none sm:px-12 bg-transparent border-0 shadow-none z-10",
      LAYOUT.CONTAINER_MAX_WIDTH,
      "mx-auto",
      className
    )}>
      <CardContent className={cn("flex flex-col", LAYOUT.CONTENT_GAP)}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className={cn("flex flex-col", LAYOUT.CARD_GAP)}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
} 