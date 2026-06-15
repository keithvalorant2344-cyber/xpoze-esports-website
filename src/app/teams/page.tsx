import type { Metadata } from "next";
import { Gamepad2, Swords } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { RosterCard } from "@/components/sections/RosterCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { rosters } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Explore Xpoze Esports rosters for Valorant, Tekken 8, and Fortnite."
};

export default function TeamsPage() {
  return (
    <>
      <PageHeader
        kicker="Teams"
        title="Rosters Ready For The Server, Stage, And Bracket."
        description="Competitive squads and player placeholders across Xpoze Esports&apos; main titles: Valorant, Tekken 8, and Fortnite."
      />

      <section className="container pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {rosters.map((roster, index) => (
            <AnimatedSection key={roster.game} delay={index * 0.08}>
              <article className="h-full rounded-md border border-white/10 bg-white/[0.04] p-6">
                <Gamepad2 className="text-xpoze-purple" size={28} />
                <h2 className="mt-5 text-2xl font-black uppercase text-white">
                  {roster.game}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {roster.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {rosters.map((roster, rosterIndex) => (
        <section
          key={roster.game}
          className={
            rosterIndex % 2 === 0
              ? "border-y border-white/10 bg-white/[0.03] py-20"
              : "py-20"
          }
        >
          <div className="container">
            <SectionHeader
              kicker={`${roster.game} Roster`}
              title={roster.headline}
              description={roster.longDescription}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {roster.players.map((player, index) => (
                <RosterCard
                  key={player.handle}
                  player={player}
                  game={roster.game}
                  accent={roster.accent}
                  delay={index * 0.06}
                />
              ))}
            </div>
            <AnimatedSection delay={0.15} className="mt-8">
              <div className="inline-flex items-center gap-3 rounded-md border border-white/10 bg-xpoze-night px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
                <Swords size={16} className="text-xpoze-cyan" />
                {roster.game === "Valorant"
                  ? "Valorant cards use real Xpoze event roster photos."
                  : "Player cards use editable placeholders for final roster media."}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </>
  );
}
