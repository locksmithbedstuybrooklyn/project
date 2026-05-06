import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, RotateCcw, Key, Building2, Home, DollarSign, Zap } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Rekeying Services | Bed-Stuy | Cost-Effective Security',
  description: 'Change your keys without replacing your locks. 50% cheaper than replacement. Residential & commercial rekeying in Bed-Stuy. Call (718) 568-6597.',
};

export default function LockRekeyingPage() {
  const faqs = [
    { q: "How much does rekeying cost?", a: "Residential rekeying typically costs $50-100 per lock. For large-scale commercial systems, we provide custom quotes based on the number of cylinders and complexity." },
    { q: "How long does rekeying take?", a: "Standard residential rekeying takes about 15-30 minutes per lock. A full house or small office can usually be completed in under 2 hours." },
    { q: "Can you rekey any lock?", a: "We can rekey the vast majority of pin-tumbler locks, including deadbolts, door knobs, and mortise cylinders. Some very cheap or specialty electronic locks may not be rekeyable." },
    { q: "What's the difference between rekeying and replacement?", a: "Rekeying changes the internal pins so old keys no longer work and a new key does. Replacement involves installing entirely new hardware. Rekeying is significantly cheaper." },
    { q: "Should I rekey or replace my locks?", a: "If your locks work perfectly but you've moved or lost a key, rekeying is best. If the lock is broken, worn, or you want a style/technology upgrade, replacement is necessary." },
    { q: "Can you rekey locks on apartment doors?", a: "Yes, we can rekey apartment locks. However, you should check your lease or get landlord permission as they usually require a copy of the new key." },
    { q: "Do you rekey commercial locks?", a: "Yes, we specialize in commercial cylinder rekeying, including master key systems for offices, retail, and warehouses." },
    { q: "Can you create a master key system?", a: "Absolutely. We can design and implement a system where individual keys open specific doors, while one master key opens everything." },
    { q: "How long do rekeyed locks last?", a: "Rekeying does not shorten the life of a lock. In fact, we often clean and lubricate the mechanism during the process, which can help it last longer." },
    { q: "Can you rekey multiple locks to the same key?", a: "Yes, as long as the locks use the same keyway (the same brand/style of key), we can match them all to a single convenient key." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-400/30">
            <RotateCcw size={16} />
            <span>Smart Security Resets</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Lock <br />
            <span className="text-action-orange uppercase">Rekeying Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Change your keys, not your locks. Save up to 50% on security upgrades with expert rekeying for your home or business in Bed-Stuy.
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
                Get Rekeying Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Reset Your Access with Expert Rekeying</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides professional lock rekeying services as a cost-effective alternative to full hardware replacement. We change the internal pins so your locks work with new keys while keeping your existing, high-quality hardware. It's the perfect solution for new homeowners, businesses with employee turnover, or anyone who wants to simplify their keychain.
            </p>
          </div>

          {/* Section 1: What is Rekeying */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div className="order-2 lg:order-1">
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative">
                   <div className="absolute -top-6 -left-6 w-24 h-24 bg-action-orange text-white rounded-3xl flex items-center justify-center shadow-xl rotate-12">
                      <DollarSign size={48} />
                   </div>
                   <h3 className="text-2xl font-bold mb-6 pt-6">Why Choose Rekeying?</h3>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                         <div className="bg-trust-blue text-white p-2 rounded-lg mt-1"><Zap size={20} /></div>
                         <div>
                            <p className="font-bold text-gray-900">50% Lower Cost</p>
                            <p className="text-gray-600">Since you're not paying for heavy metal hardware, the cost is significantly lower than a full replacement.</p>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="bg-trust-blue text-white p-2 rounded-lg mt-1"><Zap size={20} /></div>
                         <div>
                            <p className="font-bold text-gray-900">Immediate Security</p>
                            <p className="text-gray-600">Old keys instantly become useless, ensuring that previous owners, tenants, or employees no longer have access.</p>
                         </div>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="bg-trust-blue text-white p-2 rounded-lg mt-1"><Zap size={20} /></div>
                         <div>
                            <p className="font-bold text-gray-900">Key Consolidation</p>
                            <p className="text-gray-600">We can often rekey all your doors to work with a single key, eliminating the need for a bulky keychain.</p>
                         </div>
                      </li>
                   </ul>
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How it Works</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                   <p>Rekeying is a surgical procedure for your lock. Our technicians carefully remove the cylinder, dump the old tumblers (pins), and replace them with a new configuration that matches a fresh key.</p>
                   <p>This process renders all previously issued keys completely non-functional without the need to remove or replace the decorative lock body or internal latching mechanism.</p>
                   <div className="grid grid-cols-2 gap-4 pt-6">
                      {["Deadbolts", "Door Knobs", "Mortise Cylinders", "Rim Cylinders", "Padlocks", "Storefront Locks"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="text-safety-green flex-shrink-0" size={18} />
                          <span className="font-semibold">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Section 2: Residential */}
          <div className="mb-32">
             <div className="bg-trust-blue text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-400/10 -skew-x-12 translate-x-1/4"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                   <div>
                      <Home className="text-action-orange mb-8" size={64} />
                      <h2 className="text-3xl md:text-5xl font-bold mb-8">Residential Rekeying</h2>
                      <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                         Just moved to Bed-Stuy? Don't leave your safety to chance with old keys. We rekey entire homes and apartments in a single visit.
                      </p>
                      <ul className="space-y-4 mb-10">
                         {["Perfect for new homeowners", "Emergency service after key loss", "One-key convenience across all doors", "Includes lock cleaning & lubrication"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3">
                             <CheckCircle className="text-action-orange" size={24} />
                             <span className="text-lg font-bold">{item}</span>
                           </li>
                         ))}
                      </ul>
                      <a href="tel:(718)568-6597">
                        <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-12">Rekey My Home Now</Button>
                      </a>
                   </div>
                   <div className="bg-white p-10 rounded-3xl text-gray-900 shadow-xl self-center">
                      <h4 className="text-2xl font-bold mb-6">Home Rates</h4>
                      <div className="space-y-6">
                         <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                            <span className="font-semibold">Single Cylinder</span>
                            <span className="font-bold text-trust-blue">$50 - $75</span>
                         </div>
                         <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                            <span className="font-semibold">Whole House (4+ locks)</span>
                            <span className="font-bold text-trust-blue">Custom Discount</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold">Service Call Fee</span>
                            <span className="font-bold text-trust-blue">$29 - $49</span>
                         </div>
                      </div>
                      <div className="mt-8 p-4 bg-blue-50 rounded-xl text-sm text-blue-900 italic">
                         *Pricing varies by lock brand and security level.
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Section 3: Commercial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
             <div>
                <Building2 className="text-trust-blue mb-8" size={64} />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Commercial Master Key Systems</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   Managing a business requires granular control over who enters which space. We design and implement master key systems that simplify access while maintaining high security.
                </p>
                <div className="space-y-4 mb-8">
                   {[
                     "Grand Master systems for large buildings",
                     "Restricted keyways to prevent duplication",
                     "Immediate rekeying after employee turnover",
                     "Detailed access level mapping",
                     "High-security IC (Interchangeable) cores"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle className="text-trust-blue" size={20} />
                       <span className="font-semibold text-gray-800">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-8">Request Commercial Rekey</h3>
                <QuoteForm />
             </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-gray-400">Rekeying FAQ</h2>
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

      {/* CTA Section */}
      <section className="py-24 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Smart Security Starts with New Keys</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Protect your property without the high cost of replacement. Call Bed-Stuy's rekeying experts today.
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
              { name: "Lock Repair", href: "/services/lock-repair" },
              { name: "24-Hour Emergency Service", href: "/services/24-hour-emergency-locksmith" }
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
