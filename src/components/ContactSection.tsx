import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Direct Reach</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Connect With <span className="text-brandYellow">B&amp;D Agency</span>
          </h2>
          <p className="text-base text-slate-300">
            Have questions regarding car availability, rental terms, or doorstep washing? Reach out to us through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-7 bg-navy-900/80 border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
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
                <Phone className="w-4 h-4 text-brandYellow group-hover:text-navy-950" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex flex-col items-center justify-center gap-1.5 border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Us</span>
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
                className="py-3 px-3 rounded-xl bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex flex-col items-center justify-center gap-1.5 border border-white/10"
              >
                <Navigation className="w-4 h-4 text-brandYellow" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Location / Map Card */}
          <div className="lg:col-span-5 bg-navy-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandYellow/15 text-brandYellow text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>North Lakhimpur Service Area</span>
              </div>
              <h4 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-2">
                Visit or Find Us
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Located conveniently in Chapori Gaon, Ward No. 12. Click below to view on Google Maps.
              </p>

              {/* Map Mockup / Location preview card */}
              <div className="relative rounded-xl overflow-hidden border border-brandYellow/30 bg-navy-950 p-6 flex flex-col items-center text-center justify-center min-h-[180px]">
                <div className="w-12 h-12 rounded-full bg-brandYellow text-navy-950 flex items-center justify-center mb-3 shadow-glow-yellow">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="font-heading font-bold text-base text-white uppercase mb-1">
                  Chapori Gaon, Ward No. 12
                </div>
                <div className="text-xs text-brandYellow font-semibold mb-4">
                  North Lakhimpur, Assam, India
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800 hover:bg-brandYellow hover:text-navy-950 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
              <p>
                Prompt assistance for vehicle rentals, availability verification, and doorstep car wash booking in North Lakhimpur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
