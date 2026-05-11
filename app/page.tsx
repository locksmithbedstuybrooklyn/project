import Link from 'next/link';
import { services, testimonials, locations } from '@/lib/content';
import { Phone, CheckCircle, Clock, Shield, Star, ArrowRight, MapPin, ChevronRight, Zap, Target, Award } from 'lucide-react';
import { Metadata } from 'next';
import Button from '@/components/common/Button';
import InteractiveEstimator from '@/components/pricing/InteractiveEstimator';
import MasterBadge from '@/components/common/MasterBadge';
import Image from 'next/image';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Bed-Stuy Locksmith | Emergency Services | Brooklyn',
  description: 'Fast local locksmith in Brooklyn. 20-minute emergency response. Car keys, lock replacement, and lockouts. Licensed and Insured. Call (718) 568-6597.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com' },
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* Massive Authority Hero */}
      <section className="relative bg-gray-900 text-white pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <MasterBadge variant="full" className="mb-8" />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                Brooklyn <span className="text-action-orange">Locksmith</span>
              </h1>
              <p className="text-xl md:text-3xl text-blue-100 mb-8 max-w-xl font-medium leading-tight">
                We provide <span className="text-white font-bold">reliable locksmith services</span> for your home and car in Bed-Stuy.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <a href="tel:(718)568-6597">
                  <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black px-12 py-8 rounded-2xl text-2xl shadow-2xl shadow-orange-900/40 uppercase italic">
                    <Phone className="mr-3" size={28} />
                    (718) 568-6597
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-10 opacity-60">
                <div className="flex flex-col">
                  <span className="text-3xl font-black italic">4.9/5</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Google Verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black italic">20M</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Response Goal</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black italic">LIC</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">NYC #2103442</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-trust-blue/20 blur-3xl rounded-full"></div>
              <div className="relative">
              <div className="absolute -top-12 -right-12 hidden lg:block animate-pulse">
                <div className="bg-safety-green/20 backdrop-blur-md p-4 rounded-full border border-safety-green/50">
                  <div className="text-[10px] font-black uppercase italic tracking-widest text-safety-green">Active Dispatch</div>
                </div>
              </div>
              <div className="hidden lg:block absolute -bottom-16 left-0 bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 w-64 z-20">
                <div className="flex items-center gap-3 text-safety-green mb-2"><Shield size={20} /> <span className="font-black uppercase italic tracking-wider">Licensed Techs</span></div>
                <p className="text-[10px] text-white/60 font-medium">Fully licensed and insured in New York.</p>
              </div>
              <InteractiveEstimator />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-gray-100 border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-12 justify-center text-xs font-black uppercase tracking-[0.25em] text-gray-500 italic">
          <span className="flex items-center gap-3"><Shield size={16} className="text-safety-green" /> 100% Licensed Techs</span>
          <span className="flex items-center gap-3"><Target size={16} className="text-safety-green" /> Bed-Stuy Core Unit</span>
          <span className="flex items-center gap-3"><Clock size={16} className="text-safety-green" /> 24/7 Rapid Response</span>
        </div>
      </div>

      {/* The Master Technician Philosophy */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-gray-900 rounded-[4rem] overflow-hidden relative shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
                  alt="Master Locksmith Tools"
                  fill
                  className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <p className="text-white text-3xl font-black uppercase italic leading-none mb-4">Damage-Free <span className="text-action-orange">Entry</span></p>
                  <p className="text-gray-300 font-medium italic">We pick locks. We do not destroy them. Your property remains safe.</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-action-orange rounded-[3rem] p-8 text-white flex flex-col justify-center shadow-2xl rotate-6">
                <Award size={48} className="mb-4" />
                <span className="text-xs font-black uppercase tracking-widest italic">Licensed Technician</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 uppercase italic tracking-tighter leading-none text-gray-900">
                We Protect <span className="text-trust-blue">Your Property</span>.
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Brownstone Locks', desc: 'We restore and replace old mortise locks on Bed-Stuy brownstones.' },
                  { title: 'Smart Keys', desc: 'We program transponder keys. We install smart home locks.' },
                  { title: 'Local Business', desc: 'We serve local zip codes. We care about our community.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-trust-blue group-hover:text-white transition-all">
                      <Zap size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black uppercase italic tracking-tight mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <Link href="/about">
                  <Button variant="secondary" className="border-2 border-gray-900 text-gray-900 font-black px-10 py-6 rounded-2xl uppercase italic tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - High Visibility */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase italic tracking-tighter">Our <span className="text-action-orange">Services</span></h2>
            <p className="text-xl text-blue-100/60 font-medium max-w-2xl mx-auto italic">We solve your lock problems in Brooklyn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.slice(0, 6).map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="group relative overflow-hidden bg-gray-800/50 border border-white/5 p-12 hover:bg-trust-blue transition-all duration-500">
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h4 className="text-3xl font-black mb-4 uppercase italic tracking-tight">{s.name}</h4>
                <p className="text-gray-400 group-hover:text-white/80 transition-colors mb-8 font-medium italic">
                  {s.description.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-2 text-action-orange group-hover:text-white font-black uppercase italic text-xs tracking-[0.2em] transition-colors">
                  Learn More <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Target size={120} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Authority Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase italic tracking-tighter text-gray-900 leading-none">Local <span className="text-trust-blue">Locksmith</span></h2>
              <p className="text-xl text-gray-500 font-medium italic leading-relaxed">
                We are not a national dispatch center. Our technicians are in your neighborhood.
              </p>
            </div>
            <Link href="/locations">
              <Button className="bg-gray-900 text-white font-black px-10 py-6 rounded-2xl uppercase italic tracking-widest hover:bg-action-orange transition-all">All Areas</Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link key={loc.id} href={`/locations/${loc.slug}`} className="group aspect-square bg-gray-50 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-gray-900 hover:text-white transition-all duration-500 border border-gray-100">
                <MapPin className="text-action-orange group-hover:scale-125 transition-transform" size={32} />
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2 leading-none">{loc.name}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">20-Min Arrival</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Emergency CTA */}
      <section className="py-40 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-none">Locked <span className="text-action-orange">Out?</span></h2>
          <p className="text-2xl md:text-3xl text-blue-100 mb-16 font-medium italic">
            Do not waste time. Call a local locksmith directly for fast help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 text-white font-black px-16 py-10 text-4xl rounded-[2.5rem] shadow-[0_0_50px_rgba(255,102,0,0.3)] uppercase italic tracking-tighter">
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-12 text-xs font-black uppercase tracking-[0.4em] text-gray-500 italic">
            Certified • Licensed • Insured • Bed-Stuy Local
          </p>
        </div>
      </section>
    </div>
  );
}

