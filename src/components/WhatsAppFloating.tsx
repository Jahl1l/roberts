import Link from "next/link";
import { SITE } from "@/lib/content";

export default function WhatsAppFloating() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;

  return (
    <Link
      href={whatsappHref}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-palm px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-1"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Roberts Web Applications on WhatsApp"
    >
      <span className="h-2 w-2 rounded-full bg-white/80" />
      WhatsApp Us
    </Link>
  );
}
