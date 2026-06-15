import Image from "next/image";

export function LoadingMark({ label }: { label: string }) {
  return (
    <div className="grid place-items-center gap-5">
      <div className="relative grid size-20 place-items-center rounded-md border border-white/10 bg-white/5">
        <div className="absolute inset-2 animate-ping rounded-md border border-xpoze-purple/60" />
        <Image
          src="/images/xpoze-logo.png"
          width={900}
          height={484}
          alt=""
          aria-hidden="true"
          className="h-9 w-auto"
        />
      </div>
      <p className="text-xs font-black uppercase tracking-[0.26em] text-zinc-400">
        {label}
      </p>
    </div>
  );
}
