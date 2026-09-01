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
                  className="group overflow-hidden rounded-xl border border-line-light bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:text-left"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {project.image ? (
                      <Image
                        src={projectImageSrc(project.image)}
                        alt={project.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="ph-projects absolute inset-0 flex items-center justify-center">
                        <SectorIcon className="h-16 w-16 text-white/10" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-center gap-2 md:justify-start">
                      <span className="font-sans text-2xl font-bold text-red">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-red/70">
                        {SECTOR_LABELS[project.sector]}
                      </span>
                    </div>
                    <h3 className="mt-2 font-sans text-lg font-bold text-navy-950 group-hover:text-red">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{project.detail}</p>
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
