import type { Metadata } from "next";
import { BarChart3, Flame, Medal, Trophy } from "lucide-react";
import { AchievementCard } from "@/components/sections/AchievementCard";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { featuredStats, results } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Tournament results, trophy showcase, and competitive statistics for Xpoze Esports."
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        kicker="Achievements"
        title="Proof Earned In Brackets."
        description="Tournament results, local victories, and competitive progress across Xpoze Esports titles."
      />

      <section className="container pb-20">
        <SectionHeader
          kicker="Tournament Results"
          title="Results That Built The Reputation"
          description="A focused showcase of the organization achievements provided for the site."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {results.map((result, index) => (
            <AchievementCard key={result.title} result={result} delay={index * 0.08} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-xpoze-purple">
                Trophy Showcase
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase text-white sm:text-5xl">
                Local dominance, international pressure.
              </h2>
              <p className="mt-5 leading-8 text-zinc-400">
                Xpoze Esports has multiple Mauritius tournament victories and
                a major Valorant runner-up result in GER 2025, creating a
                foundation for the next competitive era.
              </p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Trophy, title: "Grand Final", copy: "GER 2025" },
                { icon: Medal, title: "Local Wins", copy: "Multiple MU titles" },
                { icon: Flame, title: "Active Titles", copy: "Valorant, Tekken, Fortnite" }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.07}>
                  <article className="rounded-md border border-white/10 bg-xpoze-night p-6 text-center">
                    <div className="mx-auto grid size-14 place-items-center rounded-md bg-white text-xpoze-night">
                      <item.icon size={28} />
                    </div>
                    <h3 className="mt-5 text-lg font-black uppercase text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.copy}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeader
          kicker="Statistics"
          title="Competitive Snapshot"
          description="High-level stats for the organization profile."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {featuredStats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.06}>
              <article className="rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.24),rgba(255,255,255,0.04))] p-6">
                <BarChart3 size={24} className="text-xpoze-cyan" />
                <p className="mt-5 text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-zinc-400">
                  {stat.label}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
