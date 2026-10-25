import React from 'react';
import { Car, Send, MessageSquareCheck, CheckCircle2 } from 'lucide-react';

export const HowBookingWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Car,
      title: 'Choose a Service',
      description: 'Select your preferred rental car from our fleet or choose doorstep car washing.',
    },
    {
      number: '02',
      icon: Send,
      title: 'Send an Enquiry',
      description: 'Provide your travel dates and requirements through our quick form or directly on WhatsApp.',
    },
    {
      number: '03',
      icon: MessageSquareCheck,
      title: 'Confirm Details',
      description: 'Discuss current availability, pricing, and applicable terms with the B&D team.',
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Get Confirmation',
      description: 'Receive your confirmed vehicle reservation or doorstep washing schedule.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandYellow/10 border border-brandYellow/30 text-brandYellow text-xs font-bold tracking-widest uppercase mb-3">
            <span>Seamless Process</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            How Booking <span className="text-brandYellow">Works</span>
          </h2>
          <p className="text-base text-slate-300">
            A fast, direct, and straightforward 4-step process to get on the road or schedule a doorstep car wash.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-brandYellow/10 via-brandYellow/40 to-brandYellow/10 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-navy-900/60 border border-white/10 hover:border-brandYellow/40 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="w-14 h-14 rounded-2xl bg-navy-950 border-2 border-brandYellow/50 text-brandYellow flex items-center justify-center font-heading font-black text-lg mb-5 shadow-glow-yellow/20 group-hover:bg-brandYellow group-hover:text-navy-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-xs uppercase font-bold tracking-widest text-brandYellow mb-2">
                  Step {step.number}
                </div>

                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wide mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
