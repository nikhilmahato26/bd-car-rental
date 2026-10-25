import React from 'react';
import { Car, Sparkles, Bike, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const getIcon = () => {
    switch (service.icon) {
      case 'Car':
        return <Car className="w-6 h-6 text-brandYellow" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brandYellow" />;
      case 'Bike':
        return <Bike className="w-6 h-6 text-brandYellow" />;
      default:
        return <Car className="w-6 h-6 text-brandYellow" />;
    }
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brandYellow/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 rounded-xl bg-navy-800/80 border border-brandYellow/30 text-brandYellow shadow-glow-yellow/20">
            {getIcon()}
          </div>
          <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brandYellow">
            {service.title}
          </span>
        </div>

        <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-3 group-hover:text-brandYellow transition-colors">
          {service.heading}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        <ul className="space-y-3 mb-8">
          {service.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <div className="mt-0.5 p-0.5 rounded-full bg-brandYellow/20 text-brandYellow flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onSelectService(service)}
        className="w-full py-3.5 px-5 rounded-xl bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border border-white/15 hover:border-brandYellow shadow-sm flex items-center justify-center gap-2 group/btn"
      >
        <span>{service.ctaText}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
};
