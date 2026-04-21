import { PageShell } from "@/components/marketing";
import { Reveal, RevealLine } from "@/components/reveal";

const roadmapItems = [
  {
    phase: "Available",
    title: "Downloadable desktop app",
    description:
      "Package the scheduling experience into a polished desktop release with dependable setup, clean workflows, and a confident first-run experience.",
    complete: true,
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
      eyebrow="Roadmap"
      title="What's available now, what's planned, and where Util is heading."
      intro="See what is available now, what is planned next, and where Util is heading over time."
    >
      <section>
        <div className="section-shell relative overflow-hidden rounded-[2.2rem] p-5 md:p-8">
          <div className="hero-glow right-[-6rem] top-[-4rem] bg-[rgba(126,71,231,0.18)]" />
          <Reveal variant="blur">
            <div className="relative mx-auto max-w-4xl">
              <RevealLine className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#7E47E7] via-white/18 to-transparent md:block" delay={80} />
              <div className="space-y-5 md:space-y-6">
                {roadmapItems.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 90}
                    variant={index % 2 === 0 ? "left" : "right"}
                  >
                    <div className="relative md:pl-14">
                      <div
                        className={`absolute left-[15px] top-8 hidden h-3 w-3 rounded-full border md:block ${
                          item.complete
                            ? "border-emerald-300/60 bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.45)]"
                            : "border-[#B7C3E2]/40 bg-[#7E47E7] shadow-[0_0_18px_rgba(126,71,231,0.45)]"
                        }`}
                      />
                      <div className="surface hairline rounded-[1.85rem] p-6 md:p-7">
                        <div
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] tracking-[0.24em] uppercase ${
                            item.complete
                              ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-200"
                              : "border-white/10 bg-white/5 text-[#706B71]"
                          }`}
                        >
                          {item.complete ? <span aria-hidden="true">✓</span> : null}
                          <span>{item.phase}</span>
                        </div>
                        <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white md:text-[1.65rem]">
                          {item.title}
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A7A8AB] md:text-[0.98rem] md:leading-7">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
