export type ProjectSector =
  | 'healthcare'
  | 'commercial'
  | 'institutional'
  | 'industrial'
  | 'residential';

export type Project = {
  name: string;
  sector: ProjectSector;
  detail: string;
  image?: string;
};

export const SECTOR_LABELS: Record<ProjectSector, string> = {
  healthcare: 'Healthcare',
  commercial: 'Commercial',
  institutional: 'Institutional',
  industrial: 'Industrial',
  residential: 'Residential',
};

// Curated from the 50 documented projects in docs/KONZA_SPEC.md §2.
// "Apricot Property Solutions" is excluded — [CONFIRM], not verified in any primary source.
export const PROJECTS: Project[] = [
  {
    name: 'Radiant Group of Hospitals',
    sector: 'healthcare',
    detail: '2× 11-stop + 1× 5-stop elevators, Fuji & Delfar.',
    image: 'Project — Radiant Hospital.jpg',
  },
  {
    name: 'Jesse Kay Hospital, Roysambu',
    sector: 'healthcare',
    detail: '2× 5-stop elevators, Delfar.',
    image: 'Project — Jesse Kay Hospital.jpg',
  },
  {
    name: 'Ruai Family Hospital',
    sector: 'healthcare',
    detail: '3× 7-stop elevators, Delfar.',
    image: 'Project — Ruai Family Hospital.jpg',
  },
  {
    name: 'Halisi Family Hospital, Kitengela',
    sector: 'healthcare',
    detail: 'Elevator installation for a private hospital in Kitengela.',
    image: 'Project — Halisi Family Hospital Kitengela.jpg',
  },
  {
    name: 'Village Market',
    sector: 'commercial',
    detail: '11 escalators + 1× 3-stop elevator, Fuji — our largest single installation.',
    image: 'Project — Village Market.jpg',
  },
  {
    name: 'Junction Trade Centre',
    sector: 'commercial',
    detail: '2× 10-stop panoramic elevators, Fuji.',
    image: 'Project — Junction Trade Centre.jpg',
  },
  {
    name: 'Ruai Mega Mall',
    sector: 'commercial',
    detail: 'Elevator installation for a retail mall development.',
    image: 'Project — Ruai Mega Mall.jpg',
  },
  {
    name: 'Kajiado Law Courts',
    sector: 'institutional',
    detail: '2× 5-stop elevators, Fuji.',
    image: 'Project — Kajiado Law Courts.jpg',
  },
  {
    name: 'MPESA Foundation Academy',
    sector: 'institutional',
    detail: 'Glarie-supplied 2-stop elevator installation.',
    image: 'Project — MPESA Foundation Academy.jpg',
  },
  {
    name: 'Biodeal Industries, Mombasa Road',
    sector: 'industrial',
    detail: '1× 7-stop passenger elevator + 1× 7-stop goods elevator, Fuji.',
    image: 'Project — Biodeal Industries.jpg',
  },
  {
    name: 'The Moon Apartments, Ruaka',
    sector: 'residential',
    detail: 'Passenger lift installation for a residential apartment development.',
    image: 'Project — The Moon Apartments Ruaka.jpg',
  },
  {
    name: 'Sycamore Court, Ruaka',
    sector: 'residential',
    detail: 'Passenger lift installation for a residential development in Ruaka.',
    image: 'Project — Sycamore Court Ruaka.jpg',
  },
  {
    name: 'Blessed House, Thika Road',
    sector: 'residential',
    detail: 'Passenger lift installation on the Thika Road corridor.',
    image: 'Project — Blessed House Thika Road.jpg',
  },
  {
    name: 'Khamakis Fewa Palace',
    sector: 'residential',
    detail: 'Passenger lift installation for a private residential property.',
    image: 'Project — Khamakis Fewa Palace.jpg',
  },
  {
    name: 'Villa Platform Elevators',
    sector: 'residential',
    detail: 'Villa platform elevator installations for residential properties across Nairobi.',
    image: 'Project — Villa Platform Elevators.jpg',
  },
];
