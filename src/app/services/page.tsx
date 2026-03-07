import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { DIFFERENTIATORS, SERVICE_LIST, SOLUTIONS } from "@/lib/content";

export default function ServicesPage() {
  return (
    <div>
      <Section
        eyebrow="Services"
        title="Full-stack development with Jamaican business insight"
        subtitle="From strategy to launch, we build reliable systems that reduce manual work and grow revenue."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LIST.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What we build"
        title="Popular web applications"
        subtitle="We tailor every build, but these are the most requested systems for Jamaican teams."
        className="bg-white/70"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-ink/10 bg-sand/90 p-6"
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
        eyebrow="Why us"
        title="A local team that stays engaged"
        subtitle="You get a dedicated product team with clear communication, fast support, and maintenance options."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-ink/10 bg-white/90 p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/free-consultation">Request a Quote</Button>
        </div>
      </Section>
    </div>
  );
}
