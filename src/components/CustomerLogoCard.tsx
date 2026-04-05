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
    <div className="group flex min-h-52 w-full max-w-xs flex-col rounded-3xl border border-ink/10 bg-white/90 p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex flex-1 items-center justify-center rounded-[22px] bg-white/95 p-5 shadow-[inset_0_0_0_1px_rgba(11,18,32,0.08)]">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[18px]">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={220}
              height={140}
              sizes="220px"
              className="h-auto max-h-28 w-full object-contain"
            />
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-semibold leading-none text-ink">
        {name}
      </p>
    </div>
  );
}
