import React from 'react';
import { Sliders, Car, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const points = [
    {
      icon: Sliders,
      title: 'Flexible Rental Options',
      description: 'Choose self-drive or with-driver rentals according to your travel comfort.',
    },
    {
      icon: Car,
      title: 'Multiple Vehicle Choices',
      description: 'Explore our available fleet featuring hatchbacks, sedans, and SUVs.',
    },
    {
      icon: MessageCircle,
      title: 'Convenient Booking Enquiries',
      description: 'Contact the business easily via direct phone call or quick WhatsApp messaging.',
    },
    {
      icon: Sparkles,
      title: 'Doorstep Car Cleaning',
      description: 'Enquire about exterior cleaning and washing at your home or workplace.',
    },
    {
      icon: HelpCircle,
      title: 'Clear Rental Information',
      description: 'Ask about charges, availability, and applicable terms before confirming your booking.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-navy-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Our Commitment</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Why Choose <span className="text-brandYellow">B&amp;D Car Rental</span>?
          </h2>
          <p className="text-base text-slate-300">
            Straightforward service, dependable vehicles, and honest communication for residents and visitors in North Lakhimpur.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-brandYellow/40 transition-all duration-300 group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-brandYellow/30 flex items-center justify-center text-brandYellow mb-5 group-hover:bg-brandYellow group-hover:text-navy-950 transition-colors shadow-glow-yellow/10">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wide mb-2 group-hover:text-brandYellow transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
