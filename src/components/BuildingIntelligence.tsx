"use client";

import { useState } from "react";

type BuildingData = {
  name: string;
  address: string;
  yearBuilt: number;
  units: number;
  closingPatterns: {
    avgDays: number;
    closingsOnFile: number;
    commonComplications: string;
  };
  statusCert: {
    reserveFund: string;
    recentAssessments: string;
    boardActivity: string;
  };
  canlii: {
    cases: number;
    summary: string;
  };
  thingsToAsk: string[];
};

const MOCK_BUILDINGS: Record<string, BuildingData> = {
  "88 harbour": {
    name: "88 Harbour Street",
    address: "88 Harbour Street, Toronto",
    yearBuilt: 2017,
    units: 880,
    closingPatterns: {
      avgDays: 32,
      closingsOnFile: 12,
      commonComplications: "Status certificate review often runs 3 to 5 days longer than average.",
    },
    statusCert: {
      reserveFund: "Stable. Within board recommended range for the last 3 years.",
      recentAssessments: "No special assessments recorded in the last 24 months.",
      boardActivity: "Board stable. No recent litigation or major disputes.",
    },
    canlii: {
      cases: 0,
      summary: "No recent legal activity involving the condo corporation.",
    },
    thingsToAsk: [
      "Status certificate fees and how quickly the corporation responds to requests",
      "Any planned major repairs or capital projects in the next 5 years",
      "Pet policy and short-term rental restrictions",
    ],
  },
  "1 yonge": {
    name: "1 Yonge Street",
    address: "1 Yonge Street, Toronto",
    yearBuilt: 2020,
    units: 1200,
    closingPatterns: {
      avgDays: 35,
      closingsOnFile: 18,
      commonComplications: "Higher rate of assignment sales. Financing conditions take longer to clear.",
    },
    statusCert: {
      reserveFund: "Adequate. Slightly below board recommendation as of last review.",
      recentAssessments: "One special assessment in 2024 for elevator modernization.",
      boardActivity: "Two board changes in the last 18 months. No litigation.",
    },
    canlii: {
      cases: 0,
      summary: "No recent legal activity involving the condo corporation.",
    },
    thingsToAsk: [
      "Whether the elevator modernization is fully paid or still being financed",
      "Current reserve fund balance compared to the most recent study",
      "Any pending votes on future capital expenditures",
    ],
  },
  "100 western": {
    name: "100 Western Battery Road",
    address: "100 Western Battery Road, Toronto",
    yearBuilt: 2008,
    units: 460,
    closingPatterns: {
      avgDays: 38,
      closingsOnFile: 7,
      commonComplications: "Pre-construction conversion. Status certificate findings have flagged maintenance gaps.",
    },
    statusCert: {
      reserveFund: "Below board recommendation. Declining trend over the last 3 years.",
      recentAssessments: "Special assessments in 2023 and 2024. Potential third within 12 months.",
      boardActivity: "Active disputes between board and unit owners. Recent legal correspondence on file.",
    },
    canlii: {
      cases: 2,
      summary: "Pending litigation involving the condo corporation. Unresolved as of last update.",
    },
    thingsToAsk: [
      "Status of pending litigation and exposure to the corporation",
      "Reserve fund recovery plan and timeline",
      "Whether any additional special assessments are likely in the next 18 months",
      "Insurance claims history and current premium trends",
    ],
  },
};

const SUGGESTIONS = [
  { label: "88 Harbour Street", key: "88 harbour" },
  { label: "1 Yonge Street", key: "1 yonge" },
  { label: "100 Western Battery Road", key: "100 western" },
];

export default function BuildingIntelligence() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BuildingData | null>(null);

  const handleSearch = (key: string) => {
    setLoading(true);
    setResult(null);
    setQuery(SUGGESTIONS.find((s) => s.key === key)?.label || "");

    setTimeout(() => {
      const data = MOCK_BUILDINGS[key];
      if (data) {
        setResult(data);
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] overflow-hidden">
      {/* Search input area */}
      <div className="p-6 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-3">
          Try a building
        </p>
        <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Type a Toronto building or address"
  className="w-full px-4 py-3 mb-3 rounded-md border border-[var(--border)] bg-[var(--background-card)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
  readOnly
/>
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => handleSearch(s.key)}
              className="text-xs px-3 py-1.5 rounded-full bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="p-12 text-center">
            <div className="inline-block w-6 h-6 border-2 border-[var(--border)] border-t-[var(--accent)] rounded-full animate-spin mb-3" />
            <p className="text-sm text-[var(--foreground-subtle)]">
            Pulling intelligence on {query}
          </p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !result && (
        <div className="p-12 text-center">
          <p className="text-sm text-[var(--foreground-subtle)]">
            Click a suggestion above to see what the intelligence layer surfaces.
          </p>
        </div>
      )}

      {/* Results */}
      {!loading && result && (
        <div className="divide-y divide-[var(--border)]">
          {/* Building snapshot */}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-2">
              Building
            </p>
            <p className="text-base font-semibold text-[var(--foreground)] mb-1">
              {result.name}
            </p>
            <p className="text-sm text-[var(--foreground-muted)]">
              {result.address} · Built {result.yearBuilt} · {result.units} units
            </p>
          </div>

          {/* Closing patterns */}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-3">
              Closing patterns
            </p>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-2xl font-semibold text-[var(--foreground)]">
                  {result.closingPatterns.avgDays}
                </p>
                <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                  Average days to close
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--foreground)]">
                  {result.closingPatterns.closingsOnFile}
                </p>
                <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                  Past closings on file
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--foreground-muted)]">
              {result.closingPatterns.commonComplications}
            </p>
          </div>

          {/* Status certificate */}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-3">
              Status certificate intelligence
            </p>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Reserve fund</p>
                <p className="text-sm text-[var(--foreground-muted)]">{result.statusCert.reserveFund}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Recent assessments</p>
                <p className="text-sm text-[var(--foreground-muted)]">{result.statusCert.recentAssessments}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Board activity</p>
                <p className="text-sm text-[var(--foreground-muted)]">{result.statusCert.boardActivity}</p>
              </div>
            </div>
          </div>

          {/* CanLII */}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-3">
              Legal activity (CanLII)
            </p>
            <p className="text-sm text-[var(--foreground-muted)]">
              {result.canlii.cases > 0
                ? `${result.canlii.cases} relevant case${result.canlii.cases > 1 ? "s" : ""} found. ${result.canlii.summary}`
                : result.canlii.summary}
            </p>
          </div>

          {/* Things to ask */}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-3">
              Things to ask about before writing the offer
            </p>
            <ul className="space-y-2">
              {result.thingsToAsk.map((item, i) => (
                <li key={i} className="text-sm text-[var(--foreground)] flex items-start gap-2">
                  <span className="text-[var(--foreground-subtle)] mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="p-6 bg-[var(--background-subtle)]">
            <p className="text-xs text-[var(--foreground-subtle)] italic">
              Demo data for illustration. The production version would pull from Ownright&apos;s internal database, CanLII, and public records in real time. This is not legal advice.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}