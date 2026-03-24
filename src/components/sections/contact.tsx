"use client";

import { siteConfig } from "@/data/content";
import { useState, type FormEvent } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { FormInput } from "@/components/ui/form-input";
import type { Dictionary } from "@/i18n/types";

export function Contact({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: integrate with real backend
    setTimeout(() => setStatus("sent"), 1000);
  };

  const buttonLabel =
    status === "sending"
      ? dict.contact.sending
      : status === "sent"
        ? dict.contact.sent
        : dict.contact.send;

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title={dict.contact.title}
          description={dict.contact.description}
        />

        <div className="grid gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              id="name"
              label={dict.contact.nameLabel}
              placeholder={dict.contact.namePlaceholder}
              required
            />
            <FormInput
              id="email"
              label={dict.contact.emailLabel}
              type="email"
              placeholder={dict.contact.emailPlaceholder}
              required
            />
            <FormInput
              id="message"
              label={dict.contact.messageLabel}
              placeholder={dict.contact.messagePlaceholder}
              rows={5}
              required
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent-600 px-8 text-sm font-medium text-white transition-colors hover:bg-accent-700 disabled:opacity-50 dark:bg-accent-500 dark:hover:bg-accent-600"
            >
              {buttonLabel}
            </button>
          </form>

          <ContactInfo dict={dict} />
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ dict }: { dict: Dictionary }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {dict.contact.emailTitle}
        </h3>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-zinc-900 transition-colors hover:text-accent-600 dark:text-zinc-100 dark:hover:text-accent-400"
        >
          {siteConfig.email}
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {dict.contact.connectTitle}
        </h3>
        <div className="flex flex-col gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            GitHub &rarr;
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            LinkedIn &rarr;
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {dict.contact.locationTitle}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">{dict.contact.locationDesc}</p>
      </div>
    </div>
  );
}
