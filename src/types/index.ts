export type SolutionId = 
  | 'corporate-av'
  | 'video-conferencing'
  | 'professional-audio'
  | 'video-walls'
  | 'smart-automation'
  | 'home-cinema'
  | 'digital-signage'
  | 'auditorium-av'
  | 'intelligent-lighting'
  | 'acoustics'
  | 'control-rooms'
  | 'hospitality-av'
  // Legacy aliases for backward compatibility
  | 'audio'
  | 'visual'
  | 'collaboration'
  | 'automation'
  | 'experience';

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  typicalEnvironments: string[];
  recommendedProducts: string[];
  services: string[];
  features: {
    title: string;
    description: string;
  }[];
  specs?: { label: string; value: string }[];
  ctaText?: string;
}

export interface IndustryItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  typicalSpaces: string[];
  recommendedSolutions: string[];
  impactMetric: string;
  ctaText?: string;
}

export type ProductCategory = 
  | 'display'
  | 'audio'
  | 'conferencing'
  | 'control'
  | 'networking'
  | 'home-av';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  subCategory: string;
  brand: string;
  image: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  applications: string[];
  featured?: boolean;
}

export interface PartnerBrand {
  id: string;
  name: string;
  category: 'Display' | 'Audio' | 'Microphones' | 'Video Conferencing' | 'Control' | 'Networking' | 'Projection' | 'Automation';
  logoText: string;
  description: string;
  tier?: 'Platinum' | 'Gold' | 'Authorized';
  popularGear?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category?: 'design' | 'supply' | 'commissioning' | 'maintenance';
  categoryLabel?: string;
  description: string;
  deliverables: string[];
  iconName: string;
  timeline?: string;
  toolsUsed?: string[];
  suitableFor?: string[];
}

export interface SLATier {
  id: string;
  name: string;
  tierTag: string;
  popular?: boolean;
  priceDescriptor: string;
  responseTime: string;
  summary: string;
  features: string[];
  bestFor: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  outputs: string[];
  duration?: string;
  leadRole?: string;
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
  beforeImage?: string;
  afterImage?: string;
  summary: string;
  challenge: string;
  solution: string;
  technologiesUsed: string[];
  results: string[];
  completionYear: string;
  metrics?: { label: string; value: string }[];
}

export interface FeaturedCaseStudyData {
  title: string;
  client: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  requirements: string[];
  technologies: string[];
  challenges: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
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

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  company: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  avatarImage?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
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
