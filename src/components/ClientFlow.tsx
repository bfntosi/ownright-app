"use client";

const steps = [
  {
    number: "01",
    title: "Buyer types address",
    description: "Before the offer, before the retainer. Just curious about a property.",
  },
  {
    number: "02",
    title: "Search runs in parallel",
    description: "Internal database, CanLII, and public records all queried at once.",
  },
  {
    number: "03",
    title: "Patterns surface",
    description: "Past closings in this building, status certificate facts, legal history.",
  },
  {
    number: "04",
    title: "Plain language summary",
    description: "What to expect, what to ask about, what the building is actually like.",
  },
  {
    number: "05",
    title: "Buyer is informed",
    description: "The trust is built before any money changes hands.",
  },
  {
    number: "06",
    title: "Closing follows",
    description: "When the offer goes firm, Ownright is already the obvious choice.",
  },
];

export default function ClientFlow() {
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