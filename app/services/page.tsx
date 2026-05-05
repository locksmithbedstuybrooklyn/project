import Link from 'next/link';
import { services } from '@/lib/content';
import { Phone, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locksmith Services Bed-Stuy | Car, Residential, Commercial | 24/7',
  description: 'All locksmith services in Bed-Stuy: car unlock, key replacement, lock repair, lock installation, ignition repair, emergency service. Call (718) 568-6597.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Locksmith Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Complete locksmith solutions — car, home, and commercial. Available 24/7 for all your security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto">
                <Phone className="mr-2" size={20} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We offer complete locksmith solutions for cars, homes, and businesses. Whether you're locked out, need new locks, or have a broken lock, we handle it. Our <strong>24-hour locksmith</strong> team serves Bed-Stuy and surrounding areas with fast response and honest pricing. Every service includes professional expertise and guaranteed satisfaction.
            </p>
            <p>
              Your lock problems don't follow business hours. That's why we're available 24/7 for emergencies. We specialize in <strong>car lockouts</strong>, <strong>key replacement</strong>, <strong>ignition repair</strong>, <strong>residential lockouts</strong>, and <strong>lock services</strong>. From quick fixes to complete lock system upgrades, we do it all. Call (718) 568-6597 anytime.
            </p>
            <p>
              We combine speed with quality. Our technicians use modern tools and proven techniques. We respect your property and your time. Whether it's a <strong>lock replacement</strong>, <strong>lock repair</strong>, or <strong>lock installation</strong>, we deliver professional results. No job is too small or too complex.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <Card hover className="h-full border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 p-8">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-trust-blue transition-colors">{service.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-trust-blue font-bold gap-2">
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Automotive', 
                items: ['Car Lockout', 'Car Key Replacement', 'Ignition Repair', 'Automotive Locksmith'],
                icon: '🚗'
              },
              { 
                title: 'Residential', 
                items: ['Residential Lockout', 'Lock Replacement', 'Lock Repair', 'Lock Installation', 'Lock Rekeying'],
                icon: '🏠'
              },
              { 
                title: 'Commercial', 
                items: ['Commercial Locksmith', 'Office Lockout', 'Business Lock Solutions'],
                icon: '🏢'
              },
              { 
                title: 'Emergency', 
                items: ['24-Hour Locksmith', 'Emergency Lock Repair', 'Weekend Service'],
                icon: '🆘'
              }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-4xl mb-6">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-6 text-trust-blue">{cat.title} Services</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-action-orange rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Why Choose Our Services</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Fast response. Honest pricing. Professional results. We're not the cheapest, but we're the best value. We show up on time, do the job right, and charge fair rates. No hidden fees, no surprises. That's our promise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Licensed & Insured', icon: <Shield size={24} /> },
                  { title: '20-Min Arrival', icon: <Clock size={24} /> },
                  { title: 'Fair Pricing', icon: <CheckCircle size={24} /> },
                  { title: '24/7 Available', icon: <Phone size={24} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="text-action-orange">{item.icon}</div>
                    <span className="font-bold">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white text-trust-blue p-12 rounded-3xl shadow-2xl">
                <h3 className="text-4xl font-black mb-6">Need Help?</h3>
                <a href="tel:(718)568-6597" className="text-3xl font-bold text-action-orange hover:text-orange-600 transition-colors block mb-8">
                  (718) 568-6597
                </a>
                <Link href="/quote">
                  <Button variant="primary" size="large" className="w-full py-6 text-xl">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

