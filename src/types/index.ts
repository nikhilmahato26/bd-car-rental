export type VehicleCategory = 'All' | 'Hatchbacks' | 'Sedans' | 'SUVs' | 'Family Cars';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchbacks' | 'Sedans' | 'SUVs' | 'Family Cars';
  description: string;
  image: string;
  badge?: string;
}

export interface BookingFormData {
  customerName: string;
  phoneNumber: string;
  rentalType: 'Self Drive' | 'With Driver';
  preferredVehicle: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  additionalRequirements?: string;
}

export interface WashingFormData {
  customerName: string;
  phoneNumber: string;
  vehicleModel: string;
  preferredDate: string;
  location: string;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  heading: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaType: 'rental' | 'washing';
  icon: string;
}
