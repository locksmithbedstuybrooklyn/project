import Link from 'next/link';
import NextImage from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Home, Zap, AlertTriangle, Key, MapPin, UserCheck, Lock, Unlock } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Residential Lockout Bed-Stuy | Damage-Free Entry | 24/7 Service',
  description: 'Locked out of your home or apartment in Bed-Stuy? Fast, damage-free entry. 20-minute response time. Licensed NYC #2103442. Available 24/7. Call (718) 568-6597.',
};

export default function ResidentialLockoutPage() {
  const faqs = [
    { q: "How much does a residential lockout service cost?", a: "Standard residential lockouts typically cost between $75-150. The final price depends on the complexity of the lock (e.g., high-security cylinders vs. standard deadbolts) and whether it's an emergency after-hours call." },
    { q: "How long will it take for a locksmith to arrive?", a: "We aim for a 20-minute arrival time anywhere in Bed-Stuy. We have mobile units stationed strategically across Brooklyn to ensure the fastest possible response when you're locked out." },
    { q: "Will you damage my door or lock to get me in?", a: "No. Our technicians specialize in non-destructive entry. We use advanced picking, bypassing, and shimming techniques to open your door without causing any damage to your hardware or frame." },
    { q: "What if I don't have my ID with me?", a: "We must verify residency for your safety. If your ID is inside, we can often verify your identity via neighbors, building management, or by checking the ID immediately once we gain entry." },
    { q: "Can you unlock high-security locks or smart locks?", a: "Yes. Our team is trained to handle all types of residential security, from traditional Medeco/Mul-T-Lock cylinders to modern electronic and smart locks." }
  ];

  const lockoutProcess = [
    { title: "Emergency Call", desc: "Call (718) 568-6597. Tell us your location and the situation." },
    { title: "Rapid Dispatch", desc: "The nearest available technician is sent to your address immediately." },
    { title: "Verification", desc: "For security, we verify your identity and proof of residency on-site." },
    { title: "Damage-Free Entry", desc: "Our expert opens your door using professional, non-destructive tools." },
    { title: "Security Check", desc: "We check your lock functionality and offer tips to prevent future issues." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <NextImage 
            src="/images/emergency-locksmith.webp" 
            alt="Emergency Residential Lockout Bed-Stuy"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <Unlock className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-black tracking-widest uppercase italic">24/7 Home Access Priority</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              Locked Out? <br />
              <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-8 italic">Back Inside Fast.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium italic uppercase tracking-tight">
              Don't stay on the sidewalk. Bed-Stuy's residential experts provide damage-free entry 24/7. 20-minute response goal.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:(718)568-6597">
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

            <div className="mt-16 flex flex-wrap gap-10 items-center border-t border-white/10 pt-10">
              <div className="flex items-center gap-3">
                <Shield className="text-blue-500" size={24} />
                <span className="text-slate-400 font-bold uppercase italic tracking-widest text-sm">NYC Licensed #2103442</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="text-blue-500" size={24} />
                <span className="text-slate-400 font-bold uppercase italic tracking-widest text-sm">Bed-Stuy Brownstone Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8 border border-blue-100">
                <Shield className="text-blue-600" size={20} />
                <span className="text-blue-700 text-sm font-black uppercase italic tracking-widest">Damage-Free Guarantee</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] uppercase italic tracking-tighter">
                Professional <br /> <span className="text-blue-600">Home Entry</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium italic">
                It happens to the best of us: the door clicks shut, and you're on the outside. At Locksmith Bed Stuy, we specialize in damage-free residential entry for brownstones, apartments, and modern condos.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Apartment Doors",
                  "Brownstone Entries",
                  "Sliding Patio Doors",
                  "High-Security Locks",
                  "Smart Lock Overrides",
                  "Bedroom & Internal Locks"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 group hover:border-blue-500 transition-colors">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="font-bold text-slate-800 italic uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold uppercase italic border-0">Dispatch Now</Button>
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                  <Key size={200} className="text-blue-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-10 italic uppercase tracking-tighter underline decoration-blue-600 decoration-4 underline-offset-8">Request Access</h3>
                  <QuoteForm />
                  <div className="mt-10 pt-10 border-t border-slate-100 text-center">
                    <p className="text-slate-400 font-bold uppercase italic text-xs tracking-widest mb-4">Fastest Response</p>
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

      {/* Critical Emergency Banner */}
      <section className="bg-red-600 py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <AlertTriangle size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="bg-white/10 p-6 rounded-full animate-pulse">
              <AlertTriangle size={64} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 leading-tight">Priority Emergency Dispatch</h2>
              <p className="text-xl font-bold italic text-red-100 uppercase tracking-tight">Child inside? Stove on? Senior emergency? We divert the nearest unit immediately.</p>
            </div>
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-red-600 hover:bg-slate-100 h-20 px-12 text-2xl font-black uppercase italic border-0 shadow-2xl">
                Priority Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase underline decoration-blue-600 underline-offset-8 italic">Our Fast Process</h2>
            <p className="text-slate-500 text-lg italic font-medium uppercase tracking-widest">Streamlined for zero stress.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {lockoutProcess.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0">
                  <span className="font-black text-2xl italic">0{i + 1}</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase italic tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise / Verification Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12 scale-150">
              <UserCheck size={300} />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter mb-10 leading-tight">Verification <br /> <span className="text-blue-500">For Your Safety</span></h2>
              <p className="text-slate-400 text-xl mb-12 font-medium italic leading-relaxed">
                As a licensed New York locksmith, we are legally required to verify your right to enter the property. If your ID is inside, don't worry—we can verify via neighbors, building management, or immediately upon entry.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Shield size={32} className="text-blue-500 mb-6" />
                  <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">Secure Protocols</h4>
                  <p className="text-slate-400 text-sm italic font-medium leading-relaxed">We protect your home by ensuring we never grant access to unauthorized individuals.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <UserCheck size={32} className="text-blue-500 mb-6" />
                  <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">Professionalism</h4>
                  <p className="text-slate-400 text-sm italic font-medium leading-relaxed">Our technicians are bonded, insured, and background-checked for your peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-20 text-center italic uppercase tracking-tighter">Lockout FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-all group">
                <h3 className="text-xl font-bold text-slate-900 mb-4 italic leading-tight group-hover:text-blue-600 transition-colors">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed font-medium italic border-l-4 border-blue-100 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">Back Inside <br /> In Minutes.</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium italic uppercase tracking-widest">
            Dispatching expert locksmiths to Bed-Stuy 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-3xl font-black uppercase italic border-0 shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                <Phone className="mr-3" size={36} />
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-10 text-blue-200 font-bold italic uppercase tracking-widest text-sm">24/7 Availability • 20-Min Arrival • NYC #2103442</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "Lock Installation", href: "/services/lock-installation" },
              { name: "Lock Replacement", href: "/services/lock-replacement" },
              { name: "Lock Rekeying", href: "/services/lock-rekeying" },
              { name: "Emergency Locksmith", href: "/services/24-hour-emergency-locksmith" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-blue-600 font-black hover:text-blue-800 flex items-center gap-2 italic uppercase tracking-tight text-sm">
                {link.name} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

