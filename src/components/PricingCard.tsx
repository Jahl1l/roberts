import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export default function PricingCard({
  name,
  price,
  description,
  features
}: PricingCardProps) {
  const toneClassesByPackage: Record<string, string> = {
    "Starter System":
      "border-blue-500/80 bg-gradient-to-br from-blue-300 via-blue-200 to-sky-400/90 dark:border-blue-700/80 dark:from-blue-950 dark:via-blue-900 dark:to-sky-900",
    "Business Growth System":
      "border-emerald-500/80 bg-gradient-to-br from-emerald-300 via-emerald-200 to-lime-400/90 dark:border-emerald-700/80 dark:from-emerald-950 dark:via-emerald-900 dark:to-lime-900",
    "Custom Enterprise System":
      "border-violet-500/80 bg-gradient-to-br from-violet-300 via-purple-200 to-fuchsia-400/90 dark:border-violet-700/80 dark:from-violet-950 dark:via-purple-900 dark:to-fuchsia-900"
  };

  const toneClasses =
    toneClassesByPackage[name] ??
    "border-white/60 bg-gradient-to-br from-white/80 to-sand/80";

  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-soft backdrop-blur-2xl transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lift ${toneClasses}`}
    >
      <div>
        <h3 className="font-heading text-xl font-semibold text-ink">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-ocean">{price}</p>
        <p className="mt-2 text-sm text-ink/70">{description}</p>
      </div>
      <ul className="list-disc space-y-2 pl-4 text-sm text-ink/70">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button href="/free-consultation">Request a Quote</Button>
      </div>
    </div>
  );
}
