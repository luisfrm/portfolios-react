import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollTo } from '@/hooks/useScrollTo';

export function UpWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToElement } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón cuando el usuario haya scrolleado más de 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Usar "#" para ir al top de la página según la lógica del hook
    scrollToElement('#');
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        className={cn(
          "w-12 h-12 rounded-full cursor-pointer",
          "bg-gradient-to-r from-blue-600 to-slate-700 text-white",
          "hover:from-blue-700 hover:to-slate-800",
          "shadow-lg hover:shadow-xl",
          "transform hover:scale-110 transition-all duration-300",
          "flex items-center justify-center",
          "border border-blue-500/20",
          "backdrop-blur-sm"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </div>
    </div>
  );
} 