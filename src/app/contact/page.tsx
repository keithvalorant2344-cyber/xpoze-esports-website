import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { socials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Xpoze Esports for tryouts, partnerships, media, and community inquiries."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Ready To Talk Rosters, Events, Or Partnerships?"
        description="Reach out to Xpoze Esports for competitive inquiries, community activations, sponsor opportunities, and media requests."
      />

      <section className="container pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>

          <div className="space-y-5">
            <AnimatedSection delay={0.08}>
              <article className="rounded-md border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <div className="grid size-12 place-items-center rounded-md bg-xpoze-purple text-white shadow-glow">
                  <Send size={22} />
                </div>
                <h2 className="mt-5 text-2xl font-black uppercase text-white">
                  Direct Lines
                </h2>
                <div className="mt-5 space-y-3 text-sm text-zinc-300">
                  <p>General: contact@xpozeesports.mu</p>
                  <p>Partnerships: partners@xpozeesports.mu</p>
                  <p>Location: Mauritius</p>
                </div>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <article className="rounded-md border border-xpoze-purple/40 bg-xpoze-purple/15 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-xpoze-cyan" size={28} />
                  <h2 className="text-2xl font-black uppercase text-white">
                    Discord
                  </h2>
                </div>
                <p className="mt-4 leading-7 text-zinc-300">
                  Join the community server for tryouts, event updates, match
                  watch parties, and announcements.
                </p>
                <a
                  href="https://discord.gg/xpoze"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-xpoze-night transition hover:bg-xpoze-cyan"
                >
                  Discord Invite
                  <ArrowUpRight size={18} />
                </a>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <SectionHeader
            kicker="Socials"
            title="Follow The Push"
            description="Placeholder social links for the Xpoze Esports content channels."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((social, index) => (
              <AnimatedSection key={social.label} delay={index * 0.06}>
                <a
                  href={social.href}
                  className="group flex items-center justify-between rounded-md border border-white/10 bg-xpoze-night p-5 transition hover:-translate-y-1 hover:border-xpoze-purple/60"
                >
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    {social.label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-xpoze-purple transition group-hover:text-white"
                  />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
