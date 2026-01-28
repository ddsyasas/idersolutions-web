import { Project, FilterState, ProjectType, ProjectLocation } from './types';
import { projects } from './projects';

export function filterProjects(
  allProjects: Project[],
  filters: FilterState
): Project[] {
  return allProjects.filter((project) => {
    const typeMatch =
      filters.type === 'All' || project.filterTypes.includes(filters.type as ProjectType);
    const locationMatch =
      filters.location === 'All' || project.location === filters.location;
    return typeMatch && locationMatch;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return { prev, next };
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getLocationFlag(location: ProjectLocation): string {
  switch (location) {
    case 'USA':
      return '🇺🇸';
    case 'Sri Lanka':
      return '🇱🇰';
    case 'Italy':
      return '🇮🇹';
    default:
      return '🌍';
  }
}

// Screenshot mapping - precomputed for static generation
export const projectScreenshots: Record<string, string[]> = {
  'syncseo.io': [
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.51.44 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.51.54 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.52.08 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.52.18 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.52.29 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.52.42 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.52.48 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.53.00 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.53.15 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.53.22 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.53.41 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.53.49 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.54.04 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.54.14 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.54.22 PM.webp',
    '/web-dev/syncseo.io/Screenshot 2026-01-28 at 12.54.35 PM.webp',
  ],
  'founderspath.lk': [
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.40.44 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.40.59 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.41.13 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.41.22 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.41.35 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.41.44 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.41.58 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.42.19 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.42.36 PM.webp',
    '/web-dev/founderspath.lk/Screenshot 2026-01-28 at 12.42.53 PM.webp',
  ],
  'mygolfessentials.com': [
    '/web-dev/mygolfessentials.com/Screenshot 2026-01-28 at 12.05.06 PM.webp',
    '/web-dev/mygolfessentials.com/Screenshot 2026-01-28 at 12.05.39 PM.webp',
    '/web-dev/mygolfessentials.com/Screenshot 2026-01-28 at 12.06.00 PM.webp',
    '/web-dev/mygolfessentials.com/Screenshot 2026-01-28 at 12.06.41 PM.webp',
    '/web-dev/mygolfessentials.com/Screenshot 2026-01-28 at 12.06.58 PM.webp',
    '/web-dev/mygolfessentials.com/Screenshot 2026-01-28 at 12.07.11 PM.webp',
  ],
  'shop.mygolfessentials.com': [
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.10.43 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.10.59 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.11.20 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.11.43 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.11.56 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.12.23 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.12.42 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.13.01 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.13.30 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.13.47 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.14.05 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.14.22 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.14.38 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.14.54 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.15.08 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.15.17 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.15.27 PM.webp',
    '/web-dev/shop.mygolfessentials.com/Screenshot 2026-01-28 at 12.15.35 PM.webp',
  ],
  'tracisandersonartist.com': [
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.24.17 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.24.30 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.24.39 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.24.56 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.25.17 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.25.34 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.25.52 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.26.02 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.26.19 PM.webp',
    '/web-dev/tracisandersonartist.com/Screenshot 2026-01-28 at 12.26.33 PM.webp',
  ],
  'jwmarketingco.com': [
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.20.00 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.20.22 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.20.31 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.20.39 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.21.05 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.21.13 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.21.28 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.22.00 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.22.12 PM.webp',
    '/web-dev/jwmarketingco.com/Screenshot 2026-01-28 at 12.22.27 PM.webp',
  ],
  'riverfrontnapa.com': [
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.37.44 PM.webp',
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.38.13 PM.webp',
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.38.27 PM.webp',
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.38.37 PM.webp',
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.38.57 PM.webp',
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.39.09 PM.webp',
    '/web-dev/riverfrontnapa.com/Screenshot 2026-01-28 at 12.39.25 PM.webp',
  ],
  'chefrafaelmolina.com': [
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.33.42 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.34.04 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.34.15 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.34.28 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.34.41 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.34.53 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.35.04 PM.webp',
    '/web-dev/chefrafaelmolina.com/Screenshot 2026-01-28 at 12.35.27 PM.webp',
  ],
  'artermite.com': [
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.29.32 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.29.46 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.30.26 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.30.50 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.31.00 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.31.31 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.31.39 PM.webp',
    '/web-dev/artermite.com/Screenshot 2026-01-28 at 12.31.56 PM.webp',
  ],
  'dec.lk': [
    '/web-dev/dec.lk/Screenshot 2026-01-28 at 12.49.09 PM.webp',
    '/web-dev/dec.lk/Screenshot 2026-01-28 at 12.49.21 PM.webp',
    '/web-dev/dec.lk/Screenshot 2026-01-28 at 12.49.50 PM.webp',
    '/web-dev/dec.lk/Screenshot 2026-01-28 at 12.49.59 PM.webp',
    '/web-dev/dec.lk/Screenshot 2026-01-28 at 12.50.15 PM.webp',
  ],
  'yasas.dev': [
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.44.59 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.45.18 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.45.27 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.45.37 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.45.48 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.46.02 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.46.19 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.46.34 PM.webp',
    '/web-dev/yasas.dev/Screenshot 2026-01-28 at 12.46.42 PM.webp',
  ],
};

export function getProjectScreenshots(project: Project): string[] {
  return projectScreenshots[project.screenshotsFolder] || [];
}

export function getProjectFeaturedImage(project: Project): string {
  const screenshots = getProjectScreenshots(project);
  return screenshots[0] || '/placeholder-project.webp';
}
