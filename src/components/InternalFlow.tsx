"use client";

const steps = [
  {
    number: "01",
    title: "New file arrives",
    description: "Closing flows in through the Partner API or direct intake.",
  },
  {
    number: "02",
    title: "Risk engine scores",
    description: "Historical patterns drive a predicted complexity score.",
  },
  {
    number: "03",
    title: "CanLII check",
    description: "Litigation involving the property or parties is flagged in parallel.",
  },
  {
    number: "04",
    title: "Status cert scan",
    description: "For condo deals, the certificate is read for known red flags.",
  },
  {
    number: "05",
    title: "Database learns",
    description: "Structured facts feed the longitudinal building record.",
  },
  {
    number: "06",
    title: "Triage view",
    description: "The team sees the full picture before touching the file manually.",
  },
];

export default function InternalFlow() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, i) => (
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