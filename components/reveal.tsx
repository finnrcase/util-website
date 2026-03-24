"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function useRevealVisibility() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "blur" | "left" | "right";
}) {
  const { ref, visible } = useRevealVisibility();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      data-variant={variant}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function RevealLine({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useRevealVisibility();

  return (
    <div
      ref={ref}
      className={`reveal-line ${className}`}
      data-visible={visible}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    />
  );
}
