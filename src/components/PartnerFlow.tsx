"use client";

const steps = [
  {
    number: "01",
    title: "Partner refers a deal",
    description: "Broker, agent, or mortgage broker sends a closing to Ownright.",
  },
  {
    number: "02",
    title: "Deal flows through",
    description: "The closing process runs, generating structured data along the way.",
  },
  {
    number: "03",
    title: "Patterns emerge",
    description: "Across the partner's referrals, recurring friction and deal types surface.",
  },
  {
    number: "04",
    title: "Partner sees the view",
    description: "Each partner gets a real read on their own book, not a generic report.",
  },
  {
    number: "05",
    title: "Partner adjusts",
    description: "Earlier conversations, better expectations, fewer surprises.",
  },
  {
    number: "06",
    title: "Better deals flow back",
    description: "The next round of clients gets cleaner service because the partner is sharper.",
  },
];

export default function PartnerFlow() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] p-5 hover:border-[var(--accent)] transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                {step.number}
              </span>
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                {step.title}
              </h3>
            </div>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}