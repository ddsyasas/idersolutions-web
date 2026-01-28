import { Project } from '@/lib/portfolio/types';
import { Zap } from 'lucide-react';

interface ProjectFeaturesProps {
  project: Project;
}

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  if (project.keyFeatures.length === 0) return null;

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-8 h-8 bg-ider-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-ider-yellow" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
