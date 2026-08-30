// Central map of real media assets in public/images, keyed to the exact
// filenames docs/KONZA_MEDIA_PROMPTS.md defines for each slot — never guess
// a filename, only reference what's actually named there.
const BASE = '/images/';

export const IMAGES = {
  heroVerticalCity: `${BASE}Hero — Vertical City Nairobi.jpg`,
  heroTechnician: `${BASE}Hero — Technician At Work.jpg`,
  heroHospitalLobby: `${BASE}Hero — Hospital Lift Lobby.jpg`,
  complianceBand: `${BASE}Compliance — Credentials Band Background.jpg`,
  aboutTeamAtWork: `${BASE}About — Team At Work.jpg`,
  careersWorkshopBench: `${BASE}Careers — Workshop Bench.jpg`,
  maintenanceInspection: `${BASE}Maintenance — Technician Inspection.jpg`,
  contactOfficeExterior: `${BASE}Contact — Nairobi Office Exterior.jpg`,
  ogSocialShareCard: `${BASE}OG — Social Share Card.jpg`,
  productPassengerLifts: `${BASE}Product — Passenger Lifts.jpg`,
  productEscalators: `${BASE}Product — Escalators.jpg`,
  productHomeLifts: `${BASE}Product — Home Lifts.jpg`,
  productMovingWalkways: `${BASE}Product — Moving Walkways.jpg`,
  industryResidentialHighrise: `${BASE}Industry — Residential Highrise.jpg`,
  industryCommercialOffice: `${BASE}Industry — Commercial and Office.jpg`,
  industryHospitalInstitutional: `${BASE}Industry — Hospital and Institutional.jpg`,
  industryRetailEscalators: `${BASE}Industry — Retail and Escalators.jpg`,
  videoLiftShaftCutaway: `${BASE}Video — Lift Shaft Cutaway Loop.mp4`,
} as const;

// projects-data.ts stores bare filenames (e.g. "Project — Village Market.jpg")
// for the projects that have a real photo — this resolves one to a full path.
export function projectImageSrc(filename: string): string {
  return `${BASE}${filename}`;
}
