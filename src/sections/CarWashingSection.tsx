import React from 'react';
import { Sparkles, Phone, MessageSquare, Check, MapPin, Calendar, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';
import { buildGeneralWhatsAppUrl } from '../lib/whatsapp';

interface CarWashingSectionProps {
  onBookWashing: () => void;
}

export const CarWashingSection: React.FC<CarWashingSectionProps> = ({ onBookWashing }) => {
  const highlights = [
    'Convenient doorstep service at your home or workplace',
    'High-pressure exterior wash and foam cleaning',
    'Gentle paint-safe microfiber detailing techniques',
    'Flexible scheduling for your preferred day and time',
    'Direct booking enquiry via WhatsApp or direct phone call',
  ];

  return (
    <section id="car-washing" className="py-20 lg:py-28 relative bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Washing Showcase Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-brandYellow/30 shadow-2xl aspect-[4/3] bg-navy-900">
              <img
                src="/car-washing.jpg"
                alt="Doorstep Car Washing and Cleaning Service by B&D"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-brandYellow/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brandYellow text-navy-950">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-brandYellow">At Your Location</div>
                    <div className="text-sm font-bold text-white">Doorstep Car Washing &amp; Cleaning</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-slate-200">
                  North Lakhimpur
                </span>
              </div>
            </div>

            {/* Glowing ambient ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brandYellow to-blue-600 rounded-3xl blur-xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity" />
          </div>

          {/* Right Column: Information & CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doorstep Service</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              CAR WASHING AT{' '}
              <span className="text-brandYellow">YOUR DOORSTEP</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Save time and keep your vehicle clean with doorstep car washing and cleaning services from B&amp;D Car Rental Agency.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-brandYellow/20 text-brandYellow flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Details & Direct Actions */}
            <div className="p-5 rounded-2xl bg-navy-900/80 border border-white/10 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block mb-1">
                  Direct Phone Enquiries:
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-lg font-heading font-black text-white hover:text-brandYellow transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brandYellow" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <div className="text-xs text-slate-400 sm:text-right">
                <span className="text-brandYellow font-semibold block">Serving:</span>
                <span>North Lakhimpur, Assam</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBookWashing}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brandRed hover:bg-brandRed-light text-white font-heading font-bold text-sm tracking-wide uppercase shadow-glow-red transition-all duration-200 hover:-translate-y-0.5 border border-red-500/40 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enquire About Car Washing</span>
              </button>

              <a
                href={buildGeneralWhatsAppUrl('doorstep car washing and cleaning')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm tracking-wide uppercase shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-emerald-400/40 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
