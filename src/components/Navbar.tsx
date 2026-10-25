import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, Tag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Special Offers', href: '#promotions', isSpecial: true },
    { name: 'Services', href: '#services' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Car & Bike Wash', href: '#car-washing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    setIsOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10 py-2.5'
          : 'bg-gradient-to-b from-navy-950/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brandYellow rounded-lg p-1"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brandYellow/60 shadow-glow-yellow transition-transform duration-300 group-hover:scale-105 bg-black flex-shrink-0">
              <img
                src="/bd-logo.jpg"
                alt="B&D Car Rental Agency Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-heading font-black text-2xl tracking-wider text-white">
                  B<span className="text-brandYellow">&amp;</span>D
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-brandYellow/20 text-brandYellow border border-brandYellow/30 ml-1">
                  NLK
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-300 uppercase font-semibold font-heading -mt-1">
                Car Rental + Mobile Wash
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md relative group flex items-center gap-1.5 ${
                  link.isSpecial
                    ? 'text-brandYellow font-bold hover:text-white bg-brandYellow/10 border border-brandYellow/30'
                    : 'text-slate-200 hover:text-brandYellow hover:bg-white/5'
                }`}
              >
                {link.isSpecial && <Sparkles className="w-3.5 h-3.5 text-brandYellow animate-spin duration-3000" />}
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-brandYellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-brandYellow rounded-lg border border-white/10 hover:border-brandYellow/40 transition-all bg-navy-900/60"
              title="Call Us Now"
            >
              <Phone className="w-3.5 h-3.5 text-brandYellow animate-pulse" />
              <span className="hidden md:inline">{BUSINESS_INFO.phone}</span>
              <span className="md:hidden">Call</span>
            </a>

            <button
              onClick={handleBookClick}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brandRed hover:bg-brandRed-light text-white text-xs sm:text-sm font-bold tracking-wide shadow-glow-red transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-red-500/40"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Slot</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleBookClick}
              className="sm:hidden px-3 py-1.5 rounded-md bg-brandRed text-white text-xs font-bold tracking-wide shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-brandYellow hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brandYellow"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-900/98 border-b border-brandYellow/20 backdrop-blur-xl px-4 pt-4 pb-6 transition-all duration-300 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                  link.isSpecial
                    ? 'bg-brandYellow/10 text-brandYellow font-bold border border-brandYellow/30'
                    : 'text-slate-200 hover:text-brandYellow hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isSpecial && <Sparkles className="w-4 h-4 text-brandYellow" />}
                  <span>{link.name}</span>
                </span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-brandYellow/40 bg-brandYellow/10 text-brandYellow text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={handleBookClick}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brandRed text-white text-sm font-bold shadow-glow-red"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Car / Bike Service</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
