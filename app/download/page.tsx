import { AssetImageSlot } from "@/components/asset-slot";
import {
  InfoCard,
  PageShell,
  PrimaryLink,
  Section,
  SecondaryLink,
} from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const downloads = [
  {
    platform: "Windows",
    status: "Coming soon",
    note: "Future desktop installer placeholder",
    icon: "/platform/windows-installer-badge.svg",
  },
  {
    platform: "Mac",
    status: "Coming soon",
    note: "Future desktop installer placeholder",
    icon: "/platform/mac-installer-badge.svg",
  },
];

export default function DownloadPage() {
  return (
    <PageShell
      eyebrow="Download"
      title="A product-ready download page, even before public installers exist."
      intro="This website explains the product today. As the desktop application reaches release readiness, this page will become the public download hub for Windows and Mac."
    >
      <Section
        eyebrow="Current status"
        title="The app is still in development"
        intro="The downloadable product is not yet available, but this page is already structured to feel launch-ready instead of empty."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0}><InfoCard title="Public website now">Use this site to explain what Util is, what problem it solves, and what kind of workflow the desktop app will support.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Desktop downloads later">When installers are ready, replace the placeholders below with real links, release notes, and platform requirements.</InfoCard></Reveal>
        </div>
      </Section>

      <Reveal>
        <section className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">Future installers</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Platform download cards</h2>
            </div>
            <div className="text-sm text-[#A7A8AB]">Replace button targets here once the first public builds exist.</div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {downloads.map((item, index) => (
              <Reveal key={item.platform} delay={index * 90}>
                <div className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(41,41,52,0.72),rgba(26,27,34,0.78))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <AssetImageSlot
                        src={item.icon}
                        alt={`${item.platform} installer badge`}
                        wrapperClassName="h-14 w-14 shrink-0 overflow-hidden rounded-2xl"
                        imageClassName="h-14 w-14 rounded-2xl bg-[#111216] object-contain p-2"
                        fallbackLabel="Optional"
                        fallbackTitle={item.platform}
                        compactFallback
                      />
                      <div>
                        <div className="text-xl font-semibold text-white">Download for {item.platform}</div>
                        <div className="mt-2 text-sm text-[#A7A8AB]">{item.note}</div>
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#A7A8AB]">
                      {item.status}
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.35rem] border border-white/8 bg-[#111216]/60 px-4 py-4 text-sm text-[#706B71]">
                    Future slot for version number, minimum OS support, and release notes.
                  </div>

                  <button
                    type="button"
                    disabled
                    className="mt-6 inline-flex cursor-not-allowed items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/60"
                  >
                    {item.status}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Section
        eyebrow="Insert later"
        title="Prepared for the assets launch will need"
        intro="This page already includes obvious slots for the key items that matter once the first public release is ready."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0}><InfoCard title="Logo">Replace the shared brand files in `/brand/util-logo-wordmark.svg` and `/brand/util-logo-mark.svg` once branding is locked.</InfoCard></Reveal>
          <Reveal delay={80}><InfoCard title="Installers">Attach real Windows and Mac download URLs to the platform cards and add version details nearby.</InfoCard></Reveal>
          <Reveal delay={160}><InfoCard title="Release notes">Add setup guidance, minimum OS versions, and known limitations as the first release approaches.</InfoCard></Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Until then"
        title="Keep visitors moving through the story"
        intro="While downloads are unavailable, this page should still point people toward the demo and roadmap."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href="/demo">See the demo page</PrimaryLink>
          <SecondaryLink href="/roadmap">Review what&apos;s coming</SecondaryLink>
        </div>
      </Section>
    </PageShell>
  );
}
