'use client';

import { PROJECT_TYPES, PROJECT_LOCATIONS, FilterState, ProjectType, ProjectLocation } from '@/lib/portfolio/types';

interface PortfolioFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalCount: number;
  filteredCount: number;
}

export default function PortfolioFilters({
  filters,
  onFilterChange,
  totalCount,
  filteredCount,
}: PortfolioFiltersProps) {
  const handleTypeChange = (type: ProjectType | 'All') => {
    onFilterChange({ ...filters, type });
  };

  const handleLocationChange = (location: ProjectLocation | 'All') => {
    onFilterChange({ ...filters, location });
  };

  const clearFilters = () => {
    onFilterChange({ type: 'All', location: 'All' });
  };

  const hasActiveFilters = filters.type !== 'All' || filters.location !== 'All';

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        {/* Project Type Filters */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500 mb-3">Filter by Type</p>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filters.type === type
                    ? 'bg-ider-yellow text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Location Filters */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500 mb-3">Filter by Location</p>
          <div className="flex flex-wrap gap-2">
            {PROJECT_LOCATIONS.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationChange(location)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filters.location === location
                    ? 'bg-ider-yellow text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {location === 'USA' && '🇺🇸 '}
                {location === 'Sri Lanka' && '🇱🇰 '}
                {location === 'Italy' && '🇮🇹 '}
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Clear Filters */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">{filteredCount}</span> of{' '}
            <span className="font-semibold">{totalCount}</span> projects
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-ider-yellow hover:underline font-medium"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
