
// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    // keep DOM class in sync
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore if storage not available
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="icon sun" aria-hidden>
        <SunIcon className="w-4 h-4" />
      </span>
      <span className="icon moon" aria-hidden>
        <MoonIcon className="w-4 h-4" />
      </span>
      <span className="dot" />
    </button>
  );
};

export default ThemeToggle;
