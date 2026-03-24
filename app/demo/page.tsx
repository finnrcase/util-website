import { AssetImageSlot } from "@/components/asset-slot";
import { PageShell, PrimaryLink } from "@/components/marketing";
import { Reveal } from "@/components/reveal";

const liveDemoUrl = "https://utilplatformv01.streamlit.app/";
const liveDemoPreviewSrc = "/previews/clickthrough.png";

export default function DemoPage() {
  return (
    <PageShell
      eyebrow="Live Demo"
      title="Preview the Util demo through one polished showcase module."
      intro="A focused demo page with a single visual anchor, minimal copy, and a direct path into the live experience."
    >
      <section>
        <div className="surface-strong hairline relative overflow-hidden rounded-[2.25rem] p-5 md:p-7">
          <div className="hero-glow left-[-5rem] top-[-3rem] bg-[rgba(126,71,231,0.22)]" />
          <div className="hero-glow bottom-[-5rem] right-[-4rem] bg-[rgba(54,126,193,0.16)]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="relative grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal variant="left">
              <div className="surface-soft rounded-[1.9rem] p-6 md:p-8">
                <div className="inline-flex rounded-full border border-[#7E47E7]/25 bg-[#7E47E7]/10 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-[#B7C3E2] uppercase">
                  Preview the Util Demo
                </div>
                <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl md:leading-[1.04]">
                  Explore the product flow before stepping into the live app.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#A7A8AB] md:text-base md:leading-7">
                  The page stays intentionally quiet: one framed preview, one clear destination, and enough context to make the click feel confident.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryLink href={liveDemoUrl} className="glow-pulse">
                    Open live demo
                  </PrimaryLink>
                  <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#A7A8AB] transition-colors duration-300 hover:text-white"
                  >
                    utilplatformv01.streamlit.app
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} variant="right">
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#0B0D12]/88 shadow-[0_30px_100px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-center gap-2 border-b border-white/8 px-5 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <div className="ml-3 truncate rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[11px] tracking-[0.18em] text-[#8C93A8] uppercase">
                    Live demo preview
                  </div>
                </div>

                <div className="relative p-3 md:p-4">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  <div className="overflow-hidden rounded-[1.45rem] border border-white/8 bg-black/30">
                    <Reveal delay={200} variant="blur">
                      <AssetImageSlot
                        src={liveDemoPreviewSrc}
                        alt="Util demo interface preview"
                        wrapperClassName="relative aspect-[16/10] w-full overflow-hidden"
                        imageClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        fallbackLabel="Expected preview"
                        fallbackTitle={liveDemoPreviewSrc}
                        fallbackBody="Place the demo screenshot here and this full preview card will launch the live app."
                      />
                    </Reveal>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
