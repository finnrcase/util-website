import { AssetImageSlot } from "@/components/asset-slot";
import {
  InfoCard,
  PageShell,
  PrimaryLink,
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
      title="A minimal home for the future downloadable Util app."
      intro="This page stays launch-oriented without pretending installers exist yet: clear platform cards, restrained copy, and a strong product feel."
    >
      <section>
        <div className="surface-strong hairline rounded-[2.1rem] p-6 md:p-8">
          <div className="flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">Future installers</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white md:text-[2rem]">
                Download cards ready for the first public release.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#A7A8AB] md:text-base md:leading-7">
                When the desktop builds are ready, replace the placeholders below with real links, version details, and release notes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/demo">Preview the workflow</PrimaryLink>
              <SecondaryLink href="/roadmap">See what&apos;s coming</SecondaryLink>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {downloads.map((item, index) => (
              <Reveal key={item.platform} delay={index * 100} variant={index === 0 ? "left" : "right"}>
                <div className="surface-soft rounded-[1.8rem] p-6">
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
        </div>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal variant="blur"><InfoCard title="Brand assets">Replace the shared files in `/brand/` when the final mark and wordmark are ready.</InfoCard></Reveal>
          <Reveal delay={80} variant="blur"><InfoCard title="Installer links">Attach real Windows and Mac download URLs once the first public builds exist.</InfoCard></Reveal>
          <Reveal delay={160} variant="blur"><InfoCard title="Release details">Add setup guidance, minimum OS versions, and known limitations as launch approaches.</InfoCard></Reveal>
        </div>
      </section>
    </PageShell>
  );
}
