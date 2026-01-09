export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  category: 'Mobile' | 'Web' | 'Utility';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Core' | 'Backend/API' | 'Tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // simpler to use generic names and map them to SVGs
}