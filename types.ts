export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface GeneralSettings {
  name: string;
  role: string;
  bio_short: string;
  bio_long: string;
  email: string;
  logo_image?: string;
  github_link: string;
  linkedin_link: string;
  twitter_link: string;
  facebook_link?: string;
  instagram_link?: string;
  hero_image: string;
  privacy_policy: string;
  terms_of_service: string;
  available_status: string;
}

export interface ContentContextType {
  general: GeneralSettings;
  projects: Project[];
  experience: Experience[];
  skills: SkillData[];
  testimonials: Testimonial[];
  isLoading: boolean;
}