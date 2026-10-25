import React from 'react';
import { ArrowDown, MessageSquare, Car, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';
import { buildGeneralWhatsAppUrl } from '../lib/whatsapp';

interface HeroProps {
  onExploreFleet: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFleet, onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Background Hero Image with dark gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="B&D Automotive Presentation"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transform animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      </div>

      {/* Decorative Automotive Accent Lines */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brandYellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-brandYellow/40 text-brandYellow text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-glow-yellow/50 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brandYellow animate-ping" />
          <span>CAR RENTAL AGENCY · NORTH LAKHIMPUR, ASSAM</span>
        </div>

        {/* Main H1 Heading */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-[1.05] mb-6">
          YOUR JOURNEY.{' '}
          <span className="text-gradient-gold">YOUR CHOICE.</span>{' '}
          <span className="block text-white">YOUR DRIVE.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 text-balance">
          Explore North Lakhimpur with convenient car rental options. Choose{' '}
          <strong className="text-white font-semibold">self-drive freedom</strong> or travel comfortably{' '}
          <strong className="text-white font-semibold">with a driver</strong>. Need a clean vehicle? We also bring{' '}
          <strong className="text-brandYellow font-semibold">car washing and cleaning services to your doorstep</strong>.
        </p>

        {/* 3 Prominent Selling Points Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl mb-10">
          <div className="flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="p-2 rounded-lg bg-brandYellow/15 text-brandYellow">
              <Car className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Rental Choice</div>
              <div className="text-sm font-bold text-white">Self Drive &amp; With Driver</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-navy-900/80 border border-brandYellow/30 backdrop-blur-md shadow-glow-yellow/20">
            <div className="p-2 rounded-lg bg-brandYellow text-navy-950">
              <Clock className="w-5 h-5 font-bold" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-brandYellow font-medium">Standard Limit</div>
              <div className="text-sm font-black text-white">24 Hours / 320 KM</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Convenience</div>
              <div className="text-sm font-bold text-white">Doorstep Car Washing</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreFleet}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brandRed hover:bg-brandRed-light text-white font-heading font-bold text-base tracking-wide uppercase shadow-glow-red transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-red-500/50 flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Fleet</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <a
            href={buildGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base tracking-wide uppercase shadow-lg shadow-emerald-900/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-emerald-400/40 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
