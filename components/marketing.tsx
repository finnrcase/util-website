import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { LogoMark, LogoWordmark } from "@/components/asset-slot";

const baseButtonClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";

export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="surface hairline glow-pulse relative flex h-11 w-11 items-center justify-center rounded-[1.1rem] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(126,71,231,0.34),_transparent_58%)]" />
        <LogoMark />
      </div>
      <LogoWordmark />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-[0.28em] text-[#B7C3E2] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      {children}
    </div>
  );
}

export function PageShell({
  title,
  intro,
  eyebrow,
  children,
}: {
  title: string;
  intro: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <Reveal>
        <div className="section-shell relative overflow-hidden rounded-[2.25rem] px-6 py-10 md:px-10 md:py-14">
          <div className="hero-glow left-[-2rem] top-[-3rem] bg-[rgba(126,71,231,0.24)]" />
          <div className="hero-glow bottom-[-4rem] right-[-2rem] bg-[rgba(54,126,193,0.18)]" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl md:leading-[1.02]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#A7A8AB] md:text-lg md:leading-8">
              {intro}
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">{children}</div>
    </div>
  );
}

export function Section({
  title,
  intro,
  children,
  eyebrow,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <Reveal>
      <section className="space-y-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-[11px] font-medium tracking-[0.28em] text-[#706B71] uppercase">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white md:text-[2rem]">
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 text-base leading-7 text-[#A7A8AB] md:text-[1.03rem]">
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </section>
    </Reveal>
  );
}

export function InfoCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`surface hairline group rounded-[1.75rem] p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.48)] ${className}`}
    >
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-3 text-sm leading-6 text-[#A7A8AB]">{children}</div>
    </div>
  );
}

export function Metric({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "positive" | "accent";
}) {
  const toneClass =
    tone === "positive"
      ? "text-emerald-300"
      : tone === "accent"
        ? "text-[#B7C3E2]"
        : "text-white";

  return (
    <div className="surface rounded-[1.35rem] px-4 py-3 transition-transform duration-300 hover:-translate-y-1">
      <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">{label}</div>
      <div className={`mt-2 text-2xl font-semibold tracking-[-0.04em] ${toneClass}`}>
        {value}
      </div>
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${baseButtonClasses} group relative overflow-hidden bg-[linear-gradient(135deg,#7E47E7_0%,#367EC1_100%)] text-white shadow-[0_14px_40px_rgba(126,71,231,0.28)] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(126,71,231,0.34)]`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_48%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${baseButtonClasses} border border-white/12 bg-white/[0.03] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:border-[#B7C3E2]/30 hover:bg-white/[0.06]`}
    >
      {children}
    </Link>
  );
}

export function PlaceholderFrame({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children?: ReactNode;
}) {
  return (
    <div className="surface-strong hairline overflow-hidden rounded-[2rem]">
      <div className="border-b border-white/8 px-6 py-5 md:px-8">
        <div className="text-[11px] tracking-[0.26em] text-[#706B71] uppercase">{caption}</div>
        <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</div>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}
