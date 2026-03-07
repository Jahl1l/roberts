import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const styles = {
  primary:
    "bg-ocean text-white hover:bg-ink focus-visible:ring-ocean/40",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-ocean hover:text-ocean dark:bg-ink/10 dark:border-ink/20",
  ghost: "text-ink hover:text-ocean"
};

export default function Button({
  href,
  children,
  variant = "primary"
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-soft transition duration-200 focus-visible:outline-none focus-visible:ring-2 ${
        styles[variant]
      }`}
    >
      {children}
    </Link>
  );
}
