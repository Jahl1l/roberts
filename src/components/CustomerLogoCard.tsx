import Image from "next/image";

interface CustomerLogoCardProps {
  name: string;
  logoSrc: string;
  logoAlt: string;
}

export default function CustomerLogoCard({
  name,
  logoSrc,
  logoAlt
}: CustomerLogoCardProps) {
  return (
    <div className="group flex min-h-40 w-full max-w-xs items-center justify-center rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-20 w-40 items-center justify-center rounded-2xl bg-white/95 p-3 ring-1 ring-ink/8">
          <div className="overflow-hidden rounded-xl">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={128}
            height={64}
            sizes="160px"
            className="h-auto w-32 rounded-xl object-contain"
          />
          </div>
        </div>
        <p className="text-center text-sm font-semibold text-ink">{name}</p>
      </div>
    </div>
  );
}
