import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "@/lib/content";
import { getWhatsAppHref } from "@/lib/whatsapp";

export default function Navbar() {
  const whatsappHref = getWhatsAppHref(SITE.whatsappNumber, SITE.whatsappMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-row flex-wrap items-center justify-start gap-3 px-2 py-0.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/roberts-logo.png"
              alt={`${SITE.name} logo`}
              width={900}
              height={900}
              className="h-24 w-auto md:h-28"
              priority
            />
            <span className="sr-only">{SITE.name}</span>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-ink/70 md:ml-4 md:flex-1 md:justify-evenly">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ocean">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button href="/free-consultation" variant="secondary">
            Request a Quote
          </Button>
          <Link
            href={whatsappHref}
            className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-semibold text-ink hover:border-ocean hover:text-ocean dark:bg-ink/10"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
