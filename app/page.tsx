import Link from 'next/link';

export const runtime = 'edge';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { services, testimonials, locations, faqs } from '@/lib/content';
import { Phone, CheckCircle, Clock, Shield, Star, ArrowRight, MapPin } from 'lucide-react';

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
                Trusted Locksmith <br />
                <span className="text-action-orange">Bed-Stuy, Brooklyn</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100/90 leading-relaxed max-w-xl">
                Fast, professional emergency locksmith services. Car lockouts, key replacement, and residential security since 2010.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <a href="tel:(718)568-6597" className="w-full sm:w-auto">
                  <Button variant="primary" size="large" className="w-full bg-action-orange hover:bg-orange-600 text-lg py-6 shadow-xl shadow-orange-900/20">
                    <Phone className="mr-2 fill-current" size={24} />
                    (718) 568-6597
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
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
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
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">LICENSED</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">INSURED</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">BONDED</div>
            <div className="flex items-center gap-2 font-bold text-xl text-gray-400 italic">24/7 SERVICE</div>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-bold text-trust-blue uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expert Locksmith Services</h3>
            <p className="text-lg text-gray-600">
              Whether you're locked out of your car, need new home locks, or have a business security emergency, our team is ready to help 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <Card hover className="h-full border-none shadow-md group-hover:shadow-xl transition-all duration-300 p-8">
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
          
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="secondary" className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white px-10">
                View All 50+ Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-trust-blue text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-400/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Why Bed-Stuy Chooses <br /> Our Locksmith Team
              </h2>
              <div className="space-y-8">
                {[
                  { title: '20-Minute Response', desc: 'We know Bed-Stuy streets. We arrive faster because we are local.', icon: <Clock /> },
                  { title: 'No Hidden Fees', desc: 'Transparent pricing. You get a firm quote before any work begins.', icon: <Shield /> },
                  { title: 'Licensed Professionals', desc: 'Fully licensed, insured, and background-checked technicians.', icon: <CheckCircle /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-blue-500/30 p-3 rounded-2xl h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-blue-100/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-4 shadow-2xl rotate-2">
               {/* This would be an image of a happy customer or technician */}
               <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-6xl">🛠️</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Your Neighbors Say</h2>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="fill-yellow-400 text-yellow-400" size={24} />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <Card key={t.id} className="bg-gray-50 border-none p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.content}"</p>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Neighborhood Coverage</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are based in Bed-Stuy and serve a 5-mile radius including all surrounding neighborhoods. Wherever you are, we're your local locksmith.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc) => (
                  <Link key={loc.id} href={`/locations/${loc.slug}`} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-trust-blue hover:text-trust-blue transition-all">
                    <MapPin size={18} />
                    <span className="font-semibold">{loc.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center text-gray-400">
               <span className="text-6xl">📍</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-action-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Need a Locksmith Right Now?</h2>
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
