import { NavItem, Stat, ServiceCard, TimelineItem, MethodStep, Publication } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Programs', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Videos', href: '#videos' },
];

export const heroStats: Stat[] = [
  { value: '1.2M+', label: 'YouTube Subscribers' },
  { value: '12K+', label: 'Clients Coached' },
  { value: '4.9/5', label: 'Average Client Rating' },
];

export const socialStats: Stat[] = [
  { value: '1.2M+', label: 'YouTube Subscribers' },
  { value: '850K+', label: 'Instagram Followers' },
  { value: '12,000+', label: 'Transformations' },
  { value: '10+', label: 'Years Coaching' },
  { value: '4.9/5', label: 'Client Rating' },
];

export const publications: Publication[] = [
  { name: 'ATHLETE DAILY' },
  { name: 'PERFORMANCE WEEKLY' },
  { name: 'MODERN HEALTH' },
  { name: 'TRAINING LAB' },
];

export const services: ServiceCard[] = [
  {
    id: 'self-guided',
    title: 'Self-Guided Programs',
    description: 'Structured training plans for people who want flexibility and clear direction.',
    features: [
      'Professionally designed workouts',
      'Exercise demonstration videos',
      'Progression instructions',
      'Beginner and intermediate options',
    ],
    cta: 'Explore Programs',
  },
  {
    id: 'online-coaching',
    title: 'Online Coaching',
    description: 'Personalized coaching, progress tracking, and weekly accountability.',
    features: [
      'Customized training plan',
      'Nutrition guidance',
      'Weekly check-ins',
      'Direct coach feedback',
    ],
    cta: 'Apply for Coaching',
    badge: 'Most Popular',
    featured: true,
  },
  {
    id: 'premium',
    title: '1-to-1 Premium Coaching',
    description: 'High-touch coaching for clients who want maximum guidance and support.',
    features: [
      'Fully personalized programming',
      'Video form reviews',
      'Priority support',
      'Monthly strategy calls',
    ],
    cta: 'Request Details',
  },
];

export const timeline: TimelineItem[] = [
  { year: '2014', event: 'Started coaching at a local gym' },
  { year: '2017', event: 'Launched first structured training program' },
  { year: '2020', event: 'Began online coaching full-time' },
  { year: '2023', event: 'Reached 1 million YouTube subscribers' },
  { year: 'Today', event: 'Coaches clients worldwide across 40+ countries' },
];

export const methodSteps: MethodStep[] = [
  {
    number: 1,
    title: 'Assess',
    description: 'Understand the client\'s goals, experience, schedule, and limitations to create a clear starting point.',
  },
  {
    number: 2,
    title: 'Build',
    description: 'Create a realistic training and nutrition strategy that fits your lifestyle and can be sustained long-term.',
  },
  {
    number: 3,
    title: 'Progress',
    description: 'Track performance metrics and gradually increase the challenge to ensure continuous improvement.',
  },
  {
    number: 4,
    title: 'Sustain',
    description: 'Build habits and systems that work beyond a short-term challenge, creating lasting results.',
  },
];

export const problems = [
  'Random workouts with no clear progression',
  'Conflicting nutrition advice from social media',
  'Lack of accountability and consistency',
  'Starting over every few weeks',
  'Spending hours in the gym without a plan',
];

export const solutions = [
  'Simple, structured training that progresses',
  'Sustainable nutrition you can actually follow',
  'Measurable progress tracked weekly',
  'Personal accountability and support',
  'Long-term habits over short-term fixes',
];

export const credentials = [
  '10+ years coaching experience',
  'Strength and conditioning specialization',
  'Certified nutrition coach',
  'Former competitive athlete',
  'YouTube education creator',
];

export const siteImages = {
  hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
  coach: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80',
  problem: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
  guide: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  cta: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80',
};
