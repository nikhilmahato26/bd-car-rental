import React, { useState } from 'react';
import { Tag, Sparkles, MessageSquare, Maximize2, X, ChevronLeft, ChevronRight, Phone, Car, Compass, Check } from 'lucide-react';
import { PROMOTIONAL_POSTERS, PromoPoster, BUSINESS_INFO } from '../data/services';

interface PromotionsSectionProps {
  onBookOffer: (message?: string) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onBookOffer }) => {
  const [selectedPoster, setSelectedPoster] = useState<PromoPoster | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activePoster = PROMOTIONAL_POSTERS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PROMOTIONAL_POSTERS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PROMOTIONAL_POSTERS.length) % PROMOTIONAL_POSTERS.length);
  };

  const openWhatsAppOffer = (poster: PromoPoster) => {
    const url = `https://wa.me/919395677586?text=${encodeURIComponent(poster.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="promotions" className="py-20 lg:py-28 relative bg-navy-900/90 border-b border-brandYellow/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brandYellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandYellow/15 border border-brandYellow/30 text-brandYellow text-xs font-black tracking-widest uppercase mb-4 shadow-glow-yellow/30">
            <Car className="w-3.5 h-3.5" />
            <span>Official Rental Offers &amp; Tour Specials</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            CAR RENTAL OFFERS &amp; <span className="text-brandYellow">TRAVEL PACKAGES</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Browse our official travel packages and festive car rental discounts — featuring highway cruisers like Toyota Innova Crysta, Maruti XL6, Ertiga, and Jimny 4x4 for expeditions across Assam, Meghalaya, and Arunachal.
          </p>
        </div>

        {/* Featured Showcase Display */}
        <div className="glass-card border-2 border-brandYellow/40 rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Poster Preview with Hover Zoom */}
            <div className="lg:col-span-7 relative group">
              <div
                onClick={() => setSelectedPoster(activePoster)}
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-black cursor-pointer shadow-2xl aspect-[16/11] flex items-center justify-center group"
              >
                <img
                  src={activePoster.image}
                  alt={activePoster.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-brandRed text-white text-xs font-heading font-black uppercase tracking-wider shadow-glow-red">
                    {activePoster.badge}
                  </span>
                </div>

                {/* Enlarge prompt button */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-navy-950/90 text-white text-xs font-bold uppercase backdrop-blur-md border border-white/20 group-hover:border-brandYellow transition-colors">
                  <Maximize2 className="w-3.5 h-3.5 text-brandYellow" />
                  <span>Click to Enlarge</span>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-navy-950 border border-white/10 hover:border-brandYellow text-slate-300 hover:text-brandYellow transition-all"
                    aria-label="Previous promotional offer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-navy-950 border border-white/10 hover:border-brandYellow text-slate-300 hover:text-brandYellow transition-all"
                    aria-label="Next promotional offer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Offer {activeIndex + 1} of {PROMOTIONAL_POSTERS.length}
                </span>
              </div>
            </div>

            {/* Right: Offer Details & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandYellow/10 text-brandYellow text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activePoster.badge}</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                  {activePoster.title}
                </h3>

                <p className="text-base font-heading font-bold text-gradient-gold uppercase tracking-wide mb-4">
                  {activePoster.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {activePoster.description}
                </p>

                {/* Key Inclusions bullets */}
                <div className="space-y-2.5 mb-8 p-4 rounded-xl bg-navy-950/70 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <Check className="w-4 h-4 text-brandYellow flex-shrink-0" />
                    <span>Self-Drive &amp; Chauffeur-Driven Options</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <Check className="w-4 h-4 text-brandYellow flex-shrink-0" />
                    <span>Standard 24h / 320 KM rental allowance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <Check className="w-4 h-4 text-brandYellow flex-shrink-0" />
                    <span>24/7 Road Side Assistance on North East routes</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => openWhatsAppOffer(activePoster)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book This Car Offer</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-navy-950 hover:bg-brandYellow hover:text-navy-950 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/15 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-brandYellow" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {PROMOTIONAL_POSTERS.map((poster, idx) => (
            <button
              key={poster.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-2 rounded-2xl border text-left transition-all group overflow-hidden flex flex-col justify-between ${
                activeIndex === idx
                  ? 'bg-navy-800 border-brandYellow shadow-glow-yellow/40 ring-1 ring-brandYellow'
                  : 'bg-navy-950/80 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2 bg-black">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="px-1 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brandYellow block truncate">
                  {poster.badge}
                </span>
                <span className="text-xs font-heading font-bold text-white block truncate">
                  {poster.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-navy-950 border-2 border-brandYellow/60 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-navy-900 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-brandYellow uppercase font-bold tracking-widest block">
                  {selectedPoster.badge}
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase">
                  {selectedPoster.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-2 rounded-xl bg-navy-950 border border-white/20 text-slate-300 hover:text-white hover:border-brandRed transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-3 sm:p-6 overflow-y-auto flex items-center justify-center bg-black/60">
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-navy-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-300 text-center sm:text-left">
                Contact B&amp;D Car Rental Agency to book this car rental package or verify travel dates.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    openWhatsAppOffer(selectedPoster);
                    setSelectedPoster(null);
                  }}
                  className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </button>
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-slate-300 text-xs font-bold uppercase hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
