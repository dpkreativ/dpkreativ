import type { Metadata } from "next";
import { projects, type Project } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import Button from "@/components/button";
import FloatingBackLink from "@/components/floating-back-link";
import MoreWorkRecommendations from "@/components/more-work-recommendations";
import RevealText from "@/components/reveal-text";
import SplitHeading from "@/components/split-heading";
import MiniBrowserIframe from "@/components/mini-browser-iframe";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

const PLACEHOLDER_IMAGE = "/images/project-demos/placeholder.png";

type PageProps = {
  params: Promise<{ id: string }>;
};

function normalizeUrl(url: string) {
  if (!url || url === "#") {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
}

function getProject(id: string): Project | undefined {
  return projects.find((project) => project.slug === id);
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) return {};

  const image = project.image === PLACEHOLDER_IMAGE ? SITE_OG_IMAGE : project.image;

  return {
    title: project.title,
    description: project.caseStudy.headline,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      url: `${SITE_URL}/work/${project.slug}`,
      title: `${project.title} | Divine Orji`,
      description: project.caseStudy.headline,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Divine Orji`,
      description: project.caseStudy.headline,
      images: [image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  const liveUrl = normalizeUrl(project.url);
  const githubUrl = normalizeUrl(project.github);
  const relatedProjects = projects.filter((entry) => entry.slug !== project.slug);
  const hasProjectVisual = project.image !== PLACEHOLDER_IMAGE;

  // Next / Previous navigation calculation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="flex-1 w-full flex flex-col pt-[84px] bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 pb-20 pt-8 md:gap-14 md:pb-28 md:pt-10">
        <FloatingBackLink href="/work" label="Back to all work" />

        {/* Case Study Header Grid */}
        <section className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] gap-10 md:gap-14 items-start">
          <div className="grid gap-6">
            <SplitHeading
              as="h1"
              className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.88] text-black dark:text-white"
            >
              {project.title}
            </SplitHeading>

            <p className="max-w-3xl font-body text-base sm:text-lg md:text-xl leading-relaxed text-black/75 dark:text-zinc-300">
              {project.caseStudy.headline}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/15 bg-black/[0.04] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:border-white/20 dark:bg-white/[0.05] dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(liveUrl || githubUrl) && (
              <div className="flex flex-wrap gap-4 pt-4">
                {liveUrl ? (
                  <a href={liveUrl} target="_blank" rel="noreferrer">
                    <Button className="!px-6 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
                      <span>Visit Live Site</span>
                      <i className="ri-external-link-line" />
                    </Button>
                  </a>
                ) : null}

                {githubUrl ? (
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    <Button className="!bg-white !text-black dark:!bg-black dark:!text-white !border-black dark:!border-white/20 hover:!bg-zinc-100 dark:hover:!bg-zinc-900 !px-6 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
                      <span>View GitHub</span>
                      <i className="ri-github-line" />
                    </Button>
                  </a>
                ) : null}
              </div>
            )}
          </div>

          {/* Project Specification Sidebar */}
          <aside className="grid gap-4">
            <article className="grid gap-5 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-8">
              <div className="grid gap-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                  Client
                </p>
                <p className="font-display text-2xl uppercase tracking-tight text-black dark:text-white">
                  {project.client}
                </p>
              </div>

              <div className="grid gap-1 border-t border-black/10 dark:border-white/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                  Role
                </p>
                <p className="font-body text-base leading-relaxed text-black/80 dark:text-zinc-300">
                  {project.caseStudy.role}
                </p>
              </div>

              <div className="grid gap-2 border-t border-black/10 dark:border-white/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                  Services
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.caseStudy.services.map((service) => (
                    <span
                      key={service}
                      className="border border-black/10 bg-zinc-100 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:border-white/15 dark:bg-black dark:text-white"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 border-t border-black/10 dark:border-white/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:border-white/15 dark:bg-black dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </aside>
        </section>

        {/* Telemetry & Impact Metrics Strip */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-y border-black/15 py-6 dark:border-white/15">
          <div className="flex flex-col gap-1 border-r border-black/10 pr-4 dark:border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
              [ TIMELINE ]
            </span>
            <span className="font-display text-2xl uppercase tracking-tight text-black dark:text-white">
              {project.caseStudy.timeline || "2024"}
            </span>
          </div>
          <div className="flex flex-col gap-1 sm:border-r border-black/10 pr-4 dark:border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
              [ ROLE SCOPE ]
            </span>
            <span className="font-display text-2xl uppercase tracking-tight text-black dark:text-white truncate">
              {project.caseStudy.role.split(" ")[0]}
            </span>
          </div>
          <div className="flex flex-col gap-1 border-r border-black/10 pr-4 dark:border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
              [ SERVICES ]
            </span>
            <span className="font-display text-2xl uppercase tracking-tight text-black dark:text-white">
              {project.caseStudy.services.length} Tracks
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
              [ STATUS ]
            </span>
            <span className="font-display text-2xl uppercase tracking-tight text-black dark:text-white">
              Production
            </span>
          </div>
        </section>

        {/* Project Visual Display / Mini Browser Iframe */}
        {(hasProjectVisual || liveUrl) && (
          <section className="w-full">
            <MiniBrowserIframe
              url={liveUrl}
              title={project.title}
              fallbackImage={hasProjectVisual ? project.image : undefined}
              containerClassName="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[460px] sm:min-h-[580px] lg:min-h-[680px]"
              priority
            />
          </section>
        )}

        {/* Overview and Goals Row */}
        <section className="grid gap-8 md:gap-10 items-start lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <article className="grid gap-5 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-10">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
            >
              Project Overview.
            </SplitHeading>

            <div className="grid gap-4 font-body text-base leading-relaxed text-black/75 dark:text-zinc-300 md:text-lg">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="grid gap-5 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-10">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
            >
              Strategic Goals.
            </SplitHeading>

            <ul className="grid gap-4 font-body text-base leading-relaxed text-black/75 dark:text-zinc-300 md:text-lg">
              {project.caseStudy.goals.map((goal, idx) => (
                <li key={goal} className="flex gap-3 items-start">
                  <span className="mt-1 font-mono text-xs font-bold text-zinc-400">
                    {`[0${idx + 1}]`}
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Engineering Process & Architecture Phases */}
        {project.caseStudy.process && project.caseStudy.process.length > 0 && (
          <section className="grid gap-8">
            <div className="border-b border-black/15 pb-6 dark:border-white/15">
              <SplitHeading
                as="h2"
                className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none"
              >
                Engineering Process.
              </SplitHeading>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.caseStudy.process.map((step, idx) => (
                <article
                  key={step.title}
                  className="flex flex-col justify-between border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                      <span>{step.eyebrow}</span>
                      <span>{`[PHASE 0${idx + 1}]`}</span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-black dark:text-white">
                      {step.title}
                    </h3>

                    <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-black/70 dark:text-zinc-300 sm:text-base">
                      {step.details.map((detail, dIdx) => (
                        <p key={dIdx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Measurable Results & Outcomes */}
        {project.caseStudy.results && project.caseStudy.results.length > 0 && (
          <section className="grid gap-8">
            <div className="flex flex-col gap-2 border-b border-black/15 pb-6 dark:border-white/15">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                DELIVERABLES & METRICS
              </span>
              <SplitHeading
                as="h2"
                className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none"
              >
                Measurable Outcomes.
              </SplitHeading>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {project.caseStudy.results.map((result, idx) => (
                <div
                  key={result}
                  className="flex flex-col justify-between border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A]"
                >
                  <span className="font-mono text-2xl font-bold text-zinc-400 dark:text-zinc-600">
                    {`0${idx + 1}`}
                  </span>
                  <p className="mt-4 font-body text-sm leading-relaxed text-black/80 dark:text-zinc-300 sm:text-base">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Engineering Reflection */}
        {project.caseStudy.reflection && (
          <section className="border border-black/15 bg-black/[0.02] p-8 dark:border-white/15 dark:bg-white/[0.02] md:p-12">
            <p className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight leading-snug text-black dark:text-white">
              &quot;{project.caseStudy.reflection}&quot;
            </p>
          </section>
        )}

        {/* Infinite Project Navigation Bar */}
        <section className="grid grid-cols-1 border border-black/15 dark:border-white/15 sm:grid-cols-2">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group flex flex-col justify-between border-b border-black/15 p-6 transition-colors hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-zinc-900 sm:border-b-0 sm:border-r"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              &larr; PREVIOUS CASE STUDY
            </span>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="font-display text-2xl uppercase tracking-tight text-black dark:text-white">
                {prevProject.title}
              </span>
              <span className="font-mono text-xs uppercase text-zinc-400">
                {prevProject.client}
              </span>
            </div>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col justify-between p-6 text-left sm:text-right transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              NEXT CASE STUDY &rarr;
            </span>
            <div className="mt-3 flex items-center justify-between sm:flex-row-reverse gap-4">
              <span className="font-display text-2xl uppercase tracking-tight text-black dark:text-white">
                {nextProject.title}
              </span>
              <span className="font-mono text-xs uppercase text-zinc-400">
                {nextProject.client}
              </span>
            </div>
          </Link>
        </section>

        {/* More Work Archive */}
        <section className="grid gap-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-black/15 pb-6 dark:border-white/15">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none"
            >
              More Work.
            </SplitHeading>
            <RevealText
              as="p"
              className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-bold"
            >
              Explore the rest of the archive.
            </RevealText>
          </div>

          <MoreWorkRecommendations projects={relatedProjects} seed={project.slug} />
        </section>
      </div>
    </main>
  );
}
