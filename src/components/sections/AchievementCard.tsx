import { Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import type { TournamentResult } from "@/lib/site-data";

type AchievementCardProps = {
  result: TournamentResult;
  delay?: number;
};

export function AchievementCard({ result, delay = 0 }: AchievementCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <article className="h-full rounded-md border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-xpoze-purple/60">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-xpoze-purple">
              {result.game}
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase text-white">
              {result.title}
            </h3>
          </div>
          <div className="grid size-12 shrink-0 place-items-center rounded-md bg-xpoze-purple/20 text-xpoze-purple">
            <Trophy size={24} />
          </div>
        </div>
        <p className="mt-5 text-4xl font-black text-white">{result.placement}</p>
        <p className="mt-4 text-sm leading-7 text-zinc-400">{result.copy}</p>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
          <span>{result.year}</span>
          <span>{result.region}</span>
        </div>
      </article>
    </AnimatedSection>
  );
}
