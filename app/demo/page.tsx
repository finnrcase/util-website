import {
  AssetImageSlot,
  AssetVideoSlot,
} from "@/components/asset-slot";
import {
  InfoCard,
  PageShell,
  PlaceholderFrame,
  PrimaryLink,
  Section,
  SecondaryLink,
} from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const screenshotAssets = [
  {
    label: "Intro state",
    src: "/previews/util-dashboard-setup.png",
    title: "Setup screenshot",
  },
  {
    label: "Forecast analysis",
    src: "/previews/util-dashboard-forecast.png",
    title: "Forecast screenshot",
  },
  {
    label: "Schedule output",
    src: "/previews/util-dashboard-output.png",
    title: "Output screenshot",
  },
];

export default function DemoPage() {
  return (
    <PageShell
      eyebrow="Product Demo"
      title="A more polished home for walkthroughs, screenshots, and the eventual live product preview."
      intro="The interactive demo is not embedded yet, but this page is already designed as a premium placeholder surface so the story feels complete before final media assets arrive."
    >
      <Section
        eyebrow="What belongs here"
        title="Prepared for demo assets"
        intro="As product materials become available, this page is ready for a founder walkthrough, screenshot sequence, or lightweight interactive embed."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0}><InfoCard title="Walkthrough video">Reserve this area for a narrated product overview that explains the scheduling flow in under two minutes.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Screenshot sequence">Add desktop app screens showing setup, forecast comparison, and schedule output.</InfoCard></Reveal>
          <Reveal delay={160}><InfoCard title="Interactive embed">A lightweight prototype or live embed can sit here later if it supports the story cleanly.</InfoCard></Reveal>
        </div>
      </Section>

      <Reveal>
        <PlaceholderFrame
          caption="Demo placeholder"
          title="Future demo embed or walkthrough frame"
        >
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[380px] border-b border-white/8 bg-[radial-gradient(circle_at_top,_rgba(126,71,231,0.18),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(54,126,193,0.14),_transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="absolute inset-6 rounded-[1.7rem] border border-dashed border-white/12 bg-[#111216]/54" />
              <div className="relative h-full">
                {AssetVideoSlot({
                  src: "/video/demo-walkthrough.mp4",
                  posterSrc: "/previews/demo-video-poster.jpg",
                  className: "h-full min-h-[332px] w-full rounded-[1.7rem] object-cover",
                }) ?? (
                  <div className="relative flex h-full min-h-[332px] flex-col justify-between rounded-[1.7rem] p-5">
                    <div className="max-w-sm">
                      <div className="inline-flex rounded-full border border-[#7E47E7]/25 bg-[#7E47E7]/10 px-3 py-1 text-xs font-medium text-[#B7C3E2]">
                        Expected video: /video/demo-walkthrough.mp4
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                        Poster image should be placed at `/previews/demo-video-poster.jpg`.
                        Add a short product walkthrough here when it is ready.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {screenshotAssets.map((asset, index) => (
                        <Reveal key={asset.src} delay={index * 90}>
                          <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-5 text-sm text-[#A7A8AB]">
                            {asset.label}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 p-6 md:p-8">
              {screenshotAssets.map((asset, index) => (
                <Reveal key={asset.src} delay={40 + index * 80}>
                  <AssetImageSlot
                    src={asset.src}
                    alt={asset.title}
                    wrapperClassName="overflow-hidden rounded-[1.3rem]"
                    imageClassName="h-40 w-full rounded-[1.3rem] object-cover"
                    fallbackLabel={asset.label}
                    fallbackTitle={asset.src}
                    fallbackBody="Drop the corresponding dashboard screenshot into this path and it will render automatically here."
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </PlaceholderFrame>
      </Reveal>

      <Section
        eyebrow="Live demo status"
        title="Finished empty state, not an unfinished page"
        intro="Even before the embed is ready, this page should still feel deliberate and investor-ready rather than temporary."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0}><InfoCard title="Screenshots later">Best future inserts: `/previews/util-dashboard-setup.png`, `/previews/util-dashboard-forecast.png`, and `/previews/util-dashboard-output.png`.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Walkthrough later">Best future insert: `/video/demo-walkthrough.mp4` with `/previews/demo-video-poster.jpg`.</InfoCard></Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="Move deeper into the product story"
        intro="Visitors still need a clear path while the live demo remains unavailable."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href="/about">Read the product story</PrimaryLink>
          <SecondaryLink href="/download">See download plans</SecondaryLink>
        </div>
      </Section>
    </PageShell>
  );
}
