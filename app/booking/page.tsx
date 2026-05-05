import BookingForm from '@/components/booking/BookingForm';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Book a Locksmith Now | 20-Minute Arrival | Bed-Stuy',
  description: 'Schedule your locksmith service online. Fast 20-minute response in Bed-Stuy. Car, home, and commercial locksmith services available 24/7.',
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Book Your Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick 4-step booking process. Our technician will arrive within 20 minutes of your scheduled time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Trust Features Sidebar */}
          <div className="lg:col-span-3 space-y-6 hidden lg:block">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center text-trust-blue mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-sm text-gray-500">20-minute average arrival time across Bed-Stuy and surrounding areas.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center text-safety-green mb-4">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-gray-500">Transparent pricing with no emergency surcharges during regular hours.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center text-action-orange mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fully Licensed</h3>
              <p className="text-sm text-gray-500">All our technicians are licensed, insured, and background-checked.</p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-9">
            <BookingForm />
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center bg-trust-blue rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/40">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need immediate help?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                If this is an urgent emergency, skip the form and call us directly for the fastest response.
              </p>
              <a href="tel:(718)568-6597">
                <button className="bg-action-orange hover:bg-orange-600 text-white font-extrabold text-2xl px-12 py-6 rounded-2xl transition-all shadow-xl shadow-orange-950/20">
                  Call (718) 568-6597
                </button>
              </a>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
