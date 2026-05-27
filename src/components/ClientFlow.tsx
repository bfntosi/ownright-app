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
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                {step.number}
              </span>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {step.title}
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}