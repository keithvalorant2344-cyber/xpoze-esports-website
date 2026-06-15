"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-xpoze-night/78 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/xpoze-logo.png"
            width={900}
            height={484}
            alt="Xpoze Esports logo mark"
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span className="hidden font-display text-lg font-black uppercase tracking-[0.18em] text-white sm:block">
            Xpoze
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-400 transition hover:bg-white/10 hover:text-white",
                  active && "bg-white text-xpoze-night hover:bg-white hover:text-xpoze-night"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-md bg-xpoze-purple px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white shadow-glow transition hover:bg-white hover:text-xpoze-night"
          >
            Tryouts
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-xpoze-night/96 px-4 pb-5 lg:hidden"
          >
            <nav className="container grid gap-2 pt-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-4 text-sm font-black uppercase tracking-[0.18em] text-zinc-300 transition hover:bg-white/10 hover:text-white",
                      active && "bg-white text-xpoze-night hover:bg-white hover:text-xpoze-night"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
