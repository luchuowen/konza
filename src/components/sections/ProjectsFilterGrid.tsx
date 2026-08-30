'use client';

import { useMemo, useState } from 'react';
import { PROJECTS, SECTOR_LABELS, type ProjectSector } from '@/lib/projects-data';
import { Container } from '@/components/ui/Container';
import { Chip } from '@/components/ui/Chip';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

type Filter = 'all' | ProjectSector;

const SECTOR_ORDER: ProjectSector[] = [
  'healthcare',
  'commercial',
  'institutional',
  'industrial',
  'residential',
];

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
        <Container className="flex flex-wrap gap-3 py-4">
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
            {visibleProjects.map((project) => (
              <article
                key={project.name}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl transition-transform hover:-translate-y-1"
              >
                <div className="ph-projects absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-navy-950/5 transition-colors group-hover:from-navy-950" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left transition-transform duration-300 group-hover:translate-y-0">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">
                    {SECTOR_LABELS[project.sector]}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-dark">{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
