import { services, testimonials, faqs } from '@/lib/content';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import QuoteForm from '@/components/forms/QuoteForm';
import { renderContent } from '@/lib/parser';
import { ChevronRight, Phone, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.split('/') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const service = services.find((s) => s.slug === fullSlug);
  if (!service) return {};
  return {
    title: `${service.name} Bed-Stuy | 2026 Emergency & Technical Experts`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const service = services.find((s) => s.slug === fullSlug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Generate Table of Contents from markdown headers
  const toc = service.content
    .split('\n')
    .filter((line) => line.includes('[[H2:'))
    .map((line) => {
      const match = line.match(/\[\[H2:(.*?)\]\]/);
      const title = match ? match[1] : '';
      const id = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return { title, id };
    })
    .filter((item) => item.title !== '');

  const serviceSchema = generateServiceSchema(service.name, service.description, service.slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gray-900 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/90 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-action-orange font-black uppercase italic tracking-widest text-xs mb-6">
            <Shield size={14} />
            Certified Expert Service
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            {service.name.split(' ')[0]} <span className="text-action-orange">{service.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-3xl font-medium leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:(718)568-6597">
              <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black px-12 py-6 rounded-2xl text-xl shadow-xl uppercase italic">
                <Phone className="mr-2 inline-block" size={24} />
                (718) 568-6597
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
          <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> Licensed &amp; Insured</span>
          <span className="flex items-center gap-2"><Clock size={12} className="text-safety-green" /> 20-Minute Response</span>
          <span className="flex items-center gap-2"><Star size={12} className="text-safety-green" /> Non-Destructive Techniques</span>
          <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> Fair Pricing Guarantee</span>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Sidebar / TOC */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 italic">Service Roadmap</h3>
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

                <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                   <h3 className="text-xl font-black mb-6 uppercase italic tracking-tight">Rapid Dispatch</h3>
                   <p className="text-blue-100 text-sm mb-8 font-medium">Technicians are mobile and ready to respond across Bed-Stuy and Brooklyn.</p>
                   <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all uppercase italic text-sm">
                      (718) 568-6597
                   </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {renderContent(service.content)}
              </article>

              {service.videoUrl && (
                <div className="mt-12 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
                  <iframe 
                    src={service.videoUrl} 
                    title={`${service.name} Video Demonstration`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {/* Related Services */}
              <div className="mt-24 pt-24 border-t border-gray-100">
                <h2 className="text-3xl font-black mb-12 uppercase italic tracking-tight">Deep Integration Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {related.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`} className="group">
                      <div className="p-8 bg-gray-50 rounded-3xl border border-transparent group-hover:border-trust-blue group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                        <div className="text-4xl mb-6">{s.icon}</div>
                        <h3 className="text-lg font-black mb-4 uppercase italic tracking-tight group-hover:text-trust-blue transition-colors">{s.name}</h3>
                        <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">{s.description}</p>
                        <div className="flex items-center text-trust-blue font-black text-xs uppercase italic tracking-widest gap-2">
                          Explore <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter text-gray-900">Request Technical Quote</h2>
            <p className="text-xl text-gray-600 font-medium">Transparent, professional estimation for your {service.name} needs.</p>
          </div>
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
