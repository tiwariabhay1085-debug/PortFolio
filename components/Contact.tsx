"use client";

import { Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { isPlaceholderEmail, site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Section } from "./Section";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" | "error" | "info"; message: string };

const fieldClass =
  "w-full rounded-xl border border-line/15 bg-bg/50 px-4 py-3 text-sm text-fg placeholder:text-muted/70 focus-visible:border-electric";

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const hasEndpoint = site.formEndpoint.length > 0;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!hasEndpoint) {
      const subject = encodeURIComponent(data.subject || `Message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus({
        kind: "info",
        message: "Your email app should open with this message filled in. Nothing is sent until you send it there.",
      });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      form.reset();
      setStatus({ kind: "success", message: "Message sent. Thanks for reaching out, I'll reply by email." });
    } catch {
      setStatus({
        kind: "error",
        message: `The message could not be sent. Please try again, or email ${site.email} directly.`,
      });
    }
  }

  const linkRow =
    "glass flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm transition hover:border-electric/50";

  return (
    <Section id="contact" title="Have an idea? Let's build something meaningful.">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          <a href={`mailto:${site.email}`} className="btn-primary w-full">
            <Mail className="size-4" aria-hidden="true" />
            Email me
          </a>
          {process.env.NODE_ENV !== "production" && isPlaceholderEmail ? (
            <p className="text-xs text-muted">Development hint: set your real email in data/site.ts.</p>
          ) : null}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkRow}>
            <LinkedInIcon className="size-5" />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkRow}>
            <GitHubIcon className="size-5" />
            GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8" aria-label="Contact form">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
            <input id="subject" name="subject" type="text" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} required className={`${fieldClass} resize-y`} />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status.kind === "sending"} className="btn-primary disabled:opacity-60">
              <Send className="size-4" aria-hidden="true" />
              {status.kind === "sending" ? "Sending..." : hasEndpoint ? "Send message" : "Open in email app"}
            </button>
            {!hasEndpoint ? (
              <p className="text-xs text-muted">This form opens your email app. It does not send messages by itself.</p>
            ) : null}
          </div>

          <div role={status.kind === "error" ? "alert" : "status"} aria-live="polite">
            {status.kind === "success" || status.kind === "error" || status.kind === "info" ? (
              <p
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status.kind === "success"
                    ? "border-aqua/40 text-aqua"
                    : status.kind === "error"
                      ? "border-red-500/50 text-red-500"
                      : "border-electric/40 text-electric"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Section>
  );
}
