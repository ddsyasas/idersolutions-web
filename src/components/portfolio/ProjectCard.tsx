import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/portfolio/types';
import { getProjectFeaturedImage, getLocationFlag } from '@/lib/portfolio/utils';
import { ArrowRight, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = getProjectFeaturedImage(project);
  const locationFlag = getLocationFlag(project.location);

  return (
    <Link
      href={`/web-development-portfolio/${project.slug}`}
      className="group block bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:bg-gray-100 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        {project.isFeatured && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-ider-yellow text-white px-3 py-1 rounded-full text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            FEATURED
          </div>
        )}
        {project.isInternalProject && (
          <div className="absolute top-4 right-4 z-10 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
            IDER Product
          </div>
        )}
        <Image
          src={featuredImage}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type & Location */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-ider-yellow/10 text-ider-yellow text-xs font-semibold rounded-full">
            {project.type}
          </span>
          <span className="text-sm text-gray-500">
            {locationFlag} {project.location}
          </span>
        </div>

        {/* Name & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ider-yellow transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        <div className="flex items-center text-ider-yellow font-semibold text-sm group-hover:gap-2 transition-all duration-300">
          View Project
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
}
