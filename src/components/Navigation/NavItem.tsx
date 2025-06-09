import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollTo } from '@/hooks/useScrollTo';

interface NavItemProps {
  children: ReactNode;
  url: string;
  className?: string;
  onClick?: () => void;
}

const NAVIGATION_STYLES = {
  base: "cursor-pointer border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
  colors: "text-gray-900 dark:text-gray-300 hover:border-gray-300 hover:text-gray-500 dark:hover:text-white"
};

const NavItem = ({ children, url, className, onClick }: NavItemProps) => {
  const { scrollToElement } = useScrollTo();
  
  const handleClick = () => {
    onClick?.();
    scrollToElement(url);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(NAVIGATION_STYLES.base, NAVIGATION_STYLES.colors, className)}
      aria-label="Navigation Item"
    >
      {children}
    </div>
  );
};

export default NavItem;
