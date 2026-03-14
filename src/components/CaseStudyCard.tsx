import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  demoUrl?: string;
}

export default function CaseStudyCard({
  title,
  industry,
  problem,
  solution,
  results,
  demoUrl
}: CaseStudyCardProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
        {industry}
      </p>
      <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{title}</h3>
      <div className="mt-4 space-y-3 text-sm text-ink/70">
        <p>
          <span className="font-semibold text-ink">Challenge:</span> {problem}
        </p>
        <p>
          <span className="font-semibold text-ink">System:</span> {solution}
        </p>
        <p>
          <span className="font-semibold text-ink">Outcome:</span> {results}
        </p>
      </div>
      {demoUrl ? (
        <div className="mt-5">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-ocean/30 bg-ocean/10 px-4 py-2 text-sm font-semibold text-ocean transition hover:bg-ocean/20"
          >
            View Live Demo
          </Link>
        </div>
      ) : null}
    </div>
  );
}
