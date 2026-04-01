import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { BrandMark, PrimaryLink } from "@/components/marketing";
import { SiteNav } from "@/components/site-nav";
import { assetExists } from "@/lib/assets";

export function generateMetadata(): Metadata {
  const icons = assetExists("/brand/logo-mark.png")
    ? {
        icon: "/brand/logo-mark.png",
        apple: "/brand/logo-mark.png",
        shortcut: assetExists("/brand/favicon.ico") ? "/brand/favicon.ico" : "/brand/logo-mark.png",
      }
    : assetExists("/brand/favicon.ico")
      ? {
          icon: "/brand/favicon.ico",
          shortcut: "/brand/favicon.ico",
        }
      : undefined;

  return {
    title: {
      default: "Util",
      template: "%s | Util",
    },
    description:
      "Util is a compute scheduling app that helps teams shift workloads toward lower-cost, lower-carbon windows.",
    icons,
    openGraph: assetExists("/previews/og-cover.png")
      ? {
          images: ["/previews/og-cover.png"],
        }
      : undefined,
    twitter: assetExists("/previews/og-cover.png")
      ? {
          card: "summary_large_image",
          images: ["/previews/og-cover.png"],
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white antialiased">
        <div className="relative min-h-screen">
          <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
            <div className="mx-auto max-w-6xl rounded-[1.6rem] border border-white/8 bg-[#1A1B22]/82 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
              <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-4 md:px-6">
                <Link href="/" aria-label="Util home" className="shrink-0">
                  <BrandMark />
                </Link>

                <SiteNav />

                <div className="hidden md:block">
                  <PrimaryLink href="/download">Download</PrimaryLink>
                </div>

                <div className="flex w-full items-center justify-between gap-4 border-t border-white/8 pt-4 md:hidden">
                  <SiteNav mobile />
                </div>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="px-6 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14">
            <div className="section-shell mx-auto max-w-6xl rounded-[2rem] px-6 py-8 md:px-8 md:py-10">
              <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-lg">
                  <BrandMark />
                  <p className="mt-4 text-sm leading-6 text-[#A7A8AB]">
                    Util helps you choose better times to run flexible workloads
                    by turning energy cost and carbon signals into clear,
                    practical scheduling decisions.
                  </p>
                </div>

                <div className="grid gap-2 text-sm text-[#A7A8AB]">
                  <Link href="/about" className="transition-colors hover:text-white">
                    About
                  </Link>
                  <Link href="/demo" className="transition-colors hover:text-white">
                    Demo
                  </Link>
                  <Link href="/roadmap" className="transition-colors hover:text-white">
                    Roadmap
                  </Link>
                  <Link href="/download" className="transition-colors hover:text-white">
                    Download
                  </Link>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
