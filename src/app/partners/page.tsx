import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Handshake, MonitorUp, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { partners, sponsorSlots } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "CyberRoom Mauritius partnership and sponsor opportunities with Xpoze Esports."
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        kicker="Partners"
        title="Built With The Community Around Us."
        description="Xpoze Esports works with partners who believe in Mauritian talent, player development, and a stronger local competitive scene."
      />

      <section className="container pb-20">
        <AnimatedSection>
          <article className="grid gap-8 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(255,255,255,0.04)_44%,rgba(34,211,238,0.12))] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-md border border-white/10 bg-white p-5 shadow-card sm:p-7">
              <Image
                src="/images/cyberroom-logo.png"
                width={1400}
                height={700}
                alt="CyberRoom Mauritius logo"
                className="h-auto w-full object-contain"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-xpoze-night">
                <Handshake size={15} />
                Official Partner
              </div>
              <h2 className="text-3xl font-black uppercase text-white sm:text-5xl">
                CyberRoom Mauritius
              </h2>
              <p className="mt-5 leading-8 text-zinc-300">
                CyberRoom Mauritius is highlighted as the key partner supporting
                Xpoze Esports&apos; community presence, competitive culture, and
                player development ambitions.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">
                  Become A Partner
                  <ArrowRight size={18} />
                </ButtonLink>
                <ButtonLink href="/teams" variant="secondary">
                  Meet The Rosters
                  <Sparkles size={18} />
                </ButtonLink>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <SectionHeader
            kicker="Sponsor Slots"
            title="Placeholder Inventory For Brand Partners"
            description="Replace these blocks with official sponsor logos, partner categories, and activation links."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorSlots.map((slot, index) => (
              <AnimatedSection key={slot} delay={index * 0.06}>
                <article className="group rounded-md border border-white/10 bg-xpoze-night p-6 transition hover:-translate-y-1 hover:border-xpoze-purple/60">
                  <div className="grid aspect-[16/9] place-items-center rounded-md border border-dashed border-white/15 bg-white/[0.04]">
                    <Image
                      src="/images/sponsor-placeholder.svg"
                      width={240}
                      height={120}
                      alt={`${slot} sponsor logo placeholder`}
                      className="h-20 w-auto opacity-70 transition group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-white">
                    {slot}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {partners.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.07}>
              <article className="h-full rounded-md border border-white/10 bg-white/[0.04] p-6">
                <MonitorUp size={28} className="text-xpoze-cyan" />
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
      </section>
    </>
  );
}
