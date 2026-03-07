"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const preferredTheme = isDark ? "dark" : getPreferredTheme();
    document.documentElement.classList.toggle("dark", preferredTheme === "dark");
    setTheme(preferredTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme: Theme = currentlyDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore storage write errors; theme still toggles for current session.
    }
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-full border border-ink/15 bg-white/80 px-4 py-2 text-sm font-semibold text-ink dark:bg-ink/10"
        aria-label="Toggle dark mode"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-ink/15 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean dark:bg-ink/10"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
