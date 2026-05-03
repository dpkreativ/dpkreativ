"use client";

import type { Project } from "@/assets/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/assets/icons";
import ProjectBrandMark from "@/components/project-brand-mark";

export default function WorkAccordion({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col md:flex-row w-full h-[540px] md:h-[372px] gap-4">
      {featuredProjects.map((project, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={project.slug}
            onClick={() => setActiveIndex(idx)}
            className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden border-4 border-faxx-dark dark:border-gray-700 group
              ${isActive 
                ? "flex-[6] md:flex-[5] shadow-[8px_8px_0px_0px_rgba(67,32,246,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,1)]" 
                : "flex-[1] grayscale hover:grayscale-0 md:hover:flex-[1.2] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
              }
            `}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}></div>

            {/* Content for Active Item */}
            <div className={`absolute bottom-0 left-0 w-full p-6 md:p-10 transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-faxx-blue dark:bg-faxx-cyan text-white dark:text-faxx-dark font-mono text-[10px] md:text-xs font-bold uppercase border border-faxx-dark">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <ProjectBrandMark
                  brand={project.brand}
                  fallback={project.title}
                  className="h-12 w-12 md:h-14 md:w-14"
                  imageClassName="max-h-full max-w-full object-contain"
                  textClassName="font-display text-base uppercase tracking-tight text-faxx-dark"
                />
                <h3 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
                  {project.title}
                </h3>
              </div>
              <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-4 bg-white text-faxx-dark px-6 py-3 font-mono font-bold uppercase hover:bg-faxx-blue dark:hover:bg-faxx-cyan hover:text-white dark:hover:text-faxx-dark transition-colors">
                <span>View Case Study</span>
                <ArrowIcon />
              </Link>
            </div>

            {/* Vertical Title for Inactive Items */}
            {!isActive && (
              <div className="absolute inset-0 flex items-center justify-center md:justify-center pointer-events-none px-4">
                <div className="flex items-center gap-3 md:rotate-90 opacity-60 group-hover:opacity-100 transition-opacity">
                  <ProjectBrandMark
                    brand={project.brand}
                    fallback={project.title}
                    className="h-10 w-10 md:h-11 md:w-11"
                    imageClassName="max-h-full max-w-full object-contain"
                    textClassName="font-display text-sm uppercase tracking-tight text-faxx-dark"
                  />
                  <h3 className="font-display text-xl md:text-2xl text-white uppercase tracking-tighter whitespace-nowrap">
                    {project.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
