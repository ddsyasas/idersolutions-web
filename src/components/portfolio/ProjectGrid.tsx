'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/lib/portfolio/projects';
import { filterProjects } from '@/lib/portfolio/utils';
import { FilterState } from '@/lib/portfolio/types';
import PortfolioFilters from './PortfolioFilters';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const [filters, setFilters] = useState<FilterState>({
    type: 'All',
    location: 'All',
  });

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, filters);
  }, [filters]);

  return (
    <>
      <PortfolioFilters
        filters={filters}
        onFilterChange={setFilters}
        totalCount={projects.length}
        filteredCount={filteredProjects.length}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(project.id % 6) * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No projects match your current filters.
              </p>
              <button
                onClick={() => setFilters({ type: 'All', location: 'All' })}
                className="mt-4 text-ider-yellow font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
