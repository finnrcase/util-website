import { AssetImageSlot } from "@/components/asset-slot";
import { InfoCard, PageShell, Section } from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const roadmapItems = [
  {
    phase: "Next",
    title: "Downloadable desktop app",
    description:
      "Package the scheduling experience into a polished desktop release with dependable setup, clean workflows, and a confident first-run experience.",
  },
  {
    phase: "Planned",
    title: "Automatic scheduling",
    description:
      "Move from recommendation-first flows to optional automation that can queue jobs into preferred windows once users trust the model.",
  },
  {
    phase: "Planned",
    title: "Better data integrations",
    description:
      "Improve signal quality with broader electricity-price and carbon-intensity data across more use cases and regions.",
  },
  {
    phase: "Planned",
    title: "Multi-machine optimization",
    description:
      "Extend scheduling from one machine or job to coordinated planning across multiple systems and concurrent workloads.",
  },
  {
    phase: "Exploring",
    title: "Multi-region scheduling",
    description:
      "Help users compare where and when a workload should run when multiple execution regions are available.",
  },
  {
    phase: "Exploring",
    title: "Cloud integrations",
    description:
      "Connect the timing layer to cloud environments so recommendations can flow into broader execution pipelines.",
  },
];

export default function RoadmapPage() {
  return (
    <PageShell
      eyebrow="What's Coming"
      title="A more ambitious roadmap for turning timing-aware compute into a serious product surface."
      intro="Util starts with clear recommendations and grows toward richer scheduling workflows, broader integrations, and more automated execution."
    >
      <Section
        eyebrow="Milestones"
        title="Roadmap"
        intro="The roadmap is framed as an intentional sequence of product capabilities rather than a plain feature list."
      >
        <Reveal>
          <div className="section-shell rounded-[2.1rem] p-5 md:p-8">
            <div className="relative pl-0 md:pl-8">
              <div className="absolute bottom-4 left-3 top-4 hidden w-px bg-gradient-to-b from-[#7E47E7] via-white/12 to-transparent md:block" />
              <div className="space-y-6">
                {roadmapItems.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <div className="relative md:pl-8">
                      <div className="absolute left-0 top-7 hidden h-3 w-3 rounded-full border border-[#B7C3E2]/40 bg-[#7E47E7] shadow-[0_0_18px_rgba(126,71,231,0.45)] md:block" />
                      <div className="surface hairline rounded-[1.8rem] p-6 md:p-7">
                        <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">{item.phase}</div>
                        <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A7A8AB]">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Optional visual"
        title="Roadmap graphic slot"
        intro="If you want a branded capability graphic, drop it in and this page will render it automatically."
      >
        <Reveal>
          <AssetImageSlot
            src="/diagrams/roadmap-capabilities-graphic.svg"
            alt="Roadmap capabilities graphic"
            wrapperClassName="aspect-[16/9] overflow-hidden rounded-[2rem]"
            imageClassName="h-full w-full rounded-[2rem] bg-[#111216] object-contain"
            fallbackLabel="Expected file"
            fallbackTitle="/diagrams/roadmap-capabilities-graphic.svg"
            fallbackBody="Optional asset. Add a wide SVG roadmap or capability graphic here if you want a more editorial visual layer."
          />
        </Reveal>
      </Section>

      <Section
        eyebrow="Capability direction"
        title="What the roadmap is optimizing for"
        intro="Each milestone builds on the same core idea: use timing as a lever for lower spend and lower carbon without burying the user in raw complexity."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0}><InfoCard title="Clarity first">Recommendations need to stay understandable as the product becomes more capable.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Automation second">The product should earn trust before automation takes over scheduling decisions.</InfoCard></Reveal>
          <Reveal delay={160}><InfoCard title="Execution later">Cloud and multi-machine integrations matter, but the story still starts with a clean desktop experience.</InfoCard></Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
