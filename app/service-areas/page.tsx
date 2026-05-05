import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, MapPin, Navigation } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Bed-Stuy Locksmith | 5-Mile Radius',
  description: 'Locksmith service areas: Bed-Stuy, Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, Long Island City.',
};

export default function ServiceAreasPage() {
  const primaryAreas = [
    { 
      name: 'Bed-Stuyvesant', 
      zips: '11221, 11213', 
      streets: ['Stuyvesant Avenue', 'Myrtle Avenue', 'Nostrand Avenue', 'Halsey Street', 'Madison Street', 'Marcy Avenue', 'Tompkins Avenue', 'Hancock Street']
    },
    { 
      name: 'Crown Heights', 
      zips: '11213, 11216', 
      streets: ['Nostrand Avenue', 'Utica Avenue', 'Franklin Avenue', 'Classon Avenue', 'Underhill Avenue', 'Prospect Place', 'St. Johns Place']
    },
    { 
      name: 'Prospect Heights', 
      zips: '11215', 
      streets: ['Vanderbilt Avenue', 'Flatbush Avenue', 'Classon Avenue', 'Underhill Avenue', 'Prospect Place', 'Sterling Place', 'St. Johns Place']
    }
  ];

  const extendedAreas = [
    { 
      name: 'Williamsburg', 
      zips: '11211, 11249', 
      streets: ['Bedford Avenue', 'North 6th Street', 'North 7th Street', 'North 8th Street', 'Wythe Avenue', 'Kent Avenue', 'East River Waterfront']
    },
    { 
      name: 'Greenpoint', 
      zips: '11222', 
      streets: ['Franklin Street', 'McGraw Avenue', 'Greenpoint Avenue', 'Noble Street', 'Calyer Street', 'Huron Street', 'Newtown Creek']
    },
    { 
      name: 'Bushwick', 
      zips: '11206, 11237', 
      streets: ['Knickerbocker Avenue', 'Myrtle Avenue', 'Wyckoff Avenue', 'Dekalb Avenue', 'Jefferson Street', 'Troutman Street', 'Cypress Avenue']
    },
    { 
      name: 'Astoria, Queens', 
      zips: '11369, 11370', 
      streets: ['Ditmars Boulevard', 'Steinway Street', '30th Avenue', 'Broadway', 'Astoria Park', 'Vernon Boulevard', '23rd Avenue']
    },
    { 
      name: 'Long Island City, Queens', 
      zips: '11101, 11109', 
      streets: ['Jackson Avenue', 'Queens Plaza', 'Greenpoint Avenue', 'Thomson Avenue', '44th Drive', '45th Avenue', 'Waterfront Park']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Navigation size={16} />
            <span>Serving Brooklyn & Queens 24/7</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our Service Areas <br />
            <span className="text-action-orange text-3xl md:text-5xl">20-Minute Response</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            We provide fast, professional locksmith services across Bedford-Stuyvesant and a 5-mile radius including major neighborhoods in Brooklyn and Queens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-8 py-4 text-lg font-bold">
                <Phone className="mr-2" size={20} />
                Call (718) 568-6597
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Service Area</h2>
              <p>
                We serve Bed-Stuyvesant and a 5-mile radius around it. This includes 8 neighborhoods across Brooklyn and Queens. Same fast response time everywhere. Same honest pricing. Same professional service.
              </p>
              <p>
                Being hyper-local means we know your neighborhood. We understand the buildings, the streets, the parking challenges. We're familiar with local lock types and security needs. When you call, you're calling neighbors who care about your community.
              </p>
              <p>
                Call (718) 568-6597 to confirm we serve your area. We're available 24/7. We respond within 20 minutes in most cases.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-center">
               <h3 className="text-2xl font-bold mb-6 text-gray-900">Average Response Time</h3>
               <div className="text-6xl font-black text-trust-blue mb-4">20</div>
               <p className="text-xl font-bold text-action-orange uppercase tracking-widest">Minutes or Less</p>
               <p className="mt-6 text-gray-600">Across our entire 5-mile service radius.</p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Primary Service Area (Bed-Stuy Core)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {primaryAreas.map((area, i) => (
                <Card key={i} className="p-8 border-gray-100 shadow-md">
                   <h3 className="text-xl font-bold text-trust-blue mb-2">{area.name}</h3>
                   <p className="text-sm text-gray-500 mb-6">{area.zips}</p>
                   <ul className="space-y-2">
                     {area.streets.map((street, si) => (
                       <li key={si} className="flex items-center gap-2 text-gray-600 text-sm">
                         <CheckCircle className="text-safety-green flex-shrink-0" size={14} />
                         <span>{street}</span>
                       </li>
                     ))}
                   </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Extended Service Area (5-Mile Radius)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedAreas.map((area, i) => (
                <Card key={i} className="p-8 border-gray-100 shadow-md">
                   <h3 className="text-xl font-bold text-trust-blue mb-2">{area.name}</h3>
                   <p className="text-sm text-gray-500 mb-6">{area.zips}</p>
                   <ul className="space-y-2">
                     {area.streets.map((street, si) => (
                       <li key={si} className="flex items-center gap-2 text-gray-600 text-sm">
                         <CheckCircle className="text-safety-green flex-shrink-0" size={14} />
                         <span>{street}</span>
                       </li>
                     ))}
                   </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">All Services Available Everywhere</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                  'Car Lockout', 'Car Key Replacement', 'Ignition Repair', 
                  'Residential Lockout', 'Lock Replacement', 'Lock Repair', 
                  'Lock Installation', '24-Hour Emergency'
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-100">
                    <CheckCircle className="text-action-orange flex-shrink-0" size={16} />
                    <span className="font-semibold text-sm">{service}</span>
                  </div>
                ))}
             </div>
             <div className="max-w-xl mx-auto text-left">
                <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Bed-Stuy Location', href: '/locations/bed-stuy' },
              { name: 'All Locations', href: '/locations' },
              { name: 'All Services', href: '/services' },
              { name: 'Contact Us', href: '/contact' }
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <Card hover className="p-8 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-4 text-sm">{link.name}</h3>
                  <div className="flex justify-between items-center text-trust-blue">
                    <ArrowRight size={20} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
