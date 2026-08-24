export type SolutionId = 'audio' | 'visual' | 'collaboration' | 'automation' | 'experience';

export interface SolutionItem {
  id: SolutionId;
  number: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  heroImage: string;
  features: {
    title: string;
    description: string;
  }[];
  specs?: { label: string; value: string }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  solutions: string[];
  keyEnvironments: string[];
  impactMetric: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  clientType: string;
  location: string;
  industry: string;
  image: string;
  gallery?: string[];
  summary: string;
  challenge: string;
  solution: string;
  technologiesUsed: string[];
  results: string[];
  completionYear: string;
}

export interface PartnerBrand {
  name: string;
  category: 'Audio' | 'Visual' | 'Control & Automation' | 'Conferencing' | 'Infrastructure';
  logoText: string;
  description: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  tags: string[];
}

export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}
