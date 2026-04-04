import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";
import { CARE_PLANS, PACKAGES } from "@/lib/content";

export default function PackagesPage() {
  return (
    <div>
      <Section
        eyebrow="Packages"
        title="Professional website packages with clear JMD pricing"
        subtitle="Each package is structured to help you launch confidently, look credible online, and scale with the right level of support."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Monthly care"
        title="Maintenance plans that keep you supported"
        subtitle="We stay after launch to keep your web app secure, fast, and evolving."
        className="bg-white/70"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {CARE_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-ink/10 bg-sand/90 p-6 shadow-soft"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-ocean">{plan.price}</p>
              <p className="mt-3 text-sm text-ink/70">{plan.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/free-consultation">Discuss a plan</Button>
        </div>
      </Section>
    </div>
  );
}
