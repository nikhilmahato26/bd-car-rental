import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { ServicesSection } from './sections/ServicesSection';
import { FleetSection } from './sections/FleetSection';
import { RentalInformation } from './sections/RentalInformation';
import { CarWashingSection } from './sections/CarWashingSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { HowBookingWorks } from './sections/HowBookingWorks';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileActionBar } from './components/MobileActionBar';
import { ServiceItem } from './types';

export function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined);
  const [formInitialTab, setFormInitialTab] = useState<'rental' | 'car-washing' | 'bike-washing'>('rental');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFleet = () => {
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    setFormInitialTab('rental');
    scrollToBooking();
  };

  const handleSelectService = (service: ServiceItem) => {
    if (service.ctaType === 'car-washing') {
      setFormInitialTab('car-washing');
    } else if (service.ctaType === 'bike-washing') {
      setFormInitialTab('bike-washing');
    } else {
      setFormInitialTab('rental');
    }
    scrollToBooking();
  };

  const handleSelectPackage = (type: 'car-washing' | 'bike-washing') => {
    setFormInitialTab(type);
    scrollToBooking();
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative selection:bg-brandYellow selection:text-navy-950">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={scrollToBooking} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreFleet={handleExploreFleet}
          onOpenBooking={scrollToBooking}
        />

        {/* Quick Booking Enquiry Panel with 3 Tabs */}
        <BookingForm
          selectedVehicle={selectedVehicle}
          initialTab={formInitialTab}
        />

        {/* Core Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Fleet Section with 11 Vehicles */}
        <FleetSection onSelectVehicle={handleSelectVehicle} />

        {/* Confirmed Rental Information Guidelines */}
        <RentalInformation onContactClick={handleContactClick} />

        {/* Dedicated Doorstep Car & Bike Washing Packages Section */}
        <CarWashingSection onSelectPackage={handleSelectPackage} />

        {/* Why Choose B&D Agency */}
        <WhyChooseSection />

        {/* 4-Step Booking Process Timeline from Poster */}
        <HowBookingWorks />

        {/* Grounded About Us Partner Section */}
        <AboutSection onContactClick={handleContactClick} />

        {/* Contact Section with Directions & Phone */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar onBookClick={scrollToBooking} />
    </div>
  );
}

export default App;
