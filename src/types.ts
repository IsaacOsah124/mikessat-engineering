export interface Service {
  id: number;
  title: string;
  description: string;
  fullDetails: string;
  icon: string;
  category: 'electrical' | 'satellite' | 'security' | 'automation' | 'networking';
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Electrical' | 'Security' | 'Networking' | 'Satellite' | 'Automation' | 'Construction';
  description: string;
  image: string;
  images?: string[];
  video?: string;
  videos?: string[];
  location?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  rating: number;
  comment: string;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

