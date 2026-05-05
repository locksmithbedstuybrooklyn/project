import Link from 'next/link';
import { locations, services } from '@/lib/content';

export const metadata = {
  title: 'Service Areas | Bed-Stuy Locksmith | 5-Mile Radius Coverage',
  description: 'Locksmith service areas: Bed-Stuy, Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, Long Island City. 20-minute response.',
};

const areaDetails = [
  { name: 'Bed-Stuyvesant', zip: '11221, 11213', streets: ['Stuyvesant Ave', 'Myrtle Ave', 'Nostrand Ave', 'Halsey St', 'Madison St', 'Marcy Ave'] },
  { name: 'Crown Heights', zip: '11213, 11216', streets: ['Nostrand Ave', 'Utica Ave', 'Franklin Ave', 'Classon Ave', 'Underhill Ave', 'Prospect Place'] },
  { name: 'Prospect Heights', zip: '11215', streets: ['Vanderbilt Ave', 'Flatbush Ave', 'Classon Ave', 'Sterling Place', 'St. Johns Place'] },
  { name: 'Williamsburg', zip: '11211, 11249', streets: ['Bedford Ave', 'North 6th St', 'Wythe Ave', 'Kent Ave', 'East River Waterfront'] },
  { name: 'Greenpoint', zip: '11222', streets: ['Franklin St', 'McGraw Ave', 'Greenpoint Ave', 'Noble St', 'Calyer St'] },
  { name: 'Bushwick', zip: '11206, 11237', streets: ['Knickerbocker Ave', 'Myrtle Ave', 'Wyckoff Ave', 'Jefferson St', 'Troutman St'] },
  { name: 'Astoria, Queens', zip: '11369, 11370', streets: ['Ditmars Blvd', 'Steinway St', '30th Ave', 'Broadway', 'Vernon Blvd'] },
  { name: 'Long Island City, Queens', zip: '11101, 11109', streets: ['Jackson Ave', 'Queens Plaza', 'Thomson Ave', '44th Drive', '45th Ave'] },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We serve Bed-Stuy and an 8-neighborhood, 5-mile radius. Same fast response. Same fair pricing. Everywhere.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">Being hyper-local means we know your neighborhood — the buildings, streets, and parking challenges. When you call, you're calling neighbors who care.</p>
            <p className="mt-4 font-semibold text-trust-blue text-xl">20-minute average response time across all areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {areaDetails.map((area) => (
              <div key={area.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{area.name}</h2>
                <p className="text-xs text-gray-500 mb-3">ZIP: {area.zip}</p>
                <ul className="space-y-1">
                  {area.streets.map((street) => (
                    <li key={street} className="text-sm text-gray-600 flex items-center gap-1">
                      <span className="text-safety-green text-xs">✓</span> {street}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-6">All Services — Every Area</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-trust-blue hover:bg-blue-50 transition-colors text-sm font-medium text-gray-800">
                  <span>{s.icon}</span> {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Not sure if we cover your area? Call us to confirm.</p>
            <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-xl hover:bg-orange-600 transition-colors">
              Call (718) 568-6597 — 24/7
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
