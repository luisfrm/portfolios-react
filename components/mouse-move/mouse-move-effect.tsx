"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const currentTheme = mounted ? theme === "system" ? resolvedTheme : theme : "light";
  const gradientColor =
    currentTheme === "dark"
      ? "rgba(29, 78, 216, 0.15)"
      : "rgba(0, 0, 80, 0.15)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
      }}
    />
  );
}
