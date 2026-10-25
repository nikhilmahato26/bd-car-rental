import React from 'react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceItem } from '../types';
import { buildGeneralWhatsAppUrl } from '../lib/whatsapp';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 relative bg-navy-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Offerings</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Services Built For Your <span className="text-brandYellow">Convenience</span>
          </h2>
          <p className="text-base text-slate-300">
            From flexible self-drive options to chauffeur-driven convenience and doorstep car cleaning, B&amp;D brings dependable automotive services to North Lakhimpur.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
