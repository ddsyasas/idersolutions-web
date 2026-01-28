import Link from 'next/link';
import { Project } from '@/lib/portfolio/types';
import { getAdjacentProjects } from '@/lib/portfolio/utils';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectNavigationProps {
  project: Project;
}

export default function ProjectNavigation({ project }: ProjectNavigationProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Back to Portfolio */}
        <div className="mb-8">
          <Link
            href="/web-development-portfolio"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-ider-yellow transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Prev/Next Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {prev ? (
            <Link
              href={`/web-development-portfolio/${prev.slug}`}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-ider-yellow transition-colors group flex-1"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-ider-yellow transition-colors" />
              <div>
                <p className="text-sm text-gray-500">Previous Project</p>
                <p className="font-semibold text-gray-900 group-hover:text-ider-yellow transition-colors">
                  {prev.name}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/web-development-portfolio/${next.slug}`}
              className="flex items-center justify-end gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-ider-yellow transition-colors group flex-1 text-right"
            >
              <div>
                <p className="text-sm text-gray-500">Next Project</p>
                <p className="font-semibold text-gray-900 group-hover:text-ider-yellow transition-colors">
                  {next.name}
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-ider-yellow transition-colors" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </section>
  );
}
