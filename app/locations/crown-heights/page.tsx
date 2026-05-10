import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, MapPin, Star, Building2, Car, Home, Zap, Award, History } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locksmith Crown Heights | Trusted Security Experts | (718) 568-6597',
  description: 'Fast, reliable locksmith services in Crown Heights, Brooklyn. Specialized in historic brownstones, pre-war apartments, and 24/7 emergency help. 20-min response.',
};

export default function CrownHeightsLocationPage() {
  const serviceHighlights = [
    {
      title: "Historic Brownstones",
      desc: "Specialized care for high-security mortise locks in Crown Heights' iconic pre-war architecture.",
      icon: <History className="text-blue-400" size={32} />
    },
    {
      title: "Modern Developments",
      desc: "Smart lock and electronic access solutions for Crown Heights' newest residential complexes.",
      icon: <Building2 className="text-blue-400" size={32} />
    },
    {
      title: "Fast Local Response",
      desc: "Strategically stationed units near Eastern Parkway ensure a 20-minute arrival window.",
      icon: <Zap className="text-blue-400" size={32} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#0a0f1d]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-locksmith.webp" 
            alt="Locksmith Crown Heights Brooklyn Service"
            fill
            className="object-cover object-top opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <MapPin className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-black tracking-widest uppercase italic">Crown Heights Dedicated Security</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              LOCKSMITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 underline decoration-blue-500/30">
                CROWN HEIGHTS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium italic uppercase tracking-tight">
              Securing Eastern Parkway's finest homes. From historic brownstones to modern apartments, we provide 24/7 expert locksmith care.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:(718)568-6597" className="group">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-20 px-12 text-2xl font-black shadow-[0_0_40px_rgba(37,99,235,0.3)] border-0 uppercase italic">
                  <Phone className="mr-3" size={28} />
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md w-full sm:w-auto h-20 px-12 text-2xl font-black uppercase italic tracking-tighter">
                  Request Quote
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-10 border-t border-white/10 pt-10">
              <div className="flex items-center gap-3">
                <Shield className="text-blue-500" size={24} />
                <span className="text-slate-400 font-bold uppercase italic tracking-widest text-sm text-white/70">NYC LIC #2103442</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-blue-500" size={24} />
                <span className="text-slate-400 font-bold uppercase italic tracking-widest text-sm text-white/70">20-MIN ARRIVAL</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-blue-500" size={24} />
                <span className="text-slate-400 font-bold uppercase italic tracking-widest text-sm text-white/70">LOCAL EXPERTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8 border border-blue-100">
                <History className="text-blue-600" size={20} />
                <span className="text-blue-700 text-sm font-black uppercase italic tracking-widest">A Legacy of Security</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] uppercase italic tracking-tighter">
                Securing <br /> <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-8">Crown Heights</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium italic">
                Crown Heights is defined by its architectural heritage and vibrant community. Our technicians are well-acquainted with the common lock types found here, from pre-war mortise systems to the latest biometric entries in luxury developments.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                {serviceHighlights.map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-blue-500 transition-all">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tight italic text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                  <Shield size={200} className="text-blue-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-10 italic uppercase tracking-tighter underline decoration-blue-600 decoration-4 underline-offset-8">Fast Crown Heights Quote</h3>
                  <QuoteForm />
                  <div className="mt-10 pt-10 border-t border-slate-100 text-center">
                    <p className="text-slate-400 font-bold uppercase italic text-xs tracking-widest mb-4">Immediate Dispatch</p>
                    <a href="tel:(718)568-6597" className="text-blue-600 font-black text-3xl hover:underline italic">
                      (718) 568-6597
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <History size={500} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 italic tracking-tighter uppercase underline decoration-blue-600 underline-offset-8">Full-Scale Security Solutions</h2>
            <p className="text-slate-400 text-lg italic font-medium uppercase tracking-widest">Reliable care for Crown Heights residents and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Residential",
                icon: <Home className="text-blue-500" size={48} />,
                items: ["Historic Lock Restoration", "High-Security Deadbolts", "Apartment Lockouts", "Master Key Systems"],
                link: "/services/residential-lockout"
              },
              {
                title: "Commercial",
                icon: <Building2 className="text-blue-500" size={48} />,
                items: ["Access Control Setup", "Commercial Panic Bars", "Storefront Rekeying", "Safe Opening & Repair"],
                link: "/services/lock-installation"
              },
              {
                title: "Automotive",
                icon: <Car className="text-blue-500" size={48} />,
                items: ["Mobile Car Key Cutting", "Transponder Key Sync", "Ignition Cylinder Repair", "24/7 Vehicle Unlocks"],
                link: "/services/automotive-locksmith"
              }
            ].map((cat, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
                <div className="mb-8 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter text-blue-500">{cat.title}</h3>
                <ul className="space-y-4 mb-10">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-center text-slate-300 font-bold italic uppercase tracking-tight text-sm">
                      <CheckCircle className="text-blue-600" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={cat.link} className="flex items-center text-blue-500 font-black uppercase italic tracking-widest text-sm hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden border border-white/5 shadow-2xl shadow-blue-600/20">
            <div className="absolute top-0 right-0 p-24 opacity-10 rotate-12 scale-150">
              <Zap size={300} />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-tight">Emergency in <br /> <span className="text-slate-900 underline decoration-slate-900/30">Crown Heights?</span></h2>
              <p className="text-blue-100 text-2xl mb-12 font-medium italic leading-relaxed uppercase tracking-tight">
                Whether you're on Eastern Parkway or Franklin Ave, our emergency units are never more than 20 minutes away.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:(718)568-6597">
                  <Button size="large" className="bg-slate-900 text-white hover:bg-black h-20 px-12 text-3xl font-black uppercase italic border-0 shadow-xl">
                    (718) 568-6597
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Landmarks */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="text-blue-600 mx-auto mb-8" size={64} />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">Serving the Heights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 italic font-medium">
            From the Brooklyn Museum to the corners of Utica Ave, we are the local choice for reliable, expert security.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Eastern Parkway', 'Franklin Ave', 'Nostrand Ave', 'Utica Ave', 'Kingston Ave', 'Empire Blvd', 'Rogers Ave', 'Bedford Ave', 'Schenectady Ave', 'Washington Ave'].map((street, i) => (
              <div key={i} className="p-6 bg-white rounded-[2rem] border border-slate-200 font-black text-slate-400 uppercase italic text-xs tracking-widest shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all cursor-default">
                {street}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">Reliable. <br /> Local. Professional.</h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium italic uppercase tracking-widest">
            Licensed New York Locksmiths. NYC #2103442.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-blue-600 hover:bg-blue-700 h-20 px-12 text-3xl font-black uppercase italic border-0 shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                <Phone className="mr-3" size={36} />
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-10 text-slate-500 font-bold italic uppercase tracking-widest text-sm">24/7 Availability • 20-Min Arrival • NYC #2103442</p>
        </div>
      </section>
    </div>
  );
}
