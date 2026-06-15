import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black uppercase tracking-[0.18em] transition",
        variant === "primary" &&
          "bg-xpoze-purple text-white shadow-glow hover:bg-white hover:text-xpoze-night",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/[0.12]",
        variant === "light" &&
          "bg-white text-xpoze-night hover:bg-xpoze-cyan hover:text-xpoze-night",
        className
      )}
    >
      {children}
    </Link>
  );
}
