export type ProjectType =
  | 'E-Commerce'
  | 'Web Application'
  | 'Corporate Website'
  | 'Service Website'
  | 'SaaS Platform'
  | 'Community Platform';

export type ProjectLocation = 'USA' | 'Sri Lanka' | 'Italy';

export interface Project {
  id: number;
  slug: string;
  name: string;
  url: string;
  location: ProjectLocation;
  locationDetail?: string;
  type: ProjectType;
  filterTypes: ProjectType[];
  techStack: string[];
  isFeatured: boolean;
  screenshotsFolder: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  servicesDelivered: string[];
  isInternalProject?: boolean;
}

export interface FilterState {
  type: ProjectType | 'All';
  location: ProjectLocation | 'All';
}

export const PROJECT_TYPES: (ProjectType | 'All')[] = [
  'All',
  'E-Commerce',
  'Web Application',
  'Corporate Website',
  'Service Website',
  'SaaS Platform',
];

export const PROJECT_LOCATIONS: (ProjectLocation | 'All')[] = [
  'All',
  'USA',
  'Sri Lanka',
  'Italy',
];
