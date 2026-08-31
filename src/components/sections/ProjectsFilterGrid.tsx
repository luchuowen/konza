'use client';

import type { ComponentType } from 'react';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { PROJECTS, SECTOR_LABELS, type ProjectSector } from '@/lib/projects-data';
import { projectImageSrc } from '@/lib/images';
import { Container } from '@/components/ui/Container';
import { Chip } from '@/components/ui/Chip';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import {
  HealthcareIcon,
  CommercialIcon,
  InstitutionalIcon,
  IndustrialIcon,
  ResidentialIcon,
} from '@/components/ui/ProjectSectorIcons';

type Filter = 'all' | ProjectSector;

const SECTOR_ORDER: ProjectSector[] = [
  'healthcare',
  'commercial',
  'institutional',
  'industrial',
  'residential',
];

const SECTOR_ICONS: Record<ProjectSector, ComponentType<{ className?: string }>> = {
  healthcare: HealthcareIcon,
  commercial: CommercialIcon,
  institutional: InstitutionalIcon,
  industrial: IndustrialIcon,
  residential: ResidentialIcon,
};

export function ProjectsFilterGrid() {
  const [active, setActive] = useState<Filter>('all');

  const counts = useMemo(() => {
    const bySector: Record<Filter, number> = {
      all: PROJECTS.length,
      healthcare: 0,
      commercial: 0,
      institutional: 0,
      industrial: 0,
      residential: 0,
    };
    for (const project of PROJECTS) {
      bySector[project.sector] += 1;
    }
    return bySector;
  }, []);

  const visibleProjects = useMemo(
    () => (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.sector === active)),
    [active]
  );

  return (
    <div className="relative bg-paper">
      <div className="sticky top-[71px] z-40 border-b border-line-light bg-white/90 backdrop-blur-md">
        <Container className="flex flex-wrap justify-center gap-3 py-4">
          <Chip label="All" active={active === 'all'} count={counts.all} onClick={() => setActive('all')} />
          {SECTOR_ORDER.map((sector) => (
            <Chip
              key={sector}
              label={SECTOR_LABELS[sector]}
              active={active === sector}
              count={counts[sector]}
              onClick={() => setActive(sector)}
            />
          ))}
        </Container>
      </div>

      <Container className="py-14 md:py-20">
        <RevealOnScroll stagger>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {visibleProjects.map((project, i) => {
              const SectorIcon = SECTOR_ICONS[project.sector];
              return (
                <article
                  key={project.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-800 bg-navy-950 transition-all duration-300 hover:-translate-y-1.5 hover:border-red/50 hover:shadow-[0_24px_48px_-16px_rgba(10,22,40,0.4)]"
                >
                  <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-lg md:m-4 md:mb-3">
                    {project.image ? (
                      <Image
                        src={projectImageSrc(project.image)}
                        alt={project.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="ph-projects absolute inset-0 flex items-center justify-center">
                        <SectorIcon className="h-16 w-16 text-white/10" />
                      </div>
                    )}
                  </div>

                  <div className="relative flex flex-1 flex-col px-5 pb-6 pt-1 md:px-6">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-1 -top-3 select-none font-sans text-6xl font-bold leading-none text-white/[0.05] md:-top-4 md:text-7xl"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="relative flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red/15 text-red">
                        <SectorIcon className="h-[1.1rem] w-[1.1rem]" />
                      </span>
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-red">
                        {SECTOR_LABELS[project.sector]}
                      </span>
                    </div>

                    <h3 className="relative mt-3 font-sans text-lg font-bold text-white">
                      {project.name}
                    </h3>
                    <span className="relative mt-2 block h-[2px] w-8 bg-red/60 transition-all duration-300 group-hover:w-14 group-hover:bg-red" />
                    <p className="relative mt-3 flex-1 text-sm text-slate-dark">{project.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
