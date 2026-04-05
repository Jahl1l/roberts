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
    <div className="group flex w-fit max-w-full flex-col items-center">
      <div className="rounded-[26px] border border-ink/10 bg-white/95 p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
        <div className="overflow-hidden rounded-[18px]">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={180}
            height={180}
            sizes="180px"
            className="h-auto w-[180px] rounded-[18px] object-contain"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm font-semibold leading-none text-ink">
        {name}
      </p>
    </div>
  );
}
