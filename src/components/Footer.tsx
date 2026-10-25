import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Sparkles, Bike, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Car & Bike Wash', href: '#car-washing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-brandYellow/30 pt-16 pb-28 sm:pb-16 text-slate-300 relative">
      {/* Top Trust Ribbon from Poster */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-4 rounded-2xl bg-navy-900 border border-brandYellow/40 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brandYellow" />
            <span className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              CLEANER VEHICLES
            </span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brandYellow" />
            <span className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              HAPPIER JOURNEYS
            </span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brandYellow" />
            <span className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              TRUSTED SERVICE
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brandYellow bg-black flex-shrink-0">
                <img src="/bd-logo.jpg" alt="B&D Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-wide block">
                  B<span className="text-brandYellow">&amp;</span>D
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-heading block -mt-1">
                  Mobile Wash &amp; Car Rental
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              One Agency — Multiple Services. Car rentals (Self-Drive &amp; With Driver) plus doorstep car &amp; bike washing across North Lakhimpur.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-brandYellow tracking-wider uppercase block">
                {BUSINESS_INFO.tagline}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-brandYellow/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brandYellow transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-brandYellow text-xs">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Packages */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-brandYellow/30 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Self-Drive &amp; With Driver Car Rentals</span>
                </a>
              </li>
              <li>
                <a href="#car-washing" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Car Wash (Basic ₹399 / Prem ₹699 / Del ₹999)</span>
                </a>
              </li>
              <li>
                <a href="#car-washing" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Bike Wash (Basic ₹199 / Prem ₹399 / Del ₹599)</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Verified 11-Vehicle Fleet (Maruti, Tata, Mahindra)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-brandYellow/30 pb-2 inline-block">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandYellow flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brandYellow flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-brandYellow">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brandYellow flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-brandYellow break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-semibold"
                >
                  WhatsApp Booking Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved. North Lakhimpur, Assam.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-brandYellow font-semibold tracking-wider uppercase text-[11px]">
              {BUSINESS_INFO.tagline}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 border border-white/10 hover:border-brandYellow text-slate-300 hover:text-brandYellow transition-colors flex items-center gap-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
