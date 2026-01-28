import Link from 'next/link';
import { Project } from '@/lib/portfolio/types';
import { getLocationFlag } from '@/lib/portfolio/utils';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const locationFlag = getLocationFlag(project.location);

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-ider-yellow transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/web-development-portfolio" className="hover:text-ider-yellow transition-colors">
            Web Development Portfolio
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-medium">{project.name}</span>
        </nav>

        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-ider-yellow/10 text-ider-yellow text-sm font-semibold rounded-full">
                {project.type}
              </span>
              <span className="text-gray-600">
                {locationFlag} {project.locationDetail || project.location}
              </span>
              {project.isInternalProject && (
                <span className="px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full">
                  IDER Product
                </span>
              )}
            </div>

            {/* Project Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.name}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-gray-600 max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Live Site Button */}
          <div className="flex-shrink-0">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ider-yellow text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 yellow-glow"
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
