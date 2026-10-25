import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-navy-900/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="relative rounded-3xl p-8 bg-gradient-to-b from-navy-900 to-navy-950 border-2 border-brandYellow/40 shadow-glow-yellow/40 flex flex-col items-center text-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-brandYellow shadow-2xl mb-6 bg-black">
                  <img
                    src="/bd-logo.jpg"
                    alt="B&D Car Rental Agency Emblem"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-black text-2xl text-white tracking-wider uppercase mb-1">
                  B&amp;D CAR RENTAL AGENCY
                </h3>
                <p className="text-xs uppercase tracking-widest text-brandYellow font-semibold mb-4">
                  North Lakhimpur, Assam
                </p>
                <div className="w-16 h-1 bg-brandYellow rounded-full mb-4" />
                <p className="text-xs text-slate-300 italic">
                  &ldquo;Your Journey. Our Priority.&rdquo;
                </p>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-brandYellow/10 rounded-full blur-2xl -z-10 group-hover:bg-brandYellow/20 transition-all" />
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-4">
              <span>About Our Agency</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              YOUR LOCAL <span className="text-brandYellow">CAR RENTAL PARTNER</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
              B&amp;D Car Rental Agency is based in Chapori Gaon, Ward No. 12, North Lakhimpur, Assam. We offer self-drive and with-driver car rental options, along with doorstep car washing and cleaning services. Our goal is to make it easy for customers to explore available vehicles and enquire about the services they need.
            </p>

            {/* Verified Location & Contact Pill highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-navy-950/80 border border-white/10">
                <MapPin className="w-5 h-5 text-brandYellow flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Headquarters</div>
                  <div className="text-sm font-semibold text-white">Chapori Gaon, Ward No. 12</div>
                  <div className="text-xs text-slate-400">North Lakhimpur, Assam</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-navy-950/80 border border-white/10">
                <Phone className="w-5 h-5 text-brandYellow flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Phone Support</div>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sm font-semibold text-white hover:text-brandYellow">
                    {BUSINESS_INFO.phone}
                  </a>
                  <div className="text-xs text-slate-400">Call or WhatsApp anytime</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onContactClick}
                className="px-8 py-4 rounded-xl bg-brandRed hover:bg-brandRed-light text-white font-heading font-bold text-sm tracking-wide uppercase shadow-glow-red transition-all duration-200 hover:-translate-y-0.5 border border-red-500/40 inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
