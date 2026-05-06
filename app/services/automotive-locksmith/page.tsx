import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Car, Key, Settings, Zap } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automotive Locksmith Services in Bed-Stuy | Car Keys & Lockouts',
  description: 'Professional car lockout, key replacement, and ignition repair services in Bed-Stuy. 24/7 mobile service, 20-minute response. Call (718) 568-6597.',
};

export default function AutomotiveLocksmithPage() {
  const faqs = [
    { q: "How long does car lockout service take?", a: "Typically 10-15 minutes once we arrive. Total time from call to access is usually 20-30 minutes." },
    { q: "Can you unlock any car?", a: "Yes, we can unlock all vehicle types and models from the 1990s to current year." },
    { q: "What if my key is broken?", a: "We can remove broken key pieces and create a new key. This typically takes 30-45 minutes." },
    { q: "How much does car key replacement cost?", a: "Standard keys: $50-100. Transponder keys: $100-200. Key fobs: $150-300." },
    { q: "Do you program transponder keys?", a: "Yes, we program all types of transponder keys on-site." },
    { q: "Can you help with lost car keys?", a: "Yes, we can create new keys even if you've lost all copies." },
    { q: "What's the difference between transponder and standard keys?", a: "Transponder keys have a microchip that communicates with your vehicle's security system. Standard keys are simple metal keys without electronics." },
    { q: "How long do car keys last?", a: "Well-made car keys typically last 5-10 years with normal use." },
    { q: "Can you make a spare key without the original?", a: "Yes, we can create spare keys using your vehicle identification number (VIN)." },
    { q: "What should I do if my ignition is stuck?", a: "Don't force it. Call us immediately at (718) 568-6597. Forcing it can break the key and damage the ignition." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-400/30">
            <Car size={16} />
            <span>Complete Automotive Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Automotive <br />
            <span className="text-action-orange uppercase">Locksmith Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Locked out? Lost keys? Ignition issues? Bed-Stuy's most trusted mobile automotive experts are available 24/7 to get you back on the road.
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
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Expert Care for Every Vehicle</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides comprehensive automotive locksmith services for all vehicle types. Whether you're locked out of your car, need a new key, or have ignition problems, our licensed professionals are available 24/7 with a 20-minute response guarantee. We serve Bed-Stuy and the surrounding 5-mile radius with damage-free solutions and transparent pricing.
            </p>
          </div>

          {/* Section 1: Car Lockout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="w-16 h-16 bg-blue-50 text-trust-blue rounded-2xl flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Car Lockout Services (Emergency)</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Car lockouts are one of the most common emergencies we handle. A car lockout occurs when you're unable to access your vehicle because the doors are locked. This can happen for several reasons: you accidentally locked your keys inside, you lost your keys, or the lock mechanism malfunctioned.
                </p>
                <p>
                  When you're locked out, stay calm and avoid attempting DIY solutions that might damage your vehicle. Don't try to force the door open or use makeshift tools—this can result in expensive repairs. Instead, call us immediately at <strong>(718) 568-6597</strong>.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "20-30 Minute Guaranteed Arrival",
                    "Damage-Free Unlocking Techniques",
                    "Verification of Identity & Ownership",
                    "All Makes & Models Serviced"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-safety-green mt-1 flex-shrink-0" size={20} />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2"></div>
              <Card className="relative z-10 p-10 border-gray-100 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Emergency Help</h3>
                <QuoteForm />
              </Card>
            </div>
          </div>

          {/* Section 2: Car Key Services */}
          <div className="mb-32">
            <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Car Key Replacement & Programming</h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Lost your keys or need a spare? We create high-quality replacement keys on-site for any vehicle, from vintage classics to the latest smart-fob systems.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Standard Keys", price: "$50-100" },
                      { title: "Transponder Keys", price: "$100-200" },
                      { title: "Key Fobs", price: "$150-300" },
                      { title: "Proximity Keys", price: "Custom Quote" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20">
                        <p className="font-bold mb-1">{item.title}</p>
                        <p className="text-action-orange font-black">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-action-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Key className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">On-Site Programming</h4>
                      <p className="text-blue-100">No need to tow your car to the dealership. We program chips and remotes right where you are.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-action-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">30-Day Guarantee</h4>
                      <p className="text-blue-100">All our keys are guaranteed to work perfectly. If there's an issue, we'll replace it free.</p>
                    </div>
                  </div>
                  <div className="pt-8">
                    <a href="tel:(718)568-6597">
                      <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-12">
                        Get New Keys Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Ignition Repair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
            <div className="order-2 lg:order-1">
              <Card className="p-10 border-gray-100 shadow-xl bg-gray-50">
                <h3 className="text-2xl font-bold mb-8">Ignition Service Rates</h3>
                <div className="space-y-4">
                  {[
                    { label: "Minor Repair & Cleaning", price: "$100-300" },
                    { label: "Cylinder Replacement", price: "$200-400" },
                    { label: "Switch Replacement", price: "$300-500" },
                    { label: "Emergency After-Hours", price: "+$25-50" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0">
                      <span className="font-semibold text-gray-700">{item.label}</span>
                      <span className="font-bold text-trust-blue">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-blue-100 rounded-2xl text-blue-900 text-sm">
                  <p className="font-bold mb-2">💡 Pro Tip:</p>
                  If your key won't turn, don't force it! Forcing it can break the internal pins or the key itself, turning a simple repair into a full replacement.
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-blue-50 text-trust-blue rounded-2xl flex items-center justify-center mb-6">
                <Settings size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ignition Repair & Replacement</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Ignition problems are more serious than simple lockouts. Your ignition system is crucial for starting and running your vehicle safely. Common issues include keys that won't turn, keys stuck in the cylinder, or a complete failure of the ignition switch.
                </p>
                <p>
                  Our technicians diagnose these problems by examining the cylinder, testing the electrical switch, and checking for mechanical wear. We carry replacement parts for major brands and can often resolve the issue in a single visit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {[
                    "Stuck Key Extraction",
                    "Ignition Cylinder Repair",
                    "Switch Replacement",
                    "Electrical Diagnosis",
                    "Worn Key Refurbishing",
                    "System Testing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-safety-green" size={18} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Vehicle Types */}
          <div className="text-center mb-32">
            <h2 className="text-3xl font-bold mb-12">Vehicles We Service</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {["Sedans", "SUVs", "Trucks", "Luxury Cars", "Classic Cars", "Motorcycles"].map((v, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-trust-blue transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-trust-blue group-hover:text-white transition-colors">
                    <Car size={24} />
                  </div>
                  <p className="font-bold text-gray-900">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-gray-500 font-medium italic">
              We work with all major brands including Toyota, Honda, Ford, Chevy, BMW, Mercedes, Audi, Lexus, and more.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16">Automotive Locksmith FAQ</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { title: "15+ Years Exp", icon: <Shield size={32} /> },
              { title: "20-Min Arrival", icon: <Clock size={32} /> },
              { title: "Damage-Free", icon: <Zap size={32} /> },
              { title: "Transparent Pricing", icon: <Settings size={32} /> }
            ].map((item, i) => (
              <div key={i} className="text-center p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="text-trust-blue mb-6 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Back on the Road?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't stay stranded. Call Bed-Stuy's fastest automotive locksmith experts now for immediate, professional help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-12 py-6 text-xl">
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
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-10">Related Resources</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Lock Replacement Guide", href: "/services/lock-replacement" },
              { name: "Lock Repair Guide", href: "/services/lock-repair" },
              { name: "24-Hour Emergency Service", href: "/services/24-hour-emergency-locksmith" },
              { name: "Bed-Stuy Locksmith Guide", href: "/blog/bed-stuy-locksmith-guide" }
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
