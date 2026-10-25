import { BookingFormData, WashingFormData } from '../types';
import { BUSINESS_INFO } from '../data/services';

const WHATSAPP_PHONE = '919395677586';

/**
 * Creates encoded WhatsApp URL for car rental booking enquiry
 */
export function buildRentalWhatsAppUrl(data: BookingFormData): string {
  const message = [
    `*NEW RENTAL ENQUIRY - B&D CAR RENTAL AGENCY*`,
    `----------------------------------------`,
    `👤 *Customer Name:* ${data.customerName.trim()}`,
    `📞 *Phone Number:* ${data.phoneNumber.trim()}`,
    `🚘 *Rental Type:* ${data.rentalType}`,
    `🚗 *Preferred Vehicle:* ${data.preferredVehicle}`,
    `📅 *Pickup Date:* ${data.pickupDate}`,
    `📅 *Return Date:* ${data.returnDate}`,
    `📍 *Pickup Location:* ${data.pickupLocation.trim()}`,
    data.additionalRequirements?.trim() 
      ? `📝 *Special Requirements:* ${data.additionalRequirements.trim()}`
      : null,
    `----------------------------------------`,
    `⏱️ *Standard Terms:* 24 Hours / 320 KM Limit`,
    `ℹ️ _Sent from B&D Car Rental Agency Website_`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates encoded WhatsApp URL for doorstep car washing enquiry
 */
export function buildWashingWhatsAppUrl(data: WashingFormData): string {
  const message = [
    `*NEW CAR WASHING ENQUIRY - B&D CAR RENTAL AGENCY*`,
    `----------------------------------------`,
    `👤 *Customer Name:* ${data.customerName.trim()}`,
    `📞 *Phone Number:* ${data.phoneNumber.trim()}`,
    `🚘 *Vehicle Model:* ${data.vehicleModel.trim()}`,
    `📅 *Preferred Date:* ${data.preferredDate}`,
    `📍 *Service Location:* ${data.location.trim()}`,
    data.notes?.trim() ? `📝 *Notes / Requests:* ${data.notes.trim()}` : null,
    `----------------------------------------`,
    `✨ *Service:* Doorstep Car Washing & Cleaning`,
    `ℹ️ _Sent from B&D Car Rental Agency Website_`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick enquiry link for a specific vehicle
 */
export function buildVehicleQuickWhatsAppUrl(vehicleName: string): string {
  const message = `Hello B&D Car Rental Agency, I am interested in checking the pricing and availability for the *${vehicleName}* for a rental in North Lakhimpur. Please share details.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick general WhatsApp enquiry
 */
export function buildGeneralWhatsAppUrl(servicePrompt?: string): string {
  const text = servicePrompt 
    ? `Hello B&D Car Rental Agency, I would like to enquire about ${servicePrompt}. Please share pricing and availability.`
    : `Hello B&D Car Rental Agency, I would like to enquire about your car rental and car washing services in North Lakhimpur.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
