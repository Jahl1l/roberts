interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="rounded-2xl border border-ink/10 bg-white/80 p-5">
      <summary className="cursor-pointer font-semibold text-ink">
        {question}
      </summary>
      <p className="mt-3 text-sm text-ink/70">{answer}</p>
    </details>
  );
}
