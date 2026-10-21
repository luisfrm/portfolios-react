"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Hydration-safe mount flag: the server and first client render use `false`,
  // then React switches to `true` after hydration without a mismatch.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
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

  // Keep the first client render identical to the server render. next-themes
  // can resolve the stored theme before hydration, which would otherwise make
  // the gradient color differ between server HTML and the client tree.
  const currentTheme = mounted ? resolvedTheme ?? "light" : "light";
  const gradientColor =
    currentTheme === "dark"
      ? "rgba(29, 78, 216, 0.15)"
      : "rgba(0, 0, 80, 0.15)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 80%)`,
      }}
    />
  );
}
