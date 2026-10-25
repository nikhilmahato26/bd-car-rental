import React, { useState, useMemo } from 'react';
import { VEHICLES } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import { FleetFilters } from '../components/FleetFilters';
import { VehicleCategory } from '../types';
import { Info, MessageSquare } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '../lib/whatsapp';

interface FleetSectionProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      const matchesCategory =
        selectedCategory === 'All' || vehicle.category === selectedCategory;
      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="fleet" className="py-20 lg:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Verified Fleet</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Explore Our <span className="text-brandYellow">Fleet</span>
          </h2>
          <p className="text-base text-slate-300">
            Choose from well-maintained hatchbacks, sedans, and SUVs for self-drive or driver-assisted travel in North Lakhimpur.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <FleetFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Vehicle Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelectVehicle={onSelectVehicle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-navy-900/40 rounded-2xl border border-white/10">
            <p className="text-lg text-slate-300 font-semibold mb-2">No vehicles found matching your criteria</p>
            <p className="text-sm text-slate-500 mb-6">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-brandYellow text-navy-950 font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Fleet Footnote Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <Info className="w-5 h-5 text-brandYellow flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs text-slate-300 leading-relaxed">
              Vehicle availability, rental pricing, and bookings are subject to direct confirmation by B&amp;D Car Rental Agency.
            </p>
          </div>
          <a
            href={buildGeneralWhatsAppUrl('fleet availability and custom booking')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
