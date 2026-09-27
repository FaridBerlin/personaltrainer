export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
}

export interface Transformation {
  id: string;
  name: string;
  goal: string;
  period: string;
  testimonial: string;
  metric: string;
  beforeImage: string;
  afterImage: string;
}

export interface TimelineItem {
  year: string;
  event: string;
}

export interface MethodStep {
  number: number;
  title: string;
  description: string;
}

export interface Video {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
  duration: string;
  youtubeUrl: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  goal: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Publication {
  name: string;
}
