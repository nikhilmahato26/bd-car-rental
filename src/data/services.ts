import { ServiceItem, WashingPackage } from '../types';

export const BUSINESS_INFO = {
  name: 'B&D Car Rental Agency',
  shortName: 'B&D Rentals',
  phone: '+91 9395677586',
  phoneRaw: '+919395677586',
  email: 'aryanmartial786@gmail.com',
  address: 'Chapori Gaon, Ward No. 12, North Lakhimpur, Assam, India',
  serviceArea: 'North Lakhimpur & North East India',
  coordinates: {
    lat: 27.227036,
    lng: 94.098259,
  },
  rentalDuration: '24 Hours',
  drivingLimit: '320 KM per 24-Hour Rental',
  tagline: 'YOUR VEHICLE. YOUR JOURNEY. OUR CARE.',
  heroTagline: 'YOUR JOURNEY. YOUR CHOICE. YOUR DRIVE.',
  slogan: 'Drive Your Dreams with B&D Car Rental Agency',
  doorstepPitch: 'Need your car or bike cleaned before your trip? We also bring professional doorstep vehicle washing right to your home!',
  oneCallSlogan: 'One Call Is All It Takes — Book Your Ride Today!',
  trustRibbon: 'WELL-MAINTAINED FLEET | 24/7 ROADSIDE ASSISTANCE | AFFORDABLE RENTAL RATES',
  mapsUrl: 'https://maps.google.com/?q=27.227036,94.098259',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=27.227036,94.098259&hl=en&z=15&output=embed',
  whatsappUrl: 'https://wa.me/919395677586',
};

export interface PromoPoster {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  description: string;
  whatsappMessage: string;
}

export const PROMOTIONAL_POSTERS: PromoPoster[] = [
  {
    id: 'promo-travel-experience',
    title: 'More Than Just A Ride',
    tagline: "It's a Complete Travel Experience!",
    badge: 'North East Expeditions',
    image: '/promotions/promo-travel-experience.jpg',
    description: 'Explore Meghalaya, Arunachal Pradesh, Tawang, Kaziranga & across the North East with our premium Innova Crysta, XL6, and Jimny 4x4 fleet. Well-maintained cars with 24/7 roadside assistance.',
    whatsappMessage: 'Hello B&D Car Rental Agency, I am interested in renting a vehicle for our North East trip (Meghalaya / Arunachal / Assam). Please share car availability and rates.',
  },
  {
    id: 'promo-diwali-fleet',
    title: 'Diwali Festive Rental Offers',
    tagline: 'Special Holiday Discounts for Family & Friends',
    badge: 'Festive Special',
    image: '/promotions/promo-diwali-fleet.jpg',
    description: 'Make unforgettable vacation memories with self-drive or chauffeur-driven options on well-maintained SUVs, 7-seaters, and premium sedans for your festival travels.',
    whatsappMessage: 'Hello B&D Car Rental Agency, I want to enquire about festive car rental booking for our upcoming family vacation.',
  },
  {
    id: 'promo-diwali-family',
    title: 'Scenic Vacation Getaway',
    tagline: 'Choose Your Ride • Explore Your Destination',
    badge: 'Family Holidays',
    image: '/promotions/promo-diwali-family.jpg',
    description: 'Comfortable 7-seater MPVs (Innova Crysta, Ertiga, XL6) and rugged SUVs for memorable road trips with your family and friends. 320 KM daily allowance included.',
    whatsappMessage: 'Hello B&D Car Rental Agency, I would like to book a family rental car for our scenic road trip vacation.',
  },
  {
    id: 'promo-diwali-special',
    title: 'Holiday Memories Ride',
    tagline: 'Book Your Ride Today!',
    badge: 'Vacation Specials',
    image: '/promotions/promo-diwali-special.jpg',
    description: 'Travel at your own pace with our self-drive freedom or relax with our courteous drivers. Instant confirmation on WhatsApp.',
    whatsappMessage: 'Hello B&D Car Rental Agency, I want to book a rental car for my travel dates.',
  },
  {
    id: 'promo-mobile-wash',
    title: 'Doorstep Car & Bike Washing',
    tagline: 'We Come to You. You Relax. Your Vehicle Shines!',
    badge: 'Added Service',
    image: '/promotions/promo-mobile-wash.jpg',
    description: 'Doorstep snow foam pressure wash, interior vacuuming, and waxing services starting from ₹399 for cars and ₹199 for bikes in North Lakhimpur.',
    whatsappMessage: 'Hello B&D Agency, I would like to book a doorstep vehicle washing slot.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'self-drive',
    title: 'Self-Drive Car Rental',
    heading: 'DRIVE YOUR OWN WAY',
    description: 'Experience absolute freedom and total privacy. Pick up your favorite car and explore North Lakhimpur, Assam, and beyond at your own schedule.',
    highlights: [
      'Flexible 24-hour rental window',
      'Generous 320 KM driving limit per day',
      'Wide fleet: Hatchbacks, Sedans, SUVs & 4x4',
      '24/7 Road Side Assistance included',
      'Quick booking via call or WhatsApp',
    ],
    ctaText: 'Enquire About Self-Drive',
    ctaType: 'rental',
    icon: 'Car',
  },
  {
    id: 'with-driver',
    title: 'Car Rental With Driver',
    heading: 'SIT BACK. ENJOY THE JOURNEY.',
    description: 'Leave the driving and navigation to our polite, experienced local chauffeurs. Ideal for business trips, family outings, and relaxed personal journeys.',
    highlights: [
      'Experienced and courteous local drivers',
      'Suitable for local and planned outstation routes',
      'Spacious MPVs and premium SUVs available',
      'Well-maintained & sanitized before every trip',
      'Hassle-free point-to-point travel',
    ],
    ctaText: 'Enquire About Driver Service',
    ctaType: 'rental',
    icon: 'UserCheck',
  },
  {
    id: 'outstation-tours',
    title: 'North East Road Trips',
    heading: 'MORE THAN JUST A RIDE',
    description: 'Planning a road trip to Arunachal Pradesh, Tawang, Meghalaya, Shillong, or Kaziranga? Our fleet is prepared for mountain terrain and highway long drives.',
    highlights: [
      'Rugged SUVs & 4x4 options (Jimny, Bolero, 3XO)',
      'Executive 7-seaters (Innova Crysta, XL6, Ertiga)',
      'Roadside assistance across North East corridors',
      'Well-maintained mechanical condition',
      'Custom travel duration support',
    ],
    ctaText: 'Explore Tour Fleet',
    ctaType: 'rental',
    icon: 'Compass',
  },
];

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
