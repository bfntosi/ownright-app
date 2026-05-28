import SystemMap from "@/components/SystemMap";
import InternalFlow from "@/components/InternalFlow";
import PartnerFlow from "@/components/PartnerFlow";
import PartnerChart from "@/components/PartnerChart";
import ClientFlow from "@/components/ClientFlow";
import BuildingIntelligence from "@/components/BuildingIntelligence";
import MarginNote from "@/components/MarginNote";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
    title: "Notes",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotesPage() {
    return (
        <main className="min-h-screen" style={{ background: "var(--background)" }}>
            <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">

                <RevealOnScroll>
                    {/* Credit line */}
                    <div className="mb-16 text-sm text-[var(--foreground-subtle)]">
                        <p>Built for the Ownright team</p>
                        <p>Bruno Tosi · May 2026</p>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)] mb-3">
                        The Pattern Behind Every Deal
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-16">
                        What sits underneath the dashboard, and where it goes.
                    </p>

                    {/* Opening paragraph */}
                    <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)] mb-24">
                        Two days ago Ownright published the Operators Report 2026. The headline finding was that Canadian buyers are not paralyzed by affordability anymore. They are paralyzed by uncertainty. The report closes with a line worth pulling out. The Canadians who move this year will not be the ones who feel most confident, they will be the ones who feel informed enough to act anyway. This page is about how the data Ownright is already collecting can become that information layer. Every closing flowing through the Partner API is producing patterns that, taken together, are worth more than any single transaction. Right now most of that data is doing operational work, moving closings forward. There is a version where it does strategic work too, becoming the information that helps buyers act, partners advise better, and Ownright operate smarter. This page is what that version could look like.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll>
                    {/* System map */}
                    <div className="mb-4">
                        <SystemMap />
                    </div>
                    <p className="text-sm text-center text-[var(--foreground-subtle)] mb-24 italic">
                        Every transaction has the same center: the client.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll>
                    {/* Section 2: Inside the team */}
                    <section className="mb-24">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)] mb-6">
                            Inside the team
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)] mb-8">
                            Every new closing that lands at Ownright today gets the same starting point. The team reads the file, makes a judgment on complexity, and routes it through the process. That works at current scale. It does not work at ten times the scale. The same data that powers the dashboard can score new files the moment they arrive. A risk engine reads historical patterns. A CanLII check runs in parallel to flag any litigation involving the property, building, or parties. For condo deals, an AI scan reads the status certificate for known red flags like upcoming special assessments, low reserve funds, or board disputes. Every certificate the team reviews also feeds the database, extracting structured facts that build a longitudinal record of each building&apos;s health over time. After enough closings, the database knows which buildings have been declining, which have stable reserves, which have boards in flux. The team sees all of this in the triage view before anyone touches the file manually. Files that look clean run on automation. Files that look complicated get the attention they need. The client gets better service either way because the team&apos;s attention is going where it actually matters.
                        </p>

                        {/* Internal flow */}
                        <div className="mb-8">
                            <InternalFlow />
                        </div>

                        <MarginNote>
                            The Operators Report says financing failure causes 34% of collapsed deals, and 38% of professionals say it is getting worse than two years ago. Predictive risk scoring at file intake flags financing fragility before deals collapse. That is the kind of operational improvement the report calls for without naming.
                        </MarginNote>

                        {/* Triage mockup card */}
                        <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] overflow-hidden">
                            <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--background-subtle)]">
                                <p className="text-sm font-medium text-[var(--foreground)]">Incoming files this morning</p>
                            </div>

                            <div className="divide-y divide-[var(--border)]">

                                <div className="px-6 py-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="text-sm font-medium text-[var(--foreground)]">File 1234 · Etobicoke condo · Purchase</p>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">Low risk</span>
                                    </div>
                                    <p className="text-sm text-[var(--foreground-muted)]">On track. CanLII clean. Status cert clean (auto-scanned). Building history: 4 prior closings on file. Reserve fund stable. No flags.</p>
                                </div>

                                <div className="px-6 py-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="text-sm font-medium text-[var(--foreground)]">File 1235 · Vaughan freehold · Purchase with chain closing</p>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--warning-soft)] text-[var(--warning)]">Medium risk</span>
                                    </div>
                                    <p className="text-sm text-[var(--foreground-muted)]">Watch financing condition. CanLII clean. No status certificate required.</p>
                                </div>

                                <div className="px-6 py-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="text-sm font-medium text-[var(--foreground)]">File 1236 · Toronto condo conversion · Assignment</p>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--danger-soft)] text-[var(--danger)]">High risk</span>
                                    </div>
                                    <p className="text-sm text-[var(--foreground-muted)]">Status certificate flagged: potential special assessment within 12 months, reserve fund below board recommendation. Building history: 7 prior closings. Reserve fund declining 3 years running. Special assessments in 2023 and 2024. CanLII: pending litigation involving condo corporation. Recommend senior lawyer review.</p>
                                </div>

                                <div className="px-6 py-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="text-sm font-medium text-[var(--foreground)]">File 1237 · Mississauga · Refinance</p>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--success-soft)] text-[var(--success)]">Low risk</span>
                                    </div>
                                    <p className="text-sm text-[var(--foreground-muted)]">On track. CanLII clean.</p>
                                </div>

                            </div>
                        </div>
                        <MarginNote>
                            The status certificate database is the asset that compounds. Year one is one-time scans. Year three is the most granular condo building health dataset in Ontario. No traditional firm can build this.
                        </MarginNote>

                    </section>
                </RevealOnScroll>

                <RevealOnScroll>
                    {/* Section 3: Through the network */}
                    <section className="mb-24">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)] mb-6">
                            Through the network
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)] mb-8">
                            Partners are how most clients find Ownright. Brokers, agents, and mortgage brokers refer the deal, and the closing follows. That channel works. The data from every referral is sitting there, telling a story about each partner&apos;s pipeline that the partner cannot see themselves. Their deals run into the same document gaps repeatedly. Their files concentrate in certain deal types. Their clients tend to hit specific friction at specific stages. Some partners send mostly clean deals. Others send a high volume of properties with complicated titles, divorce involvement, or estate transfers. None of this is judgment, it is pattern. The same data that helps Ownright&apos;s team triage internally can give partners a real view of their own book. A brokerage owner sees where their team is strong and where their pipeline carries risk. A mortgage broker sees which lenders are creating the most last-minute scrambles. The intelligence flows back to the people doing the referrals, and the next round of clients gets better service because the partner is sharper.
                        </p>

                        {/* Partner chart */}
                        <div className="mb-8">
                            <PartnerChart />
                        </div>

                        <MarginNote>
                            The Operators Report identifies client indecision as the top cause of delays at 38%. The partner intelligence layer is where this gets addressed. Brokers who can see their own pipeline patterns can spot the deals where indecision is likely, intervene earlier, and reduce the cascade of consequences when a buyer hesitates.
                        </MarginNote>

                        {/* Brokerage pattern mockup card */}
                        <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] overflow-hidden">
                            <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--background-subtle)]">
                                <p className="text-sm font-medium text-[var(--foreground)]">Your brokerage pipeline this quarter</p>
                            </div>

                            <div className="px-6 py-5 border-b border-[var(--border)]">
                                <div className="flex items-baseline gap-6">
                                    <div>
                                        <p className="text-2xl font-semibold text-[var(--foreground)]">42</p>
                                        <p className="text-xs text-[var(--foreground-subtle)] mt-1">Closings referred</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-semibold text-[var(--foreground)]">89%</p>
                                        <p className="text-xs text-[var(--foreground-subtle)] mt-1">On-time close rate</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-semibold text-[var(--danger)]">3</p>
                                        <p className="text-xs text-[var(--foreground-subtle)] mt-1">Files at risk</p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-5">
                                <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">Recurring patterns in your pipeline</p>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-[var(--foreground)]">31% of files miss deposit confirmation at first request</p>
                                        <p className="text-sm text-[var(--foreground-muted)] mt-1">Most common cause: deposit not yet wired by client at offer time</p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-[var(--foreground)]">18% of files involve assignment sales</p>
                                        <p className="text-sm text-[var(--foreground-muted)] mt-1">Versus 4% GTA average</p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-[var(--foreground)]">12% of files involve estate transfers</p>
                                        <p className="text-sm text-[var(--foreground-muted)] mt-1">Recommend earlier client conversation about probate timelines</p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-[var(--foreground)]">Most common friction stage: status certificate review</p>
                                        <p className="text-sm text-[var(--foreground-muted)] mt-1">Average 4 extra business days versus other deal types</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </RevealOnScroll>

                <RevealOnScroll>
                    {/* Section 4: Before the offer is written */}
                    <section className="mb-24">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)] mb-6">
                            Before the offer is written
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)] mb-8">
                            Most clients meet a lawyer when the deal is firm. That timing has always been about retainers and liability, not about when the client actually needs the information. By the time the lawyer is in the picture, the offer is written, the deposit is on the table, and the room for adjustment is narrow. A different version of this puts the data in the client&apos;s hands earlier. They type the address they are about to make an offer on. The system pulls everything Ownright knows about that building, every past closing pattern, every status certificate fact in the database, every relevant CanLII case involving the property or the condo corporation. The output is plain language. Average closing complications for this building. Reserve fund history. Recent litigation. Things to ask about before writing the offer. None of this is legal advice. It is what every buyer should be able to see before signing anything. The platform also keeps buyers and sellers informed between transactions, with weekly publications drawn from the same data. Building of the week. Closing pulse. Neighborhood patterns. The point is not to give people more news. The point is to give them informed enough to act, in the words of the Operators Report. The retainer conversation happens later, on the deal that comes from a client who already trusts Ownright because the platform helped them before they paid for anything.
                        </p>

                        {/* Client flow */}
                        <div className="mb-8">
                            <ClientFlow />
                        </div>

                        {/* Building intelligence demo */}
                        <div className="mb-8">
                            <BuildingIntelligence />
                        </div>

                        <MarginNote>
                            This is where the Operators Report&apos;s central question gets answered. Buyers are not less capable of buying. They are less informed than they need to be to act with confidence. The platform layer, combined with weekly publication of patterns Ownright is seeing in real transactions, becomes the information source that lets buyers cross the threshold from hesitation to action.
                        </MarginNote>

                        {/* Publication preview */}
                        <div className="rounded-lg border border-[var(--border)] bg-[var(--background-card)] overflow-hidden">
                            <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--background-subtle)]">
                                <p className="text-sm font-medium text-[var(--foreground)]">The Ownright Brief · This week</p>
                            </div>

                            <div className="divide-y divide-[var(--border)]">

                                <div className="px-6 py-5">
                                    <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-2">Building of the week</p>
                                    <p className="text-base font-medium text-[var(--foreground)]">88 Harbour Street · Toronto</p>
                                    <p className="text-sm text-[var(--foreground-muted)] mt-1">Reserve fund stable. No pending assessments. Twelve closings on file. Average time to close 32 days.</p>
                                </div>

                                <div className="px-6 py-5">
                                    <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-2">Closing pulse</p>
                                    <p className="text-base font-medium text-[var(--foreground)]">Financing failures up 8 percent week over week</p>
                                    <p className="text-sm text-[var(--foreground-muted)] mt-1">Most concentrated in detached purchases above 1.5 million. Two lenders responsible for over half. Worth confirming financing conditions earlier in the process.</p>
                                </div>

                                <div className="px-6 py-5">
                                    <p className="text-xs uppercase tracking-wider text-[var(--foreground-subtle)] mb-2">Neighborhood pattern</p>
                                    <p className="text-base font-medium text-[var(--foreground)]">Brampton condo assignments climbing</p>
                                    <p className="text-sm text-[var(--foreground-muted)] mt-1">Eighteen percent of closings in Brampton condo buildings this month are assignments versus a four percent GTA average. Pre-construction projects coming to occupancy.</p>
                                </div>

                            </div>
                        </div>

                    </section>
                </RevealOnScroll>

                {/* Section 5: Closing */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)] mb-6">
                        What happens next
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)] mb-8">
                        This is one page. The full version is many conversations, many tradeoffs, many decisions about sequencing and risk. The internal data layer is the foundation. The partner intelligence builds on it. The client-facing platform is the brand and reach play that depends on both. None of it is plug-and-play. The data needs structure, the regulatory framing matters, and the partner conversations need someone willing to actually have them, not just analyze them on a slide. The dashboard was the first test, to see if the closing layer could be made visible to the people moving the deal. It worked. This page is the second test, to see if the layer underneath could be made visible too. What happens after is up to you. I would love to talk through any of it.
                    </p>

                    <MarginNote>
                        The Operators Report is a diagnosis. The data layer described on this page is the response. Joel published the question on May 26. This page is what the answer could look like from a builder&apos;s perspective.
                    </MarginNote>

                    {/* Footer */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <p className="text-sm text-[var(--foreground-subtle)] mb-1">Built specifically for Ownright.</p>
                        <p className="text-sm text-[var(--foreground-subtle)]">
                            <a href="https://www.linkedin.com/in/bruno-ftosi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] underline">Bruno Tosi</a>
                            {" · May 2026"}
                        </p>
                    </div>

                </section>

            </div >
        </main >
    );
}