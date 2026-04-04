import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/content";
import { getWhatsAppHref } from "@/lib/whatsapp";

export default function Footer() {
  const whatsappHref = getWhatsAppHref(SITE.whatsappNumber, SITE.whatsappMessage);

  return (
    <footer className="border-t border-ink/10 bg-white/70 dark:bg-ink/5">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-semibold">{SITE.name}</h3>
          <p className="text-sm text-ink/70">
            Custom web applications for Jamaican businesses. Built to streamline
            key workflows, reduce manual work, and grow revenue.
          </p>
          <div className="text-sm text-ink/70">
            <p>{SITE.location}</p>
            <p>{SITE.email}</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-ink">Explore</p>
          <ul className="space-y-2 text-ink/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ocean">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-ink">Let&apos;s talk</p>
          <p className="text-ink/70">
            Ready to quote your next system? Send us a WhatsApp message or use the contact
            form.
          </p>
          <Link
            href={whatsappHref}
            className="inline-flex items-center justify-center rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-white"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
      <div className="border-t border-ink/10 bg-sand/70 py-4 text-center text-xs text-ink/60">
        (c) {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
