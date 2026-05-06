import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Home, Zap, AlertTriangle, Key, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Residential Lockout Services | Bed-Stuy | Fast 24/7 Entry',
  description: 'Locked out of your home or apartment in Bed-Stuy? Fast, damage-free entry. 20-minute response guarantee. Available 24/7. Call (718) 568-6597.',
};

export default function ResidentialLockoutPage() {
  const faqs = [
    { q: "How much does residential lockout service cost?", a: "Standard residential lockouts typically cost between $75-150. Pricing depends on the type of lock (e.g., high-security vs. standard) and the time of day." },
    { q: "How long until you arrive?", a: "We guarantee a 20-30 minute arrival time anywhere in Bed-Stuy and the surrounding 5-mile radius." },
    { q: "Can you unlock any residential lock?", a: "Yes, we can unlock standard deadbolts, door knobs, mortise locks, high-security cylinders, and even smart locks with backup mechanical overrides." },
    { q: "What if I don't have ID?", a: "We are legally required to verify that you have the right to enter the property. If your ID is inside, we can often verify ownership via neighbors, building management, or by checking the ID immediately upon entry." },
    { q: "Do you damage the door?", a: "No. We use professional non-destructive entry techniques such as picking, bypassing, or shimming. We only drill as a last resort on high-security locks, and even then, only with your permission." },
    { q: "Can you help with apartment lockouts?", a: "Yes, we help with apartment lockouts daily. We work with all types of apartment door locks common in Brooklyn brownstones and modern buildings." },
    { q: "What about sliding door lockouts?", a: "Yes, we can safely unlock sliding patio doors using specialized tools that don't damage the track or glass." },
    { q: "Can you help if I'm locked out with a child inside?", a: "YES. This is an absolute emergency. Call us and tell the operator there is a child inside—we will prioritize your call above all others and dispatch the nearest unit immediately." },
    { q: "Do you offer 24/7 service?", a: "Yes, we are available 24 hours a day, 7 days a week, including all holidays." },
    { q: "Can you make a spare key on the spot?", a: "Yes, once we get you inside, we can create spare keys or even rekey the lock if you lost your keys and are worried about someone else finding them." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-400/30">
            <Home size={16} />
            <span>24/7 Home Access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Residential <br />
            <span className="text-action-orange uppercase">Lockout Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Locked out of your home or apartment? Don't panic. Bed-Stuy's fastest emergency locksmiths are ready to get you back inside safely and without damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:(718)568-6597" className="w-full sm:w-auto">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full text-lg font-bold py-6 px-10 shadow-2xl animate-pulse">
                <Phone className="mr-2" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full text-lg py-6 px-10 backdrop-blur-sm">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Fast, Reliable, Damage-Free Entry</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides professional residential lockout services. Whether you're locked out of your brownstone, apartment, or modern condo, we provide fast, non-destructive entry with a 20-minute response guarantee. We're available 24/7 with transparent pricing and professional, licensed technicians who understand the urgency of getting you back into your home.
            </p>
          </div>

          {/* Section 1 & 2: Scenarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Home Entry Experts</h2>
                <div className="space-y-6">
                   <p className="text-lg text-gray-600">We handle all types of residential entry points and lock mechanisms found across Brooklyn:</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Apartment Door Entry",
                        "Brownstone Front Doors",
                        "Sliding Patio Doors",
                        "Garage Door Locks",
                        "Keyless/Smart Locks",
                        "Window Lock Issues"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                          <CheckCircle className="text-safety-green" size={20} />
                          <span className="font-bold text-gray-800">{item}</span>
                        </div>
                      ))}
                   </div>
                   <div className="p-8 bg-blue-50 border-l-4 border-trust-blue rounded-r-2xl mt-8">
                      <p className="text-blue-900 italic font-medium leading-relaxed">
                         "Lost my keys at 1 AM. They were here in 15 minutes and got me in without changing the lock. Professional and fair price!" — <span className="font-bold">Maria R., Bed-Stuy</span>
                      </p>
                   </div>
                </div>
             </div>
             <div className="relative">
                <Card className="p-10 border-gray-100 shadow-2xl relative z-10">
                   <h3 className="text-2xl font-bold mb-8">Need Help Now?</h3>
                   <QuoteForm />
                </Card>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-action-orange/10 rounded-full blur-2xl"></div>
             </div>
          </div>

          {/* Section 3: Emergency Situations */}
          <div className="mb-32">
             <div className="bg-red-600 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                   <div>
                      <AlertTriangle size={64} className="mb-8" />
                      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance uppercase tracking-tight">Critical Emergency?</h2>
                      <p className="text-xl mb-10 leading-relaxed text-red-50">
                         Is there a child or elderly person locked inside? Are your stove or appliances on? This is a priority one emergency.
                      </p>
                      <a href="tel:(718)568-6597">
                        <Button size="large" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl">
                          Priority Dispatch: (718) 568-6597
                        </Button>
                      </a>
                   </div>
                   <div className="bg-black/10 border border-white/20 p-10 rounded-3xl backdrop-blur-md">
                      <h4 className="text-2xl font-bold mb-6">Our Emergency Protocol</h4>
                      <ul className="space-y-4">
                         <li className="flex items-center gap-3"><Zap size={20} className="text-action-orange" /> Nearest tech diverted immediately</li>
                         <li className="flex items-center gap-3"><Zap size={20} className="text-action-orange" /> 15-minute target arrival</li>
                         <li className="flex items-center gap-3"><Zap size={20} className="text-action-orange" /> Real-time location tracking</li>
                         <li className="flex items-center gap-3"><Zap size={20} className="text-action-orange" /> Guaranteed entry within minutes</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* Section 5: What to do */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                   {[
                     { step: "01", title: "Stay Calm & Call", desc: "Don't try to break in. Call us at (718) 568-6597 and explain your situation." },
                     { step: "02", title: "Verify Residence", desc: "Have your ID or proof of residency ready for when our technician arrives." },
                     { step: "03", title: "Wait in Safety", desc: "Wait for our marked vehicle. We'll arrive in 20-30 minutes and begin entry immediately." },
                     { step: "04", title: "Reset & Secure", desc: "Once inside, we can make spare keys or rekey your locks if keys were lost." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="text-4xl font-black text-blue-200">{item.step}</span>
                        <div>
                           <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                           <p className="text-gray-600">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Do When Locked Out</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   Getting locked out is stressful, but taking the wrong steps can make it much worse. Modern locks and doors are expensive to repair if forced incorrectly.
                </p>
                <div className="flex items-center gap-4 p-6 bg-action-orange/5 rounded-2xl border border-action-orange/20 mb-8">
                   <Shield className="text-action-orange flex-shrink-0" size={32} />
                   <p className="text-gray-800 font-medium italic">"Attempting to pick your own lock with hairpins or screwdrivers can permanently damage the cylinder, requiring a full replacement instead of a simple unlock."</p>
                </div>
                <Link href="/blog/emergency-locksmith-tips">
                  <Button variant="outline" className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white">View Full Lockout Tips</Button>
                </Link>
             </div>
          </div>

          {/* Section 6: Process */}
          <div className="bg-gray-50 p-12 md:p-20 rounded-[3rem] mb-32">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">Why We Are Bed-Stuy's #1 Choice</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "20-Min Arrival", icon: <Clock size={32} /> },
                  { title: "Damage-Free", icon: <Shield size={32} /> },
                  { title: "Marked Vans", icon: <MapPin size={32} /> },
                  { title: "Licensed Pros", icon: <Key size={32} /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl text-center border border-gray-100 shadow-sm">
                     <div className="text-trust-blue mb-6 flex justify-center">{item.icon}</div>
                     <h4 className="font-bold text-gray-900 uppercase tracking-tighter">{item.title}</h4>
                  </div>
                ))}
             </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-gray-400">Lockout FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="group">
                  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Don't Wait in the Cold</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Call Bed-Stuy's most reliable residential lockout specialists now. We'll have you back inside in no time.
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
              { name: "Automotive Locksmith", href: "/services/automotive-locksmith" }
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
