import { locations, services, testimonials } from '@/lib/content';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { renderContent } from '@/lib/parser';
import { Shield, Phone, Clock, Star, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import { generateBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};
  return {
    title: `Locksmith ${location.name} | 24/7 Response`,
    description: location.description,
    alternates: { canonical: `https://www.locksmithbedstuy.com/locations/${slug}` },
    openGraph: {
      title: `Locksmith ${location.name} | Bed-Stuy Locksmith`,
      description: location.description,
      url: `https://www.locksmithbedstuy.com/locations/${slug}`,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const localReview = testimonials.find((t) => t.location.toLowerCase().includes(location.name.toLowerCase().split(' ')[0]));

  // Generate TOC from headers
  const toc = location.content
    .split('\n')
    .filter((line) => line.includes('[[H2:'))
    .map((line) => {
      const match = line.match(/\[\[H2:(.*?)\]\]/);
      const title = match ? match[1] : '';
      const id = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return { title, id };
    })
    .filter((item) => item.title !== '');

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: location.name, url: `/locations/${location.slug}` },
  ]);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gray-900 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src={location.image}
            alt={location.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/90 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-action-orange font-black uppercase italic tracking-widest text-xs mb-6">
            <MapPin size={14} />
            Neighborhood Service Authority
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            {location.name} <span className="text-action-orange">Expertise</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-3xl font-medium leading-relaxed">
            {location.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:(718)568-6597">
              <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black px-12 py-6 rounded-2xl text-xl shadow-xl uppercase italic">
                <Phone className="mr-2 inline-block" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button size="large" variant="secondary" className="w-full bg-white text-gray-900 font-black px-12 py-6 rounded-2xl text-xl hover:bg-blue-50 transition-all uppercase italic">
                Get Expert Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-gray-100 border-y border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-8 justify-center text-[10px] font-black uppercase tracking-widest text-gray-500 italic">
          <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> Local Bed-Stuy Units</span>
          <span className="flex items-center gap-2"><Clock size={12} className="text-safety-green" /> 20-Min Response</span>
          <span className="flex items-center gap-2"><Star size={12} className="text-safety-green" /> Licensed &amp; Insured</span>
          <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> Fair Pricing</span>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 italic">Neighborhood Roadmap</h3>
                  <nav className="space-y-4">
                    {toc.map((item) => (
                      <a 
                        key={item.id} 
                        href={`#${item.id}`}
                        className="group flex items-center gap-3 text-gray-500 hover:text-trust-blue transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-trust-blue group-hover:scale-150 transition-all"></div>
                        <span className="text-sm font-bold uppercase italic tracking-tight">{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h3 className="text-sm font-black uppercase tracking-widest mb-6 italic">Streets We Cover</h3>
                  <ul className="space-y-2">
                    {location.serviceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                        <span className="text-action-orange">/</span> {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {renderContent(location.content)}
              </article>

              {/* Local Review */}
              {localReview && (
                <div className="mt-24 p-10 md:p-16 bg-trust-blue rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Star size={120} />
                   </div>
                   <div className="relative z-10 text-center md:text-left">
                     <h2 className="text-3xl font-black mb-8 uppercase italic tracking-tight">Verified Local Experience</h2>
                     <div className="flex justify-center md:justify-start gap-1 mb-8">
                       {Array.from({ length: localReview.rating }).map((_, i) => <Star key={i} size={24} fill="white" className="text-action-orange" />)}
                     </div>
                     <p className="text-xl md:text-2xl font-medium italic mb-10 leading-relaxed">"{localReview.content}"</p>
                     <p className="text-sm font-black uppercase tracking-widest italic">— {localReview.author}, {localReview.location}</p>
                   </div>
                </div>
              )}

              {/* Local Services Grid */}
              <div className="mt-24">
                <h2 className="text-3xl font-black mb-12 uppercase italic tracking-tight">Services in {location.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`} className="group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-trust-blue hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{s.icon}</span>
                        <span className="font-black uppercase italic tracking-tight text-gray-900">{s.name}</span>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-trust-blue group-hover:translate-x-2 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">Emergency in {location.name}?</h2>
          <p className="text-xl text-blue-100 mb-12 font-medium">
            Don't wait for a "dispatch center" to find a technician. We're already on the streets of {location.name}.
          </p>
          <a href="tel:(718)568-6597">
            <Button size="large" className="bg-action-orange hover:bg-orange-600 px-12 py-8 text-2xl font-black uppercase italic shadow-2xl">
              (718) 568-6597
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
