'use client';

import { useState } from 'react';
import Step1ServiceSelection from './steps/Step1ServiceSelection';
import Step2SubServiceSelection from './steps/Step2SubServiceSelection';
import Step3DateTimeSelection from './steps/Step3DateTimeSelection';
import Step4ContactInfo from './steps/Step4ContactInfo';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export type BookingData = {
  service: string;
  subService: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
};

const INITIAL_DATA: BookingData = {
  service: '',
  subService: '',
  date: '',
  time: '',
  name: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
};

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFields = (fields: Partial<BookingData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const next = () => {
    setCurrentStep((i) => (i >= 4 ? i : i + 1));
  };

  const back = () => {
    setCurrentStep((i) => (i <= 1 ? i : i - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== 4) return next();

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please call us at (718) 568-6597.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Network error. Please call us at (718) 568-6597.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-safety-green/10 text-safety-green rounded-full mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Thank you, <span className="font-bold">{formData.name}</span>. Your request for <span className="font-bold">{formData.service}</span> has been received. We will arrive on <span className="font-bold">{formData.date}</span> at <span className="font-bold">{formData.time}</span>.
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto border border-gray-200">
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">Summary</h3>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Service:</span> <span className="font-bold">{formData.service}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Arrival:</span> <span className="font-bold">20-30 Minutes</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Confirmation:</span> <span className="font-bold">Sent to Email</span></div>
            </div>
        </div>
        <Link href="/">
          <button className="bg-trust-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-all">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${
                currentStep >= step
                  ? 'bg-trust-blue text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-trust-blue transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8 md:p-12 min-h-[500px] flex flex-col">
        <div className="flex-grow">
          {currentStep === 1 && (
            <Step1ServiceSelection
              selectedService={formData.service}
              onSelect={(service) => {
                updateFields({ service });
                next();
              }}
            />
          )}
          {currentStep === 2 && (
            <Step2SubServiceSelection
              parentService={formData.service}
              selectedSubService={formData.subService}
              onSelect={(subService) => {
                updateFields({ subService });
                next();
              }}
              onBack={back}
            />
          )}
          {currentStep === 3 && (
            <Step3DateTimeSelection
              date={formData.date}
              time={formData.time}
              updateFields={updateFields}
              onBack={back}
              onNext={next}
            />
          )}
          {currentStep === 4 && (
            <Step4ContactInfo
              data={formData}
              updateFields={updateFields}
              onBack={back}
              isSubmitting={isSubmitting}
            />
          )}
        </div>

        {/* Manual Navigation for steps that aren't auto-advancing */}
        {(currentStep === 3 || currentStep === 4) && (
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
                <button
                    type="button"
                    onClick={back}
                    className="flex items-center gap-2 text-gray-500 font-bold hover:text-trust-blue transition-colors"
                >
                    <ChevronLeft size={20} /> Back
                </button>
                {currentStep === 3 && (
                    <button
                        type="button"
                        onClick={next}
                        disabled={!formData.date || !formData.time}
                        className="bg-trust-blue text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        Continue <ChevronRight size={20} />
                    </button>
                )}
                {currentStep === 4 && (
                    <button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.phone || !formData.email}
                        className="bg-action-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-900/20"
                    >
                        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </button>
                )}
            </div>
        )}
      </form>
    </div>
  );
}
