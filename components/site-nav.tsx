"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/demo", label: "Demo" },
  { href: "/roadmap", label: "What's Coming" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <div className={mobile ? "flex flex-wrap gap-3" : "hidden items-center gap-2 md:flex"}>
      {navItems.map((item) => {
        const active = pathname === item.href || (item.href === "/about" && pathname === "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm transition-all duration-300 ease-out ${
              active
                ? "bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(183,195,226,0.08)]"
                : "text-[#A7A8AB] hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            <span className="relative z-10">{item.label}</span>
            <span
              className={`absolute inset-x-4 bottom-1 h-px origin-center bg-gradient-to-r from-transparent via-[#B7C3E2] to-transparent transition-all duration-300 ease-out ${
                active ? "scale-x-100 opacity-100" : "scale-x-60 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
              }`}
            />
            <span
              className={`absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(183,195,226,0.1),_transparent_62%)] transition-opacity duration-300 ${
                active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
