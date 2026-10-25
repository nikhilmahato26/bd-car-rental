import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'self-drive',
    title: 'Self-Drive Car Rental',
    heading: 'DRIVE YOUR OWN WAY',
    description: 'Enjoy the freedom of travelling at your own pace with our self-drive car rental options.',
    highlights: [
      '24-hour rental option',
      '320 km driving limit per 24-hour rental',
      'Multiple vehicle choices',
      'Booking enquiry by phone or WhatsApp',
    ],
    ctaText: 'Enquire About Self Drive',
    ctaType: 'rental',
    icon: 'Key',
  },
  {
    id: 'with-driver',
    title: 'Car Rental With Driver',
    heading: 'SIT BACK. ENJOY THE JOURNEY.',
    description: 'Choose a car with a driver for a comfortable and convenient journey.',
    highlights: [
      'Multiple vehicle options',
      'Convenient booking enquiries',
      'Suitable for personal travel and planned journeys',
    ],
    ctaText: 'Enquire About Driver Service',
    ctaType: 'rental',
    icon: 'UserCheck',
  },
  {
    id: 'doorstep-washing',
    title: 'Doorstep Car Washing',
    heading: 'WE COME TO YOU. YOU RELAX.',
    description: 'Keep your vehicle looking fresh with convenient doorstep car washing and cleaning.',
    highlights: [
      'Doorstep convenience',
      'Car exterior cleaning',
      'Enquiries for available cleaning services',
    ],
    ctaText: 'Book Car Washing',
    ctaType: 'washing',
    icon: 'Sparkles',
  },
];

export const BUSINESS_INFO = {
  name: 'B&D Car Rental Agency',
  phone: '+91 9395677586',
  phoneRaw: '+919395677586',
  email: 'aryanmartial786@gmail.com',
  address: 'Chapori Gaon, Ward No. 12, North Lakhimpur, Assam, India',
  serviceArea: 'North Lakhimpur, Assam',
  rentalDuration: '24 Hours',
  drivingLimit: '320 KM per 24-Hour Rental',
  tagline: 'YOUR VEHICLE. YOUR JOURNEY. OUR CARE.',
  heroTagline: 'YOUR JOURNEY. YOUR CHOICE. YOUR DRIVE.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chapori+Gaon+Ward+No+12+North+Lakhimpur+Assam',
  whatsappUrl: 'https://wa.me/919395677586',
};
