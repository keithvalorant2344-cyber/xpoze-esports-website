import type { Metadata } from "next";
import { Eye, Flag, Rocket, Target } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { milestones } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, vision, and competitive timeline of Xpoze Esports in Mauritius."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About Xpoze"
        title="Built In Mauritius. Focused On The World."
        description="Founded on June 12, 2020, Xpoze Esports exists to develop local esports talent and give Mauritius a stronger voice on international stages."
      />

      <section className="container pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <AnimatedSection>
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-xpoze-purple">
                Our Story
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
                A Mauritius organization made for competitive pressure.
              </h2>
              <p className="mt-5 leading-8 text-zinc-300">
                Xpoze Esports was founded to create a serious pathway for
                Mauritian players who want to move from local events into
                structured, international competition. The organization focuses
                on discipline, roster culture, and giving emerging talent the
                support to compete with confidence.
              </p>
              <p className="mt-4 leading-8 text-zinc-400">
                The current competitive identity centers on Valorant, Tekken 8,
                and Fortnite, with CyberRoom Mauritius supporting the ecosystem
                around players, events, and community development.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Mission",
                copy: "Develop esports talent in Mauritius through structure, coaching, visibility, and competitive opportunities."
              },
              {
                icon: Eye,
                title: "Vision",
                copy: "Represent Mauritius internationally and become a trusted home for ambitious players across the island."
              },
              {
                icon: Flag,
                title: "Identity",
                copy: "Mauritius first, internationally minded, and built around resilient competitors."
              },
              {
                icon: Rocket,
                title: "Trajectory",
                copy: "From grassroots wins to GER 2025 Grand Finals recognition in Valorant."
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.07}>
                <article className="h-full rounded-md border border-white/10 bg-xpoze-panel/80 p-6">
                  <item.icon size={26} className="text-xpoze-cyan" />
                  <h3 className="mt-5 text-xl font-black uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.copy}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <SectionHeader
            kicker="Timeline"
            title="Milestones That Shaped The Clan"
            description="Key moments from launch to multi-title competition."
          />
          <div className="mt-12 grid gap-5">
            {milestones.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.06}>
                <article className="grid gap-5 rounded-md border border-white/10 bg-xpoze-night/80 p-5 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <div>
                    <p className="text-3xl font-black text-xpoze-purple">
                      {item.year}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                      {item.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-zinc-400">{item.copy}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
