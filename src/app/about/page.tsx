import Section from "@/components/Section";
import { DIFFERENTIATORS, PROCESS, SITE } from "@/lib/content";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="A Jamaican team focused on clarity, trust, and results"
        subtitle="Roberts Web Applications is built to help local businesses compete with modern, reliable web systems."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-sm text-ink/70">
            <p>
              We partner with Jamaican business owners who want more than a website.
              You need a system that organizes bookings, orders, customers, and
              staff workflows.
            </p>
            <p>
              Our team blends product strategy, design, and development to deliver
              web applications that feel simple for your team and polished for
              your customers.
            </p>
            <p>
              Based in {SITE.location}, we value clear communication and quick
              support. We stay engaged with monthly care plans so you never feel
              abandoned after launch.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
              Our promise
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              {DIFFERENTIATORS.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-ink">{item.title}:</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="How we work"
        title="Structured delivery with weekly updates"
        subtitle="We keep you involved without overwhelming your calendar."
        className="bg-white/70"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-ink/10 bg-sand/90 p-5 text-sm"
            >
              <p className="font-heading text-base font-semibold text-ink">
                {item.step}
              </p>
              <p className="mt-2 text-ink/70">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/free-consultation">Start your project</Button>
        </div>
      </Section>
    </div>
  );
}
