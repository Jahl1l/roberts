import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/content";
import { getWhatsAppHref } from "@/lib/whatsapp";

export default function ContactPage() {
  const whatsappHref = getWhatsAppHref(SITE.whatsappNumber, SITE.whatsappMessage);

  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Tell us what you need and we&apos;ll reply fast"
        subtitle="We respond within 2 business hours. Use WhatsApp for urgent requests."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6 text-sm text-ink/70">
            <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft">
              <p className="font-semibold text-ink">Contact details</p>
              <p className="mt-3">Location: {SITE.location}</p>
              <p>Email: {SITE.email}</p>
              <p>WhatsApp: {SITE.phone}</p>
              <Link
                href={whatsappHref}
                className="mt-4 inline-flex rounded-full bg-ocean px-5 py-2 text-sm font-semibold text-white"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </Link>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-sunrise-fade p-6">
              <p className="font-semibold text-ink">What to include</p>
              <ul className="mt-3 list-disc space-y-2 pl-4">
                <li>The workflow you want to improve</li>
                <li>Your expected timeline</li>
                <li>Any tools you already use</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
