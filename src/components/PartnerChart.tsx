"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type Brokerage = {
  name: string;
  thisMonth: number;
  lastSixMonths: number;
  onTimeRate: number;
  topFriction: string;
};

const BROKERAGES: Brokerage[] = [
  {
    name: "The Sterling Group",
    thisMonth: 48,
    lastSixMonths: 312,
    onTimeRate: 94,
    topFriction: "Mostly clean. Occasional title delays on heritage properties.",
  },
  {
    name: "Avenue Realty",
    thisMonth: 36,
    lastSixMonths: 224,
    onTimeRate: 81,
    topFriction: "Financing condition failures (28% of files).",
  },
  {
    name: "Beacon Estate",
    thisMonth: 22,
    lastSixMonths: 145,
    onTimeRate: 88,
    topFriction: "Status certificate delays. Concentration in older buildings.",
  },
  {
    name: "Bridge Properties",
    thisMonth: 54,
    lastSixMonths: 358,
    onTimeRate: 76,
    topFriction: "Document gaps at deposit confirmation (38% of files).",
  },
  {
    name: "Cardinal Realty",
    thisMonth: 31,
    lastSixMonths: 198,
    onTimeRate: 91,
    topFriction: "Mostly clean. Occasional financing slow-down.",
  },
];

export default function PartnerChart() {
  const [view, setView] = useState<"thisMonth" | "lastSixMonths">("thisMonth");
  const [selected, setSelected] = useState<string | null>(null);

  const data = BROKERAGES.map((b) => ({
    name: b.name,
    value: view === "thisMonth" ? b.thisMonth : b.lastSixMonths,
    onTimeRate: b.onTimeRate,
    topFriction: b.topFriction,
  }));

  const selectedBrokerage = selected
    ? BROKERAGES.find((b) => b.name === selected)
    : null;

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] overflow-hidden">
      {/* Header with toggle */}
      <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--background-subtle)] flex items-center justify-between">
        <p className="text-sm font-medium text-[var(--foreground)]">
          Partner network · Closings referred
        </p>
        <div className="flex gap-1 rounded-md border border-[var(--border)] bg-[var(--background-card)] p-1">
          <button
            onClick={() => setView("thisMonth")}
            className={`text-xs px-3 py-1 rounded transition-colors ${
              view === "thisMonth"
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            This month
          </button>
          <button
            onClick={() => setView("lastSixMonths")}
            className={`text-xs px-3 py-1 rounded transition-colors ${
              view === "lastSixMonths"
                ? "bg-[var(--accent)] text-white"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            Last 6 months
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              horizontal={false}
            />
            <XAxis
              type="number"
              stroke="var(--foreground-subtle)"
              fontSize={12}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="var(--foreground-muted)"
              fontSize={12}
              width={140}
            />
            <Tooltip
              contentStyle={{
                background: "var(--background-card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "13px",
                color: "var(--foreground)",
              }}
              cursor={{ fill: "var(--background-subtle)" }}
            />
            <Bar
              dataKey="value"
              radius={[0, 4, 4, 0]}
              onClick={(d) => setSelected(d.name ?? null)}
              style={{ cursor: "pointer" }}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={
                    selected === entry.name
                      ? "var(--accent-deep)"
                      : "var(--accent)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Selected brokerage detail */}
      {selectedBrokerage && (
        <div className="px-6 py-5 border-t border-[var(--border)] bg-[var(--background-subtle)]">
          <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-2">
            {selectedBrokerage.name}
          </p>
          <div className="flex items-baseline gap-6 mb-3">
            <div>
              <p className="text-2xl font-semibold text-[var(--foreground)]">
                {selectedBrokerage.onTimeRate}%
              </p>
              <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                On-time close rate
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[var(--foreground)]">
                {view === "thisMonth"
                  ? selectedBrokerage.thisMonth
                  : selectedBrokerage.lastSixMonths}
              </p>
              <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                {view === "thisMonth"
                  ? "Closings this month"
                  : "Closings last 6 months"}
              </p>
            </div>
          </div>
          <p className="text-sm text-[var(--foreground-muted)]">
            {selectedBrokerage.topFriction}
          </p>
        </div>
      )}

      {!selectedBrokerage && (
        <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--background-subtle)]">
          <p className="text-xs text-[var(--foreground-subtle)] italic">
            Click a bar to see brokerage detail.
          </p>
        </div>
      )}
    </div>
  );
}