"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return null;
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const resolvedTheme = getStoredTheme() ?? getPreferredTheme();
    applyTheme(resolvedTheme);
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
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
        className="rounded-full border border-ink/15 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean dark:bg-ink/10 dark:text-white"
        aria-label="Toggle dark mode"
      >
        Dark mode
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
