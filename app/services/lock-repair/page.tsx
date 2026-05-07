import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Hammer, Wrench, AlertTriangle, Zap, Building2, Home, Settings, Key } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Repair Services | Bed-Stuy | 24/7 Support',
  description: 'Expert lock repair for residential & commercial properties. Stuck locks, broken keys, and emergency repairs in Bed-Stuy. 20-min arrival. Call (718) 568-6597.',
};

export default function LockRepairPage() {
  const faqs = [
    { q: "How much does lock repair cost?", a: "Residential repairs typically range from $75-200. Commercial repairs for complex systems range from $300-1000+. Emergency after-hours repairs may include a surcharge." },
    { q: "Can you repair any lock?", a: "We can repair the vast majority of locks, including vintage mortise locks and modern high-security cylinders. However, if the internal housing is cracked, we may recommend replacement." },
    { q: "How long does lock repair take?", a: "Standard residential repairs usually take 30-60 minutes. Commercial systems or emergency key extractions typically take 1-4 hours depending on complexity." },
    { q: "What if my key is stuck in the lock?", a: "Do not force it! Forcing it can break the key inside. We use professional extraction tools to remove the key safely and then repair the cylinder." },
    { q: "Can you repair a broken lock?", a: "Yes, we can replace individual internal components like pins, springs, or cams to restore a broken lock to full functionality." },
    { q: "Should I repair or replace my lock?", a: "If the lock is high-quality and only needs a minor fix, repair is better. If the lock is cheap, very old, or has been compromised by a break-in, we recommend replacement." },
    { q: "How do you repair a jammed lock?", a: "We clean the internal mechanism, remove any debris or rust, lubricate with graphite or silicone, and realign the strike plate." },
    { q: "Can you repair smart locks?", a: "We can repair mechanical issues with smart locks. If there's a complex circuit board failure, we may recommend contacting the manufacturer." },
    { q: "What about frozen locks?", a: "We use professional-grade de-icers and dry lubricants to thaw and protect locks during winter months." },
    { q: "Do you offer emergency lock repair?", a: "Yes, we are available 24/7 for any urgent repair needs, including after a break-in or when a lock fails unexpectedly." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-400/30">
            <Wrench size={16} />
            <span>24/7 Precision Repairs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Lock <br />
            <span className="text-action-orange uppercase">Repair Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Stuck, jammed, or broken? Don't force it. Our experts restore your security with fast, professional repairs for any residential or commercial lock.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:(718)568-6597" className="w-full sm:w-auto">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full text-lg font-bold py-6 px-10 shadow-lg">
                <Phone className="mr-2" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full text-lg py-6 px-10 backdrop-blur-sm">
                Get Repair Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Fast Solutions for Malfunctioning Locks</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides professional lock repair for all residential and commercial applications. From stuck locks to broken keys to damaged cylinders, our licensed technicians diagnose problems and provide effective, long-lasting solutions. We offer 24/7 emergency repair service with a 20-minute response guarantee.
            </p>
          </div>

          {/* Section 1: Common Problems */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
              { title: "Jammed Mechanism", icon: <AlertTriangle className="text-action-orange" size={40} />, desc: "Lock feels stiff or won't turn at all. We clean and lubricate internal components to restore smooth movement." },
              { title: "Loose Door Knobs", icon: <Settings className="text-trust-blue" size={40} />, desc: "Wobbly hardware can lead to lock failure. We tighten and secure all components for a rock-solid fit." },
              { title: "Broken Key Extraction", icon: <Zap className="text-trust-blue" size={40} />, desc: "Key snapped off inside the lock? We extract the pieces and repair any internal damage." }
            ].map((item, i) => (
              <Card key={i} className="p-10 border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          {/* Section 2: Residential Repair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
               <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] rotate-1"></div>
               <div className="relative grid grid-cols-2 gap-4">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <Home className="text-trust-blue mb-4" size={40} />
                    <span className="font-bold">Home Locks</span>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <Shield className="text-trust-blue mb-4" size={40} />
                    <span className="font-bold">Deadbolts</span>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <Key className="text-trust-blue mb-4" size={40} />
                    <span className="font-bold">Cylinders</span>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <Settings className="text-trust-blue mb-4" size={40} />
                    <span className="font-bold">Mortise</span>
                  </div>
               </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Residential Lock Repair</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Your home's security is our priority. We repair all types of residential hardware, ensuring they work as smoothly as the day they were installed.
              </p>
              <div className="space-y-4 mb-10">
                 {[
                   "Door knob and lever repair",
                   "Deadbolt realignment",
                   "Strike plate adjustment",
                   "Internal component replacement",
                   "Lubrication and deep cleaning"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle className="text-safety-green" size={20} />
                     <span className="font-semibold text-gray-800">{item}</span>
                   </div>
                 ))}
              </div>
              <p className="text-2xl font-bold text-trust-blue">$75 - $200 (Average Range)</p>
            </div>
          </div>

          {/* Section 4: Emergency Repair */}
          <div className="mb-32">
             <div className="bg-action-orange text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div>
                      <Zap size={64} className="mb-8" />
                      <h2 className="text-3xl md:text-5xl font-bold mb-8">24/7 Emergency Repairs</h2>
                      <p className="text-xl mb-10 leading-relaxed">
                         Lock broken after a break-in? Key snapped at 2 AM? We respond in 20 minutes or less to secure your property immediately.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                         <a href="tel:(718)568-6597">
                            <Button size="large" className="bg-white text-action-orange hover:bg-gray-100 font-bold px-10">Call (718) 568-6597</Button>
                         </a>
                      </div>
                   </div>
                   <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-sm">
                      <h4 className="text-2xl font-bold mb-6">Urgent Scenarios</h4>
                      <ul className="space-y-4">
                         <li className="flex items-center gap-3"><CheckCircle size={20} /> Post-Break-in Security Resets</li>
                         <li className="flex items-center gap-3"><CheckCircle size={20} /> Stuck Key Extraction</li>
                         <li className="flex items-center gap-3"><CheckCircle size={20} /> Jammed Main Entrance Repairs</li>
                         <li className="flex items-center gap-3"><CheckCircle size={20} /> Frozen Winter Lock Thawing</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* Section 3: Commercial Repair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
             <div>
                <Building2 className="text-trust-blue mb-8" size={64} />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Traffic Commercial Repair</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   Commercial locks face significantly more wear than residential ones. We specialize in maintaining heavy-duty hardware that must function reliably hundreds of times a day.
                </p>
                <div className="space-y-4">
                   {[
                     "Master key system troubleshooting",
                     "Panic bar and exit device repair",
                     "Access control mechanical repair",
                     "Heavy-duty Grade 1 cylinder service",
                     "Automatic door closer adjustment"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle className="text-trust-blue" size={20} />
                       <span className="font-semibold text-gray-800">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-8">Request Service</h3>
                <QuoteForm />
             </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-gray-400">Lock Repair FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Proper Diagnosis", desc: "We find the root cause of the failure, not just the symptom.", icon: <Shield size={32} /> },
              { title: "Quality Parts", desc: "We use OEM-grade pins, springs, and components for every repair.", icon: <Hammer size={32} /> },
              { title: "Warranty Coverage", desc: "All our repairs are backed by our 30-day labor guarantee.", icon: <Zap size={32} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="text-trust-blue mb-6 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-trust-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Your Locks Working Again</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't leave your security to chance with a failing lock. Call Bed-Stuy's repair experts for an immediate fix.
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
              { name: "Lock Installation", href: "/services/lock-installation" },
              { name: "Lock Replacement", href: "/services/lock-replacement" },
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
