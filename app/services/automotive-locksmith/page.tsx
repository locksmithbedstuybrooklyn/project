import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Car, Key, Settings, Zap, Wrench, Award, AlertTriangle, Cpu, Gauge } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automotive Locksmith Bed-Stuy | Car Keys & Programming | 24/7 Service',
  description: 'Fast 24/7 mobile car locksmith in Bed-Stuy. Car lockouts, transponder key programming, ignition repair. 20-min response. Call (718) 568-6597.',
};

export default function AutomotiveLocksmithPage() {
  const faqs = [
    { q: "How long does a car lockout service take?", a: "Typically, it takes our technicians 10-15 minutes to gain access once they arrive. Our total response time in Bed-Stuy is usually 20-30 minutes from your initial call." },
    { q: "Can you program transponder keys for any car?", a: "Yes, we carry advanced diagnostic and programming equipment that allows us to create and program transponder keys and key fobs for over 95% of vehicle makes and models, including domestic and foreign brands." },
    { q: "Is it cheaper to use a locksmith than the dealership?", a: "In almost all cases, yes. We provide the same high-security keys and programming as the dealership but without the 'premium' markup and the need for expensive towing since we come to you." },
    { q: "What if my key broke inside the ignition?", a: "Don't try to pull it out yourself—you might damage the cylinder. Our locksmiths use specialized extraction tools to safely remove the fragment and can cut you a replacement key on the spot." },
    { q: "Do you handle high-security laser-cut keys?", a: "Absolutely. We are equipped with precision laser-cutting machinery to accurately duplicate and replace the high-security 'sidewinder' keys found in modern vehicles." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/automotive-locksmith.webp" 
            alt="Automotive Locksmith Bed-Stuy Car Key Programming"
            fill
            className="object-cover opacity-50 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <Car className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-black tracking-widest uppercase italic">24/7 Mobile Car Experts</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              Dealership Tech. <br />
              <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-8 italic">At Your Door.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium italic uppercase tracking-tight">
              Locked out? Lost your keys? Ignition stuck? We bring high-tech car key and lockout solutions directly to your location 24/7.
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
                <Gauge className="text-blue-500" size={24} />
                <span className="text-slate-400 font-bold uppercase italic tracking-widest text-sm">All Makes & Models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8 border border-blue-100">
                <Zap className="text-blue-600" size={20} />
                <span className="text-blue-700 text-sm font-black uppercase italic tracking-widest">Rapid 20-Min Response</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] uppercase italic tracking-tighter">
                Don't Tow It. <br /> <span className="text-blue-600">We Solve It.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium italic">
                Being stranded due to a car lockout, lost keys, or a faulty ignition can ruin your day. At Locksmith Bed Stuy, we specialize in providing rapid, reliable, and damage-free automotive services across Brooklyn.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Emergency Car Unlocking",
                  "Transponder Key Programming",
                  "Key Fob Replacement",
                  "Ignition Repair & Replace",
                  "Laser-Cut Key Duplication",
                  "Broken Key Extraction"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 group hover:border-blue-500 transition-colors">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="font-bold text-slate-800 italic uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold uppercase italic border-0">Call Mobile Unit</Button>
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                  <Car size={200} className="text-blue-600" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-10 italic uppercase tracking-tighter underline decoration-blue-600 decoration-4 underline-offset-8">Quick Vehicle Quote</h3>
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

      {/* Technical Authority: Transponder Keys */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <Cpu size={600} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-md">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8 text-blue-500 leading-none">Smart Key <br /> Programming</h3>
                <p className="text-slate-400 text-lg mb-10 font-medium italic leading-relaxed">
                  Modern vehicles utilize transponder chips that communicate with the engine's immobilizer. If your key isn't programmed correctly, your car won't start. We carry the same high-end diagnostic tools as major dealerships.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Transponder Chips", desc: "Expert coding for immobilizer-sync keys." },
                    { title: "Key Fob Pairing", desc: "Full programming for push-to-start and proximity fobs." },
                    { title: "Laser Cutting", desc: "Precision 'Sidewinder' key duplication on-site." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="bg-blue-600/20 p-3 rounded-xl">
                        <Cpu className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl italic uppercase tracking-tight text-slate-100 mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm italic font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
                <Cpu className="text-blue-400" size={16} />
                <span className="text-blue-300 text-sm font-black tracking-widest uppercase italic">Advanced Tech Only</span>
              </div>
              <h2 className="text-3xl md:text-7xl font-black italic uppercase tracking-tighter mb-10 leading-[0.9]">Beyond <br /> <span className="text-blue-500">Traditional</span> <br /> Cutting.</h2>
              <p className="text-slate-400 text-xl mb-12 font-medium italic leading-relaxed">
                Whether it's a 2024 luxury model or a reliable older vehicle, we have the software to interface with your car's ECU and create a working key in minutes.
              </p>
              <Link href="/blog/car-key-replacement-guide">
                <Button variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white h-16 px-10 font-bold uppercase italic">Key Guide</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ignition Repair Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-8 border border-slate-200">
                <Settings className="text-slate-600" size={20} />
                <span className="text-slate-700 text-sm font-black uppercase italic tracking-widest">Ignition & Electrical</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] uppercase italic tracking-tighter">
                Stuck Key? <br /> <span className="text-blue-600">No Problem.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium italic">
                A malfunctioning ignition can be dangerous. We diagnose and repair ignition cylinders, switches, and VAT systems on-site.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 group hover:border-blue-500 transition-all">
                  <Wrench size={32} className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4 text-slate-900">Extraction</h4>
                  <p className="text-slate-500 text-sm italic font-medium leading-relaxed">Safely removing broken key fragments without destroying the expensive ignition cylinder.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 group hover:border-blue-500 transition-all">
                  <Zap size={32} className="text-blue-600 mb-6" />
                  <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4 text-slate-900">VAT System</h4>
                  <p className="text-slate-500 text-sm italic font-medium leading-relaxed">Diagnostic troubleshooting for older Vehicle Anti-Theft systems that prevent starting.</p>
                </div>
              </div>
              <Link href="/blog/ignition-problems-guide">
                <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold uppercase italic border-0">Ignition Troubleshooting</Button>
              </Link>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 rotate-12">
                  <AlertTriangle size={200} />
                </div>
                <h4 className="text-2xl font-black mb-6 italic uppercase tracking-tighter leading-none">Emergency <br /> Support 24/7</h4>
                <p className="text-blue-100 mb-10 font-bold italic uppercase tracking-tight text-sm">Stranded at night? Call us for priority dispatch. We are Bed-Stuy's most reliable emergency automotive response.</p>
                <a href="tel:(718)568-6597">
                  <Button className="w-full bg-white text-blue-600 hover:bg-slate-100 font-black h-16 uppercase italic">(718) 568-6597</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-20 text-center italic uppercase tracking-tighter">Automotive FAQ</h2>
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
          <h2 className="text-4xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">Back On The <br /> Road Fast.</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium italic uppercase tracking-widest">
            Licensed. Insured. Background Checked. NYC #2103442.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-3xl font-black uppercase italic border-0 shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                <Phone className="mr-3" size={36} />
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-10 text-blue-200 font-bold italic uppercase tracking-widest text-sm">24/7 Mobile Response • 20-Min Arrival • Dealership Tech</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "Emergency Service", href: "/services/24-hour-emergency-locksmith" },
              { name: "Ignition Problems", href: "/blog/ignition-problems-guide" },
              { name: "Car Key Guide", href: "/blog/car-key-replacement-guide" },
              { name: "Locked Out Car", href: "/blog/locked-out-car" }
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
