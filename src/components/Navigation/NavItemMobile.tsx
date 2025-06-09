import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollTo } from '@/hooks/useScrollTo';

interface NavItemMobileProps {
  children: ReactNode;
  url: string;
  className?: string;
  onClick?: () => void;
}

const MOBILE_NAV_STYLES = {
  base: "cursor-pointer block px-3 py-2 rounded-md text-base font-medium",
  colors: "text-gray-700 dark:text-white hover:text-gray-900"
};

const NavItemMobile = ({ children, url, className, onClick }: NavItemMobileProps) => {
  const { scrollToElement } = useScrollTo();
  
  const handleClick = () => {
    onClick?.();
    scrollToElement(url);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(MOBILE_NAV_STYLES.base, MOBILE_NAV_STYLES.colors, className)}
    >
      {children}
    </div>
  );
};

export default NavItemMobile;
