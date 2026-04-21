import { AssetImageSlot } from "@/components/asset-slot";
import { InfoCard, PageShell, Section } from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const audience = [
  "Independent researchers with overnight workloads",
  "Teams running GPU or CPU batch jobs with flexible deadlines",
  "Operators who care about both spend and grid impact",
];

export default function HomePage() {
  return (
    <PageShell
      eyebrow="About Util"
      title="A compute scheduling software application designed around timing and location as controllable variables."
      intro="We built Util to lower costs and carbon emissions for flexible compute workloads. The application helps users understand the timing tradeoffs that shape both economic and environmental outcomes."
    >
      <Section
        eyebrow="Positioning"
        title="What Util is"
        intro="Util is a recommendation and scheduling layer for large compute workloads. It automatically decides when a workload should run based on changing electricity prices, carbon intensity, and location."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal variant="blur"><InfoCard title="Pricing">Using live electricity price data, Util pushes workloads toward cleaner windows while reducing user costs.</InfoCard></Reveal>
          <Reveal delay={80} variant="blur"><InfoCard title="Carbon intensity">Access to constantly updating emissions data and Util&apos;s carbon predictions helps users compute in a cleaner way.</InfoCard></Reveal>
          <Reveal delay={160} variant="blur"><InfoCard title="Location">With some regions offering cleaner and cheaper energy, Util shifts workloads toward the most optimal machine.</InfoCard></Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Why it matters"
        title="Timing and location change both economic and carbon outcomes"
        intro="A lot of workloads are deadline-sensitive but not start-time-sensitive. That difference creates a meaningful optimization opportunity."
      >
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Reveal variant="left">
            <div className="section-shell rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard title="Electricity cost changes hourly">Running at 1:00 PM and 3:00 AM can produce meaningfully different cost outcomes.</InfoCard>
                <InfoCard title="Clean energy infrastructure">The same workload can land against very different emissions conditions depending on where it is run.</InfoCard>
                <InfoCard title="Flexibility is often already present" className="md:col-span-2">Training runs, overnight jobs, render pipelines, research simulations, and ETL workflows are often movable without harming delivery.</InfoCard>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} variant="right">
            <div className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">System overview</h3>
              <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                A visual summary of how Util evaluates workload timing and turns changing energy signals into clearer scheduling decisions.
              </p>
              <div className="mt-6 overflow-hidden rounded-[1.7rem] border border-white/8 bg-[#111216]/55">
                <AssetImageSlot
                  src="/previews/hero-product-preview.png"
                  alt="Util system overview"
                  wrapperClassName="aspect-[16/10] overflow-hidden rounded-[1.7rem]"
                  imageClassName="h-full w-full rounded-[1.7rem] bg-[#111216] object-contain"
                  fallbackLabel="Expected file"
                  fallbackTitle="/diagrams/hero-product-preview.png"
                  fallbackBody="This section displays the current Util system overview image."
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Audience"
        title="Who Util is for"
        intro="Util is for people who want a practical way to reason about when compute should happen without becoming energy-market specialists."
      >
        <Reveal variant="blur">
          <div className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {audience.map((item, index) => (
                <Reveal key={item} delay={index * 90} variant="blur">
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
          <Reveal delay={40} variant="blur"><InfoCard title="From suggestions to automation">Start with recommendations users can inspect, then move toward increasingly automated scheduling where appropriate.</InfoCard></Reveal>
          <Reveal delay={120} variant="blur"><InfoCard title="From single jobs to systems">Over time, the product can expand from individual workloads to fleets, regions, and more integrated execution environments.</InfoCard></Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
