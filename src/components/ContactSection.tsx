import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, Navigation, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Direct Reach &amp; Exact Location</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Connect With <span className="text-brandYellow">B&amp;D Agency</span>
          </h2>
          <p className="text-base text-slate-300">
            Visit our office, request doorstep washing, or enquire about car rentals across North Lakhimpur and the North East.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brandYellow/50 bg-black flex-shrink-0">
                  <img src="/bd-logo.jpg" alt="B&D Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white uppercase tracking-wide">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-brandYellow uppercase font-semibold">
                    North Lakhimpur, Assam
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-800 border border-white/10 text-brandYellow flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Office Address
                    </span>
                    <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-xs text-brandYellow/80 font-mono mt-1 block">
                      GPS: 27.227036° N, 94.098259° E
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-800 border border-white/10 text-brandYellow flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-brandYellow transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-800 border border-white/10 text-brandYellow flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-brandYellow transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3 px-3 rounded-xl bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex flex-col items-center justify-center gap-1.5 border border-white/10"
              >
                <Phone className="w-4 h-4 text-brandYellow" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex flex-col items-center justify-center gap-1.5 border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="py-3 px-3 rounded-xl bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex flex-col items-center justify-center gap-1.5 border border-white/10"
              >
                <Mail className="w-4 h-4 text-brandYellow" />
                <span>Email Us</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-brandYellow text-navy-950 hover:bg-brandYellow-hover text-xs font-black uppercase tracking-wider text-center transition-all flex flex-col items-center justify-center gap-1.5 shadow-glow-yellow/30"
              >
                <Navigation className="w-4 h-4 text-navy-950" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Card */}
          <div className="lg:col-span-6 bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandYellow/15 text-brandYellow text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Exact Verified Location</span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brandYellow hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h4 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-2">
                Chapori Gaon, Ward No. 12
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                North Lakhimpur, Assam — Coordinates: <span className="text-brandYellow font-mono">27.227036, 94.098259</span>
              </p>

              {/* Embedded Google Map Iframe */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-brandYellow/40 shadow-xl aspect-[16/10] bg-navy-950">
                <iframe
                  title="B&D Car Rental Agency Location Map"
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[1.2] contrast-[1.05]"
                />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Click directions to navigate directly to B&amp;D Agency via Google Maps GPS.
              </span>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate via GPS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
