import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  description,
  className
}: SectionHeaderProps) {
  return (
    <AnimatedSection className={cn("max-w-3xl", className)}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-xpoze-purple">
        {kicker}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-zinc-400">{description}</p>
      ) : null}
    </AnimatedSection>
  );
}
