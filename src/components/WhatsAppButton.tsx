import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40 flex items-center">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-xl bg-navy-900/95 border border-emerald-500/40 text-white text-xs font-medium shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-2">
          <span>Need a quick quote? Chat with B&amp;D</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-950/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 relative group"
        aria-label="Chat with B&D Car Rental Agency on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white" />
        
        {/* Pulse ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping -z-10 group-hover:opacity-0" />
      </a>
    </aside>
  );
};
