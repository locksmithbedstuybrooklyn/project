import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Lock, Key, Settings, Zap, Home, Building2, Smartphone, Wrench, ShieldCheck, ListChecks } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Installation Bed-Stuy | Smart & High-Security Locks',
  description: 'Expert lock installation for residential & commercial in Bed-Stuy. Specialized in mortise locks, smart locks, and high-security hardware. Call (718) 568-6597.',
};

export default function LockInstallationPage() {
  const faqs = [
    { q: "Why shouldn't I just install a lock myself?", a: "While DIY is possible, professional installation ensures optimal security through perfect alignment, proper frame reinforcement, and compliance with local building codes. A small error in alignment can make even an expensive lock easy to bypass." },
    { q: "What brands of high-security locks do you install?", a: "We install leading high-security brands including Medeco, Mul-T-Lock, and Schlage Primus, which offer superior resistance to picking, drilling, and bumping." },
    { q: "Can you install smart locks on old brownstone doors?", a: "Yes, we specialize in retrofitting modern smart locks onto historic doors, ensuring the lock functions perfectly while maintaining the door's aesthetic integrity." },
    { q: "How long does a standard deadbolt installation take?", a: "A standard deadbolt installation typically takes 30-45 minutes. More complex mortise or smart lock installations may take 1-2 hours depending on the door preparation required." },
    { q: "Do your installations come with a warranty?", a: "Yes, all our labor is backed by a 30-day satisfaction guarantee, and the hardware itself is covered by the manufacturer's warranty." }
  ];

  const processSteps = [
    { title: "Consultation", desc: "We discuss your security needs and recommend the best solutions for your property." },
    { title: "Selection", desc: "Help choosing the right locks that match your security requirements and aesthetic." },
    { title: "Preparation", desc: "Precise measurements and clean cuts to prepare the door and frame for the new hardware." },
    { title: "Installation", desc: "Expert fitting of all components ensuring flawless alignment and structural integrity." },
    { title: "Testing", desc: "Thorough testing of functionality with minor adjustments for smooth operation." },
    { title: "Education", desc: "We provide clear instructions on how to use and maintain your new high-security locks." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-locksmith.webp" 
            alt="Professional Lock Installation Bed-Stuy"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <ShieldCheck className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-bold tracking-widest uppercase tracking-widest">Master-Grade Installation Services</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
              Precision <br />
              <span className="text-blue-500 uppercase tracking-tighter italic">Lock Installation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-medium">
              Fortify your home or business with expert installation of deadbolts, smart locks, and high-security hardware. Precision fit, guaranteed performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-16 px-10 text-xl font-bold shadow-2xl">
                  <Phone className="mr-3" size={24} />
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md w-full sm:w-auto h-16 px-10 text-xl">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Why Professional */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Why Professional <br /> Installation <span className="text-blue-600">Matters</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                While DIY might seem like a cost-saving option, improper installation can severely compromise your security. Professional installation guarantees optimal resistance against forced entry and ensures the longevity of your hardware.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Optimal Security", desc: "Correct alignment for maximum kick-in resistance." },
                  { title: "Code Compliance", desc: "Meets NYC fire and building safety standards." },
                  { title: "Damage-Free", desc: "Professional tools prevent door and frame damage." },
                  { title: "Expert Advice", desc: "We recommend hardware suited to your specific door." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] rotate-2"></div>
              <Card className="relative z-10 p-10 md:p-12 border-slate-100 shadow-2xl bg-white rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-6 text-center uppercase tracking-tight italic">Request Installation</h3>
                <QuoteForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial Categories */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Installation Expertise</h2>
            <p className="text-slate-500 text-lg">Specialized hardware for every entrance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-12 bg-white border-slate-100 hover:shadow-xl transition-all rounded-[2.5rem]">
              <Home className="text-blue-600 mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 italic tracking-tight">Residential Security</h3>
              <p className="text-slate-600 mb-8 text-lg">Protecting Bed-Stuy homes with modern and historic-appropriate hardware.</p>
              <div className="space-y-4 mb-10">
                {[
                  { name: "Deadbolt Locks", detail: "Single, double, and vertical options." },
                  { name: "Smart Locks", detail: "August, Yale, Schlage integration." },
                  { name: "Mortise Locks", detail: "Historic brownstone specialists." },
                  { name: "Patio Door Locks", detail: "Sliding door reinforcement." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-slate-800">{item.name}:</span>
                      <span className="text-slate-500 ml-2">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/quote">
                <Button className="w-full bg-slate-900 hover:bg-black text-white h-16 font-bold text-lg rounded-2xl">
                  Schedule Home Installation
                </Button>
              </Link>
            </Card>

            <Card className="p-12 bg-slate-900 text-white border-slate-800 hover:shadow-2xl transition-all rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Building2 size={160} />
              </div>
              <Building2 className="text-blue-400 mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 italic tracking-tight">Commercial Systems</h3>
              <p className="text-slate-400 mb-8 text-lg">Robust security for businesses, retail, and managed properties.</p>
              <div className="space-y-4 mb-10">
                {[
                  { name: "High-Security", detail: "Medeco & Mul-T-Lock certified." },
                  { name: "Access Control", detail: "Keypads and card readers." },
                  { name: "Panic Bars", detail: "OSHA & Fire code compliant exit devices." },
                  { name: "Master Keying", detail: "Granular access level architecture." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-white">{item.name}:</span>
                      <span className="text-slate-400 ml-2">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/booking">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-16 font-bold text-lg rounded-2xl border-0">
                  Book Commercial Service
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">Our Meticulous Process</h2>
            <p className="text-slate-500 text-lg">How we ensure flawless security for every installation.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-4 -left-4 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors z-0">
                  {i + 1}
                </div>
                <div className="relative z-10 pl-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase italic tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center italic uppercase tracking-tight">Installation FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">Secure Your Future Today</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Professional installation is the foundation of real security. Don't leave your safety to chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-2xl font-black shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-8 text-blue-200 font-bold tracking-widest uppercase text-sm">24/7 Service • Licensed NYC #2103442</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Lock Replacement", href: "/services/lock-replacement" },
              { name: "Lock Repair", href: "/services/lock-repair" },
              { name: "Rekeying Services", href: "/services/lock-rekeying" },
              { name: "High-Security Blog", href: "/blog/high-security-locks" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
                {link.name} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
