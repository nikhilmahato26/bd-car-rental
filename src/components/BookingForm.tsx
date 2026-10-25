import React, { useState, useEffect } from 'react';
import { Car, Sparkles, Send, CheckCircle2, AlertCircle, Phone, Calendar, Clock, MapPin, User, FileText, Check, ShieldCheck, Key, UserCheck } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { BUSINESS_INFO, CAR_WASH_PACKAGES, BIKE_WASH_PACKAGES } from '../data/services';
import { BookingFormData, WashingFormData } from '../types';
import { bookingFormSchema, washingFormSchema } from '../lib/validation';
import { buildRentalWhatsAppUrl, buildWashingWhatsAppUrl } from '../lib/whatsapp';

interface BookingFormProps {
  selectedVehicle?: string;
  initialTab?: 'rental' | 'car-washing' | 'bike-washing';
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedVehicle,
  initialTab = 'rental',
}) => {
  const [activeTab, setActiveTab] = useState<'rental' | 'washing'>('rental');
  const [washingSubtype, setWashingSubtype] = useState<'car' | 'bike'>('car');

  // Rental Form state
  const [rentalData, setRentalData] = useState<BookingFormData>({
    customerName: '',
    phoneNumber: '',
    rentalType: 'Self Drive',
    preferredVehicle: VEHICLES[0].name,
    pickupDate: '',
    returnDate: '',
    pickupLocation: 'North Lakhimpur',
    additionalRequirements: '',
  });

  // Washing Form state
  const [washingData, setWashingData] = useState<WashingFormData>({
    customerName: '',
    phoneNumber: '',
    vehicleType: 'car',
    selectedPackage: 'Premium Wash (₹699)',
    vehicleModel: '',
    preferredDate: '',
    location: 'North Lakhimpur',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  useEffect(() => {
    if (selectedVehicle) {
      setRentalData((prev) => ({ ...prev, preferredVehicle: selectedVehicle }));
      setActiveTab('rental');
    }
  }, [selectedVehicle]);

  useEffect(() => {
    if (initialTab === 'car-washing') {
      setActiveTab('washing');
      setWashingSubtype('car');
      setWashingData((prev) => ({
        ...prev,
        vehicleType: 'car',
        selectedPackage: 'Premium Wash (₹699)',
      }));
    } else if (initialTab === 'bike-washing') {
      setActiveTab('washing');
      setWashingSubtype('bike');
      setWashingData((prev) => ({
        ...prev,
        vehicleType: 'bike',
        selectedPackage: 'Premium Wash (₹399)',
      }));
    } else {
      setActiveTab('rental');
    }
  }, [initialTab]);

  const todayStr = new Date().toISOString().split('T')[0];

  const handleRentalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmittedStatus(null);

    const result = bookingFormSchema.safeParse(rentalData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        fieldErrors[fieldName] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmittedStatus('rental');
    const waUrl = buildRentalWhatsAppUrl(rentalData);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleWashingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmittedStatus(null);

    const payload: WashingFormData = {
      ...washingData,
      vehicleType: washingSubtype,
    };

    const result = washingFormSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        fieldErrors[fieldName] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmittedStatus('washing');
    const waUrl = buildWashingWhatsAppUrl(payload);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const currentPackages = washingSubtype === 'bike' ? BIKE_WASH_PACKAGES : CAR_WASH_PACKAGES;

  return (
    <section id="booking" className="relative -mt-10 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-navy-900 border-2 border-brandYellow/40 rounded-3xl shadow-premium overflow-hidden backdrop-blur-xl">
        {/* Panel Header & Tabs */}
        <div className="bg-navy-950/95 border-b border-white/10 p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-brandYellow text-xs font-black tracking-widest uppercase mb-1">
              <Car className="w-4 h-4" />
              <span>Priority Booking Desk · North Lakhimpur</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Rent A Car Online
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Self Drive &amp; With Driver Rentals • 24 Hours / 320 KM Package • Road Side Assistance
            </p>
          </div>

          {/* Service Toggle Tabs - Car Rental highlighted as primary */}
          <div className="flex bg-navy-950 p-1.5 rounded-2xl border border-white/10 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => {
                setActiveTab('rental');
                setErrors({});
                setSubmittedStatus(null);
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-heading font-black uppercase tracking-wider transition-all ${
                activeTab === 'rental'
                  ? 'bg-brandYellow text-navy-950 shadow-glow-yellow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Car Rental Enquiry</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('washing');
                setErrors({});
                setSubmittedStatus(null);
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === 'washing'
                  ? 'bg-brandYellow text-navy-950 shadow-glow-yellow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Doorstep Washing</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submittedStatus && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-sm flex items-start gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white mb-0.5">Enquiry Prepared for WhatsApp!</p>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  WhatsApp is opening with your formatted vehicle booking enquiry details. B&amp;D Agency will verify current fleet availability and confirm your reservation directly.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'rental' ? (
            /* Car Rental Form */
            <form onSubmit={handleRentalSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="customerName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Customer Name <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="customerName"
                      type="text"
                      placeholder="e.g. Rahul Barua"
                      value={rentalData.customerName}
                      onChange={(e) => setRentalData({ ...rentalData, customerName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.customerName
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.customerName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={rentalData.phoneNumber}
                      onChange={(e) => setRentalData({ ...rentalData, phoneNumber: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.phoneNumber
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="rentalType" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Rental Option <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="rentalType"
                      value={rentalData.rentalType}
                      onChange={(e) =>
                        setRentalData({
                          ...rentalData,
                          rentalType: e.target.value as 'Self Drive' | 'With Driver',
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow appearance-none cursor-pointer"
                    >
                      <option value="Self Drive">Self Drive (Total Privacy • 320 KM / 24h)</option>
                      <option value="With Driver">With Driver (Experienced Chauffeur)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredVehicle" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Vehicle <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferredVehicle"
                      value={rentalData.preferredVehicle}
                      onChange={(e) => setRentalData({ ...rentalData, preferredVehicle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-sm text-white focus:outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow appearance-none cursor-pointer"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} ({v.badge || v.category})
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="pickupDate" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Pickup Date <span className="text-brandRed">*</span>
                  </label>
                  <input
                    id="pickupDate"
                    type="date"
                    min={todayStr}
                    value={rentalData.pickupDate}
                    onChange={(e) => setRentalData({ ...rentalData, pickupDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-950 border text-sm text-white focus:outline-none transition-all ${
                      errors.pickupDate
                        ? 'border-brandRed ring-1 ring-brandRed'
                        : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                    }`}
                  />
                  {errors.pickupDate && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pickupDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="returnDate" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Return Date <span className="text-brandRed">*</span>
                  </label>
                  <input
                    id="returnDate"
                    type="date"
                    min={rentalData.pickupDate || todayStr}
                    value={rentalData.returnDate}
                    onChange={(e) => setRentalData({ ...rentalData, returnDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-950 border text-sm text-white focus:outline-none transition-all ${
                      errors.returnDate
                        ? 'border-brandRed ring-1 ring-brandRed'
                        : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                    }`}
                  />
                  {errors.returnDate && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.returnDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="pickupLocation" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Pickup Location <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="pickupLocation"
                      type="text"
                      placeholder="e.g. Ward No. 12, Chapori Gaon"
                      value={rentalData.pickupLocation}
                      onChange={(e) => setRentalData({ ...rentalData, pickupLocation: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.pickupLocation
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.pickupLocation && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="additionalRequirements" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Trip Notes / Outstation Destination
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="additionalRequirements"
                      type="text"
                      placeholder="e.g. Tawang trip, Kaziranga, airport drop"
                      value={rentalData.additionalRequirements}
                      onChange={(e) =>
                        setRentalData({ ...rentalData, additionalRequirements: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Notice & Submit */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-brandYellow animate-pulse" />
                  <span>
                    Standard Rental Terms: <strong className="text-white">24 Hours Rental</strong> with{' '}
                    <strong className="text-brandYellow font-bold">320 KM Limit</strong>. Includes{' '}
                    <strong className="text-white">24/7 Road Side Assistance</strong>.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brandRed hover:bg-brandRed-light text-white font-heading font-bold text-sm tracking-wide uppercase shadow-glow-red transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 border border-red-500/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Rental Booking</span>
                </button>
              </div>
            </form>
          ) : (
            /* Washing Form (Car or Bike) */
            <form onSubmit={handleWashingSubmit} noValidate>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs text-slate-300 font-semibold uppercase">Choose Vehicle Type:</span>
                <div className="inline-flex bg-navy-950 p-1 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      setWashingSubtype('car');
                      setWashingData((p) => ({ ...p, vehicleType: 'car', selectedPackage: 'Premium Wash (₹699)' }));
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      washingSubtype === 'car' ? 'bg-brandYellow text-navy-950' : 'text-slate-300'
                    }`}
                  >
                    Car Wash (₹399+)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setWashingSubtype('bike');
                      setWashingData((p) => ({ ...p, vehicleType: 'bike', selectedPackage: 'Premium Wash (₹399)' }));
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      washingSubtype === 'bike' ? 'bg-brandYellow text-navy-950' : 'text-slate-300'
                    }`}
                  >
                    Bike Wash (₹199+)
                  </button>
                </div>
              </div>

              {/* Package Selector Cards */}
              <div className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentPackages.map((pkg) => {
                    const isSelected = washingData.selectedPackage.includes(pkg.name);
                    return (
                      <div
                        key={pkg.id}
                        onClick={() =>
                          setWashingData({
                            ...washingData,
                            selectedPackage: `${pkg.name} (${pkg.price})`,
                          })
                        }
                        className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-navy-800 border-brandYellow shadow-glow-yellow/30'
                            : 'bg-navy-950/80 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-heading font-black text-sm uppercase text-white">
                            {pkg.name}
                          </span>
                          <span className="font-heading font-black text-base text-brandYellow">
                            {pkg.price}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-tight mb-2">
                          {pkg.includes}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                          <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-brandYellow' : 'text-slate-500'}`} />
                          <span>{isSelected ? 'Selected' : 'Click to select'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="washCustomerName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Customer Name <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="washCustomerName"
                      type="text"
                      placeholder="e.g. Dipankar Gogoi"
                      value={washingData.customerName}
                      onChange={(e) => setWashingData({ ...washingData, customerName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.customerName
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.customerName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="washPhoneNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="washPhoneNumber"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={washingData.phoneNumber}
                      onChange={(e) => setWashingData({ ...washingData, phoneNumber: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.phoneNumber
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicleModel" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Vehicle Model <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="vehicleModel"
                      type="text"
                      placeholder={washingSubtype === 'bike' ? 'e.g. Royal Enfield, Pulsar' : 'e.g. Swift, Creta, Alto'}
                      value={washingData.vehicleModel}
                      onChange={(e) => setWashingData({ ...washingData, vehicleModel: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.vehicleModel
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.vehicleModel && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.vehicleModel}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Date <span className="text-brandRed">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={todayStr}
                    value={washingData.preferredDate}
                    onChange={(e) => setWashingData({ ...washingData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-950 border text-sm text-white focus:outline-none transition-all ${
                      errors.preferredDate
                        ? 'border-brandRed ring-1 ring-brandRed'
                        : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="washLocation" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Doorstep Address in North Lakhimpur <span className="text-brandRed">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="washLocation"
                      type="text"
                      placeholder="e.g. Ward No. 12, Chapori Gaon, North Lakhimpur"
                      value={washingData.location}
                      onChange={(e) => setWashingData({ ...washingData, location: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.location
                          ? 'border-brandRed ring-1 ring-brandRed'
                          : 'border-white/10 focus:border-brandYellow focus:ring-1 focus:ring-brandYellow'
                      }`}
                    />
                  </div>
                  {errors.location && (
                    <p className="text-xs text-brandRed mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.location}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="washNotes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Special Notes (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="washNotes"
                      type="text"
                      placeholder="e.g. Morning timing, underbody pressure rinse"
                      value={washingData.notes}
                      onChange={(e) => setWashingData({ ...washingData, notes: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-brandYellow animate-pulse" />
                  <span>
                    Selected: <strong className="text-white">{washingData.selectedPackage}</strong> • Doorstep service across North Lakhimpur.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brandRed hover:bg-brandRed-light text-white font-heading font-bold text-sm tracking-wide uppercase shadow-glow-red transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 border border-red-500/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Book Washing on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
