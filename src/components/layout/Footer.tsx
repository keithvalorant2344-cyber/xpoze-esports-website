import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, socials } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/xpoze-logo.png"
              width={900}
              height={484}
              alt="Xpoze Esports logo mark"
              className="h-11 w-auto"
            />
            <span className="font-display text-xl font-black uppercase tracking-[0.16em] text-white">
              Xpoze Esports
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
            Mauritius esports organization developing competitive talent in
            Valorant, Tekken 8, and Fortnite.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
            Founded June 12, 2020
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Navigation
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Social
          </p>
          <div className="mt-5 space-y-3">
            {socials.slice(0, 4).map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center justify-between border-b border-white/10 pb-3 text-sm text-zinc-400 transition hover:text-white"
              >
                {social.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
