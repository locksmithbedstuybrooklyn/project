import Link from 'next/link';
import { services } from '@/lib/content';
import { Phone, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';

import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Expert Locksmith Services',
  description: 'All locksmith services in Bed-Stuy: car unlock, key replacement, lock repair, lock installation, ignition repair, emergency service. Call (718) 568-6597.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/services' },
  openGraph: {
    title: 'Expert Locksmith Services | Bed-Stuy Locksmith',
    description: 'All locksmith services in Bed-Stuy: car unlock, key replacement, lock repair, lock installation, ignition repair, emergency service. Call (718) 568-6597.',
    url: 'https://www.locksmithbedstuy.com/services',
    siteName: 'Bed-Stuy Locksmith',
    type: 'website',
    images: [{ url: 'https://www.locksmithbedstuy.com/images/og-image.webp', width: 1200, height: 630, alt: 'Bed-Stuy Locksmith - Expert Emergency Service in Brooklyn' }],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-action-orange/20 border border-action-orange/30 px-4 py-2 rounded-full mb-8">
            <Shield size={16} className="text-action-orange" />
            <span className="text-action-orange text-sm font-black uppercase italic tracking-widest">Licensed NYC #2103442</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Comprehensive <br /> <span className="text-action-orange">Security Solutions</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Your One-Stop Solution for All Lock and Security Needs. We provide reliable, efficient, and high-quality locksmithing for home, business, and vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto text-2xl py-10 px-16 rounded-2xl shadow-2xl hover:scale-105 transition-all uppercase italic font-black">
                <Phone className="mr-3" size={28} />
                (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full sm:w-auto text-2xl py-10 px-16 rounded-2xl backdrop-blur-md hover:scale-105 transition-all uppercase italic font-black">
                Get Expert Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-32">
          <div className="space-y-12 text-2xl text-gray-700 leading-relaxed font-medium">
            <p>
              At Locksmith Bed Stuy, we pride ourselves on offering a complete range of professional locksmith services designed to secure your home, business, and vehicle. Serving Bed-Stuy and the wider Brooklyn area, our team of licensed and experienced technicians is dedicated to providing reliable, efficient, and high-quality security solutions.
            </p>
            <p className="border-l-8 border-trust-blue pl-12 text-left italic bg-blue-50 py-12 rounded-r-3xl">
              "We understand that security is paramount, and our goal is to deliver peace of mind through exceptional service. Whether you're facing an emergency lockout, planning a security upgrade, or need routine maintenance, we have the expertise and technology to meet your needs."
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <Card hover className="h-full border-gray-100 shadow-xl group-hover:shadow-[0_20px_50px_rgba(30,58,138,0.15)] transition-all duration-700 p-12 bg-white relative overflow-hidden rounded-[3rem]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 group-hover:bg-trust-blue transition-all duration-700 rounded-bl-full -mr-12 -mt-12 opacity-30"></div>
                  <div className="text-7xl mb-10 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 inline-block">{service.icon}</div>
                  <h2 className="text-3xl font-black mb-6 text-gray-900 group-hover:text-trust-blue transition-colors uppercase tracking-tight italic leading-tight">{service.name}</h2>
                  <p className="text-gray-600 mb-10 leading-relaxed text-xl font-medium">
                    {service.description}
                  </p>
                  <div className="flex items-center text-trust-blue font-black gap-2 group-hover:gap-6 transition-all uppercase text-sm italic tracking-widest">
                    <span>Explore Pillar Guide</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 border-t border-gray-100">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6 uppercase italic tracking-tighter">Technical Service Pillars</h2>
            <p className="text-xl text-gray-500 font-medium italic">Comprehensive Expertise for Every Security Scenario</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: 'Residential',
                desc: 'Protecting your home and family with tailored security solutions.',
                items: ['Emergency Lockouts', 'Lock Installation', 'Replacement', 'Rekeying', 'Security Audits'],
                icon: '🏠'
              },
              {
                title: 'Commercial',
                desc: 'Safeguarding business assets with high-security infrastructure.',
                items: ['High-Security Locks', 'Access Control', 'Master Key Systems', 'Panic Bars', 'Safe Services'],
                icon: '🏢'
              },
              {
                title: 'Automotive',
                desc: 'Rapid mobile solutions to get you back on the road safely.',
                items: ['Car Lockouts', 'Key Programming', 'Ignition Repair', 'Fob Replacement', 'Key Extraction'],
                icon: '🚗'
              },
              {
                title: 'Emergency',
                desc: 'Immediate 24/7 response for all urgent security breaches.',
                items: ['20-Min Arrival', 'Anytime/Anywhere', 'Post-Break-in Repair', 'Licensed Dispatch', 'Fair Pricing'],
                icon: '🚨'
              }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl hover:shadow-trust-blue/10 transition-all group">
                <div className="text-5xl mb-8 transform group-hover:scale-125 transition-transform duration-500">{cat.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-trust-blue uppercase italic tracking-tight">{cat.title}</h3>
                <p className="text-gray-500 mb-8 font-medium italic text-sm leading-relaxed">{cat.desc}</p>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-800 font-bold text-sm uppercase italic tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-safety-green"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none uppercase italic tracking-tighter">
                Dense <br />
                Security <br />
                <span className="text-action-orange italic">Authority.</span>
              </h2>
              <p className="text-2xl text-blue-100 mb-12 leading-relaxed max-w-xl font-medium italic">
                We combine technical mastery with local Brooklyn response times. Our consolidated service model ensures you receive the most thorough security evaluation possible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { title: 'Licensed & Insured', icon: <Shield size={36} /> },
                  { title: '20-Min Response', icon: <Clock size={36} /> },
                  { title: 'Fixed Rate Pricing', icon: <CheckCircle size={36} /> },
                  { title: '24/7 Expert Staff', icon: <Phone size={36} /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-6 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="text-action-orange group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="font-black uppercase italic text-xl tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-action-orange/20 rounded-full blur-[100px] opacity-30"></div>
              <div className="bg-white text-trust-blue p-16 rounded-[4rem] shadow-2xl relative z-10 border border-white/20">
                <h3 className="text-4xl font-black mb-10 uppercase italic tracking-tighter">Request Expert Service</h3>
                <div className="mb-12 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <p className="text-gray-700 font-bold text-xl leading-relaxed italic">
                    "I needed multiple locks rekeyed and a new smart lock installed. They handled it all in one visit and explained everything clearly. Truly professional."
                  </p>
                  <p className="mt-6 font-black text-trust-blue text-lg">— David L., Williamsburg</p>
                </div>
                <Link href="/quote">
                  <Button variant="primary" size="large" className="w-full py-10 text-3xl font-black uppercase italic bg-action-orange hover:bg-orange-600 rounded-3xl shadow-xl">
                    Get Free Quote
                  </Button>
                </Link>
                <div className="text-center mt-12">
                  <p className="text-gray-400 font-black uppercase tracking-widest text-xs mb-4">Immediate Emergency Line</p>
                  <a href="tel:(718)568-6597" className="text-trust-blue font-black text-4xl hover:text-orange-600 transition-colors italic tracking-tighter">
                    (718) 568-6597
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


