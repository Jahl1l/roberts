import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  isPopular?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  ctaLabel = "Get Started",
  isPopular = false
}: PricingCardProps) {
  const accentClassesByPackage: Record<string, string> = {
    "Starter Package":
      "border-slate-500/50 bg-[linear-gradient(180deg,rgba(214,219,228,0.98),rgba(104,117,139,0.74))] dark:border-slate-300/20 dark:bg-[linear-gradient(180deg,rgba(71,85,105,0.72),rgba(15,23,42,0.96))] hover:shadow-[0_28px_80px_rgba(71,85,105,0.24)]",
    "Business Package":
      "border-[#c98b18]/60 bg-[linear-gradient(145deg,rgba(255,248,225,0.98),rgba(255,220,130,0.96)_20%,rgba(210,146,28,0.84)_48%,rgba(255,243,199,0.95)_72%,rgba(145,92,10,0.88))] dark:border-[#f0cc72]/30 dark:bg-[linear-gradient(145deg,rgba(255,224,130,0.28),rgba(173,111,20,0.6)_26%,rgba(92,55,7,0.88)_62%,rgba(28,18,5,0.98))] hover:shadow-[0_30px_90px_rgba(201,139,24,0.34)]",
    "Premium Package":
      "border-[#a11a3f]/45 bg-[linear-gradient(155deg,rgba(255,255,255,0.16),rgba(196,34,82,0.18)_22%,rgba(133,8,44,0.34)_52%,rgba(90,4,31,0.46)_78%,rgba(54,2,17,0.58))] backdrop-blur-xl dark:border-[#d45479]/28 dark:bg-[linear-gradient(155deg,rgba(255,255,255,0.08),rgba(171,24,68,0.2)_24%,rgba(92,7,31,0.44)_56%,rgba(37,3,13,0.72)_84%)] hover:shadow-[0_30px_90px_rgba(132,12,49,0.34)]"
  };

  const accentGlowByPackage: Record<string, string> = {
    "Starter Package":
      "bg-[radial-gradient(circle_at_top,rgba(71,85,105,0.22),transparent_68%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_68%)]",
    "Business Package":
      "bg-[radial-gradient(circle_at_top,rgba(255,243,199,0.76),rgba(245,186,61,0.28)_42%,transparent_72%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,221,122,0.3),rgba(194,124,24,0.24)_42%,transparent_72%)]",
    "Premium Package":
      "bg-[radial-gradient(circle_at_top,rgba(255,214,225,0.3),rgba(177,20,63,0.2)_38%,transparent_68%)] dark:bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.2),rgba(127,9,44,0.22)_42%,transparent_70%)]"
  };

  const accentClasses =
    accentClassesByPackage[name] ??
    "border-ink/10 bg-white/92 hover:border-ocean/20 hover:shadow-lift";
  const accentGlow =
    accentGlowByPackage[name] ??
    "bg-[radial-gradient(circle_at_top,rgba(0,95,115,0.08),transparent_68%)]";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 shadow-soft transition duration-300 ease-out md:p-7 ${
        isPopular
          ? `${accentClasses} ring-1 ring-ocean/10 hover:-translate-y-2`
          : `${accentClasses} hover:-translate-y-1.5`
      }`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 ${accentGlow}`} />

      <div className="relative flex h-full flex-col">
        <div className="flex min-h-20 items-start justify-between gap-4">
          <div className="pr-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean/80 dark:text-ocean/95">
              Website Package
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-ink dark:text-white">
              {name}
            </h3>
          </div>
          <span
            className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-soft ${
              isPopular
                ? "border-ocean/15 bg-ocean text-white"
                : "invisible border-transparent bg-transparent text-transparent"
            }`}
          >
              Most Popular
          </span>
        </div>

        <div className="mt-6 flex min-h-44 flex-col rounded-3xl border border-ink/10 bg-white/80 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-ink/45 dark:text-white/60">
            Investment
          </p>
          <p className="mt-2 font-heading text-3xl font-semibold tracking-tight text-ink dark:text-white">
            {price}
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-white/80">
            {description}
          </p>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-ink/75 dark:text-white/85">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-ocean/80 dark:bg-ocean" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2">
          <Link
            href="/free-consultation"
            className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/30 ${
              isPopular
                ? "border border-transparent bg-ocean text-white shadow-lift hover:-translate-y-0.5 hover:bg-ink"
                : "border border-ink/12 bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:border-ocean hover:text-ocean dark:border-white/12 dark:bg-white/10 dark:text-white dark:hover:border-ocean dark:hover:text-ocean"
            }`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
