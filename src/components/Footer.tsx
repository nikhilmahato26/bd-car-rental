import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Car, Key, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Car Fleet', href: '#fleet' },
    { name: 'Rental Services', href: '#services' },
    { name: 'Special Offers', href: '#promotions' },
    { name: 'Doorstep Washing', href: '#car-washing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-brandYellow/30 pt-16 pb-28 sm:pb-16 text-slate-300 relative">
      {/* Top Trust Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-4 rounded-2xl bg-navy-900 border border-brandYellow/40 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brandYellow" />
            <span className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              WELL-MAINTAINED FLEET
            </span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brandYellow" />
            <span className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              24/7 ROADSIDE ASSISTANCE
            </span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brandYellow" />
            <span className="font-heading font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              AFFORDABLE RENTAL RATES
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
                  Car Rental Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              North Lakhimpur&apos;s trusted car rental partner. Offering self-drive and chauffeur-driven car rentals for local travel and outstation tours across Assam and the North East.
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
              Quick Navigation
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

          {/* Col 3: Car Rental Fleet & Services */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-brandYellow/30 pb-2 inline-block">
              Rental Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#fleet" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Toyota Innova Crysta (Luxury MPV)</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Maruti Ertiga &amp; XL6 (Family 7-Seater)</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Maruti Jimny &amp; Bolero (SUVs &amp; 4x4)</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-brandYellow transition-colors flex items-center gap-1.5">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Swift, Baleno, Alto K10 (Hatchbacks)</span>
                </a>
              </li>
              <li>
                <a href="#car-washing" className="hover:text-brandYellow transition-colors flex items-center gap-1.5 text-slate-400">
                  <span className="text-brandYellow text-xs">›</span>
                  <span>Doorstep Car &amp; Bike Washing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-brandYellow/30 pb-2 inline-block">
              Contact Desk
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandYellow flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brandYellow flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-brandYellow font-semibold">
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
                  WhatsApp Booking Desk
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
