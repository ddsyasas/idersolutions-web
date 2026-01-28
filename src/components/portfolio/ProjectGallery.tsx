'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/portfolio/types';
import { getProjectScreenshots } from '@/lib/portfolio/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const screenshots = getProjectScreenshots(project);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  }, [screenshots.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  }, [screenshots.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  if (screenshots.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Project Screenshots
        </h2>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {screenshots.map((src, index) => (
            <button
              key={src}
              onClick={() => openLightbox(index)}
              className="relative aspect-video overflow-hidden rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in group"
            >
              <Image
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading={index < 4 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white/80 text-sm">
              {currentIndex + 1} / {screenshots.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <div
              className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${project.name} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="100vw"
                unoptimized
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 pb-2">
              {screenshots.map((src, index) => (
                <button
                  key={src}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`relative w-16 h-10 flex-shrink-0 rounded overflow-hidden transition-all ${
                    index === currentIndex
                      ? 'ring-2 ring-white opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
