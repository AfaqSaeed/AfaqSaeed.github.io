export interface Project {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  videoUrl?: string;
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
  keyContributions?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
