import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, RotateCcw, Home, Building2, Zap, DollarSign, Key, AlertCircle, ShoppingBag, ListChecks, Move } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Replacement Bed-Stuy | New Secure Locks | (718) 568-6597',
  description: 'Expert lock replacement for homes & businesses in Bed-Stuy. Upgrade after a move, break-in, or for better security. Licensed & insured. 24/7 service.',
};

export default function LockReplacementPage() {
  const faqs = [
    { q: "Is lock replacement or rekeying better after moving?", a: "If the existing hardware is high-quality and in good condition, rekeying is a more cost-effective way to ensure old keys won't work. However, if the locks are old or offer poor security, full replacement with modern hardware is the safer long-term investment." },
    { q: "How long does it take to replace a standard door lock?", a: "A standard deadbolt or door knob replacement typically takes 20-30 minutes. More complex systems like mortise locks or commercial exit devices may take 45-90 minutes per door." },
    { q: "Can you replace locks that have been damaged in a break-in?", a: "Yes, this is a top priority. We can replace damaged locks and also reinforce your door frame and strike plates to prevent future forced entry attempts." },
    { q: "What brands of replacement locks do you carry?", a: "We stock a wide range of trusted brands including Schlage, Yale, Medeco, Mul-T-Lock, and Baldwin, covering everything from standard to high-security requirements." },
    { q: "Do you offer warranties on new locks?", a: "Yes, all replacement hardware comes with a manufacturer's warranty, and our installation labor is backed by our 30-day satisfaction guarantee." }
  ];

  const replacementProcess = [
    { title: "Assessment", desc: "Evaluation of current hardware and discussion of your security goals." },
    { title: "Selection", desc: "Helping you choose the best hardware for your security needs and style." },
    { title: "Removal", desc: "Careful removal of old locks without damaging your door or frame." },
    { title: "Installation", desc: "Expert fitting and mounting of your new high-security hardware." },
    { title: "Testing", desc: "Thorough functional check to ensure perfectly smooth operation." },
    { title: "Cleanup", desc: "Ensuring the work area is left spotless and providing your new keys." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-locksmith.webp" 
            alt="Expert Lock Replacement Bed-Stuy"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-400/30 mb-8">
              <RotateCcw className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-black tracking-widest uppercase italic">Total Security Reset</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              Fresh. <br />
              <span className="text-blue-500">Secure.</span> <br />
              New Locks.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Moving into a new property? Worn out hardware? Experienced a break-in? Upgrade to modern, robust locking systems for absolute peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-20 px-12 text-2xl font-black shadow-2xl">
                  <Phone className="mr-3" size={28} />
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md w-full sm:w-auto h-20 px-12 text-2xl font-black">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Replace Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">When is it Time for New Locks?</h2>
            <p className="text-slate-500 text-lg italic">Don't wait for a failure to upgrade your security.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "After a Break-in", icon: <AlertCircle size={40} className="text-red-500" />, desc: "Immediate replacement is essential to restore security and prevent repeat incidents." },
              { title: "New Property Move", icon: <Move size={40} className="text-blue-500" />, desc: "Ensure you're the only one with access. Fundamental for any new home or business." },
              { title: "Worn or Damaged", icon: <Zap size={40} className="text-blue-500" />, desc: "Mechanical wear can lead to unexpected failures. Replace old, jamming hardware today." },
              { title: "Outdated Security", icon: <Shield size={40} className="text-blue-500" />, desc: "Older locks may not resist modern picking or bumping. Upgrade to current standards." },
              { title: "Lost or Stolen Keys", icon: <Key size={40} className="text-blue-500" />, desc: "If your keys are in unknown hands, a full replacement provides the highest level of security." },
              { title: "Enhanced Protection", icon: <ShoppingBag size={40} className="text-blue-500" />, desc: "Proactively upgrade to high-security or smart locks for better defense and control." }
            ].map((item, i) => (
              <Card key={i} className="p-10 border-slate-100 hover:border-blue-500 transition-all group rounded-[2.5rem] bg-slate-50/50">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase italic tracking-tight">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Commercial Categories */}
      <section className="py-24 bg-slate-900 text-white border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8">
                <Home className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Residential <br /> <span className="text-blue-500">Fortification</span></h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">Protecting your family starts with modern, reliable entry points. We offer a curated selection of residential hardware for every door.</p>
              <div className="space-y-4 mb-10">
                {[
                  "Exterior Deadbolts & Smart Locks",
                  "Interior Privacy Lock Upgrades",
                  "Patio & Sliding Door Reinforcement",
                  "High-Security Cylinder Installation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-400" size={20} />
                    <span className="font-bold italic uppercase tracking-tight text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services/residential-lockout">
                <Button className="bg-white text-slate-900 hover:bg-blue-50 h-16 px-10 font-black italic uppercase">Home Lock Options</Button>
              </Link>
            </div>

            <div>
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8">
                <Building2 className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Commercial <br /> <span className="text-blue-500">Security</span></h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">Businesses require robust solutions. We replace heavy-duty hardware tailored to high-traffic commercial environments.</p>
              <div className="space-y-4 mb-10">
                {[
                  "Commercial Storefront Lock Swaps",
                  "Office Lock & Access Control Upgrades",
                  "Panic Bar & Exit Device Replacement",
                  "Master Key System Overhauls"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-400" size={20} />
                    <span className="font-bold italic uppercase tracking-tight text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services/lock-installation">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 h-16 px-10 font-black italic uppercase border-0">Commercial Solutions</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 italic uppercase tracking-tighter">Rekeying: The Smart Alternative</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  If your hardware is in great condition but you want to invalidate old keys, <strong>Rekeying</strong> is a faster, more affordable option.
                </p>
                <div className="flex items-center gap-4 bg-white p-8 rounded-2xl border border-slate-200 mb-10 shadow-sm">
                  <DollarSign className="text-blue-600 flex-shrink-0" size={40} />
                  <div>
                    <p className="font-black text-xl text-slate-900 italic uppercase">Save up to 50%</p>
                    <p className="text-slate-500">Compared to full hardware replacement.</p>
                  </div>
                </div>
                <Link href="/services/lock-rekeying">
                  <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold uppercase italic">Learn About Rekeying</Button>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 italic uppercase tracking-tight">
                    <RotateCcw className="text-blue-500" size={24} /> When to Replace
                  </h4>
                  <p className="text-slate-600 font-medium">"Hardware is broken, old, compromised by a break-in, or you want a technology upgrade (Smart Locks)."</p>
                </div>
                <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 italic uppercase tracking-tight">
                    <Key className="text-blue-500" size={24} /> When to Rekey
                  </h4>
                  <p className="text-slate-600 font-medium">"Hardware works perfectly but you've moved properties, lost a key, or want to consolidate multiple locks."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">Our Meticulous Process</h2>
            <p className="text-slate-500 text-lg">Ensuring your new locks are installed perfectly.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {replacementProcess.map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-6 -left-6 text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-colors z-0">
                  0{i + 1}
                </div>
                <div className="relative z-10 pl-4">
                  <h4 className="text-xl font-black text-slate-900 mb-3 italic uppercase tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center italic uppercase tracking-tight underline decoration-blue-500 underline-offset-8">Replacement FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4 italic leading-tight">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">Time for a Security Reset?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Get professional lock replacement from Bed-Stuy's most reliable locksmiths. High-quality hardware, expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-2xl font-black shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-8 text-blue-200 font-bold tracking-widest uppercase text-sm">24/7 Response • Licensed NYC #2103442</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Lock Installation", href: "/services/lock-installation" },
              { name: "Lock Repair", href: "/services/lock-repair" },
              { name: "Rekeying Services", href: "/services/lock-rekeying" },
              { name: "Emergency Locksmith", href: "/services/24-hour-emergency-locksmith" }
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
