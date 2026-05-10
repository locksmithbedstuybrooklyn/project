import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Zap, AlertTriangle, Car, Home, Building2, MapPin, Star, Award, Wrench, Siren, Lock, Key, DollarSign } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24-Hour Emergency Locksmith Bed-Stuy | 20-Min Arrival | (718) 568-6597',
  description: 'Locked out? Need urgent repairs? Bed-Stuy\'s most reliable 24/7 emergency locksmith. Licensed NYC #2103442. 20-minute rapid response. Damage-free entry.',
};

export default function EmergencyLocksmithPage() {
  const faqs = [
    { q: "Is your 24/7 service truly available on holidays?", a: "Yes. We operate 365 days a year, including all public holidays and weekends. We are one of the few true 24-hour emergency locksmiths in Brooklyn that consistently answer the phone at 4 AM." },
    { q: "How fast can you really arrive in Bed-Stuy?", a: "Our target response time for emergencies within Bed-Stuy and immediate core areas is 20 minutes. We have mobile units on patrol across Brooklyn to ensure the fastest possible dispatch." },
    { q: "Will you damage my door or lock to get me inside?", a: "Our priority is non-destructive entry. Our licensed technicians use advanced picking and bumping tools to resolve lockouts without causing unnecessary damage to your property or vehicle." },
    { q: "Do you offer emergency car key replacement on-site?", a: "Absolutely. Our mobile units are equipped with advanced cutting and programming equipment to create new car keys, including transponder keys and fobs, at your location." },
    { q: "What information should I have ready when I call?", a: "Please provide your exact address (or nearest intersection), the type of lock or vehicle you're dealing with, and the nature of the emergency for priority dispatch." }
  ];

  const emergencyServices = [
    { 
      title: "Emergency Lockouts", 
      icon: <Lock className="text-red-500" size={32} />, 
      desc: "Damage-free entry to homes, apartments, and businesses when you're locked out, day or night."
    },
    { 
      title: "Car Lockout Service", 
      icon: <Car className="text-blue-500" size={32} />, 
      desc: "Fast unlocking of any vehicle make or model, including trunk unlocks and key extractions."
    },
    { 
      title: "Broken Key Extraction", 
      icon: <Key className="text-orange-500" size={32} />, 
      desc: "Safe removal of broken key fragments from locks or ignitions without causing further damage."
    },
    { 
      title: "Post-Break-in Security", 
      icon: <Shield className="text-emerald-500" size={32} />, 
      desc: "Immediate lock changes, repairs, and security upgrades to re-secure your property after an incident."
    },
    { 
      title: "Urgent Lock Repair", 
      icon: <Wrench className="text-purple-500" size={32} />, 
      desc: "Fixing jammed or malfunctioning locks immediately to restore your home or business security."
    },
    { 
      title: "Car Key Replacement", 
      icon: <Zap className="text-yellow-500" size={32} />, 
      desc: "On-the-spot cutting and programming of new car keys and fobs, even if you've lost all copies."
    }
  ];

  const protocol = [
    { title: "Initial Contact", desc: "Call (718) 568-6597. We gather your location and emergency details." },
    { title: "Immediate Dispatch", desc: "The closest available licensed locksmith is pinged for priority arrival." },
    { title: "Assessment", desc: "Quick diagnosis of the issue and provision of an upfront, honest estimate." },
    { title: "Efficient Resolution", desc: "Professional resolution using damage-free tools and expert techniques." },
    { title: "Security Advice", desc: "Expert tips on preventing future incidents and enhancing overall security." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <NextImage 
            src="/images/emergency-locksmith.webp" 
            alt="24/7 Emergency Locksmith Bed-Stuy"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-md px-5 py-2 rounded-full border border-red-500/30 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 text-sm font-black tracking-widest uppercase italic">24/7 Emergency Response Units</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              Locked Out? <br />
              <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">20-Min Arrival.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Emergencies don't wait. Neither do we. Bed-Stuy's most reliable 24/7 locksmith is on standby to get you back inside and secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto h-20 px-12 text-2xl font-black shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                  <Phone className="mr-3" size={28} />
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md w-full sm:w-auto h-20 px-12 text-2xl font-black italic uppercase">
                  Request Help
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <Shield className="text-red-500" size={24} />
                <span className="text-slate-400 font-bold uppercase tracking-tight">Licensed NYC #2103442</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" size={24} />
                <span className="text-slate-400 font-bold uppercase tracking-tight">On Patrol in Bed-Stuy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Assistance Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-8">
                <Siren className="text-red-600" size={20} />
                <span className="text-red-700 text-sm font-black uppercase italic">Critical Response Team</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] uppercase italic tracking-tighter">
                Immediate Help <br /> <span className="text-red-600">Day or Night.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Lock emergencies rarely happen at a convenient time. Whether it's a late-night lockout, a broken key in the ignition, or an urgent need to secure your property after a break-in, these situations demand immediate attention.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  "Always Available: 24/7/365 Service",
                  "Rapid Response: 20-Minute Arrival Goal",
                  "Licensed Technicians (NYC #2103442)",
                  "Damage-Free, Non-Destructive Solutions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle className="text-red-600" size={24} />
                    <span className="font-bold text-slate-800 italic uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold uppercase italic border-0">Call Dispatch Now</Button>
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-slate-900 text-white rounded-[3rem] p-12 md:p-16 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
                  <Siren size={200} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-10 italic uppercase tracking-tighter underline decoration-red-600 decoration-4 underline-offset-8">Dispatch Request</h3>
                  <QuoteForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic">Emergency Solutions</h2>
            <p className="text-slate-400 text-lg font-medium italic">Comprehensive assistance for every urgent scenario.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-12 hover:bg-white/10 transition-all group rounded-[2.5rem]">
                <div className="mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase underline decoration-red-600 underline-offset-8">Our Rapid Protocol</h2>
            <p className="text-slate-500 text-lg italic">How we get you safe and secure in record time.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {protocol.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="font-black text-2xl italic">0{i + 1}</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase italic tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Surcharge Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
            <div className="p-12 md:p-24 lg:w-3/5 text-white relative">
              <div className="absolute top-0 left-0 p-12 opacity-5">
                <DollarSign size={200} />
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-10 italic uppercase tracking-tighter leading-tight">Transparent <br /><span className="text-red-600">Emergency</span> Rates</h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                To maintain true 24/7/365 readiness across Brooklyn, we apply modest surcharges for after-hours and holiday service. No hidden fees.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-300 font-bold uppercase italic tracking-widest text-sm">Mon-Fri (9AM-6PM)</span>
                    <span className="font-black text-red-500 italic uppercase">Base Rates</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-300 font-bold uppercase italic tracking-widest text-sm">After Hours (6PM-9AM)</span>
                    <span className="font-black text-white italic">+$25 - $50</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-300 font-bold uppercase italic tracking-widest text-sm">Weekends</span>
                    <span className="font-black text-white italic">+$25 - $50</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-300 font-bold uppercase italic tracking-widest text-sm">Public Holidays</span>
                    <span className="font-black text-white italic">+$50 - $100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 relative bg-red-600 p-12 md:p-24 flex flex-col justify-center items-center text-center">
              <Clock size={100} className="text-white/20 absolute -top-10 -right-10" />
              <h3 className="text-5xl font-black text-white mb-8 italic uppercase tracking-tighter">Always <br />Awake.</h3>
              <p className="text-white/90 text-2xl font-black italic mb-12 leading-tight uppercase tracking-tighter">
                "We answer when others don't. Christmas at 3 AM? We're there."
              </p>
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-white text-red-600 hover:bg-slate-50 px-12 h-20 font-black text-2xl italic uppercase shadow-2xl border-0">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-20 text-center italic uppercase tracking-tighter underline decoration-red-600 underline-offset-8">Emergency FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-200 hover:border-red-200 transition-colors group">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex gap-4 italic group-hover:text-red-700 transition-colors leading-tight">
                  <span className="text-red-600 font-black">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-10 font-medium border-l-4 border-red-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">Stay Safe. <br /> Get Help Now.</h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto font-medium italic uppercase tracking-widest">
            Dispatching mobile units across Bed-Stuy 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-red-600 hover:bg-slate-50 h-20 px-12 text-2xl font-black shadow-2xl transform transition-all hover:scale-105 active:scale-95 border-0">
                <Phone className="mr-3" size={32} />
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-8 text-red-100 font-black italic uppercase tracking-widest text-sm">Licensed • Bonded • Insured • NYC #2103442</p>
        </div>
      </section>

      {/* Area Links */}
      <section className="py-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Bed-Stuy", "Crown Heights", "Williamsburg", "Bushwick", "Greenpoint", "Prospect Heights", "Clinton Hill", "Fort Greene"].map((area) => (
              <div key={area} className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase italic tracking-widest">
                <MapPin size={14} className="text-red-500/50" />
                {area} 24/7
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
