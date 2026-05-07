import Link from 'next/link';
import { locations } from '@/lib/content';
import { MapPin, Phone, ArrowRight, Clock, Shield, Target, Navigation, CheckCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Locksmith Service Areas | Bed-Stuy & Brooklyn | 20-Min Response',
  description: 'Local locksmith service areas: Bed-Stuy, Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick. 24/7 emergency response. Call (718) 568-6597.',
};

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Authority Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 text-sm font-black mb-8 border border-blue-400/30 uppercase italic tracking-widest">
            <Navigation size={16} className="text-action-orange" />
            <span>Brooklyn Core Network</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Service <span className="text-action-orange">Areas</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium italic leading-tight">
            We operate a tight, fast-response network across <span className="text-white font-bold underline decoration-action-orange underline-offset-8">Brooklyn's core neighborhoods</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 text-white font-black px-12 py-8 rounded-2xl text-2xl shadow-2xl uppercase italic w-full sm:w-auto">
                <Phone className="mr-3" size={28} />
                (718) 568-6597
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase italic tracking-tighter text-gray-900 leading-none">
                Hyper-Local <br />
                <span className="text-trust-blue">Response Units</span>.
              </h2>
              <div className="space-y-8 text-xl text-gray-600 font-medium italic leading-relaxed">
                <p>
                  Being "Local" isn't a marketing slogan for us; it's a structural requirement. We only serve neighborhoods where we can guarantee a <span className="text-gray-900 font-black">20-minute arrival window</span>.
                </p>
                <p>
                  Our technicians live and work in Bed-Stuy, Bushwick, and Williamsburg. We know the building types, the lock systems common to historic brownstones, and the fastest routes when every minute counts.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6">
                 <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                    <Target className="text-action-orange mb-4" size={40} />
                    <span className="font-black uppercase italic text-sm tracking-widest text-gray-900">Bed-Stuy Core</span>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                    <Clock className="text-trust-blue mb-4" size={40} />
                    <span className="font-black uppercase italic text-sm tracking-widest text-gray-900">20m Target</span>
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-900 rounded-[4rem] overflow-hidden relative shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80" 
                   alt="Brooklyn Service Area" 
                   fill 
                   className="object-cover opacity-50 grayscale"
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/30 to-transparent"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 text-center max-w-xs">
                       <MapPin className="text-action-orange mx-auto mb-4" size={64} />
                       <p className="text-white font-black uppercase italic text-2xl tracking-tighter">5-Mile Precision Radius</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Grid */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter text-gray-900">Neighborhood <span className="text-action-orange">Hubs</span></h2>
            <p className="text-xl text-gray-500 font-medium italic">Select your neighborhood for local dispatcher details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {locations.map((location) => (
              <Link key={location.id} href={`/locations/${location.slug}`} className="group">
                <Card hover className="h-full border-gray-200 shadow-sm group-hover:shadow-2xl transition-all duration-500 p-12 bg-white rounded-[3rem] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 group-hover:bg-trust-blue transition-colors rounded-bl-full -mr-8 -mt-8 opacity-20"></div>
                  <MapPin className="text-trust-blue mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={48} />
                  <h2 className="text-3xl font-black mb-4 text-gray-900 group-hover:text-trust-blue transition-colors uppercase tracking-tight italic leading-none">{location.name}</h2>
                  <p className="text-gray-500 mb-10 leading-relaxed font-medium italic text-lg">
                    {location.description}
                  </p>
                  <div className="flex items-center text-action-orange font-black gap-2 group-hover:gap-4 transition-all uppercase text-xs tracking-widest italic">
                    <span>Neighborhood Guide</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Zip Code Breakdown */}
          <div className="bg-gray-900 text-white p-12 md:p-20 rounded-[4rem] shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
             <h3 className="text-3xl md:text-4xl font-black mb-16 text-center uppercase italic tracking-tighter">Primary <span className="text-action-orange">Coverage</span> Codes</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10">
                {[
                  { name: 'Bed-Stuy', zips: '11221, 11213, 11216, 11233' },
                  { name: 'Crown Heights', zips: '11213, 11216, 11225' },
                  { name: 'Prospect Heights', zips: '11217, 11238' },
                  { name: 'Williamsburg', zips: '11211, 11249, 11206' },
                  { name: 'Greenpoint', zips: '11222' },
                  { name: 'Bushwick', zips: '11206, 11237, 11221' },
                  { name: 'Stuy Heights', zips: '11233, 11213' },
                  { name: 'Ocean Hill', zips: '11233' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 border-l-2 border-white/10 pl-6 hover:border-action-orange transition-colors group">
                    <span className="font-black uppercase italic text-xl group-hover:text-action-orange transition-colors">{item.name}</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">{item.zips}</span>
                  </div>
                ))}
             </div>
             <div className="mt-20 pt-12 border-t border-white/10 text-center">
                <p className="text-blue-100/60 font-black uppercase italic tracking-widest text-sm mb-10 flex items-center justify-center gap-3">
                   <Shield className="text-safety-green" size={20} />
                   Fully Licensed Across All Jurisdictions
                </p>
                <a href="tel:(718)568-6597">
                  <Button className="bg-white text-gray-900 hover:bg-action-orange hover:text-white font-black px-16 py-8 rounded-[2rem] text-3xl shadow-xl transition-all uppercase italic tracking-tighter">
                    (718) 568-6597
                  </Button>
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Out of Area CTA */}
      <section className="py-40 bg-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase italic leading-none text-gray-900">Out of <span className="text-trust-blue">Area?</span></h2>
          <p className="text-2xl text-gray-500 mb-16 font-medium italic max-w-2xl mx-auto">
            If you are within 5 miles of Bed-Stuy, we can likely reach you. Call to confirm technician availability.
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale">
             <div className="flex flex-col items-center">
                <CheckCircle size={48} className="mb-4" />
                <span className="font-black uppercase italic tracking-widest text-xs text-gray-900">Certified</span>
             </div>
             <div className="flex flex-col items-center">
                <Shield size={48} className="mb-4" />
                <span className="font-black uppercase italic tracking-widest text-xs text-gray-900">Insured</span>
             </div>
             <div className="flex flex-col items-center">
                <Target size={48} className="mb-4" />
                <span className="font-black uppercase italic tracking-widest text-xs text-gray-900">Local</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}


