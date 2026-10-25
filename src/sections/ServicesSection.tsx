import React from 'react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceItem } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onExploreWashing?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onExploreWashing }) => {
  return (
    <section id="services" className="py-20 lg:py-28 relative bg-navy-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Car Rental Services</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Built For Your <span className="text-brandYellow">Driving Freedom</span>
          </h2>
          <p className="text-base text-slate-300">
            Whether you want self-drive privacy, chauffeur-driven luxury, or an outstation holiday trip across North East India, B&amp;D Car Rental Agency has you covered.
          </p>
        </div>

        {/* 3 Core Rental Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Washing Add-on Banner */}
        <div className="p-5 rounded-2xl bg-navy-900/90 border border-brandYellow/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brandYellow/15 text-brandYellow flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-brandYellow tracking-wider block">
                Additional Convenience Service
              </span>
              <p className="text-sm text-slate-200">
                Need your vehicle cleaned? We also offer <strong className="text-white">doorstep car washing (from ₹399)</strong> and <strong className="text-white">bike washing (from ₹199)</strong> right at your home in North Lakhimpur.
              </p>
            </div>
          </div>

          <a
            href="#car-washing"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-brandYellow hover:text-navy-950 text-white text-xs font-heading font-bold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-1.5"
          >
            <span>View Washing Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
