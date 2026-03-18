import Image from "next/image";
import { assetExists } from "@/lib/assets";

type AssetImageSlotProps = {
  src: string;
  alt: string;
  wrapperClassName: string;
  imageClassName: string;
  fallbackLabel: string;
  fallbackTitle: string;
  fallbackBody?: string;
  compactFallback?: boolean;
};

export function LogoWordmark() {
  if (assetExists("/brand/util-logo-wordmark.svg")) {
    return (
      <Image
        src="/brand/util-logo-wordmark.svg"
        alt="Util"
        width={220}
        height={56}
        unoptimized
        className="h-6 w-auto"
      />
    );
  }

  return (
    <div>
      <div className="text-sm font-semibold tracking-[0.26em] text-white uppercase">
        Util
      </div>
      <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">
        Compute timing
      </div>
    </div>
  );
}

export function LogoMark() {
  if (assetExists("/brand/util-logo-mark.svg")) {
    return (
      <Image
        src="/brand/util-logo-mark.svg"
        alt="Util mark"
        width={32}
        height={32}
        unoptimized
        className="h-6 w-6"
      />
    );
  }

  return (
    <span className="relative bg-gradient-to-br from-white via-[#B7C3E2] to-[#7E47E7] bg-clip-text text-sm font-semibold tracking-[0.26em] text-transparent">
      U
    </span>
  );
}

export function AssetImageSlot({
  src,
  alt,
  wrapperClassName,
  imageClassName,
  fallbackLabel,
  fallbackTitle,
  fallbackBody,
  compactFallback = false,
}: AssetImageSlotProps) {
  if (assetExists(src)) {
    return (
      <div className={`relative ${wrapperClassName}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={src.endsWith(".svg")}
          className={imageClassName}
        />
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      {compactFallback ? (
        <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111216]/72 px-2 text-center text-[11px] leading-4 text-[#706B71]">
          {fallbackTitle}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col justify-between border border-dashed border-white/10 bg-[#111216]/72 p-5 text-left">
          <div>
            <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">
              {fallbackLabel}
            </div>
            <div className="mt-2 text-base font-medium text-white">{fallbackTitle}</div>
            {fallbackBody ? (
              <div className="mt-2 text-sm leading-6 text-[#A7A8AB]">{fallbackBody}</div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export function AssetVideoSlot({
  src,
  posterSrc,
  className,
}: {
  src: string;
  posterSrc: string;
  className: string;
}) {
  if (assetExists(src)) {
    const poster = assetExists(posterSrc) ? posterSrc : undefined;

    return (
      <video
        className={className}
        controls
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return null;
}
