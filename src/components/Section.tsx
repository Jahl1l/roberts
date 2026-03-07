import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          {eyebrow ? <span className="badge">{eyebrow}</span> : null}
          <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-base text-ink/70 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
