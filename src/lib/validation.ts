import { z } from 'zod';

const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;

export const bookingFormSchema = z.object({
  customerName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(60, { message: 'Name must not exceed 60 characters' }),
  phoneNumber: z
    .string()
    .regex(indianPhoneRegex, {
      message: 'Please enter a valid 10-digit Indian phone number',
    }),
  rentalType: z.enum(['Self Drive', 'With Driver'], {
    required_error: 'Please select a rental type',
  }),
  preferredVehicle: z
    .string()
    .min(1, { message: 'Please choose your preferred vehicle' }),
  pickupDate: z
    .string()
    .min(1, { message: 'Please select a pickup date' }),
  returnDate: z
    .string()
    .min(1, { message: 'Please select a return date' }),
  pickupLocation: z
    .string()
    .min(3, { message: 'Please enter your pickup location in North Lakhimpur' })
    .max(100, { message: 'Location is too long' }),
  additionalRequirements: z
    .string()
    .max(300, { message: 'Requirements cannot exceed 300 characters' })
    .optional(),
}).refine((data) => {
  if (!data.pickupDate || !data.returnDate) return true;
  return new Date(data.returnDate) >= new Date(data.pickupDate);
}, {
  message: 'Return date cannot be earlier than pickup date',
  path: ['returnDate'],
});

export const washingFormSchema = z.object({
  customerName: z
    .string()
    .min(2, { message: 'Please enter your name' })
    .max(60, { message: 'Name is too long' }),
  phoneNumber: z
    .string()
    .regex(indianPhoneRegex, {
      message: 'Please enter a valid 10-digit phone number',
    }),
  vehicleType: z.enum(['car', 'bike'], {
    required_error: 'Please select car or bike',
  }),
  selectedPackage: z
    .string()
    .min(1, { message: 'Please select a washing package' }),
  vehicleModel: z
    .string()
    .min(2, { message: 'Please enter your vehicle model (e.g. Swift, Creta, Pulsar, Royal Enfield)' }),
  preferredDate: z
    .string()
    .min(1, { message: 'Please select a date for the doorstep wash' }),
  location: z
    .string()
    .min(3, { message: 'Please enter your address/locality in North Lakhimpur' }),
  notes: z
    .string()
    .max(300, { message: 'Notes cannot exceed 300 characters' })
    .optional(),
});
