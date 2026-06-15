import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import type { NewsItem } from "@/lib/site-data";

type NewsCardProps = {
  item: NewsItem;
  delay?: number;
};

export function NewsCard({ item, delay = 0 }: NewsCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <article className="group flex h-full min-h-72 flex-col justify-between rounded-md border border-white/10 bg-xpoze-night p-5 transition hover:-translate-y-1 hover:border-xpoze-purple/70 hover:bg-xpoze-panel">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-md bg-white px-2.5 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.18em] text-xpoze-night">
              {item.category}
            </span>
            <ArrowUpRight
              size={18}
              className="text-zinc-500 transition group-hover:text-xpoze-purple"
            />
          </div>
          <h3 className="mt-6 text-2xl font-black uppercase leading-tight text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{item.copy}</p>
        </div>
        <p className="mt-8 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
          {item.date}
        </p>
      </article>
    </AnimatedSection>
  );
}
