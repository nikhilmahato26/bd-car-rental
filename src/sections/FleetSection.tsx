import React, { useState, useMemo } from 'react';
import { VEHICLES } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import { FleetFilters } from '../components/FleetFilters';
import { VehicleCategory } from '../types';
import { Info, MessageSquare, Car, Key, ShieldCheck, Clock } from 'lucide-react';
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Verified Car Rental Fleet</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            CHOOSE YOUR <span className="text-brandYellow">RENTAL CAR</span>
          </h2>
          <p className="text-base text-slate-300">
            From easy city hatchbacks and executive sedans to 7-seater luxury MPVs like Toyota Innova Crysta and rugged 4x4 Jimny, explore our verified fleet ready for self-drive or chauffeur travel in North Lakhimpur.
          </p>
        </div>

        {/* 4 Feature Badges Above Fleet */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/10 flex items-center gap-3">
            <Key className="w-5 h-5 text-brandYellow flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase">Self-Drive &amp; Driver</div>
              <div className="text-[11px] text-slate-400">Your choice of travel</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-navy-900/80 border border-brandYellow/30 flex items-center gap-3 shadow-glow-yellow/10">
            <Clock className="w-5 h-5 text-brandYellow flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase">24 Hours / 320 KM</div>
              <div className="text-[11px] text-brandYellow">Standard daily window</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/10 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase">Roadside Assistance</div>
              <div className="text-[11px] text-slate-400">24/7 on-road support</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/10 flex items-center gap-3">
            <Car className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase">12 Available Models</div>
              <div className="text-[11px] text-slate-400">Maruti, Toyota, Mahindra</div>
            </div>
          </div>
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
            <p className="text-lg text-slate-300 font-semibold mb-2">No cars found matching your criteria</p>
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
        <div className="mt-12 p-5 rounded-2xl bg-navy-900/80 border border-brandYellow/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <Info className="w-5 h-5 text-brandYellow flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Car availability, rental pricing, and bookings are subject to direct confirmation by B&amp;D Car Rental Agency.
              Enquire anytime on WhatsApp for custom outstation quotes or specific vehicle reservations.
            </p>
          </div>
          <a
            href={buildGeneralWhatsAppUrl('car rental fleet availability and pricing')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Check Availability</span>
          </a>
        </div>
      </div>
    </section>
  );
};
