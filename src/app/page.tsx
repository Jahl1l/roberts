import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import FAQItem from "@/components/FAQItem";
import ContactForm from "@/components/ContactForm";
import { getWhatsAppHref } from "@/lib/whatsapp";
import {
  CASE_STUDIES,
  DIFFERENTIATORS,
  FAQS,
  PACKAGES,
  PORTFOLIO_HIGHLIGHTS,
  PROBLEMS,
  PROCESS,
  SITE,
  SOLUTIONS
} from "@/lib/content";

export default function HomePage() {
  const whatsappHref = getWhatsAppHref(SITE.whatsappNumber, SITE.whatsappMessage);

  return (
    <div>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="pattern-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="badge">Jamaican Web App Development</span>
              <h1 className="text-balance font-heading text-4xl font-semibold text-ink md:text-5xl">
                Custom Web Applications for Jamaican Businesses
              </h1>
              <p className="max-w-xl text-base text-ink/70 md:text-lg">
                Roberts Web Applications builds WhatsApp-first booking systems,
                ordering flows, and dashboards that help Jamaican teams move
                faster and close more sales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={whatsappHref}
                  className="inline-flex items-center justify-center rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-0.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </Link>
                <Button href="/free-consultation" variant="secondary">
                  Request a Quote
                </Button>
              </div>
              <div className="grid gap-4 pt-6 md:grid-cols-3">
                {DIFFERENTIATORS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-ink/10 bg-white/80 p-4 text-sm text-ink/70"
                  >
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-float-in rounded-3xl bg-white/90 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                Trusted by Jamaican businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-ink/60 md:grid-cols-3">
                {["Island Eats", "Kingston Realty", "Harborlight", "Sunrise Spa", "Blue Ridge", "Coastal Tours"].map(
                  (logo) => (
                    <div
                      key={logo}
                      className="flex items-center justify-center rounded-2xl border border-dashed border-ink/20 bg-sand/70 px-3 py-6"
                    >
                      {logo}
                    </div>
                  )
                )}
              </div>
              <div className="mt-8 rounded-2xl bg-sunrise-fade p-5 text-sm text-ink/80">
                <p className="font-semibold text-ink">Fast response time</p>
                <p className="mt-2">
                  Expect replies within 2 business hours and weekly delivery
                  updates once your project starts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Problems we solve"
        title="We replace WhatsApp confusion with clear systems"
        subtitle="If your team is juggling chats, spreadsheets, and manual follow-ups, we build the tools to streamline the chaos."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70">{problem.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What we build"
        title="Systems that keep your business running smoothly"
        subtitle="We focus on the workflows that matter most: bookings, ordering, internal visibility, and customer follow-up."
        className="bg-white/70"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-ink/10 bg-sand/80 p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Packages"
        title="Flexible systems with transparent JMD pricing"
        subtitle="Select a package that fits your stage, then customize the scope during discovery."
        className="relative overflow-hidden"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-white/55 shadow-soft backdrop-blur-2xl ring-1 ring-white/60" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Case studies"
        title="Local results that prove the impact"
        subtitle="A few examples of how we turn scattered workflows into scalable digital systems."
        className="bg-white/80"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {PORTFOLIO_HIGHLIGHTS.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
        <div className="mt-8 text-sm">
          <Link href="/portfolio" className="font-semibold text-ocean">
            See the full portfolio -&gt;
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="A clear, five-step build process"
        subtitle="Every project is structured to keep you informed and confident from kickoff to launch."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-ink/10 bg-white/90 p-5 text-sm"
            >
              <p className="font-heading text-base font-semibold text-ink">
                {item.step}
              </p>
              <p className="mt-2 text-ink/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQs"
        title="Straight answers before you commit"
        subtitle="We keep pricing, timelines, and ownership transparent for Jamaican teams."
        className="bg-white/80"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ready to talk?"
        title="Get a custom quote with a clear plan"
        subtitle="We respond fast on WhatsApp and can start with a quick consultation call."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-ink/10 bg-sunrise-fade p-6">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Request a quote today
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Tell us about your business, the workflow you want to improve, and
                your target timeline. We&apos;ll propose the right package and
                next steps.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={whatsappHref}
                  className="rounded-full bg-ocean px-5 py-2 text-sm font-semibold text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </Link>
                <Button href="/free-consultation" variant="secondary">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 text-sm text-ink/70">
              <p className="font-semibold text-ink">Recent outcomes</p>
              <ul className="mt-3 space-y-2">
                {CASE_STUDIES.slice(0, 3).map((item) => (
                  <li key={item.title}>
                    {item.title}: {item.results}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
