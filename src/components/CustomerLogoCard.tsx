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
    <div className="group flex min-h-44 w-full max-w-xs items-center justify-center rounded-3xl border border-ink/10 bg-white/90 px-6 py-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-20 w-32 items-center justify-center rounded-2xl bg-white/95 p-3 shadow-[inset_0_0_0_1px_rgba(11,18,32,0.08)]">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={96}
              height={96}
              sizes="96px"
              className="h-14 w-auto rounded-lg object-contain"
            />
          </div>
        </div>
        <p className="text-center text-sm font-semibold leading-none text-ink">
          {name}
        </p>
      </div>
    </div>
  );
}
