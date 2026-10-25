import React from 'react';
import { Calendar, MessageSquare, Tag, CheckCircle, ShieldCheck, Key, UserCheck } from 'lucide-react';
import { Vehicle } from '../types';
import { buildVehicleQuickWhatsAppUrl } from '../lib/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 group">
      {/* Vehicle Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-900/60 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />

        {/* Category & Custom Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-navy-950/85 backdrop-blur-md text-brandYellow border border-brandYellow/40">
            {vehicle.category}
          </span>
          {vehicle.badge && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-brandRed/85 backdrop-blur-md text-white border border-red-500/40">
              {vehicle.badge}
            </span>
          )}
        </div>

        {/* Availability Status */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-navy-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
          <CheckCircle className="w-3 h-3" />
          <span>Available</span>
        </div>

        {/* Bottom image overlay chip */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-slate-300 bg-navy-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
          <span className="flex items-center gap-1">
            <Key className="w-3 h-3 text-brandYellow" /> Self-Drive
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1">
            <UserCheck className="w-3 h-3 text-blue-400" /> With Driver
          </span>
          <span className="text-slate-500">•</span>
          <span>320 KM / 24h</span>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-black text-xl text-white tracking-tight uppercase mb-2 group-hover:text-brandYellow transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            {vehicle.description}
          </p>
        </div>

        <div>
          {/* Price & Availability Banner */}
          <div className="p-3 rounded-xl bg-navy-950/90 border border-white/10 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-brandYellow" />
              <span className="text-xs text-slate-300">Rental Tariff:</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brandYellow font-heading">
              Contact for Price
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectVehicle(vehicle.name)}
              className="flex-1 py-3 px-4 rounded-xl bg-brandRed hover:bg-brandRed-light text-white font-heading font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all duration-200 flex items-center justify-center gap-1.5 border border-red-500/40"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Car</span>
            </button>

            <a
              href={buildVehicleQuickWhatsAppUrl(vehicle.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white border border-emerald-500/30 transition-colors"
              title={`Ask on WhatsApp about ${vehicle.name}`}
              aria-label={`Ask on WhatsApp about ${vehicle.name}`}
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
