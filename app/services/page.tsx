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
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">
            Professional <span className="text-action-orange">Locksmith Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Consolidated expertise for every security need. We provide comprehensive, high-authority locksmith solutions for cars, homes, and businesses across Bed-Stuy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto text-xl py-8 px-12">
                <Phone className="mr-3" size={24} />
                (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full sm:w-auto text-xl py-8 px-12 backdrop-blur-md">
                Request Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
            <p>
              In a world of thin information and fragmented service providers, Bed-Stuy Locksmith stands as a pillar of reliability and expertise. We have consolidated our services into <strong>comprehensive service hubs</strong>, ensuring you get all the information and expert care you need in one place.
            </p>
            <p>
              Whether you're facing an emergency lockout at 2 AM, looking to upgrade your home to a smart lock system, or need a complex master key system for your business, our licensed technicians deliver <strong>dense, expert-level solutions</strong>. We don't just fix locks; we optimize security.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <Card hover className="h-full border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 p-10 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 group-hover:bg-trust-blue transition-colors rounded-bl-full -mr-8 -mt-8 opacity-20"></div>
                  <div className="text-6xl mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 inline-block">{service.icon}</div>
                  <h2 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-trust-blue transition-colors uppercase tracking-tight italic">{service.name}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="flex items-center text-trust-blue font-black gap-2 group-hover:gap-4 transition-all uppercase text-sm">
                    <span>View Pillar Guide</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 border-t border-gray-100">
          <h2 className="text-3xl font-black text-center mb-16 uppercase italic">Our Service Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Automotive', 
                items: ['Car Lockouts', 'Key Replacement', 'Ignition Repair', 'Programming'],
                icon: '🚗'
              },
              { 
                title: 'Residential', 
                items: ['Home Lockouts', 'Installation', 'Replacement', 'Rekeying'],
                icon: '🏠'
              },
              { 
                title: 'Commercial', 
                items: ['Master Keys', 'Access Control', 'Mortise Locks', 'High-Security'],
                icon: '🏢'
              },
              { 
                title: 'Emergency', 
                items: ['24/7 Response', 'Break-in Repairs', 'Key Extractions', 'Weekend Help'],
                icon: '🚨'
              }
            ].map((cat, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-6">{cat.icon}</div>
                <h3 className="text-xl font-black mb-6 text-trust-blue uppercase italic">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 font-semibold">
                      <CheckCircle className="text-safety-green flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
                Maximum Security <br />
                Minimum Hassle
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-xl">
                We combine technical mastery with hyper-local response times. Our consolidated service model ensures that you receive the most thorough security evaluation possible, every time we visit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Licensed & Insured', icon: <Shield size={32} /> },
                  { title: '20-Min Arrival', icon: <Clock size={32} /> },
                  { title: 'Fixed Pricing', icon: <CheckCircle size={32} /> },
                  { title: '24/7 Expert Staff', icon: <Phone size={32} /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-action-orange">{item.icon}</div>
                    <span className="font-black uppercase italic text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-action-orange rounded-[3rem] blur-3xl opacity-20"></div>
               <div className="bg-white text-trust-blue p-12 rounded-[3rem] shadow-2xl relative z-10">
                 <h3 className="text-3xl font-black mb-8 uppercase italic tracking-tight">Request Service</h3>
                 <div className="mb-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <p className="text-gray-600 font-medium leading-relaxed italic">
                      "I needed multiple locks rekeyed and a new smart lock installed. They handled it all in one visit and explained everything clearly. Truly professional."
                    </p>
                    <p className="mt-4 font-black text-trust-blue">— David L., Williamsburg</p>
                 </div>
                 <Link href="/quote">
                   <Button variant="primary" size="large" className="w-full py-8 text-2xl font-black uppercase italic bg-action-orange hover:bg-orange-600">
                     Get Free Quote
                   </Button>
                 </Link>
                 <a href="tel:(718)568-6597" className="block text-center mt-8 text-xl font-black hover:text-orange-600 transition-colors">
                    (718) 568-6597
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


