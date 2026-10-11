"use client";

import Image from "next/image";
import { Circle, CircleCheck, CircleDashed, ExternalLink, Eye, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects, type FeatureState, type Project, type ProjectStatus } from "@/data/projects";
import { GitHubIcon } from "./icons";
import { Section } from "./Section";

const statusStyle: Record<ProjectStatus, string> = {
  Completed: "border-aqua/50 text-aqua",
  "In progress": "border-electric/50 text-electric",
  Planned: "border-iris/50 text-iris",
};

const featureMeta: Record<FeatureState, { label: string; icon: typeof Circle; className: string }> = {
  done: { label: "Implemented", icon: CircleCheck, className: "text-aqua" },
  building: { label: "In progress", icon: CircleDashed, className: "text-electric" },
  planned: { label: "Planned", icon: Circle, className: "text-muted" },
};

function StatusBadge({ status, solid }: { status: ProjectStatus; solid?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyle[status]} ${
        solid ? "bg-bg/80 backdrop-blur" : "bg-line/[0.04]"
      }`}
    >
      {status}
    </span>
  );
}

function TechBadge({ children }: { children: string }) {
  return (
    <li className="rounded-md border border-line/10 bg-line/[0.05] px-2 py-0.5 text-xs text-muted">{children}</li>
  );
}

function LinkButtons({ project }: { project: Project }) {
  return (
    <>
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-muted transition hover:text-fg"
        >
          <GitHubIcon className="size-4" />
          GitHub
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      {project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-muted transition hover:text-fg"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Live demo
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const hasLinks = Boolean(project.repoUrl || project.demoUrl);

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
      className="m-auto max-h-[88vh] w-[min(92vw,44rem)] overflow-y-auto rounded-3xl border border-line/15 bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <StatusBadge status={project.status} />
            <h3 id="project-dialog-title" className="mt-3 text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close project details"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-line/15 transition hover:border-electric/50"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <h4 className="mt-8 text-sm font-semibold">Features</h4>
        <ul className="mt-3 space-y-2">
          {project.features.map((f) => {
            const meta = featureMeta[f.state];
            const Icon = meta.icon;
            return (
              <li key={f.label} className="flex items-start justify-between gap-4 text-sm">
                <span className="flex items-start gap-2.5">
                  <Icon className={`mt-0.5 size-4 shrink-0 ${meta.className}`} aria-hidden="true" />
                  {f.label}
                </span>
                <span className={`shrink-0 text-xs ${meta.className}`}>{meta.label}</span>
              </li>
            );
          })}
        </ul>

        <h4 className="mt-8 text-sm font-semibold">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </ul>

        <h4 className="mt-8 text-sm font-semibold">Links</h4>
        <div className="mt-2 flex flex-wrap items-center gap-1 text-sm text-muted">
          {hasLinks ? <LinkButtons project={project} /> : <p>Links will be added when the project is published.</p>}
        </div>

        {project.screenshots.length > 0 ? (
          <>
            <h4 className="mt-8 text-sm font-semibold">Screenshots</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {project.screenshots.map((s) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="h-auto w-full rounded-xl border border-line/10"
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </dialog>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      title="Featured projects"
      description="What I'm building right now. Each project shows what is implemented and what is still planned."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex">
            <article className="glass glass-hover group flex w-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute left-3 top-3">
                  <StatusBadge status={project.status} solid />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    aria-haspopup="dialog"
                    className="btn-primary px-4 py-2.5"
                  >
                    <Eye className="size-4" aria-hidden="true" />
                    View Project
                    <span className="sr-only">: {project.title}</span>
                  </button>
                  <LinkButtons project={project} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {selected ? <ProjectDialog key={selected.slug} project={selected} onClose={() => setSelected(null)} /> : null}
    </Section>
  );
}
