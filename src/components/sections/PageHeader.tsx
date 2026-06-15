import { AnimatedSection } from "@/components/motion/AnimatedSection";

type PageHeaderProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 pt-32">
      <div className="xp-grid absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.18),transparent_34%,rgba(34,211,238,0.08)_72%,transparent)]" />
      <div className="container relative z-10 py-16 sm:py-20">
        <AnimatedSection className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-xpoze-purple">
            {kicker}
          </p>
          <h1 className="mt-5 text-balance font-display text-4xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            {description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
