import { Project } from '@/lib/portfolio/types';
import { CheckCircle } from 'lucide-react';

interface ProjectServicesProps {
  project: Project;
}

export default function ProjectServices({ project }: ProjectServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Services Delivered */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What We Delivered
            </h2>
            <ul className="space-y-4">
              {project.servicesDelivered.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-ider-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-ider-yellow/10 text-ider-yellow font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
