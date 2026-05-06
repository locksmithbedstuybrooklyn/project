'use client';

import React, { useState } from 'react';
import { Shield, Car, Home, Building2, ChevronRight, Phone, RefreshCcw, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';
import { trackEstimatorStep, trackEvent } from '@/lib/analytics';

const CATEGORIES = [
  { id: 'automotive', name: 'Automotive', icon: Car, color: 'bg-blue-500' },
  { id: 'residential', name: 'Residential', icon: Home, color: 'bg-green-500' },
  { id: 'commercial', name: 'Commercial', icon: Building2, color: 'bg-purple-500' },
];

const PRICING_DATA: Record<string, any> = {
  automotive: [
    { id: 'car-lockout', name: 'Car Lockout', base: 75, range: '75 - 125', note: 'Price varies by vehicle security level.' },
    { id: 'key-replacement', name: 'Key Replacement', base: 120, range: '120 - 250', note: 'Includes programming for transponder keys.' },
    { id: 'ignition-repair', name: 'Ignition Repair', base: 150, range: '150 - 350', note: 'Depends on parts and labor complexity.' },
  ],
  residential: [
    { id: 'house-lockout', name: 'House Lockout', base: 65, range: '65 - 115', note: 'Includes non-destructive entry attempt.' },
    { id: 'rekey', name: 'Lock Rekeying', base: 25, range: '25 - 45', note: 'Per cylinder. High-security slightly more.' },
    { id: 'install', name: 'Lock Installation', base: 95, range: '95 - 185', note: 'Plus cost of hardware if not provided.' },
  ],
  commercial: [
    { id: 'business-lockout', name: 'Business Lockout', base: 95, range: '95 - 155', note: 'Includes commercial-grade hardware bypass.' },
    { id: 'master-key', name: 'Master Key System', base: 150, range: '150+', note: 'Varies by number of doors and complexity.' },
    { id: 'access-control', name: 'Access Control', base: 250, range: '250+', note: 'Professional installation for electronic systems.' },
  ],
};

export default function InteractiveEstimator() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<string | null>(null);
  const [service, setService] = useState<any | null>(null);

  const reset = () => {
    setStep(1);
    setCategory(null);
    setService(null);
  };

  const selectCategory = (id: string) => {
    setCategory(id);
    setStep(2);
    trackEstimatorStep(2, id);
  };

  const selectService = (item: any) => {
    setService(item);
    setStep(3);
    trackEstimatorStep(3, item);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[500px] flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-black uppercase italic tracking-tight">Price Estimator</h3>
          <p className="text-xs text-blue-300 font-bold uppercase tracking-widest mt-1">Step {step} of 3</p>
        </div>
        {step > 1 && (
          <button onClick={reset} className="flex items-center gap-2 text-xs font-black uppercase italic text-gray-400 hover:text-white transition-colors">
            <RefreshCcw size={14} /> Start Over
          </button>
        )}
      </div>

      <div className="p-8 md:p-12 flex-grow flex flex-col">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-2xl font-black text-gray-900 uppercase italic tracking-tight mb-8">What do you need help with?</h4>
            <div className="grid grid-cols-1 gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className="group flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-trust-blue hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className={`${cat.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                      <cat.icon size={24} />
                    </div>
                    <span className="text-lg font-black uppercase italic text-gray-900 tracking-tight">{cat.name}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-300 group-hover:text-trust-blue group-hover:translate-x-2 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && category && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h4 className="text-2xl font-black text-gray-900 uppercase italic tracking-tight mb-8">Select specific service:</h4>
            <div className="grid grid-cols-1 gap-4">
              {PRICING_DATA[category].map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => selectService(item)}
                  className="group flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-trust-blue hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="text-lg font-black uppercase italic text-gray-900 tracking-tight">{item.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-400 uppercase italic">From ${item.base}</span>
                    <ChevronRight size={20} className="text-gray-300 group-hover:text-trust-blue group-hover:translate-x-2 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && service && (
          <div className="space-y-10 animate-in fade-in zoom-in-95 duration-500 flex-grow flex flex-col justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-safety-green/10 text-safety-green rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-2 italic">Estimated Total</h4>
              <div className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter italic mb-4">
                <span className="text-3xl align-top mt-4 inline-block">$</span>{service.range}
              </div>
              <p className="text-gray-500 font-medium max-w-sm mx-auto mb-10 italic">
                {service.note}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:(718)568-6597" 
                className="w-full"
                onClick={() => trackEvent('phone_click', { label: 'estimator_dispatch', service: service.id })}
              >
                <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black py-6 rounded-2xl uppercase italic shadow-xl">
                  Dispatch Now
                </Button>
              </a>
              <button onClick={reset} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-black py-6 rounded-2xl uppercase italic transition-all">
                New Estimate
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
              *Final price provided on-site based on hardware condition.
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 border-t border-gray-100 p-6 flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
        <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> No Hidden Fees</span>
        <span className="flex items-center gap-2"><RefreshCcw size={12} className="text-safety-green" /> Flat Rate Options</span>
        <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-safety-green" /> 24/7 Availability</span>
      </div>
    </div>
  );
}
