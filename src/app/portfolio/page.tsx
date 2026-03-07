import Section from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import { CASE_STUDIES } from "@/lib/content";

export default function PortfolioPage() {
  return (
    <div>
      <Section
        eyebrow="Portfolio"
        title="Proof of impact across Jamaican industries"
        subtitle="These case studies show how we turn manual processes into automated systems."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next project"
        title="Let&apos;s build your success story"
        subtitle="We&apos;ll map your workflow, propose a solution, and deliver a clear timeline."
        className="bg-white/70"
      >
        <Button href="/free-consultation">Request a Quote</Button>
      </Section>
    </div>
  );
}
