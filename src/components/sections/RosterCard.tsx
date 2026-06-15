"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flag, Gamepad2 } from "lucide-react";
import type { Player } from "@/lib/site-data";

type RosterCardProps = {
  player: Player;
  game: string;
  accent: string;
  delay?: number;
};

export function RosterCard({ player, game, accent, delay = 0 }: RosterCardProps) {
  const hasPlayerImage = Boolean(player.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-md border border-white/10 bg-xpoze-panel"
    >
      <div className={`relative aspect-[4/5] bg-gradient-to-br ${accent}`}>
        <Image
          src={player.image ?? "/images/player-placeholder.svg"}
          alt={`${player.handle} player image`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition duration-500 group-hover:scale-105 ${
            hasPlayerImage ? "brightness-90 contrast-110" : "opacity-85 mix-blend-luminosity"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-xpoze-night via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
            {game}
          </p>
          <h3 className="mt-1 text-2xl font-black uppercase text-white">
            {player.handle}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <Gamepad2 size={15} className="text-xpoze-purple" />
            {player.role}
          </span>
          <span className="inline-flex items-center gap-2">
            <Flag size={15} className="text-xpoze-cyan" />
            {player.country}
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-zinc-400">{player.note}</p>
      </div>
    </motion.article>
  );
}
