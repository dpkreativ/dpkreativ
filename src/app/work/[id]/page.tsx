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
import React, { Fragment } from "react";

const PLACEHOLDER_IMAGE = "/images/project-placeholder.png";

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

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid gap-12 md:gap-16">
        <FloatingBackLink href="/work" label="Back to all work" />

        <div className="flex flex-wrap items-center justify-end gap-4">

          <span className="px-3 py-2 border-2 border-faxx-dark dark:border-gray-700 bg-white dark:bg-black font-mono text-[11px] font-bold uppercase tracking-widest text-faxx-blue dark:text-faxx-cyan">
            Case Study
          </span>
        </div>

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
                lines={[project.title]}
              />

              <p className="max-w-3xl font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-faxx-dark/80 dark:text-gray-300">
                {project.caseStudy.headline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 border-2 border-faxx-dark dark:border-gray-700 bg-faxx-blue dark:bg-faxx-cyan text-white dark:text-faxx-dark font-mono text-[11px] font-bold uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(liveUrl || githubUrl) && (
              <div className="flex flex-wrap gap-3">
                {liveUrl ? (
                  <a href={liveUrl} target="_blank" rel="noreferrer">
                    <Button className="!shadow-[4px_4px_0px_0px_rgba(67,32,246,1)] dark:!shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] active:!shadow-[0px_0px_0px_0px_rgba(67,32,246,1)] dark:active:!shadow-[0px_0px_0px_0px_rgba(0,229,255,1)]">
                      <span>Visit Live Site</span>
                      <i className="ri-external-link-line"></i>
                    </Button>
                  </a>
                ) : null}

                {githubUrl ? (
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    <Button className="!bg-white !text-faxx-dark dark:!bg-black dark:!text-white !border-faxx-dark dark:!border-gray-700 !shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] dark:!shadow-[4px_4px_0px_0px_rgba(0,229,255,0.25)] active:!shadow-none">
                      <span>View GitHub</span>
                      <i className="ri-github-line"></i>
                    </Button>
                  </a>
                ) : null}
              </div>
            )}
          </div>

          <aside className="grid gap-4">
            <article className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
              <div className="grid gap-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                  Client
                </p>
                <p className="font-display text-2xl uppercase tracking-tighter leading-none">
                  {project.client}
                </p>
              </div>

              <div className="grid gap-2 border-t border-faxx-dark/10 dark:border-gray-700 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                  Role
                </p>
                <p className="font-body text-lg leading-relaxed dark:text-gray-300">
                  {project.caseStudy.role}
                </p>
              </div>

              <div className="grid gap-2 border-t border-faxx-dark/10 dark:border-gray-700 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-2 border-2 border-faxx-dark dark:border-gray-700 bg-faxx-light dark:bg-black font-mono text-[11px] font-bold uppercase tracking-widest"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 border-t border-faxx-dark/10 dark:border-gray-700 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 border-2 border-faxx-dark dark:border-gray-700 bg-white dark:bg-black font-mono text-[11px] font-bold uppercase tracking-widest"
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
          <section className="relative overflow-hidden border-4 border-faxx-dark dark:border-gray-700 min-h-[400px] md:min-h-[560px] bg-white dark:bg-zinc-900 shadow-[12px_12px_0px_0px_rgba(67,32,246,1)] dark:shadow-[12px_12px_0px_0px_rgba(0,229,255,0.2)]">
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
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faxx-cyan font-bold mb-3">
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
          <article className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
              lines={["Project Overview."]}
            />

            <div className="grid gap-4 font-body text-lg leading-relaxed dark:text-gray-300">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
              lines={["Goals."]}
            />

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
          <div className="border-b-4 border-faxx-dark dark:border-gray-700 pb-6">
            <SplitHeading
              as="h2"
              className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-none"
              lines={[
                <Fragment key="idea-to-launch">
                  From Idea To <span className="text-faxx-blue dark:text-faxx-cyan">Launch.</span>
                </Fragment>,
              ]}
            />
            <RevealText
              as="p"
              className="font-mono text-xs mt-4 text-faxx-coral dark:text-faxx-lime font-bold uppercase tracking-widest"
            >
              A walkthrough of how the work moved from framing to execution.
            </RevealText>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-5 top-2 w-1 bg-faxx-dark dark:bg-gray-700 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="grid gap-10 md:gap-14">
              {project.caseStudy.process.map((step, idx) => {
                const milestoneNumber = String(idx + 1).padStart(2, "0");
                const cardOnRight = idx % 2 === 0;

                return (
                  <article
                    key={step.title}
                    className="relative grid gap-4 pl-16 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:items-start md:gap-8 md:pl-0"
                  >
                    <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center border-4 border-faxx-dark bg-faxx-coral font-display text-xl uppercase tracking-tighter text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] dark:border-gray-700 dark:bg-faxx-lime dark:text-faxx-dark dark:shadow-[4px_4px_0px_0px_rgba(0,229,255,0.35)] md:left-1/2 md:-translate-x-1/2">
                      {milestoneNumber}
                    </div>

                    <div
                      className={`md:row-start-1 ${cardOnRight ? "md:col-start-1 md:flex md:justify-end md:pt-2" : "md:col-start-3 md:pt-2"}`}
                    >
                      <div className="inline-flex w-fit items-center gap-3 border-4 border-faxx-dark bg-faxx-blue px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] dark:border-gray-700 dark:bg-faxx-cyan dark:text-faxx-dark dark:shadow-[6px_6px_0px_0px_rgba(0,229,255,0.25)]">
                        <span className="opacity-70">Milestone {milestoneNumber}</span>
                        <span aria-hidden="true">{"//"}</span>
                        <span>{step.eyebrow}</span>
                      </div>
                    </div>

                    <div className={`md:row-start-1 ${cardOnRight ? "md:col-start-3" : "md:col-start-1"}`}>
                      <div className="grid gap-5 border-4 border-faxx-dark bg-white p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(60,60,60,1)] dark:border-gray-700 dark:bg-zinc-900 dark:shadow-[10px_10px_0px_0px_rgba(0,229,255,0.2)]">
                        <div className="flex flex-wrap items-center gap-3 border-b-2 border-faxx-dark/10 pb-4 dark:border-gray-700">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime">
                            {step.eyebrow}
                          </span>
                          <span className="h-2 w-2 bg-faxx-dark dark:bg-faxx-cyan"></span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faxx-dark/60 dark:text-gray-400">
                            Step {milestoneNumber}
                          </span>
                        </div>

                        <h3 className="text-balance font-display text-lg md:text-xl lg:text-2xl tracking-tight leading-[1.2] text-faxx-dark dark:text-white">
                          {step.title}
                        </h3>

                        <div className="grid gap-4 font-body text-sm md:text-base leading-relaxed dark:text-gray-300">
                          {step.details.map((detail) => (
                            <p key={detail}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-6 md:gap-8 items-start">
          <article className="grid gap-5 bg-faxx-dark text-white border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(67,32,246,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,1)]">
            <SplitHeading
              as="h2"
              className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-none"
              lines={[
                <Fragment key="results">
                  Results <span className="text-faxx-cyan">.</span>
                </Fragment>,
              ]}
            />

            <ul className="grid gap-4 font-body text-lg leading-relaxed text-white/85">
              {project.caseStudy.results.map((result) => (
                <li key={result} className="flex gap-3 items-start">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-faxx-cyan border border-white/20"></span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="grid gap-6 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
            <SplitHeading
              as="h2"
              className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-none"
              lines={["Reflection."]}
            />

            <p className="font-body text-lg md:text-xl leading-relaxed dark:text-gray-300">
              {project.caseStudy.reflection}
            </p>


          </article>
        </section>

        <section className="grid gap-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b-4 border-faxx-dark dark:border-gray-700 pb-6">
            <SplitHeading
              as="h2"
              className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none"
              lines={[
                <Fragment key="more-work">
                  More <span className="text-faxx-blue dark:text-faxx-cyan">Work.</span>
                </Fragment>,
              ]}
            />
            <RevealText
              as="p"
              className="font-mono text-sm uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold"
            >
              Explore the rest of the archive.
            </RevealText>
          </div>

          <MoreWorkRecommendations projects={relatedProjects} />
        </section>
      </div>
    </main>
  );
}
