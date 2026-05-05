'use client';

import { useState } from 'react';

const SERVICES = [
  { value: 'car-lockout', label: 'Car Lockout', range: '$65 – $125' },
  { value: 'car-key-replacement', label: 'Car Key Replacement', range: '$85 – $250' },
  { value: 'ignition-repair', label: 'Ignition Repair / Replacement', range: '$95 – $350' },
  { value: 'residential-lockout', label: 'Residential Lockout', range: '$55 – $95' },
  { value: 'lock-replacement', label: 'Lock Replacement', range: '$75 – $175' },
  { value: 'lock-repair', label: 'Lock Repair', range: '$55 – $125' },
  { value: 'lock-installation', label: 'Lock Installation', range: '$85 – $200' },
];

export default function PriceEstimatorPage() {
  const [selectedService, setSelectedService] = useState('');
  const [estimate, setEstimate] = useState('');

  const handleSelect = (value: string) => {
    setSelectedService(value);
    const found = SERVICES.find((s) => s.value === value);
    setEstimate(found ? found.range : '');
  };

  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Price Estimator</h1>
          <p className="text-xl text-blue-100">Transparent pricing. No hidden fees. No emergency surcharges.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Estimator tool */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get an Instant Estimate</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Select Service Type</label>
                  <select
                    value={selectedService}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none focus:ring-2 focus:ring-trust-blue/20 text-gray-800"
                  >
                    <option value="">Choose a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                {estimate && (
                  <div className="bg-safety-green/10 border border-safety-green/30 rounded-xl p-6 text-center">
                    <p className="text-sm text-gray-600 mb-1">Estimated Price Range</p>
                    <p className="text-4xl font-bold text-safety-green">{estimate}</p>
                    <p className="text-xs text-gray-500 mt-2">Final price confirmed on-site. No hidden fees.</p>
                  </div>
                )}

                <div className="border-t pt-6">
                  <p className="text-sm text-gray-600 mb-4">For an exact quote, call us or fill out the form:</p>
                  <a
                    href="tel:(718)568-6597"
                    className="block w-full text-center bg-action-orange text-white font-bold px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition-colors"
                  >
                    📞 Call (718) 568-6597
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing table */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Price Ranges at a Glance</h2>
              <div className="space-y-3">
                {SERVICES.map((s) => (
                  <div
                    key={s.value}
                    className={`flex justify-between items-center p-4 rounded-lg border transition-all cursor-pointer ${
                      selectedService === s.value
                        ? 'border-trust-blue bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => handleSelect(s.value)}
                  >
                    <span className="font-medium text-gray-800">{s.label}</span>
                    <span className="text-trust-blue font-bold text-sm">{s.range}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-6 space-y-3">
                <h3 className="font-bold text-gray-900">Why Our Pricing is Fair</h3>
                {[
                  'No hidden fees — ever',
                  'No emergency or after-hours surcharges',
                  'Free estimates before we start',
                  'Payment due on completion only',
                  'We accept cash, credit & debit cards',
                ].map((item) => (
                  <p key={item} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="text-safety-green font-bold">✓</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
