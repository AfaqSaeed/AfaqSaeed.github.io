export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem?: string;
  myRole?: string[];
  approach?: string[];
  results?: string[];
  technologies?: string[];
  organization?: string;
  period?: string;
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  reportUrl?: string;
  publicationUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Thesis {
  id: string;
  type: 'Master' | 'Bachelor';
  title: string;
  institution: string;
  period: string;
  description: string;
  logoUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  reportUrl?: string;
  publicationUrl?: string;
  keyContributions?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
