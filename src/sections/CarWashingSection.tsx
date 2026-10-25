import React, { useState } from 'react';
import { Sparkles, Bike, Car, Check, Phone, MessageSquare, ArrowRight, ShieldCheck, Flame, Clock } from 'lucide-react';
import { BUSINESS_INFO, CAR_WASH_PACKAGES, BIKE_WASH_PACKAGES, CAR_WASH_INCLUSIONS, BIKE_WASH_INCLUSIONS } from '../data/services';
import { buildGeneralWhatsAppUrl } from '../lib/whatsapp';

interface CarWashingSectionProps {
  onSelectPackage: (type: 'car-washing' | 'bike-washing', packageName: string) => void;
}

export const CarWashingSection: React.FC<CarWashingSectionProps> = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState<'car' | 'bike'>('car');

  const currentPackages = activeTab === 'car' ? CAR_WASH_PACKAGES : BIKE_WASH_PACKAGES;
  const currentInclusions = activeTab === 'car' ? CAR_WASH_INCLUSIONS : BIKE_WASH_INCLUSIONS;

  return (
    <section id="car-washing" className="py-20 lg:py-28 relative bg-navy-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brandYellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandYellow/15 border border-brandYellow/30 text-brandYellow text-xs font-black tracking-widest uppercase mb-4 shadow-glow-yellow/30">
            <Sparkles className="w-4 h-4" />
            <span>B&amp;D Mobile Car &amp; Bike Washing</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            WE COME TO YOU. <span className="text-brandYellow">YOU RELAX.</span>
            <span className="block text-gradient-gold">YOUR VEHICLE SHINES!</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            &ldquo;Why waste your valuable time cleaning your vehicles? We bring the wash right to your doorstep!&rdquo;
          </p>
        </div>

        {/* 4 Feature Badges from Poster */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 text-center">
            <span className="text-brandYellow font-heading font-black text-sm uppercase block mb-1">
              Doorstep Service
            </span>
            <span className="text-xs text-slate-400">At your home or office</span>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/80 border border-brandYellow/30 text-center shadow-glow-yellow/10">
            <span className="text-brandYellow font-heading font-black text-sm uppercase block mb-1">
              Affordable Prices
            </span>
            <span className="text-xs text-slate-400">Fixed &amp; transparent rates</span>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 text-center">
            <span className="text-brandYellow font-heading font-black text-sm uppercase block mb-1">
              Professional Care
            </span>
            <span className="text-xs text-slate-400">Foam lance &amp; pressure wash</span>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 text-center">
            <span className="text-brandYellow font-heading font-black text-sm uppercase block mb-1">
              Shine Like New!
            </span>
            <span className="text-xs text-slate-400">Tyre &amp; body gloss polish</span>
          </div>
        </div>

        {/* Package Category Toggle */}
        <div className="flex items-center justify-center mb-10">
          <div className="bg-navy-900 p-1.5 rounded-2xl border border-brandYellow/30 shadow-xl inline-flex">
            <button
              onClick={() => setActiveTab('car')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all ${
                activeTab === 'car'
                  ? 'bg-brandYellow text-navy-950 shadow-glow-yellow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Car Washing Packages</span>
            </button>

            <button
              onClick={() => setActiveTab('bike')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all ${
                activeTab === 'bike'
                  ? 'bg-brandYellow text-navy-950 shadow-glow-yellow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Bike Washing Packages</span>
            </button>
          </div>
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1.5 ${
                pkg.popular
                  ? 'bg-navy-900 border-2 border-brandYellow shadow-glow-yellow/40'
                  : 'glass-card border border-white/10 hover:border-brandYellow/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brandRed text-white text-[11px] font-heading font-black uppercase tracking-widest shadow-glow-red flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {activeTab === 'car' ? 'Four-Wheeler' : 'Two-Wheeler'}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-brandYellow/15 text-brandYellow font-bold">
                    Fixed Price
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-brandYellow">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 uppercase font-semibold">/ Per Wash</span>
                </div>

                {/* Inclusions summary from poster */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10 text-xs text-slate-200 mb-6 font-medium">
                  <span className="text-brandYellow font-bold block mb-1">Includes:</span>
                  {pkg.includes}
                </div>

                {/* Detailed features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="mt-0.5 p-0.5 rounded-full bg-brandYellow/20 text-brandYellow flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onSelectPackage(
                    activeTab === 'car' ? 'car-washing' : 'bike-washing',
                    `${pkg.name} (${pkg.price})`
                  )
                }
                className={`w-full py-3.5 px-5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-brandRed hover:bg-brandRed-light text-white shadow-glow-red border border-red-500/40'
                    : 'bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white border border-white/15'
                }`}
              >
                <span>Book {pkg.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Visual Showcase: Car & Bike Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-brandYellow/30 group aspect-video">
            <img
              src="/car-washing.jpg"
              alt="Doorstep Car Foam Washing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-brandYellow text-xs font-bold uppercase tracking-wider mb-1">
                Professional Care
              </span>
              <h4 className="font-heading font-black text-xl text-white uppercase">
                Doorstep Car Snow Foam Wash
              </h4>
              <p className="text-xs text-slate-300">Starting at ₹399 • Exterior &amp; Interior Care</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-brandYellow/30 group aspect-video">
            <img
              src="/bike-washing.jpg"
              alt="Doorstep Bike & Motorcycle Foam Washing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-brandYellow text-xs font-bold uppercase tracking-wider mb-1">
                Motorcycle Special
              </span>
              <h4 className="font-heading font-black text-xl text-white uppercase">
                Bike Wash &amp; Chain Lubrication
              </h4>
              <p className="text-xs text-slate-300">Starting at ₹199 • Chain Lube &amp; Body Polish</p>
            </div>
          </div>
        </div>

        {/* Poster's Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-2 border-brandYellow/50 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="text-brandRed font-heading font-black text-lg sm:text-xl uppercase tracking-wider mb-1">
                DON'T WAIT! GIVE YOUR VEHICLE THE SHINE IT DESERVES!
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                BOOK NOW &amp; SECURE YOUR SLOT!
              </h3>
              <p className="text-sm text-slate-300">
                &ldquo;{BUSINESS_INFO.oneCallSlogan}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-brandYellow hover:bg-brandYellow-hover text-navy-950 font-heading font-black text-sm uppercase tracking-wider shadow-glow-yellow flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={buildGeneralWhatsAppUrl('doorstep car or bike washing slot booking')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2 border border-emerald-400/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Slot Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
