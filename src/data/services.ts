import { ServiceItem, WashingPackage } from '../types';

export const BUSINESS_INFO = {
  name: 'B&D Mobile Car & Bike Washing & Car Rental Agency',
  shortName: 'B&D Agency',
  phone: '+91 9395677586',
  phoneRaw: '+919395677586',
  email: 'aryanmartial786@gmail.com',
  address: 'Chapori Gaon, Ward No. 12, North Lakhimpur, Assam, India',
  serviceArea: 'North Lakhimpur, Assam',
  rentalDuration: '24 Hours',
  drivingLimit: '320 KM per 24-Hour Rental',
  tagline: 'YOUR VEHICLE, OUR CARE!',
  heroTagline: 'YOUR JOURNEY. YOUR CHOICE. YOUR DRIVE.',
  slogan: 'We Come to You. You Relax. Your Vehicle Shines!',
  doorstepPitch: 'Why waste your valuable time cleaning your vehicles? We bring the wash right to your doorstep!',
  oneCallSlogan: 'One call is all it takes — We come to you!',
  trustRibbon: 'CLEANER VEHICLES | HAPPIER JOURNEYS | TRUSTED SERVICE',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chapori+Gaon+Ward+No+12+North+Lakhimpur+Assam',
  whatsappUrl: 'https://wa.me/919395677586',
};

export const CAR_WASH_PACKAGES: WashingPackage[] = [
  {
    id: 'car-basic',
    name: 'Basic Wash',
    vehicleType: 'car',
    price: '₹399',
    priceNumber: 399,
    includes: 'Exterior Wash + Tyre Clean',
    features: ['Snow Foam Wash', 'High-Pressure Rinse', 'Tyre & Rim Cleaning', 'Microfiber Hand Dry'],
  },
  {
    id: 'car-premium',
    name: 'Premium Wash',
    vehicleType: 'car',
    price: '₹699',
    priceNumber: 699,
    includes: 'Exterior + Interior + Tyre Clean + Dashboard Clean',
    popular: true,
    features: [
      'Snow Foam Wash & Pressure Wash',
      'Interior Cabin Vacuuming',
      'Tyre & Rim Cleaning & Dressing',
      'Dashboard & Console Cleaning',
      'Windshield & Glass Cleaning',
    ],
  },
  {
    id: 'car-deluxe',
    name: 'Deluxe Wash',
    vehicleType: 'car',
    price: '₹999',
    priceNumber: 999,
    includes: 'Exterior + Interior + Engine Bay + Wax Polish',
    features: [
      'Complete Snow Foam & Pressure Wash',
      'Full Interior Vacuuming & Deep Wipe',
      'Engine Bay Degreasing & Dressing',
      'Exterior Wax Polish Coating',
      'Tyre, Rim & Trim Polish',
    ],
  },
];

export const BIKE_WASH_PACKAGES: WashingPackage[] = [
  {
    id: 'bike-basic',
    name: 'Basic Wash',
    vehicleType: 'bike',
    price: '₹199',
    priceNumber: 199,
    includes: 'Exterior Wash + Tyre Clean',
    features: ['Foam Wash', 'Pressure Wash', 'Tyre & Rim Cleaning', 'Blow Dry'],
  },
  {
    id: 'bike-premium',
    name: 'Premium Wash',
    vehicleType: 'bike',
    price: '₹399',
    priceNumber: 399,
    includes: 'Exterior + Interior + Chain Clean + Lubrication',
    popular: true,
    features: [
      'High Foam & Pressure Wash',
      'Chain Deep Cleaning',
      'Specialized Chain Lubrication',
      'Tyre & Alloy Rim Cleaning',
      'Engine & Exhaust Degreasing',
    ],
  },
  {
    id: 'bike-deluxe',
    name: 'Deluxe Wash',
    vehicleType: 'bike',
    price: '₹599',
    priceNumber: 599,
    includes: 'Complete Clean + Polish',
    features: [
      'Complete Deep Pressure & Foam Wash',
      'Chain Cleaning & High-Grade Lube',
      'Full Body Wax Polish for Gloss',
      'Tyre & Rim Polish Dressing',
      'Scratch & Dullness Reducer',
    ],
  },
];

export const CAR_WASH_INCLUSIONS = [
  'Foam Wash',
  'Pressure Wash',
  'Tyre & Rim Cleaning',
  'Interior Vacuuming',
  'Dashboard & Glass Cleaning',
  'Wax Polish (Optional)',
];

export const BIKE_WASH_INCLUSIONS = [
  'Foam Wash',
  'Pressure Wash',
  'Chain Cleaning & Lubrication',
  'Tyre & Rim Cleaning',
  'Polish (Optional)',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'car-rental',
    title: 'Car Rental Agency',
    heading: 'EXPLORE MORE. TRAVEL FREELY.',
    description: 'Drive your dreams with our dependable fleet. Choose independent self-drive or relax with our professional driver service.',
    highlights: [
      'Self Drive & With Driver options',
      '24-hour rental with 320 KM limit',
      'Well-maintained cars across categories',
      'Road Side Assistance support',
      'Easy booking via phone or WhatsApp',
    ],
    ctaText: 'Explore Rental Fleet',
    ctaType: 'rental',
    icon: 'Car',
  },
  {
    id: 'doorstep-car-wash',
    title: 'Doorstep Car Washing',
    heading: 'WE COME TO YOU. YOU RELAX.',
    description: 'Save valuable time and keep your car sparkling clean with professional snow foam pressure washing directly at your doorstep.',
    highlights: [
      'Packages from ₹399, ₹699, to ₹999',
      'Foam wash, pressure wash & tyre clean',
      'Interior vacuuming & dashboard clean',
      'Engine bay wash & wax polish options',
      'Available across North Lakhimpur',
    ],
    ctaText: 'View Car Wash Packages',
    ctaType: 'car-washing',
    icon: 'Sparkles',
  },
  {
    id: 'doorstep-bike-wash',
    title: 'Doorstep Bike Washing',
    heading: 'PREMIUM CARE FOR YOUR MOTORCYCLE',
    description: 'Specialized motorcycle and scooter foam cleaning with dedicated chain degreasing, lubrication, and gloss polishing at your home.',
    highlights: [
      'Packages from ₹199, ₹399, to ₹599',
      'Foam wash & high pressure clean',
      'Chain cleaning & lubrication',
      'Tyre, rim & engine degreasing',
      'Complete gloss polish options',
    ],
    ctaText: 'View Bike Wash Packages',
    ctaType: 'bike-washing',
    icon: 'Bike',
  },
];
