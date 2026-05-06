import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Zap, AlertTriangle, Car, Home, Building2, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24-Hour Emergency Locksmith Bed-Stuy | Always Available 24/7',
  description: 'Fast 24/7 emergency locksmith in Bed-Stuy. Car, home, and business lockouts. 15-20 minute response time. No hidden fees. Call (718) 568-6597.',
};

export default function EmergencyLocksmithPage() {
  const faqs = [
    { q: "What's considered a locksmith emergency?", a: "Any situation where you are locked out, have a broken key in a lock, have a malfunctioning lock that prevents you from securing your property, or have experienced a break-in." },
    { q: "How much does emergency service cost?", a: "We provide transparent pricing. Emergency services typically start with a standard labor fee plus a small after-hours surcharge ($25-100) depending on the time, day, and holiday status." },
    { q: "How fast can you arrive?", a: "For emergency calls, our target response time is 15-20 minutes within Bed-Stuy and immediate surrounding areas." },
    { q: "Do you charge extra for nights or weekends?", a: "Yes, there is a modest $25-50 surcharge for services performed after 6 PM, on weekends, or during major holidays to cover on-call staffing costs." },
    { q: "Can you help with any emergency?", a: "Yes, we are equipped for automotive, residential, and commercial locksmith emergencies of all types." },
    { q: "What if I'm locked out with a child or pet inside?", a: "This is a priority-one emergency. We will dispatch the absolute nearest technician immediately and prioritize your arrival above all other calls." },
    { q: "Do you work on holidays?", a: "Yes, we are available 365 days a year, including Thanksgiving, Christmas, New Year's Day, and all other public holidays." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, cash, and mobile payments for your convenience." },
    { q: "Can you help with commercial emergencies?", a: "Yes, we provide emergency lockout and repair services for storefronts, offices, and warehouses 24/7." },
    { q: "What about emergency car lockouts?", a: "We provide 24/7 mobile automotive locksmithing, including trunk unlocks and key extractions." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-red-300 text-sm font-bold mb-8 border border-red-400/30">
            <Zap size={16} />
            <span>15-20 Minute Target Arrival</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            24-Hour Emergency <br />
            <span className="text-action-orange uppercase">Locksmith Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Locked out at 3 AM? Broken key on a Sunday? We're Bed-Stuy's true 24/7 emergency response team. Always awake, always ready.
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
                Request Help Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Bed-Stuy's Most Reliable 24/7 Response</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides 24/7 emergency locksmith services you can actually count on. Whether you're locked out of your car, home, or business, we're always available with a 15-20 minute emergency response time. We handle all types of emergencies—from lost keys to break-in repairs—with professional service and transparent pricing. No hidden fees, no "bait and switch" pricing, just honest help when you need it most.
            </p>
          </div>

          {/* Section 2: Types of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
             {[
               { title: "Car Lockout", icon: <Car className="text-trust-blue" size={40} />, desc: "Any time, any vehicle. We unlock trunks and doors without damage." },
               { title: "Home Lockout", icon: <Home className="text-trust-blue" size={40} />, desc: "Apartments, brownstones, and houses. Fast non-destructive entry." },
               { title: "Business Lockout", icon: <Building2 className="text-trust-blue" size={40} />, desc: "Secure storefront and office entry for any commercial property." },
               { title: "Broken Key Extraction", icon: <Zap className="text-action-orange" size={40} />, desc: "Quick removal of snapped keys from any cylinder or ignition." },
               { title: "Break-in Repairs", icon: <Shield className="text-safety-green" size={40} />, desc: "Immediate lock repair or replacement after a security compromise." },
               { title: "Urgent Lock Failure", icon: <AlertTriangle className="text-red-500" size={40} />, desc: "If your lock suddenly won't turn, we'll fix or replace it on the spot." }
             ].map((item, i) => (
               <Card key={i} className="p-10 border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
               </Card>
             ))}
          </div>

          {/* Section 3: Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Emergency Protocol</h2>
                <div className="space-y-8">
                   {[
                     { title: "Immediate Dispatch", desc: "The moment you call, our nearest mobile unit is pinged with your location." },
                     { title: "15-20 Min Arrival", desc: "We target a sub-20 minute arrival time for all emergency situations." },
                     { title: "Professional Diagnosis", desc: "Our technicians arrive in fully equipped marked vehicles to solve the problem on-site." },
                     { title: "Damage-Free Resolution", desc: "We prioritize non-destructive entry and repair techniques to save you money." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start">
                        <div className="w-10 h-10 bg-blue-50 text-trust-blue rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                           <p className="text-gray-600">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-8">Request Priority Help</h3>
                <QuoteForm />
             </div>
          </div>

          {/* Section 4: Surcharges */}
          <div className="mb-32">
             <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-action-orange/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                   <div>
                      <h2 className="text-3xl md:text-5xl font-bold mb-8">Transparent After-Hours Pricing</h2>
                      <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                         To maintain 24/7 staffing and rapid response times, we apply modest surcharges for services outside standard business hours.
                      </p>
                      <ul className="space-y-4">
                         <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" /> Standard Hours: 9 AM - 6 PM (No Surcharge)</li>
                         <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" /> After Hours: 6 PM - 9 AM (+$25-50)</li>
                         <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" /> Weekends: (+$25-50)</li>
                         <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" /> Major Holidays: (+$50-100)</li>
                      </ul>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm text-center">
                      <Clock size={64} className="text-action-orange mx-auto mb-8" />
                      <h4 className="text-2xl font-bold mb-4">Always Awake</h4>
                      <p className="text-blue-100 italic">"We are one of the few locksmiths in Brooklyn that actually answers the phone at 4 AM on Christmas morning."</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Section 7: FAQ */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-gray-400">Emergency FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">Rapid Response Zone</h2>
               <p className="text-gray-600">We serve Bed-Stuy and all surrounding neighborhoods within 20 minutes.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
               {["Bed-Stuy", "Crown Heights", "Williamsburg", "Bushwick", "Greenpoint", "Prospect Heights", "Astoria", "Long Island City"].map((loc, i) => (
                 <div key={i} className="flex items-center gap-2 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <MapPin className="text-trust-blue" size={18} />
                    <span className="font-bold text-gray-800">{loc}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Need a Locksmith Right Now?</h2>
          <p className="text-xl text-red-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't stay locked out. Our emergency units are on patrol and ready to assist you immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl shadow-2xl">
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
              { name: "Residential Lockouts", href: "/services/residential-lockout" },
              { name: "Automotive Services", href: "/services/automotive-locksmith" },
              { name: "Lock Repair", href: "/services/lock-repair" },
              { name: "Commercial Services", href: "/services/lock-installation" }
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
