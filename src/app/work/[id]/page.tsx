import type { Metadata } from "next";
import { projects, type Project } from "@/assets/data";
import Button from "@/components/button";
import FloatingBackLink from "@/components/floating-back-link";
import MoreWorkRecommendations from "@/components/more-work-recommendations";
import SplitHeading from "@/components/split-heading";
import MiniBrowserIframe from "@/components/mini-browser-iframe";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/site";
import SparkleBackground from "@/components/sparkle-background";

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

  const metrics: Array<{ label: string; value: string }> = [
    ...(project.caseStudy.timeline
      ? [{ label: "[ TIMELINE ]", value: project.caseStudy.timeline }]
      : []),
    ...(project.caseStudy.role
      ? [{ label: "[ ROLE SCOPE ]", value: project.caseStudy.role.split(" ")[0] }]
      : []),
    ...(project.caseStudy.services && project.caseStudy.services.length > 0
      ? [
          {
            label: "[ SERVICES ]",
            value: `${project.caseStudy.services.length} ${
              project.caseStudy.services.length === 1 ? "Track" : "Tracks"
            }`,
          },
        ]
      : []),
    { label: "[ STATUS ]", value: "Production" },
  ];

  const metricsGridCols =
    metrics.length === 1
      ? "grid-cols-1"
      : metrics.length === 2
        ? "grid-cols-2"
        : metrics.length === 3
          ? "grid-cols-2 sm:grid-cols-3"
          : "grid-cols-2 lg:grid-cols-4";

  const resultsCount = project.caseStudy.results?.length ?? 0;
  const resultsGridCols =
    resultsCount <= 1
      ? "grid-cols-1"
      : resultsCount === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-3";

  const previewContainerClassName =
    liveUrl && !project.embeddable
      ? "w-full min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]"
      : "w-full aspect-[3/4] sm:aspect-[16/9] min-h-[460px] sm:min-h-[460px] lg:min-h-[640px]";

  return (
    <main className="flex-1 w-full min-w-0 flex flex-col pt-[72px] sm:pt-[84px] bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 pb-16 pt-4 sm:gap-10 sm:px-6 sm:pt-8 md:gap-14 md:pb-28 md:pt-10">
        <FloatingBackLink href="/work" label="Back to all work" />

        {/* Case Study Header Grid */}
        <section className="grid min-w-0 grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] lg:gap-14">
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:gap-6">
            <div className="pr-4 sm:pr-12">
              <div className="relative w-fit max-w-full">
                <SparkleBackground variant="lightning" size={34} />
                <SplitHeading
                  as="h1"
                  className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.98] sm:leading-[0.92] md:leading-[0.88] text-black dark:text-white break-words"
                >
                  {project.title}
                </SplitHeading>
              </div>
            </div>

            <p className="max-w-3xl font-body text-base sm:text-lg md:text-xl leading-relaxed text-black/75 dark:text-zinc-300 break-words">
              {project.caseStudy.headline}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/15 bg-black/[0.04] px-2.5 sm:px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-black dark:border-white/20 dark:bg-white/[0.05] dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(liveUrl || githubUrl) && (
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
                {liveUrl ? (
                  <a href={liveUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto !whitespace-normal text-center !px-5 sm:!px-6 !py-3 !text-[11px] sm:!text-xs font-mono font-bold !tracking-widest uppercase">
                      <span>Visit project website</span>
                      <i className="ri-external-link-line shrink-0" />
                    </Button>
                  </a>
                ) : null}

                {githubUrl ? (
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto !whitespace-normal text-center !bg-white !text-black dark:!bg-black dark:!text-white !border-black dark:!border-white/20 hover:!bg-zinc-100 dark:hover:!bg-zinc-900 !px-5 sm:!px-6 !py-3 !text-[11px] sm:!text-xs font-mono font-bold !tracking-widest uppercase">
                      <span>View source on GitHub</span>
                      <i className="ri-github-line shrink-0" />
                    </Button>
                  </a>
                ) : null}
              </div>
            )}
          </div>

          {/* Project Specification Sidebar */}
          <aside className="grid min-w-0 grid-cols-1 gap-4">
            <article className="grid min-w-0 grid-cols-1 gap-5 border border-black/15 bg-white p-5 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-8">
              <div className="grid min-w-0 gap-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                  Client
                </p>
                <p className="font-display text-xl sm:text-2xl uppercase tracking-tight text-black dark:text-white break-words">
                  {project.client}
                </p>
              </div>

              {project.caseStudy.role && (
                <div className="grid min-w-0 gap-1 border-t border-black/10 dark:border-white/10 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                    Role
                  </p>
                  <p className="font-body text-sm sm:text-base leading-relaxed text-black/80 dark:text-zinc-300 break-words">
                    {project.caseStudy.role}
                  </p>
                </div>
              )}

              {project.caseStudy.services && project.caseStudy.services.length > 0 && (
                <div className="grid min-w-0 gap-2 border-t border-black/10 dark:border-white/10 pt-4">
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
              )}

              <div className="grid min-w-0 gap-2 border-t border-black/10 dark:border-white/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-bold">
                  Technologies
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
        <section
          className={`grid min-w-0 ${metricsGridCols} gap-px border-y border-black/15 bg-black/15 dark:border-white/15 dark:bg-white/15`}
        >
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex min-w-0 flex-col gap-1 bg-white px-3 py-3.5 sm:px-5 sm:py-5 dark:bg-[#111111] ${
                metrics.length === 3 && idx === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
                {metric.label}
              </span>
              <span className="font-display text-base sm:text-xl lg:text-2xl uppercase tracking-tight leading-tight text-black dark:text-white break-words">
                {metric.value}
              </span>
            </div>
          ))}
        </section>

        {/* Project Visual Display / Mini Browser Iframe */}
        {(hasProjectVisual || liveUrl) && (
          <section className="w-full min-w-0">
            <MiniBrowserIframe
              url={liveUrl}
              title={project.title}
              embeddable={project.embeddable}
              fallbackImage={hasProjectVisual ? project.image : undefined}
              containerClassName={previewContainerClassName}
              priority
            />
          </section>
        )}

        {/* Overview and Goals Row */}
        <section
          className={`grid min-w-0 grid-cols-1 gap-6 sm:gap-8 md:gap-10 items-start ${
            project.caseStudy.goals && project.caseStudy.goals.length > 0
              ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
              : ""
          }`}
        >
          <article className="grid min-w-0 grid-cols-1 gap-5 border border-black/15 bg-white p-5 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-10">
            <div className="pr-4 sm:pr-12">
              <div className="relative w-fit max-w-full">
                <SparkleBackground variant="target" size={26} />
                <SplitHeading
                  as="h2"
                  className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter leading-[1.08] sm:leading-none break-words"
                >
                  About the project
                </SplitHeading>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 font-body text-base leading-relaxed text-black/75 dark:text-zinc-300 md:text-lg break-words">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          {project.caseStudy.goals && project.caseStudy.goals.length > 0 && (
            <article className="grid min-w-0 grid-cols-1 gap-5 border border-black/15 bg-white p-5 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-10">
              <SplitHeading
                as="h2"
                className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter leading-[1.08] sm:leading-none break-words"
              >
                Project goals
              </SplitHeading>

              <ul className="grid min-w-0 gap-4 font-body text-base leading-relaxed text-black/75 dark:text-zinc-300 md:text-lg">
                {project.caseStudy.goals.map((goal, idx) => (
                  <li key={goal} className="flex min-w-0 gap-3 items-start">
                    <span className="mt-1 shrink-0 font-mono text-xs font-bold text-zinc-400">
                      {`[0${idx + 1}]`}
                    </span>
                    <span className="min-w-0 break-words">{goal}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}
        </section>

        {/* Engineering Process & Architecture Phases */}
        {project.caseStudy.process && project.caseStudy.process.length > 0 && (
          <section className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8">
            <div className="border-b border-black/15 pb-5 sm:pb-6 dark:border-white/15">
              <div className="pr-4 sm:pr-12">
                <div className="relative w-fit max-w-full">
                  <SparkleBackground variant="terminal" size={28} />
                  <SplitHeading
                    as="h2"
                    className="font-display text-2xl sm:text-3xl md:text-5xl uppercase tracking-tighter leading-[1.08] sm:leading-none break-words"
                  >
                    How I approached the project
                  </SplitHeading>
                </div>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {project.caseStudy.process.map((step) => (
                <article
                  key={step.title}
                  className="flex min-w-0 flex-col justify-between border border-black/15 bg-white p-5 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-8"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                      {step.eyebrow}
                    </p>

                    <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-2xl uppercase tracking-tight leading-snug text-black dark:text-white break-words">
                      {step.title}
                    </h3>

                    <div className="mt-3 sm:mt-4 space-y-3 font-body text-sm leading-relaxed text-black/70 dark:text-zinc-300 sm:text-base break-words">
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
          <section className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 border-b border-black/15 pb-5 sm:pb-6 dark:border-white/15">
              <div className="pr-4 sm:pr-12">
                <div className="relative w-fit max-w-full">
                  <SparkleBackground variant="trophy" size={28} />
                  <SplitHeading
                    as="h2"
                    className="font-display text-2xl sm:text-3xl md:text-5xl uppercase tracking-tighter leading-[1.08] sm:leading-none break-words"
                  >
                    Project results
                  </SplitHeading>
                </div>
              </div>
            </div>

            <div className={`grid min-w-0 gap-5 sm:gap-6 ${resultsGridCols}`}>
              {project.caseStudy.results.map((result, idx) => (
                <div
                  key={result}
                  className="flex min-w-0 flex-col justify-between border border-black/15 bg-white p-5 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A]"
                >
                  <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-400 dark:text-zinc-600">
                    {`0${idx + 1}`}
                  </span>
                  <p className="mt-3 sm:mt-4 font-body text-sm leading-relaxed text-black/80 dark:text-zinc-300 sm:text-base break-words">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Engineering Reflection */}
        {project.caseStudy.reflection && (
          <section className="min-w-0 border border-black/15 bg-black/[0.02] p-5 sm:p-8 dark:border-white/15 dark:bg-white/[0.02] md:p-12">
            <p className="font-display text-lg sm:text-2xl md:text-3xl uppercase tracking-tight leading-snug text-black dark:text-white break-words">
              {project.caseStudy.reflection}
            </p>
          </section>
        )}

        {/* Infinite Project Navigation Bar */}
        <section className="grid min-w-0 grid-cols-1 border border-black/15 dark:border-white/15 sm:grid-cols-2">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group flex min-w-0 flex-col justify-between border-b border-black/15 p-5 sm:p-6 transition-colors hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-zinc-900 sm:border-b-0 sm:border-r"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              &larr; PREVIOUS CASE STUDY
            </span>
            <div className="mt-2.5 sm:mt-3 flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-4">
              <span className="font-display text-xl sm:text-2xl uppercase tracking-tight leading-tight text-black dark:text-white break-words">
                {prevProject.title}
              </span>
              <span className="shrink-0 font-mono text-[11px] sm:text-xs uppercase text-zinc-500 dark:text-zinc-400">
                {prevProject.client}
              </span>
            </div>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex min-w-0 flex-col justify-between p-5 sm:p-6 text-left sm:text-right transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              NEXT CASE STUDY &rarr;
            </span>
            <div className="mt-2.5 sm:mt-3 flex flex-col gap-1 sm:items-end lg:flex-row-reverse lg:items-baseline lg:justify-between lg:gap-4">
              <span className="font-display text-xl sm:text-2xl uppercase tracking-tight leading-tight text-black dark:text-white break-words">
                {nextProject.title}
              </span>
              <span className="shrink-0 font-mono text-[11px] sm:text-xs uppercase text-zinc-500 dark:text-zinc-400">
                {nextProject.client}
              </span>
            </div>
          </Link>
        </section>

        {/* More Work Archive */}
        <section className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-black/15 pb-5 sm:pb-6 dark:border-white/15">
            <div className="pr-4 sm:pr-12">
              <div className="relative w-fit max-w-full">
                <SparkleBackground variant="layers" size={28} />
                <SplitHeading
                  as="h2"
                  className="font-display text-2xl sm:text-3xl md:text-5xl uppercase tracking-tighter leading-[1.08] sm:leading-none break-words"
                >
                  More projects
                </SplitHeading>
              </div>
            </div>
          </div>

          <MoreWorkRecommendations projects={relatedProjects} seed={project.slug} />
        </section>
      </div>
    </main>
  );
}
