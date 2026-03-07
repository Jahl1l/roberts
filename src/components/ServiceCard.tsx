interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-soft">
      <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm text-ink/70">{description}</p>
    </div>
  );
}
