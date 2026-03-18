import { AssetImageSlot } from "@/components/asset-slot";
import { InfoCard, PageShell, Section } from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const audience = [
  "Independent researchers with overnight workloads",
  "Teams running GPU or CPU batch jobs with flexible deadlines",
  "Operators who care about both spend and grid impact",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Util"
      title="A compute scheduling product designed around timing as a controllable variable."
      intro="Util exists because flexible workloads already create room for better timing decisions, but the cost and carbon signals that should guide those decisions are rarely surfaced in everyday tooling."
    >
      <Section
        eyebrow="Positioning"
        title="What Util is"
        intro="Util is a recommendation and scheduling layer for compute. It helps users decide when a workload should run based on changing electricity prices and carbon intensity."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0}><InfoCard title="Explainable recommendations">The product is designed to show why a schedule is better, not just output a hidden score.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Desktop-first direction">The real product is a downloadable application. This website is the marketing surface where the story and future download path live.</InfoCard></Reveal>
          <Reveal delay={160}><InfoCard title="Operator clarity">Users should be able to understand timing tradeoffs quickly without reading raw energy charts.</InfoCard></Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Why it matters"
        title="Timing compute changes both economic and carbon outcomes"
        intro="A lot of workloads are deadline-sensitive but not start-time-sensitive. That difference creates a real optimization surface."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="section-shell rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard title="Electricity cost changes hourly">Running at 1:00 PM and 3:00 AM can produce meaningfully different cost outcomes.</InfoCard>
                <InfoCard title="Carbon intensity shifts with the grid">The same workload can land against very different emissions conditions depending on timing.</InfoCard>
                <InfoCard title="Flexibility is often already present">Training runs, overnight jobs, render pipelines, and ETL workflows are often movable without harming delivery.</InfoCard>
                <InfoCard title="Better timing compounds">Once timing becomes part of planning, optimization becomes repeatable instead of ad hoc.</InfoCard>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
              <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">Visual anchor</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">System diagram slot</h3>
              <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">Drop `/diagrams/util-system-diagram.svg` here to show workload input, grid signal comparison, and optimized output.</p>
              <AssetImageSlot
                src="/diagrams/util-system-diagram.svg"
                alt="Util system diagram"
                wrapperClassName="mt-6 aspect-[16/10] overflow-hidden rounded-[1.7rem]"
                imageClassName="h-full w-full rounded-[1.7rem] bg-[#111216] object-contain"
                fallbackLabel="Expected file"
                fallbackTitle="/diagrams/util-system-diagram.svg"
                fallbackBody="Add the system explainer diagram here. A wide SVG with transparent background works best."
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Audience"
        title="Who Util is for"
        intro="Util is for people who want a practical way to reason about when compute should happen without becoming energy-market specialists."
      >
        <Reveal>
          <div className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {audience.map((item, index) => (
                <Reveal key={item} delay={index * 90}>
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-6 text-sm leading-6 text-[#A7A8AB]">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Long-term vision"
        title="From recommendations now to more automated systems later"
        intro="The long-term direction is to make timing-aware compute a normal part of how flexible workloads get planned and launched."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={40}><InfoCard title="From suggestions to automation">Start with recommendations users can inspect, then move toward increasingly automated scheduling where appropriate.</InfoCard></Reveal>
          <Reveal delay={120}><InfoCard title="From single jobs to systems">Over time, the product can expand from individual workloads to fleets, regions, and more integrated execution environments.</InfoCard></Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
