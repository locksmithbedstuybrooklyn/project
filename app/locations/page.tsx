import Link from 'next/link';
import { locations } from '@/lib/content';
import { MapPin, Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locksmith Service Areas | Bed-Stuy, Williamsburg, Greenpoint, Brooklyn',
  description: 'Locksmith service areas: Bed-Stuy, Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, Long Island City. 5-mile radius coverage.',
};

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Service Areas</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Local locksmith services in Bed-Stuy and surrounding neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto">
                <Phone className="mr-2" size={20} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full sm:w-auto">
                Check Availability
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We serve Bed-Stuyvesant and a 5-mile radius around it. This includes Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, and Long Island City. Same fast response time everywhere. Same honest pricing. Same professional service.
            </p>
            <p>
              Being Local means we know your neighborhood. We understand the buildings, the streets, the parking challenges. We're familiar with local lock types and security needs. When you call, you're calling neighbors who care about your community.
            </p>
            <p>
              Our service area covers approximately 8 neighborhoods across Brooklyn and Queens. We respond within 20 minutes in most cases. We're available 24/7, including nights, weekends, and holidays. Check your location below to confirm we serve your area.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link key={location.id} href={`/locations/${location.slug}`} className="group">
                <Card hover className="h-full border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 p-8">
                  <MapPin className="text-trust-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-trust-blue transition-colors">{location.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {location.description}
                  </p>
                  <div className="flex items-center text-trust-blue font-bold gap-2 text-sm">
                    <span>View Neighborhood Services</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center">Coverage Details by Zip Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Bed-Stuyvesant', zips: '11221, 11213' },
                { name: 'Crown Heights', zips: '11213, 11216' },
                { name: 'Prospect Heights', zips: '11215' },
                { name: 'Williamsburg', zips: '11211, 11249' },
                { name: 'Greenpoint', zips: '11222' },
                { name: 'Bushwick', zips: '11206, 11237' },
                { name: 'Astoria, Queens', zips: '11369, 11370' },
                { name: 'Long Island City', zips: '11101, 11109' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-bold text-gray-900">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.zips}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <p className="text-gray-600 font-semibold mb-6 flex items-center justify-center gap-2">
                <Clock className="text-trust-blue" size={20} />
                20-Minute Average Response Across All Zip Codes
              </p>
              <a href="tel:(718)568-6597">
                <Button variant="primary" size="large">
                  Call Now: (718) 568-6597
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Neighborhood?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We serve everything within a 5-mile radius of Bed-Stuy. If you're nearby, we can likely reach you in 20 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Shield className="text-action-orange" size={20} />
              <span className="font-bold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <MapPin className="text-action-orange" size={20} />
              <span className="font-bold">Local Experts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

