import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { CARE_PLANS, PACKAGES, SITE } from "@/lib/content";

export default function FreeConsultationPage() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;

  return (
    <div>
      <section className="bg-hero-glow">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="badge">Free Consultation</span>
              <h1 className="text-balance font-heading text-4xl font-semibold text-ink md:text-5xl">
                Request a quote tailored to your business
              </h1>
              <p className="text-base text-ink/70 md:text-lg">
                Share your goals and we&apos;ll recommend the best package, timeline,
                and next steps. Expect a quick WhatsApp follow-up within 2 hours.
              </p>
              <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 text-sm text-ink/70">
                <p className="font-semibold text-ink">What you&apos;ll get</p>
              <ul className="mt-3 list-disc space-y-2 pl-4">
                <li>A clear scope estimate in JMD</li>
                <li>Recommended tech stack + timeline</li>
                <li>Priority roadmap for phase 1</li>
              </ul>
              </div>
              <Link
                href={whatsappHref}
                className="inline-flex rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </Link>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white/95 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                Packages snapshot
              </p>
              <div className="mt-5 space-y-4 text-sm text-ink/70">
                {PACKAGES.map((pkg) => (
                  <div key={pkg.name}>
                    <p className="font-semibold text-ink">{pkg.name}</p>
                    <p>{pkg.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-sunrise-fade p-4 text-sm text-ink/70">
                <p className="font-semibold text-ink">Monthly care plans</p>
                <ul className="mt-2 space-y-1">
                  {CARE_PLANS.map((plan) => (
                    <li key={plan.name}>
                      {plan.name}: {plan.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Tell us about your project"
        title="We&apos;ll respond with a clear plan"
        subtitle="Complete the form and we&apos;ll book a short call or send a WhatsApp summary."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6 text-sm text-ink/70">
            <div className="rounded-3xl border border-ink/10 bg-white/90 p-6">
              <p className="font-semibold text-ink">Best fit for</p>
              <ul className="mt-3 list-disc space-y-2 pl-4">
                <li>Teams ready to streamline bookings or orders</li>
                <li>Businesses scaling beyond WhatsApp spreadsheets</li>
                <li>Owners who want clear, local support</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-sand/90 p-6">
              <p className="font-semibold text-ink">What happens next</p>
              <ol className="mt-3 space-y-2">
                <li>1. We review your goals and timeline</li>
                <li>2. You receive a proposal within 48 hours</li>
                <li>3. We schedule kickoff and discovery</li>
              </ol>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
