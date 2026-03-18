import Link from "next/link";
import {
  AssetImageSlot,
} from "@/components/asset-slot";
import {
  Eyebrow,
  InfoCard,
  Metric,
  PrimaryLink,
  SecondaryLink,
  Section,
} from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const workflowSteps = [
  {
    title: "Capture workload intent",
    description:
      "Define runtime, deadline, region, and whether the run should bias toward lower spend, lower carbon, or a deliberate balance.",
  },
  {
    title: "Score the available windows",
    description:
      "Util compares forecasted hours instead of assuming now is best, surfacing measurable tradeoffs across the scheduling horizon.",
  },
  {
    title: "Act on a recommendation",
    description:
      "The output is a usable run plan with enough context to trust the timing decision before desktop automation arrives.",
  },
];

const scheduleRows = [
  { slot: "Run now", cost: "$18.40", carbon: "6.2 kg CO2e", width: "92%", tone: "text-rose-200" },
  { slot: "02:00 - 05:00", cost: "$11.10", carbon: "3.8 kg CO2e", width: "54%", tone: "text-emerald-200" },
  { slot: "04:00 - 07:00", cost: "$10.70", carbon: "4.1 kg CO2e", width: "46%", tone: "text-[#B7C3E2]" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
      <section className="relative overflow-hidden rounded-[2.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(26,27,34,0.92),rgba(17,18,22,0.76))] px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.38)] md:px-10 md:py-14">
        <div className="hero-glow left-[-4rem] top-[-3rem] bg-[rgba(126,71,231,0.28)]" />
        <div className="hero-glow right-[-5rem] top-[4rem] bg-[rgba(54,126,193,0.2)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(183,195,226,0.06),_transparent_46%)]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Timing-aware compute</Eyebrow>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.065em] text-white md:text-7xl md:leading-[0.96]">
                Make compute timing a product decision, not an afterthought.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#A7A8AB] md:text-lg md:leading-8">
                Util turns hourly electricity cost and carbon signals into a premium
                scheduling workflow for flexible workloads, so teams can run at
                better times without sacrificing deadlines.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/demo">Preview the workflow</PrimaryLink>
                <SecondaryLink href="/download">See download plans</SecondaryLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Metric label="Optimization" value="Cost + carbon" tone="accent" />
                <Metric label="Experience" value="Desktop-first" />
                <Metric label="Output" value="Actionable schedule" tone="positive" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-strong hairline float-slow relative overflow-hidden rounded-[2.1rem] p-5 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(126,71,231,0.14),_transparent_44%)]" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative flex items-center justify-between border-b border-white/8 pb-4">
                <div>
                  <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">
                    Optimized schedule preview
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    Flexible GPU batch
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Preferred window found
                </div>
              </div>

              <div className="relative mt-5 grid gap-4 sm:grid-cols-3">
                <Metric label="Runtime" value="3h 20m" />
                <Metric label="Deadline" value="07:30" />
                <Metric label="Savings" value="-39%" tone="positive" />
              </div>

              <div className="relative mt-5 rounded-[1.6rem] border border-white/8 bg-black/20 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[#706B71]">
                  <span>Window analysis</span>
                  <span>Pacific region</span>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-2">
                  {[22, 15, 11, 9, 10, 14, 18].map((value, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="relative flex h-28 w-full items-end overflow-hidden rounded-full bg-white/[0.04]">
                        <div
                          className="w-full rounded-full bg-[linear-gradient(180deg,#B7C3E2_0%,#367EC1_42%,#7E47E7_100%)]"
                          style={{ height: `${value * 4}px` }}
                        />
                      </div>
                      <span className="text-[11px] text-[#706B71]">{index + 1}:00</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-5 space-y-3">
                {scheduleRows.map((row) => (
                  <div
                    key={row.slot}
                    className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-[#B7C3E2]/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-white">{row.slot}</div>
                        <div className="text-xs text-[#706B71]">3.2 kWh equivalent forecast</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${row.tone}`}>{row.cost}</div>
                        <div className="text-xs text-[#A7A8AB]">{row.carbon}</div>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 rounded-full bg-white/6">
                      <div
                        className="shimmer-line h-1.5 rounded-full bg-[linear-gradient(90deg,#367EC1_0%,#7E47E7_100%)]"
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mt-20 space-y-20 md:mt-24 md:space-y-24">
        <Section
          eyebrow="Overview"
          title="A marketing site for the same product family as the app"
          intro="This site explains the product narrative with a more presentation-focused layer, while keeping the visual language grounded in the Util application itself."
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal delay={60}>
              <div className="section-shell rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <InfoCard title="Decision engine">
                    Util turns time-varying energy signals into an understandable run recommendation instead of leaving timing to habit.
                  </InfoCard>
                  <InfoCard title="Operator-focused UX">
                    The experience is framed like a premium dashboard: concise metrics, schedule comparisons, and visible tradeoffs.
                  </InfoCard>
                  <InfoCard title="Desktop app direction">
                    The real product is downloadable software. This site is the polished public entry point for that story.
                  </InfoCard>
                  <InfoCard title="Built for flexible workloads">
                    Batch jobs, model training, rendering, ETL, and overnight tasks all benefit when timing becomes intentional.
                  </InfoCard>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
                <div className="text-[11px] tracking-[0.26em] text-[#706B71] uppercase">
                  Product preview
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Hero product image slot
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                  Drop your final hero render or screenshot into `/previews/hero-product-preview.png` and it will appear here automatically.
                </p>
                <AssetImageSlot
                  src="/previews/hero-product-preview.png"
                  alt="Util hero product preview"
                  wrapperClassName="mt-6 aspect-[4/3] overflow-hidden rounded-[1.7rem]"
                  imageClassName="h-full w-full rounded-[1.7rem] object-cover"
                  fallbackLabel="Expected file"
                  fallbackTitle="/previews/hero-product-preview.png"
                  fallbackBody="Add the main marketing screenshot or rendered product preview here. A 4:3 image works best."
                />
              </div>
            </Reveal>
          </div>
        </Section>

        <Section
          eyebrow="Problem and solution"
          title="The timing of compute is often controllable, but the signals that should guide it are hidden"
          intro="Util closes that gap by comparing possible windows and producing a recommendation users can understand quickly."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={50}>
              <div className="section-shell rounded-[2rem] p-6 md:p-8">
                <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">The problem</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Static schedules ignore volatile cost and grid conditions.
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                  Many jobs have a deadline, not a hard start time. Running immediately often means paying for urgency that was never required.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="section-shell rounded-[2rem] p-6 md:p-8">
                <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">The solution</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  A timing-aware workflow with legible tradeoffs.
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                  Util models the horizon, scores candidate windows, and returns a schedule recommendation with the context needed to trust it.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section
          eyebrow="Workflow"
          title="How it works"
          intro="The product story is straightforward: define the job, evaluate the horizon, and choose the best window."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <InfoCard title={`${index + 1}. ${step.title}`}>
                  {step.description}
                </InfoCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Output"
          title="A more convincing example schedule visualization"
          intro="The goal is not just to show that optimization exists, but to make the recommendation feel explainable and credible."
        >
          <Reveal>
            <div className="surface-strong hairline rounded-[2.1rem] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">
                    Run comparison
                  </div>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                    Run-now versus optimized-window planning
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                    Marketing copy should still feel product-shaped. This module previews the kind of UI detail users can expect from the desktop app.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Metric label="Run-now cost" value="$18.40" />
                    <Metric label="Best window" value="$10.70" tone="positive" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {scheduleRows.map((row, index) => (
                    <Reveal key={row.slot} delay={index * 90}>
                      <div className="rounded-[1.45rem] border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#B7C3E2]/20 hover:bg-white/[0.05]">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-xs tracking-[0.24em] text-[#706B71] uppercase">
                              Option {index + 1}
                            </div>
                            <div className="mt-1 text-base font-medium text-white">{row.slot}</div>
                          </div>
                          <div className={`text-sm font-medium ${row.tone}`}>{row.cost}</div>
                        </div>
                        <div className="mt-4 h-2 rounded-full bg-white/6">
                          <div
                            className="shimmer-line h-2 rounded-full bg-[linear-gradient(90deg,#367EC1_0%,#7E47E7_100%)]"
                            style={{ width: row.width }}
                          />
                        </div>
                        <div className="mt-3 text-xs text-[#A7A8AB]">{row.carbon}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Reveal>
          <section className="relative overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(26,27,34,0.94),rgba(32,35,42,0.78))] px-6 py-10 md:px-10 md:py-12">
            <div className="hero-glow right-[-4rem] top-[-2rem] bg-[rgba(126,71,231,0.24)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">
                  Call to action
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                  Follow Util as the downloadable product takes shape.
                </h2>
                <p className="mt-4 text-base leading-7 text-[#A7A8AB]">
                  This site is already structured for launch materials, future downloads, and richer product media as the desktop app gets closer to release.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/about">Learn more</PrimaryLink>
                <SecondaryLink href="/roadmap">See the roadmap</SecondaryLink>
              </div>
            </div>
          </section>
        </Reveal>

        <div className="text-sm text-[#A7A8AB]">
          Future brand asset slot: replace the shared logo files in `/brand/` when they are ready.
          <Link href="/download" className="ml-2 text-white underline underline-offset-4">
            Download page asset slots
          </Link>
        </div>
      </div>
    </div>
  );
}
