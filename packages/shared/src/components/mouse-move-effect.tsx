"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // `resolvedTheme` is undefined on the server and during hydration, so both
  // render the light gradient and there is no mismatch to guard against.
  const currentTheme = resolvedTheme ?? "light";
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
