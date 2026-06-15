"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const fields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your name" },
  { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
  { label: "Subject", name: "subject", type: "text", placeholder: "Tryouts, partnership, media..." }
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="rounded-md border border-white/10 bg-white/[0.04] p-6 sm:p-8"
    >
      <p className="text-xs font-black uppercase tracking-[0.24em] text-xpoze-purple">
        Contact Form
      </p>
      <h2 className="mt-4 text-3xl font-black uppercase text-white">
        Send A Message
      </h2>
      <div className="mt-8 grid gap-5">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
              {field.label}
            </span>
            <input
              required
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="rounded-md border border-white/10 bg-xpoze-night px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-xpoze-purple focus:ring-4 focus:ring-xpoze-purple/15"
            />
          </label>
        ))}
        <label className="grid gap-2">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
            Message
          </span>
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Tell us how we can help."
            className="resize-none rounded-md border border-white/10 bg-xpoze-night px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-xpoze-purple focus:ring-4 focus:ring-xpoze-purple/15"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-xpoze-purple px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-glow transition hover:bg-white hover:text-xpoze-night sm:w-auto"
      >
        Send Message
        <Send size={18} />
      </button>
      {sent ? (
        <p className="mt-5 rounded-md border border-xpoze-cyan/35 bg-xpoze-cyan/10 px-4 py-3 text-sm text-xpoze-cyan">
          Message captured locally. Connect this form to your preferred backend
          when the site goes live.
        </p>
      ) : null}
    </form>
  );
}
