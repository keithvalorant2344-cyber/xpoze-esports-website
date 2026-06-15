import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Medal,
  Shield,
  Sparkles,
  Trophy
} from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ParticleField } from "@/components/motion/ParticleField";
import { NewsCard } from "@/components/sections/NewsCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { featuredStats, latestNews } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="scanlines relative isolate min-h-[82svh] overflow-hidden border-b border-white/10 pt-24">
        <Image
          src="/images/hero-arena.png"
          alt="Purple esports arena stage"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050309_0%,rgba(5,3,9,0.92)_28%,rgba(5,3,9,0.56)_62%,rgba(5,3,9,0.82)_100%)]" />
        <div className="xp-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-xpoze-night to-transparent" />
        <ParticleField />

        <div className="container relative z-10 grid min-h-[calc(82svh-6rem)] items-center gap-10 py-10 lg:grid-cols-[1.12fr_0.88fr]">
          <AnimatedSection className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-xpoze-frost backdrop-blur">
              <Sparkles size={15} className="text-xpoze-neon" />
              Founded June 12, 2020 - Mauritius
            </div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Xpoze
              <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.72)]">
                Esports
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Building Mauritius esports talent across Valorant, Tekken 8, and
              Fortnite, with the drive to represent the island on international
              stages.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/teams">
                View Rosters
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Join The Movement
                <ChevronRight size={18} />
              </ButtonLink>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="angled-border bg-black/45 p-5 shadow-card backdrop-blur-md sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-xpoze-purple">
                    Featured Result
                  </p>
                  <h2 className="mt-2 text-2xl font-black uppercase text-white">
                    Valorant GER 2025
                  </h2>
                </div>
                <div className="grid size-14 place-items-center rounded-md bg-xpoze-purple text-white shadow-glow">
                  <Trophy size={26} />
                </div>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                <p className="text-4xl font-black uppercase text-white">
                  Grand Finals Runner-up
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  A defining campaign for the Valorant roster and a statement
                  moment for Mauritius esports.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {featuredStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-md border border-white/10 bg-xpoze-night/70 p-3"
                  >
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-white/10 bg-xpoze-night py-5">
        <div className="overflow-hidden">
          <div className="flex w-[200%] animate-marquee gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.24em] text-white/70">
            {Array.from({ length: 2 }).map((_, loopIndex) => (
              <div key={loopIndex} className="flex min-w-[50%] gap-8">
                <span>Valorant</span>
                <span className="text-xpoze-purple">Tekken 8</span>
                <span>Fortnite</span>
                <span className="text-xpoze-cyan">Mauritius To The World</span>
                <span>CyberRoom Mauritius</span>
                <span className="text-xpoze-neon">Xpoze Esports</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeader
          kicker="Featured Achievements"
          title="Momentum Built In Competition"
          description="Xpoze Esports combines local consistency with international ambition across its core competitive titles."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Trophy,
              title: "GER 2025 Finalist",
              copy: "Valorant Grand Finals runner-up after a high-pressure playoff run."
            },
            {
              icon: Medal,
              title: "Local Champions",
              copy: "Multiple Mauritius tournament victories across community and organized events."
            },
            {
              icon: Shield,
              title: "Multi-Title Rosters",
              copy: "Active competitive rosters in Valorant, Tekken 8, and Fortnite."
            }
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-xpoze-purple/60 hover:bg-white/[0.07]">
                <item.icon className="text-xpoze-purple" size={28} />
                <h3 className="mt-5 text-xl font-black uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.copy}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              kicker="Latest News"
              title="Inside The Xpoze Camp"
              description="Sample newsroom cards for roster announcements, event recaps, and community stories."
            />
            <AnimatedSection className="lg:text-right">
              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-xpoze-purple transition hover:text-white"
              >
                View Results
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {latestNews.map((item, index) => (
              <NewsCard key={item.title} item={item} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <AnimatedSection className="grid gap-8 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(255,255,255,0.05)_38%,rgba(34,211,238,0.13))] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-xpoze-cyan">
              <CalendarDays size={16} />
              Next Chapter
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase text-white sm:text-5xl">
              From Mauritius scrims to international stages.
            </h2>
          </div>
          <ButtonLink href="/partners" variant="light">
            Partner With Xpoze
            <ArrowRight size={18} />
          </ButtonLink>
        </AnimatedSection>
      </section>
    </>
  );
}
