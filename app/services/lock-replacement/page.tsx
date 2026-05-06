import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, RotateCcw, Home, Building2, Zap, DollarSign } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Replacement Services | Bed-Stuy | New Secure Locks',
  description: 'Expert lock replacement for homes and businesses in Bed-Stuy. Upgrade to high-security or smart locks. Rekeying options available. Call (718) 568-6597.',
};

export default function LockReplacementPage() {
  const faqs = [
    { q: "How much does lock replacement cost?", a: "Residential deadbolts typically range from $100-300 installed. Mortise locks are $150-400, and smart locks range from $200-600. Commercial systems vary by scale." },
    { q: "Should I replace all my locks?", a: "If you've moved into a new property or experienced a break-in, we strongly recommend replacing all exterior locks to ensure total control of your access." },
    { q: "How long does lock replacement take?", a: "Most standard residential locks take 30-60 minutes to replace per door, depending on the lock type and door condition." },
    { q: "What's the difference between replacement and rekeying?", a: "Replacement involves installing entirely new hardware. Rekeying keeps the old hardware but changes the internal pins so only new keys will work. Rekeying is often 50% cheaper." },
    { q: "Can you replace locks on apartment doors?", a: "Yes, we can replace apartment locks. We recommend obtaining landlord permission first to ensure compliance with your lease." },
    { q: "Do you replace commercial locks?", a: "Yes, we specialize in high-traffic commercial hardware, master key systems, and access control replacement." },
    { q: "What type of lock should I replace with?", a: "It depends on your security goals. We often recommend upgrading to Grade 1 deadbolts or smart locks for a balance of security and convenience." },
    { q: "Should I upgrade to smart locks?", a: "If you want keyless entry, remote access, or better tracking of who enters your property, smart locks are an excellent investment." },
    { q: "How often should I replace locks?", a: "We recommend replacing locks every 7-10 years or whenever they show signs of mechanical wear, such as sticking or loose cylinders." },
    { q: "What about replacing locks after a break-in?", a: "This is our highest priority. We recommend immediate replacement with reinforced hardware to prevent repeat attempts." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-400/30">
            <RotateCcw size={16} />
            <span>Security Hardware Upgrades</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Lock <br />
            <span className="text-action-orange uppercase">Replacement Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Protect your property with fresh, reliable hardware. From residential upgrades to commercial systems, we provide total security resets with expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:(718)568-6597" className="w-full sm:w-auto">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full text-lg font-bold py-6 px-10">
                <Phone className="mr-2" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full text-lg py-6 px-10 backdrop-blur-sm">
                Get Replacement Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">When is it Time for New Locks?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides professional lock replacement for all residential and commercial applications. Whether you need to replace broken locks, upgrade security after moving, or improve your home's defense, our licensed technicians provide expert service with transparent pricing. We also offer rekeying as a cost-effective alternative to full hardware replacement.
            </p>
          </div>

          {/* Section 1: When to Replace */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            {[
              { title: "Lost or Stolen Keys", desc: "If your keys are missing, your security is compromised. A replacement ensures total peace of mind." },
              { title: "New Property Move-in", desc: "Never trust the old keys. Reset your security the moment you get the keys to your new home or office." },
              { title: "Wear & Tear", desc: "If your key sticks or the lock feels 'crunchy', the internal components are failing. Replace before it fails completely." }
            ].map((item, i) => (
              <Card key={i} className="p-10 border-gray-100 bg-gray-50 text-center flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Shield className="text-trust-blue" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Section 2: Residential Replacement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <Home className="text-trust-blue mb-8" size={64} />
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">Standard Residential Lock Replacement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Residential lock replacement involves removing old, outdated hardware and installing modern, secure hardware. We handle everything from standard door knobs to integrated mortise systems.
              </p>
              <div className="space-y-4 mb-8">
                 {[
                   "Installation takes 30-60 minutes per door",
                   "Proper alignment for smooth operation",
                   "High-security deadbolt options available",
                   "Matching styles to your existing hardware"
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle className="text-safety-green mt-1" size={20} />
                     <span className="font-semibold text-gray-800">{item}</span>
                   </div>
                 ))}
              </div>
              <p className="text-xl font-bold text-trust-blue">Starting from $100 per lock</p>
            </div>
            <div className="relative">
               <div className="absolute -inset-2 bg-gradient-to-tr from-trust-blue to-blue-400 rounded-[2.5rem] blur-xl opacity-20"></div>
               <Card className="relative z-10 p-10 border-gray-100 shadow-2xl">
                 <h3 className="text-2xl font-bold mb-8">Schedule a Swap</h3>
                 <QuoteForm />
               </Card>
            </div>
          </div>

          {/* Section 4 & 5: Replace vs Rekey */}
          <div className="mb-32">
            <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
               <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Rekeying: The Smart Alternative</h2>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 <div className="space-y-6">
                   <p className="text-xl text-blue-100 leading-relaxed">
                     Don't always spend on new hardware. If your locks are mechanically sound but you need to change who has access, <strong>Rekeying</strong> is the answer.
                   </p>
                   <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/20">
                     <DollarSign className="text-action-orange flex-shrink-0" size={32} />
                     <p className="font-bold text-lg">Save up to 50% compared to full replacement.</p>
                   </div>
                   <Link href="/services/lock-rekeying">
                     <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-10">Learn About Rekeying</Button>
                   </Link>
                 </div>
                 <div className="space-y-8">
                    <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="text-action-orange" size={24} /> When to Replace</h4>
                      <p className="text-blue-100 italic">"Replace when the lock is broken, worn out, compromised by a break-in, or when you want a technology upgrade (Smart Locks)."</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="text-action-orange" size={24} /> When to Rekey</h4>
                      <p className="text-blue-100 italic">"Rekey when the lock works perfectly but you've moved, lost a key, or want to consolidate multiple locks to one key."</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Section 3: Commercial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                 {["Office Locks", "Storefronts", "Warehouses", "Industrial"].map((item, i) => (
                   <div key={i} className="aspect-square bg-gray-50 border border-gray-100 rounded-3xl flex flex-col items-center justify-center p-6 text-center group hover:border-trust-blue transition-colors">
                      <Building2 className="text-trust-blue mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <span className="font-bold text-gray-900">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Commercial Replacement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Business security requirements are significantly higher than residential ones. We replace heavy-duty commercial hardware, master key systems, and high-security cylinders for any type of business facility.
              </p>
              <div className="space-y-4">
                 {[
                   "Minimal business disruption during swap",
                   "Master key system design & deployment",
                   "Access control system integration",
                   "Heavy-duty Grade 1 hardware installation"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle className="text-trust-blue" size={20} />
                     <span className="font-semibold text-gray-800">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Replacement FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border-l-4 border-action-orange p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Licensed Experts", icon: <Shield size={32} /> },
              { title: "Fast Swaps", icon: <Clock size={32} /> },
              { title: "Top Hardware", icon: <Zap size={32} /> },
              { title: "Fair Pricing", icon: <DollarSign size={32} /> }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-trust-blue mb-6 flex justify-center">{item.icon}</div>
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-widest">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Time for a Security Reset?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get professional lock replacement from Bed-Stuy's most reliable locksmiths. High-quality hardware, expert installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-12 py-6 text-xl shadow-xl">
                <Phone className="mr-2" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Lock Repair", href: "/services/lock-repair" },
              { name: "Lock Installation", href: "/services/lock-installation" },
              { name: "Rekeying Services", href: "/services/lock-rekeying" },
              { name: "Emergency Services", href: "/services/24-hour-emergency-locksmith" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-trust-blue font-bold hover:text-blue-800 flex items-center gap-2">
                {link.name} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
