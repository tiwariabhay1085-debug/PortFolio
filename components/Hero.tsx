"use client";

import { MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { Bot, BrainCircuit, Download, Layers, type LucideIcon } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

function RoleTyper({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setShown(roles[index]);
      const id = setTimeout(() => setIndex((index + 1) % roles.length), 3000);
      return () => clearTimeout(id);
    }
    const full = roles[index];
    let delay = deleting ? 35 : 70;
    if (!deleting && shown === full) delay = 1800;
    if (deleting && shown === "") delay = 250;
    const id = setTimeout(() => {
      if (!deleting && shown === full) {
        setDeleting(true);
      } else if (deleting && shown === "") {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      } else {
        setShown(deleting ? full.slice(0, shown.length - 1) : full.slice(0, shown.length + 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [shown, deleting, index, reduced, roles]);

  return (
    <p className="mt-4 min-h-9 text-xl font-medium sm:text-2xl">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true" className="bg-gradient-to-r from-electric to-iris bg-clip-text text-transparent">
        {shown}
      </span>
      <span aria-hidden="true" className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 animate-blink bg-aqua" />
    </p>
  );
}

function Chip({ icon: Icon, children, className }: { icon: LucideIcon; children: ReactNode; className: string }) {
  return (
    <div className={`glass absolute flex items-center gap-2 rounded-full px-3.5 py-2 text-sm ${className}`}>
      <Icon className="size-4 text-aqua" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="bg-grid absolute inset-0" />
          <div
            className="absolute -top-24 left-[6%] h-72 w-72 animate-drift rounded-full bg-electric blur-[110px]"
            style={{ opacity: "var(--glow-o)" }}
          />
          <div
            className="absolute right-[4%] top-24 h-80 w-80 animate-drift rounded-full bg-iris blur-[120px]"
            style={{ opacity: "var(--glow-o)", animationDelay: "-6s" }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {site.badge.show ? (
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-aqua/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-aqua" />
                </span>
                {site.badge.text}
              </span>
            ) : null}

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">Hi, I&apos;m {site.name}.</h1>
            <RoleTyper roles={site.heroRoles} />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.heroText}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                <Layers className="size-4" aria-hidden="true" />
                Explore My Projects
              </a>
              <a href={site.resume.path} download={site.resume.downloadName} className="btn-secondary">
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="glass inline-flex size-11 items-center justify-center rounded-xl text-fg transition hover:border-electric/50"
              >
                <GitHubIcon className="size-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="glass inline-flex size-11 items-center justify-center rounded-xl text-fg transition hover:border-electric/50"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-electric/40 via-iris/30 to-aqua/30 blur-2xl"
            />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <Image
                src={site.profileImage.src}
                alt={site.profileImage.alt}
                width={site.profileImage.width}
                height={site.profileImage.height}
                priority
                sizes="(min-width: 1024px) 384px, 90vw"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <Chip icon={Layers} className="-left-3 bottom-12 sm:-left-8">MERN stack</Chip>
            <Chip icon={BrainCircuit} className="-right-3 top-10 sm:-right-8">ML and NLP</Chip>
            <Chip icon={Bot} className="-right-1 bottom-2 sm:-right-5">Agentic AI</Chip>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
