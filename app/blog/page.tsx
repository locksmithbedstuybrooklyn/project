import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/content';
import { ArrowRight, Tag, Clock, User, Phone, ChevronRight } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Security & Locksmith Advice',
  description: 'Read our guides on car lockouts, home security, and lock replacement. We help you stay safe in Brooklyn.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/blog' },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);
  const categories = [
    'Car Lockouts', 'Security', 'Emergency', 'Maintenance', 'Local'
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80"
              alt="Security Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/90 to-gray-900"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Helpful <span className="text-action-orange">Advice</span>
            </h1>
            <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              Read our guides on home security, car lockouts, and lock maintenance.
            </p>
            <div className="flex justify-center">
              <a href="#articles" className="inline-flex items-center gap-2 bg-white text-gray-900 font-black px-10 py-5 rounded-2xl uppercase italic text-lg hover:bg-action-orange hover:text-white transition-all">
                Explore Guides <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="articles" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black mb-12 uppercase italic tracking-tight border-l-4 border-action-orange pl-6">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                      <Card hover className="h-full border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden p-0 flex flex-col rounded-[2rem] bg-white">
                        <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                          <Image 
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-6">
                            <span className="bg-action-orange text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full italic">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-10 flex-grow flex flex-col">
                          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 italic">
                            <div className="flex items-center gap-1">
                              <Clock size={12} className="text-action-orange" />
                              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </div>
                            <div className="flex items-center gap-1">
                              <User size={12} className="text-action-orange" />
                              {post.author}
                            </div>
                          </div>
                          <h3 className="text-xl font-black text-gray-900 mb-6 group-hover:text-trust-blue transition-colors leading-tight uppercase italic tracking-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-8 font-medium">
                            {post.description}
                          </p>
                          <div className="mt-auto flex items-center text-trust-blue font-black gap-2 text-xs uppercase italic tracking-widest">
                            <span>Read Article</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-action-orange/10 rounded-full -mr-16 -mt-16"></div>
                     <h3 className="text-xl font-black mb-8 uppercase italic tracking-tight">Browse Topics</h3>
                     <div className="space-y-3">
                       {categories.map((cat, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-action-orange transition-all group cursor-pointer">
                           <span className="font-bold uppercase italic text-sm tracking-tight">{cat}</span>
                           <Tag size={16} className="text-action-orange group-hover:text-white" />
                         </div>
                       ))}
                     </div>
                  </div>

                  <div className="bg-trust-blue text-white p-10 rounded-[2.5rem] shadow-xl">
                     <h3 className="text-xl font-black mb-6 uppercase italic tracking-tight">Need a Pro?</h3>
                     <p className="text-blue-100 text-sm mb-10 font-medium leading-relaxed">
                       Some jobs require professional tools. Our mobile units are active 24/7.
                     </p>
                     <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all uppercase italic text-lg shadow-lg">
                        <Phone className="inline-block mr-2" size={20} />
                        (718) 568-6597
                     </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-8 uppercase italic tracking-tighter">Emergency in Bed-Stuy?</h2>
            <p className="text-xl text-gray-600 mb-12 font-medium">
              Do not wait outside. Call the professionals who know every lock in Brooklyn.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-action-orange hover:bg-orange-600 px-12 py-8 text-2xl font-black uppercase italic shadow-xl">
                  Call (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button size="large" variant="secondary" className="bg-white border-2 border-trust-blue text-trust-blue hover:bg-blue-50 px-12 py-8 text-2xl font-black uppercase italic shadow-sm">
                  Get Expert Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
