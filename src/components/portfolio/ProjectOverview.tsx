import { Project } from '@/lib/portfolio/types';

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  // Split description by double newlines to create paragraphs
  const paragraphs = project.fullDescription.split('\n\n');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
