import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface MobileActionBarProps {
  onBookClick: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onBookClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-t border-brandYellow/30 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-900 border border-white/10 active:bg-brandYellow/20 text-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-brandYellow mb-1 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700/80 border border-emerald-500/40 active:bg-emerald-600 text-white transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brandRed border border-red-500/50 active:bg-brandRed-dark text-white font-bold transition-colors shadow-glow-red"
        >
          <Calendar className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Book Now</span>
        </button>
      </div>
    </div>
  );
};
