import React from 'react';
import { Search, X } from 'lucide-react';
import { VehicleCategory } from '../types';

interface FleetFiltersProps {
  selectedCategory: VehicleCategory;
  onSelectCategory: (category: VehicleCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const FleetFilters: React.FC<FleetFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const categories: { label: string; value: VehicleCategory }[] = [
    { label: 'All Vehicles', value: 'All' },
    { label: 'Hatchbacks', value: 'Hatchbacks' },
    { label: 'Sedans', value: 'Sedans' },
    { label: 'SUVs', value: 'SUVs' },
    { label: 'Family Cars', value: 'Family Cars' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 bg-navy-900/60 p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-md">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onSelectCategory(cat.value)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === cat.value
                ? 'bg-brandYellow text-navy-950 shadow-glow-yellow'
                : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search Input Box */}
      <div className="relative min-w-[260px] lg:min-w-[300px]">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
