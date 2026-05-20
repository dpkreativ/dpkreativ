import type { Metadata } from "next";
import { projects, type Project } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import Button from "@/components/button";
import FloatingBackLink from "@/components/floating-back-link";
import MoreWorkRecommendations from "@/components/more-work-recommendations";
import ProjectBrandMark from "@/components/project-brand-mark";
import RevealText from "@/components/reveal-text";
import SplitHeading from "@/components/split-heading";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

const PLACEHOLDER_IMAGE = "/images/project-demos/project-placeholder.png";

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
  const brandMark = project.brand;
  const hasProjectVisual = project.image !== PLACEHOLDER_IMAGE;

  return (
    <main className="flex-1 w-full flex flex-col pt-[84px]">
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-16 pt-8 md:gap-12 md:px-12 md:pb-24 md:pt-10">
        <FloatingBackLink href="/work" label="Back to all work" />

        <section className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] gap-8 md:gap-10 items-start">
          <div className="grid gap-8">
            <div className="grid gap-5">
              <RevealText
                as="p"
                className="font-mono text-xs uppercase tracking-[0.2em] text-faxx-coral dark:text-faxx-lime font-bold"
                triggerStart="top 96%"
                lineDelay={0.1}
              >
                {project.client} <span aria-hidden="true">{"//"}</span> {project.caseStudy.timeline}
              </RevealText>

              <SplitHeading
                as="h1"
                className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85] text-faxx-dark dark:text-white"
              >
                {project.title}
              </SplitHeading>

              <p className="max-w-3xl font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-faxx-dark/80 dark:text-gray-300">
                {project.caseStudy.headline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-faxx-dark bg-faxx-coral px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-white dark:border-gray-700 dark:bg-faxx-lime dark:text-faxx-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(liveUrl || githubUrl) && (
              <div className="flex flex-wrap gap-3">
                {liveUrl ? (
                  <a href={liveUrl} target="_blank" rel="noreferrer">
                    <Button className="!shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:!shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:!shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] dark:active:!shadow-[0px_0px_0px_0px_rgba(255,255,255,1)]">
                      <span>Visit Live Site</span>
                      <i className="ri-external-link-line"></i>
                    </Button>
                  </a>
                ) : null}

                {githubUrl ? (
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    <Button className="!bg-white !text-faxx-dark dark:!bg-black dark:!text-white !border-faxx-dark dark:!border-gray-700 !shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] dark:!shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:!shadow-none">
                      <span>View GitHub</span>
                      <i className="ri-github-line"></i>
                    </Button>
                  </a>
                ) : null}
              </div>
            )}
          </div>

          <aside className="grid gap-4">
            <article className="grid gap-5 rounded-[2rem] border-4 border-faxx-dark bg-white p-6 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:border-gray-700 dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_rgba(191,255,0,0.2)]">
              <div className="grid gap-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold">
                  Client
                </p>
                <p className="font-display text-2xl uppercase tracking-tighter leading-none">
                  {project.client}
                </p>
              </div>

              <div className="grid gap-2 border-t border-faxx-dark/10 dark:border-gray-700 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold">
                  Role
                </p>
                <p className="font-body text-lg leading-relaxed dark:text-gray-300">
                  {project.caseStudy.role}
                </p>
              </div>

              <div className="grid gap-2 border-t border-faxx-dark/10 dark:border-gray-700 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border-2 border-faxx-dark bg-faxx-light px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-widest dark:border-gray-700 dark:bg-black"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 border-t border-faxx-dark/10 dark:border-gray-700 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-faxx-dark bg-white px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-widest dark:border-gray-700 dark:bg-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </aside>
        </section>

        {/* Project Visual Section */}
        {hasProjectVisual && (
          <section className="relative min-h-[400px] overflow-hidden rounded-[2rem] border-4 border-faxx-dark bg-white shadow-[12px_12px_0px_0px_rgba(255,74,90,1)] dark:border-gray-700 dark:bg-zinc-900 dark:shadow-[12px_12px_0px_0px_rgba(191,255,0,0.2)] md:min-h-[560px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>
            <div className="absolute left-6 right-6 bottom-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faxx-coral font-bold mb-3">
                  Project Visual
                </p>
                <p className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white leading-none">
                  {project.title}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Overview and Goals Row */}
        <section className="grid gap-8 md:gap-10 items-start lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <article className="grid gap-5 rounded-[2rem] border-4 border-faxx-dark bg-white p-6 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:border-gray-700 dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_rgba(191,255,0,0.2)] md:p-10">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
            >
              Project Overview.
            </SplitHeading>

            <div className="grid gap-4 font-body text-lg leading-relaxed dark:text-gray-300">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="grid gap-5 rounded-[2rem] border-4 border-faxx-dark bg-white p-6 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:border-gray-700 dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_rgba(191,255,0,0.2)] md:p-10">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
            >
              Goals.
            </SplitHeading>

            <ul className="grid gap-4 font-body text-lg leading-relaxed dark:text-gray-300">
              {project.caseStudy.goals.map((goal) => (
                <li key={goal} className="flex gap-3 items-start">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-faxx-coral dark:bg-faxx-lime border border-faxx-dark dark:border-gray-700"></span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid gap-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b-4 border-faxx-dark dark:border-gray-700 pb-6">
            <SplitHeading
              as="h2"
              className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none"
            >
              More Work.
            </SplitHeading>
            <RevealText
              as="p"
              className="font-mono text-sm uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold"
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
