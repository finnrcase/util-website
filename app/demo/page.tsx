import {
  AssetImageSlot,
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

const liveDemoUrl = "https://utilplatformv01.streamlit.app/";

export default function DemoPage() {
  return (
    <PageShell
      eyebrow="Product Demo"
      title="A polished home for screenshots, walkthroughs, and the live product preview."
      intro="The live demo is available now. Because the current Streamlit deployment redirects through Streamlit's hosted auth flow, this page uses a polished launch surface instead of an unreliable embedded mini-window."
    >
      <Section
        eyebrow="What belongs here"
        title="Prepared for demo assets"
        intro="This page now gives visitors a direct path into the live product while still leaving room for screenshots and a future walkthrough."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0}><InfoCard title="Live product">Send visitors straight into the working Streamlit app with a clear launch point.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Screenshot sequence">Add desktop app screens showing setup, forecast comparison, and schedule output.</InfoCard></Reveal>
          <Reveal delay={160}><InfoCard title="Walkthrough video">Drop in a short narrated product tour later for people who want the guided version first.</InfoCard></Reveal>
        </div>
      </Section>

      <Reveal>
        <PlaceholderFrame
          caption="Live demo"
          title="Launch the interactive Util demo"
        >
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[380px] border-b border-white/8 bg-[radial-gradient(circle_at_top,_rgba(126,71,231,0.18),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(54,126,193,0.14),_transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="absolute inset-6 rounded-[1.7rem] border border-white/10 bg-[#0F1117]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
              <div className="relative flex h-full min-h-[332px] flex-col justify-between rounded-[1.7rem]">
                <div className="rounded-[1.4rem] border border-white/10 bg-[#0B0D12]/92 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-2 border-b border-white/8 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    <div className="ml-3 truncate rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[11px] tracking-[0.18em] text-[#8C93A8] uppercase">
                      utilplatformv01.streamlit.app
                    </div>
                  </div>

                  <div className="grid gap-5 px-2 py-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
                    <div>
                      <div className="inline-flex rounded-full border border-[#7E47E7]/25 bg-[#7E47E7]/10 px-3 py-1 text-xs font-medium text-[#B7C3E2]">
                        Interactive demo available
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">
                        Open the working product in a dedicated window.
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-6 text-[#A7A8AB]">
                        The current hosted Streamlit deployment does not behave like a clean embeddable widget, so the best visitor experience is a direct launch into the real app.
                      </p>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <PrimaryLink href={liveDemoUrl}>Open live demo</PrimaryLink>
                        <SecondaryLink href={liveDemoUrl}>Open demo URL</SecondaryLink>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-[#A7A8AB]">
                        Full interaction works best in its own browser tab.
                      </div>
                      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-[#A7A8AB]">
                        Keeps the real app usable on both desktop and mobile.
                      </div>
                      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-4 text-sm text-[#A7A8AB]">
                        Easy to swap for an embed later if you move to an iframe-friendly deployment.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {screenshotAssets.map((asset, index) => (
                    <Reveal key={asset.src} delay={index * 90}>
                      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-5 text-sm text-[#A7A8AB]">
                        {asset.label}
                      </div>
                    </Reveal>
                  ))}
                </div>
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
        title="Best current experience is a direct launch"
        intro="Right now the app is reachable, but its hosted setup is better treated as a destination than as an embedded micro-window."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0}><InfoCard title="Why not embed it">The current Streamlit URL redirects through Streamlit&apos;s hosted auth/share flow, which makes iframe-style embedding unreliable for visitors.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Best upgrade path">If you later host the app on an iframe-friendly domain, this hero can be swapped to a true embedded window with minimal layout changes.</InfoCard></Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="Move deeper into the product story"
        intro="After the live demo, visitors still need a clear path into the broader product story."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href="/about">Read the product story</PrimaryLink>
          <SecondaryLink href="/download">See download plans</SecondaryLink>
        </div>
      </Section>
    </PageShell>
  );
}
