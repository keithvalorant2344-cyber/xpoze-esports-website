import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";

export default function NotFound() {
  return (
    <section className="container min-h-[72vh] pt-32">
      <PageHeader
        kicker="404"
        title="Round Not Found"
        description="The page you are looking for rotated out. Head back to base and regroup."
      />
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-xpoze-night transition hover:bg-xpoze-purple hover:text-white"
      >
        <ArrowLeft size={18} />
        Back Home
      </Link>
    </section>
  );
}
