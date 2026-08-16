export type Language = 'ja' | 'en' | 'id';

export type SubView = 'home' | 'works' | 'company' | 'partners' | 'talent' | 'contact';

export type RoleCategory = 'all' | 'sakkan' | 'genga' | 'nigen' | 'douga' | 'shiage' | 'tpshu' | 'satsuei' | 'satsuei_kyoryoku' | 'compositor';

export interface StaffCredit {
  roleJa: string;
  roleEn: string;
  roleId?: string;
  episodes?: string;
  namesJa?: string[];
  namesEn?: string[];
}

export interface AnimeProject {
  id: string;
  titleJa: string;
  titleEn: string;
  titleId: string;
  japaneseTitleText: string;
  clientStudio: string;
  partnerStudio?: string; // e.g. Studio Gekkou
  year: number;
  season: 'Winter' | 'Spring' | 'Summer' | 'Fall' | 'Special' | 'MV';
  category: RoleCategory;
  roles: string[];
  episodes: string;
  cutsCount: number;
  posterUrl: string;
  officialStreamUrl?: string;
  trailerUrl?: string;
  keyframeSampleUrl?: string;
  finishedSampleUrl?: string;
  descriptionJa: string;
  descriptionEn: string;
  descriptionId: string;
  keyAnimators: string[];
  formatType?: 'TV Series' | 'Movie' | 'MV' | 'OVA' | 'PV' | 'Web Anime';
  keyframeStaffListUrl?: string;
  featured?: boolean;
  staffDetails?: StaffCredit[];
}

export type ApplicantType = 'freelancer' | 'apprentice';

export interface TalentApplication {
  applicantType: ApplicantType;
  fullName: string;
  nativeName?: string;
  email: string;
  phone?: string;
  country: string;
  city: string;
  preferredRoles: RoleCategory[];
  experienceLevel: 'beginner' | 'junior_1_2_yrs' | 'mid_3_5_yrs' | 'senior_5plus_yrs';
  softwareSkills: string[];
  portfolioUrl: string;
  demoReelUrl?: string;
  softwareProficiency: {
    clipStudioPaint: number;
    toonBoom: number;
    tvpaint: number;
    blender: number;
    afterEffects: number;
  };
  motivationMessage: string;
  availableFrom: string;
  preferredWorkType: 'remote' | 'onsite_tokyo' | 'hybrid';
  agreedToTerms: boolean;
}

export interface StudioStat {
  labelJa: string;
  labelEn: string;
  labelId: string;
  value: string;
  suffix?: string;
}

export interface PipelineStep {
  stepNumber: string;
  titleJa: string;
  titleEn: string;
  titleId: string;
  descJa: string;
  descEn: string;
  descId: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category?: 'Production' | 'Recruitment' | 'Partner' | 'Event' | string;
  categoryJa?: string;
  categoryEn?: string;
  categoryId?: string;
  titleJa: string;
  titleEn: string;
  titleId: string;
  summaryJa?: string;
  summaryEn?: string;
  summaryId?: string;
  link?: string;
}
