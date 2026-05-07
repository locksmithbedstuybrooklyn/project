import BookingForm from '@/components/booking/BookingForm';
import { Shield, Clock, CheckCircle, Zap, Target, Award, Phone } from 'lucide-react';
import Button from '@/components/common/Button';

export const metadata = {
  title: 'Book a Locksmith | 20-Min Arrival | Bed-Stuy Brooklyn',
  description: 'Instant online booking for emergency locksmith services. 20-minute arrival in Bed-Stuy. Professional car, home, and commercial support available 24/7.',
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Authority Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 text-sm font-black mb-8 border border-blue-400/30 uppercase italic tracking-widest">
            <Zap size={16} className="text-action-orange" />
            <span>Priority Dispatch Active</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Secure Your <span className="text-action-orange">Arrival</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium italic leading-tight">
            Schedule a professional technician in <span className="text-white font-bold underline decoration-action-orange underline-offset-8">under 60 seconds</span>. Instant confirmation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Conversion Sidebar */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-trust-blue/5 rounded-bl-full"></div>
                <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tight leading-none text-gray-900">Why Book <span className="text-trust-blue">Online?</span></h3>
                <div className="space-y-8">
                  {[
                    { icon: <Clock className="text-action-orange" />, title: '20-Min Arrival', desc: 'Our technicians are pre-dispatched the moment you confirm.' },
                    { icon: <Shield className="text-safety-green" />, title: 'Fixed Rates', desc: 'Online bookings lock in current technical labor rates.' },
                    { icon: <Award className="text-trust-blue" />, title: 'Certified Techs', desc: 'All online requests are handled by Master Technicians.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black uppercase italic tracking-tight text-gray-900 leading-none mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-medium italic leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-950 text-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
                 <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight text-action-orange">Emergency?</h3>
                    <p className="text-blue-100 font-medium italic mb-10 leading-relaxed">
                      If you are in immediate danger or locked out in the cold, skip the form and call our emergency line.
                    </p>
                    <a href="tel:(718)568-6597">
                       <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black py-6 rounded-2xl text-2xl uppercase italic tracking-tighter shadow-xl">
                          (718) 568-6597
                       </Button>
                    </a>
                 </div>
              </div>
            </div>

            {/* Booking Form Area */}
            <div className="lg:col-span-8 order-1 lg:order-2 relative">
               <div className="absolute -inset-4 bg-trust-blue rounded-[3rem] blur-3xl opacity-5"></div>
               <div className="relative z-10 bg-white rounded-[3rem] shadow-3xl border border-gray-100 p-8 md:p-16">
                  <BookingForm />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-3">
                 <Shield size={32} />
                 <span className="text-sm font-black uppercase italic tracking-widest">Licensed NYC</span>
              </div>
              <div className="flex items-center gap-3">
                 <Clock size={32} />
                 <span className="text-sm font-black uppercase italic tracking-widest">24/7 Response</span>
              </div>
              <div className="flex items-center gap-3">
                 <Target size={32} />
                 <span className="text-sm font-black uppercase italic tracking-widest">Fixed Pricing</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

