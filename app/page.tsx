import Link from 'next/link';

export const runtime = 'edge';

import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { services, testimonials, locations } from '@/lib/content';
import { Phone, CheckCircle, Clock, Shield, Star, ArrowRight, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Unlock Service NYC | 24/7 Emergency Locksmith | Bed-Stuy',
  description: 'Fast car unlock & locksmith service in Bed-Stuy, Brooklyn. 24/7 emergency response, 20-minute arrival. Licensed, insured, transparent pricing. Call (718) 568-6597.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
                <Clock size={16} />
                <span>20-Minute Response • Available 24/7</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Emergency Locksmith <br />
                <span className="text-action-orange">Bed-Stuy, Brooklyn</span>
              </h1>
              <div className="space-y-4 text-xl md:text-2xl mb-10 text-blue-100/90 leading-relaxed max-w-xl">
                <p>
                  When you're locked out of your car in Bed-Stuy, Williamsburg, or Greenpoint, every minute matters. Our <strong>emergency locksmith</strong> team responds within 20 minutes, 24/7.
                </p>
                <p className="hidden md:block text-lg opacity-90">
                  We handle <strong>car lockouts</strong>, <strong>key replacement</strong>, and <strong>ignition repair</strong> with professional expertise. Licensed and insured, we use non-destructive techniques on all vehicle types.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <a href="tel:(718)568-6597" className="w-full sm:w-auto">
                  <Button variant="primary" size="large" className="w-full bg-action-orange hover:bg-orange-600 text-lg py-6 shadow-xl shadow-orange-900/20">
                    <Phone className="mr-2 fill-current" size={24} />
                    Call Now: (718) 568-6597
                  </Button>
                </a>
                <Link href="/quote" className="w-full sm:w-auto">
                  <Button variant="secondary" size="large" className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white text-lg py-6">
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">4.9/5</span>
                  <span className="text-blue-300 text-sm">Google Rating</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">15+</span>
                  <span className="text-blue-300 text-sm">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">24/7</span>
                  <span className="text-blue-300 text-sm">Emergency Support</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
              <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                  <div className="bg-action-orange p-2 rounded-lg">
                    <Shield size={24} className="text-white" />
                  </div>
                  Get an Instant Quote
                </h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-y border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">✓ LICENSED & INSURED</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">✓ 24/7 EMERGENCY</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">✓ 20-MIN ARRIVAL</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">✓ HONEST PRICING</div>
          </div>
        </div>
      </div>

      {/* About Section - Incorporating Batch 1 Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We've served Bed-Stuy residents for over a decade with honest pricing and fast service. No hidden fees, no surprises. From <strong>residential lockouts</strong> to <strong>lock replacement</strong>, we solve your problems quickly. Our technicians are trained on modern lock systems and security technology.
                </p>
                <p>
                  Trust matters in the locksmith business. We're available nights, weekends, and holidays. Our customers depend on us because we deliver results. Whether you need <strong>emergency lock repair</strong> or <strong>lock installation</strong>, we're ready. We stand behind our work with guaranteed satisfaction.
                </p>
                <div className="pt-4">
                  <Link href="/about" className="text-trust-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More About Us <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm relative">
                  <div className="absolute -top-4 -left-4 bg-action-orange text-white p-4 rounded-2xl shadow-lg font-bold">
                    Since 2010
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Service in Bed-Stuy</h3>
                  <ul className="space-y-4">
                    {[
                      'Licensed & Insured Technicians',
                      '24/7 Emergency Response',
                      '20-Minute Average Arrival',
                      'Transparent, Honest Pricing',
                      'Non-Destructive Techniques',
                      'All Vehicle Types Supported',
                      'Bed-Stuy Local Since 2010',
                      '4.9-Star Customer Rating'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 font-semibold text-gray-800">
                        <CheckCircle className="text-safety-green" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting back on the road or into your home is as easy as 1-2-3.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                step: '1', 
                title: 'Call (718) 568-6597 or Request Quote Online', 
                desc: 'Tell us your location, vehicle type, and the issue. We ask basic details to prepare.' 
              },
              { 
                step: '2', 
                title: 'Technician Dispatched Immediately', 
                desc: 'Our nearest 24-hour locksmith heads to you. You\'ll get a text with arrival time.' 
              },
              { 
                step: '3', 
                title: 'Problem Solved, You\'re Back on the Road', 
                desc: 'We unlock your car safely. Pay with cash or card. Get a receipt.' 
              }
            ].map((item, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-300">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer complete locksmith solutions for cars, homes, and businesses across Brooklyn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 9).map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <Card hover className="h-full border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 p-8">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-trust-blue transition-colors">{service.name}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-trust-blue font-bold gap-2">
                    <span>Explore Service</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Your Neighbors Say</h2>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="fill-yellow-400 text-yellow-400" size={24} />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { author: 'Maria R.', location: 'Bed-Stuy', content: 'Locked out of my car on Saturday night. They arrived in 18 minutes. Professional, quick, fair price. Highly recommend.', rating: 5 },
              { author: 'James T.', location: 'Williamsburg', content: 'Called for a residential lockout. Courteous, quick, no door damage. Will call again.', rating: 5 },
              { author: 'David L.', location: 'Greenpoint', content: 'Best locksmith in Brooklyn. Fast response, honest pricing, they know what they\'re doing.', rating: 5 }
            ].map((t, index) => (
              <Card key={index} className="bg-white border-none p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center font-bold text-trust-blue">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Neighborhood Coverage</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We serve Bed-Stuyvesant, Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, and Long Island City. All areas within 5 miles of Bed-Stuy. Same fast response time everywhere.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc) => (
                  <Link key={loc.id} href={`/locations/${loc.slug}`} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-trust-blue hover:text-trust-blue transition-all">
                    <MapPin size={18} />
                    <span className="font-semibold">{loc.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-blue-900 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-white p-8 text-center relative">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <MapPin size={64} className="mb-6 text-action-orange" />
               <h3 className="text-2xl font-bold mb-4">Available Everywhere in Brooklyn</h3>
               <p className="text-blue-100">Our 24/7 mobile units are always nearby.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-action-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Need Help Right Now?</h2>
          <p className="text-xl mb-10 text-orange-100 leading-relaxed">
            Don't wait. Call (718) 568-6597 for immediate emergency service. We respond in 20 minutes or less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:(718)568-6597">
                <Button className="bg-white text-action-orange hover:bg-orange-50 font-bold text-xl px-12 py-6">
                  Call Now: (718) 568-6597
                </Button>
             </a>
             <Link href="/quote">
                <Button className="bg-trust-blue text-white hover:bg-blue-800 font-bold text-xl px-12 py-6">
                  Request Online Quote
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

