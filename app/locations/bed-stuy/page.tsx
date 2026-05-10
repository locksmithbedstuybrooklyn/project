import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, MapPin, Star, Building2, Car, Home, Zap, Award } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locksmith Bed-Stuy | Local Experts in Bedford-Stuyvesant | (718) 568-6597',
  description: 'Your truly local locksmith in Bed-Stuy, Brooklyn. Specialized in historic brownstone security, 24/7 emergency lockouts, and car key replacement. 20-min response.',
};

export default function BedStuyLocationPage() {
  const serviceHighlights = [
    {
      title: "Historic Brownstones",
      desc: "Specialized care for mortise locks and period-appropriate hardware in Bed-Stuy's iconic homes.",
      icon: <Home className="text-blue-400" size={32} />
    },
    {
      title: "Local Businesses",
      desc: "Securing storefronts and commercial centers across Nostrand, Fulton, and Marcy Avenues.",
      icon: <Building2 className="text-blue-400" size={32} />
    },
    {
      title: "20-Min Response",
      desc: "Our units are always within the neighborhood, ensuring the fastest emergency arrival times.",
      icon: <Clock className="text-blue-400" size={32} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#050a18]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-locksmith.webp" 
            alt="Locksmith Bed-Stuy Brooklyn Brownstone Service"
            fill
            className="object-cover object-top opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a18] via-[#050a18]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <MapPin className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-bold tracking-widest uppercase">Your Dedicated Neighborhood Locksmith</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              LOCKSMITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                BED-STUY
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Deeply rooted in Bedford-Stuyvesant. We are your neighbors, securing historic brownstones and local businesses with 24/7 expert care.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:(718)568-6597" className="group">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-20 px-12 text-2xl font-black shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
                  <Phone className="mr-3 group-hover:animate-shake" size={28} />
                  (718) 568-6597
                </Button>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-10 border-t border-white/10 pt-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Shield className="text-blue-400" size={20} />
                </div>
                <span className="text-white/80 font-bold text-sm tracking-wide">NYC LIC #2103442</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Clock className="text-blue-400" size={20} />
                </div>
                <span className="text-white/80 font-bold text-sm tracking-wide">20-MIN ARRIVAL</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Star className="text-blue-400" size={20} />
                </div>
                <span className="text-white/80 font-bold text-sm tracking-wide">LOCAL EXPERTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Heritage Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase italic tracking-tighter">
                Why Choose a <span className="text-blue-600">Truly Local</span> Bed-Stuy Expert?
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Locksmith Bed Stuy is more than a service provider; we are a dedicated member of the community. Our intimate knowledge of the neighborhood—from its iconic historic brownstones to its bustling commercial corridors—allows us to provide security solutions perfectly tailored to the area.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  {serviceHighlights.map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-tight italic">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-slate-900/5 rounded-[3rem] -rotate-2"></div>
              <Card className="relative z-10 p-10 md:p-12 border-slate-100 shadow-2xl bg-white rounded-[2.5rem]">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Fast Local Help</h3>
                <p className="text-slate-500 text-center mb-8">We're in the neighborhood. Get a quote or call now.</p>
                <QuoteForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Comprehensive Security</h2>
            <p className="text-slate-500 text-lg">Every lock, every key, every situation in Bed-Stuy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-10 bg-white border-slate-100 hover:border-blue-500 transition-all group rounded-[2rem]">
              <Home className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">Residential</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Historic Mortise Lock Repair</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Smart Lock Installation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Fast House Lockouts</span>
                </li>
              </ul>
              <Link href="/services/lock-installation" className="mt-8 flex items-center text-blue-600 font-bold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </Card>

            <Card className="p-10 bg-white border-slate-100 hover:border-blue-500 transition-all group rounded-[2rem]">
              <Building2 className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">Commercial</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Storefront Lock Services</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Access Control Systems</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Master Key Systems</span>
                </li>
              </ul>
              <Link href="/services/lock-installation" className="mt-8 flex items-center text-blue-600 font-bold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </Card>

            <Card className="p-10 bg-white border-slate-100 hover:border-blue-500 transition-all group rounded-[2rem]">
              <Car className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">Automotive</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Car Key Replacement</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Ignition Repair & Replace</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span>Mobile Unlock Service</span>
                </li>
              </ul>
              <Link href="/services/automotive-locksmith" className="mt-8 flex items-center text-blue-600 font-bold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Focus */}
      <section className="py-24 bg-[#0a1128] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-blue-400" size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
                Emergency in <br />
                <span className="text-blue-500">Bed-Stuy?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                Lock emergencies don't wait for business hours. Whether it's a late-night house lockout or an urgent car key issue on Fulton Street, our 24/7 team is already in the neighborhood.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "20-Minute Guaranteed Arrival Window",
                  "Licensed, Insured & Local Technicians",
                  "Upfront, Transparent Pricing Always",
                  "Damage-Free Entry Specialists"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="text-blue-500" size={24} />
                    <span className="text-lg font-bold italic uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 h-20 px-12 text-2xl font-black">
                  CALL (718) 568-6597
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden border border-white/10">
                <Image 
                  src="/images/emergency-locksmith.webp" 
                  alt="24/7 Emergency Locksmith Bed-Stuy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-3xl shadow-2xl rotate-3">
                <p className="text-white font-black text-4xl uppercase italic leading-none">24/7<br /><span className="text-lg">RESPONSE</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="text-blue-600 mx-auto mb-8" size={64} />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">Our Commitment to Bed-Stuy</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
            Locksmith Bed Stuy is more than a business; we are a dedicated member of the community. We are committed to providing honest, transparent, and high-quality service to our neighbors. Our licensed and insured technicians are not just experts; they are familiar faces who care about your safety.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Stuyvesant Ave', 'Myrtle Ave', 'Nostrand Ave', 'Fulton St', 'Halsey St', 'Marcy Ave', 'Tompkins Ave', 'Hancock St'].map((street, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-500 uppercase italic text-sm">
                {street}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase italic">Ready to Secure Your Home?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Contact your local Bed-Stuy experts today for a security audit, lock replacement, or emergency help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-2xl font-black shadow-2xl">
                (718) 568-6597
              </Button>
            </a>
            <Link href="/booking">
              <Button variant="secondary" size="large" className="bg-transparent text-white border-white/30 hover:bg-white/10 h-20 px-12 text-2xl font-black">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
