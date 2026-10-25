import React from 'react';
import { Clock, Gauge, Car, MapPin, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface RentalInfoProps {
  onContactClick: () => void;
}

export const RentalInformation: React.FC<RentalInfoProps> = ({ onContactClick }) => {
  const details = [
    {
      icon: Clock,
      label: 'Rental Duration',
      value: '24 Hours',
      desc: 'Standard one-day rental booking window per vehicle hire.',
    },
    {
      icon: Gauge,
      label: 'Driving Limit',
      value: '320 KM',
      desc: 'Generous driving limit included per 24-hour rental period.',
    },
    {
      icon: Car,
      label: 'Rental Options',
      value: 'Self Drive / With Driver',
      desc: 'Choose your independent driving freedom or professional chauffeur service.',
    },
    {
      icon: MapPin,
      label: 'Primary Location',
      value: 'North Lakhimpur, Assam',
      desc: 'Convenient vehicle pickup and local service support based in Ward No. 12.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-b from-navy-900 to-navy-950 border-y border-brandYellow/20 overflow-hidden">
      {/* Yellow accent background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brandYellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandYellow text-navy-950 text-xs font-black tracking-widest uppercase mb-4 shadow-glow-yellow">
            <span>Transparent Rental Guidelines</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            SIMPLE RENTALS.{' '}
            <span className="text-gradient-gold">CLEAR DETAILS.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We believe in straightforward terms with no confusion. Here are the core specifications of our rental services in North Lakhimpur.
          </p>
        </div>

        {/* 4 Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-navy-950/80 border border-brandYellow/30 p-6 rounded-2xl flex flex-col justify-between hover:border-brandYellow transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brandYellow/15 border border-brandYellow/40 flex items-center justify-center text-brandYellow mb-5 group-hover:bg-brandYellow group-hover:text-navy-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-2xl font-heading font-black text-white tracking-tight uppercase mb-3">
                    {item.value}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-bold text-brandYellow uppercase tracking-wider">
                  <span>Confirmed Specification</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification Callout Note */}
        <div className="bg-navy-950/90 border-l-4 border-brandYellow p-6 sm:p-8 rounded-r-2xl border-y border-r border-white/10 max-w-4xl mx-auto mb-10 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-brandYellow/15 text-brandYellow flex-shrink-0 mt-0.5">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white uppercase tracking-wide mb-2">
                Important Customer Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                &ldquo;Rental charges, availability, additional kilometre policies, security deposit requirements, and other terms will be confirmed by the business before booking.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brandYellow hover:bg-brandYellow-hover text-navy-950 font-heading font-black text-sm uppercase tracking-wider shadow-glow-yellow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-navy-950" />
            <span>Contact Us for Rental Details</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
