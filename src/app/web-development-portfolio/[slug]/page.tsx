import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/portfolio/projects";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/portfolio/utils";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import ProjectOverview from "@/components/portfolio/ProjectOverview";
import ProjectServices from "@/components/portfolio/ProjectServices";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectFeatures from "@/components/portfolio/ProjectFeatures";
import ProjectNavigation from "@/components/portfolio/ProjectNavigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | IDER Solutions",
    };
  }

  return {
    title: `${project.name} | Web Development Portfolio | IDER Solutions`,
    description: project.shortDescription,
    keywords: [
      project.name,
      project.type,
      ...project.techStack,
      "web development",
      "IDER Solutions portfolio",
    ],
    openGraph: {
      title: `${project.name} - Case Study | IDER Solutions`,
      description: project.shortDescription,
      url: `https://idersolutions.com/web-development-portfolio/${project.slug}`,
      images: [
        {
          url: "https://idersolutions.com/og-image.jpg",
          width: 1200,
          height: 633,
          alt: `${project.name} - IDER Solutions`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://idersolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Development Portfolio",
        item: "https://idersolutions.com/web-development-portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `https://idersolutions.com/web-development-portfolio/${project.slug}`,
      },
    ],
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.shortDescription,
    url: `https://idersolutions.com/web-development-portfolio/${project.slug}`,
    creator: {
      "@type": "Organization",
      name: "IDER Solutions",
      url: "https://idersolutions.com",
    },
    about: {
      "@type": "WebSite",
      name: project.name,
      url: project.url,
    },
    genre: project.type,
    keywords: project.techStack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkSchema),
        }}
      />
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        {/* Hidden breadcrumb for screen readers */}
        <nav className="sr-only" aria-label="Breadcrumb">
          <ol className="flex space-x-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="/web-development-portfolio">Web Development Portfolio</a>
            </li>
            <li>/</li>
            <li>{project.name}</li>
          </ol>
        </nav>

        <ProjectHeader project={project} />
        <ProjectOverview project={project} />
        <ProjectServices project={project} />
        <ProjectGallery project={project} />
        <ProjectFeatures project={project} />
        <ProjectNavigation project={project} />
      </main>
      <Footer />
    </>
  );
}
