import { blogPosts, services } from '@/lib/content';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ChevronRight, Phone } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bed-Stuy Locksmith`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Advanced parser for 2500-word guides
  const renderContent = (content: string) => {
    // Extract headers for TOC
    const headers = content.split('\n\n')
      .filter(block => block.startsWith('## '))
      .map(block => block.replace('## ', ''));

    const blocks = content.split('\n\n');
    
    return (
      <>
        {/* Table of Contents */}
        <div className="mb-12 p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
          <h2 className="text-xl font-black uppercase italic text-trust-blue mb-6 tracking-tight">Table of Contents</h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {headers.map((h, idx) => (
              <a 
                key={idx} 
                href={`#section-${idx}`} 
                className="text-gray-700 hover:text-action-orange font-bold text-sm flex items-center gap-2 group transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-white border border-blue-200 flex items-center justify-center text-[10px] group-hover:bg-action-orange group-hover:text-white transition-all">
                  {idx + 1}
                </span>
                {h}
              </a>
            ))}
          </nav>
        </div>

        {blocks.map((block, i) => {
          // Dynamic CTAs
          if (block === '[[CTA:PHONE]]') {
            return (
              <div key={i} className="my-12 p-10 bg-gradient-to-br from-trust-blue to-blue-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-black mb-4 uppercase italic">Need Immediate Assistance?</h3>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium">Our dispatchers are standing by 24/7. Average arrival time in Bed-Stuy is 15-20 minutes.</p>
                  <a href="tel:(718)568-6597" className="inline-flex items-center gap-3 bg-action-orange hover:bg-orange-600 text-white font-black px-10 py-5 rounded-2xl transition-all uppercase italic text-xl shadow-lg">
                    <Phone size={24} />
                    Call (718) 568-6597
                  </a>
                </div>
              </div>
            );
          }

          if (block === '[[CTA:QUOTE]]') {
            return (
              <div key={i} className="my-12 p-10 bg-white border-2 border-dashed border-gray-200 rounded-[2.5rem] text-center">
                <h3 className="text-2xl font-black mb-4 uppercase italic text-gray-900">Planning a Security Upgrade?</h3>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">Get a detailed, transparent price estimate for your specific lock replacement or installation project.</p>
                <Link href="/quote" className="inline-block bg-trust-blue hover:bg-blue-800 text-white font-black px-10 py-5 rounded-2xl transition-all uppercase italic text-lg shadow-md">
                  Request Free Quote
                </Link>
              </div>
            );
          }

          if (block === '[[CTA:BOOKING]]') {
            return (
              <div key={i} className="my-12 p-10 bg-gray-900 text-white rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black mb-2 uppercase italic text-action-orange">Skip the Wait</h3>
                  <p className="text-gray-400">Schedule your appointment online and get a priority slot with our master technicians.</p>
                </div>
                <Link href="/booking" className="bg-white text-gray-900 hover:bg-gray-200 font-black px-10 py-5 rounded-2xl transition-all uppercase italic text-lg flex-shrink-0">
                  Book Online Now
                </Link>
              </div>
            );
          }

          // Headers with anchors for TOC
          if (block.startsWith('### ')) {
            return <h3 key={i} className="text-2xl font-bold text-gray-900 mt-12 mb-4 uppercase italic tracking-tight">{block.replace('### ', '')}</h3>;
          }
          
          if (block.startsWith('## ')) {
            const hText = block.replace('## ', '');
            const hIdx = headers.indexOf(hText);
            return (
              <h2 
                key={i} 
                id={`section-${hIdx}`}
                className="text-3xl font-black text-trust-blue mt-16 mb-8 uppercase italic tracking-tighter border-l-4 border-action-orange pl-6 scroll-mt-32"
              >
                {hText}
              </h2>
            );
          }
          
          // Parse links [text](/url)
          const parts = block.split(/(\[.*?\]\(.*?\))/g);
          return (
            <p key={i} className="mb-8 text-gray-700 leading-relaxed text-lg">
              {parts.map((part, j) => {
                const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                  return (
                    <Link key={j} href={linkMatch[2]} className="text-trust-blue font-bold hover:text-action-orange transition-colors underline decoration-2 underline-offset-4">
                      {linkMatch[1]}
                    </Link>
                  );
                }
                return part;
              })}
            </p>
          );
        })}
      </>
    );
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Header */}
      <section className="bg-gray-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/90 to-gray-900"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center text-action-orange font-bold uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors">
            <ChevronRight size={14} className="rotate-180 mr-1" />
            Back to Blog
          </Link>
          <span className="block text-action-orange font-black uppercase tracking-tighter italic text-sm mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100/70 text-sm font-bold uppercase italic">
            <div className="flex items-center gap-2">
              <User size={16} className="text-action-orange" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-action-orange" />
              {post.publishedAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Left - Share/Author */}
            <div className="hidden lg:block lg:col-span-1">
               <div className="sticky top-32 flex flex-col items-center gap-6">
                  <div className="w-12 h-12 bg-trust-blue text-white rounded-full flex items-center justify-center font-black italic">
                    {post.author.charAt(0)}
                  </div>
                  <div className="h-20 w-px bg-gray-200"></div>
                  {/* Social placeholders could go here */}
               </div>
            </div>

            {/* Article Body */}
            <article className="lg:col-span-7">
              <div className="mb-12 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="prose prose-xl max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Author Bio */}
              <div className="mt-20 p-10 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-24 h-24 bg-trust-blue text-white rounded-full flex-shrink-0 flex items-center justify-center text-4xl font-black italic shadow-lg">
                    {post.author.charAt(0)}
                 </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-xl font-black uppercase italic text-gray-900 mb-2">About {post.author}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.author} is a lead technician at Bed-Stuy Locksmith with over a decade of experience in NYC security. Specializing in high-security residential systems and advanced automotive diagnostics.
                    </p>
                 </div>
              </div>
            </article>

            {/* Sidebar Right - CTA & Related */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-trust-blue text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight">Need Expert Help?</h3>
                  <p className="text-blue-100 mb-8 font-medium leading-relaxed">
                    Our technicians are mobile and ready to respond 24/7 in Bed-Stuy and beyond.
                  </p>
                  <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all uppercase italic text-lg shadow-lg hover:scale-105 active:scale-95">
                    <Phone className="inline-block mr-2" size={20} />
                    Call (718) 568-6597
                  </a>
                  <Link href="/quote" className="block text-center mt-6 text-sm font-bold uppercase tracking-widest hover:text-action-orange transition-colors">
                    Request Free Quote
                  </Link>
                </div>

                <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm">
                  <h3 className="text-xl font-black mb-8 uppercase italic text-gray-900">Related Reading</h3>
                  <div className="space-y-8">
                    {related.map((p) => (
                      <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                        <span className="block text-xs font-black text-action-orange uppercase tracking-tighter mb-2">{p.category}</span>
                        <h4 className="font-bold text-gray-900 group-hover:text-trust-blue transition-colors leading-snug">
                          {p.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-200">
                   <h3 className="text-xl font-black mb-6 uppercase italic text-gray-900">Service Area</h3>
                   <p className="text-sm text-gray-600 leading-relaxed mb-6">
                     We provide fast response locksmith services across Bed-Stuy, Williamsburg, Bushwick, and all surrounding Brooklyn neighborhoods.
                   </p>
                   <Link href="/locations" className="text-trust-blue font-bold uppercase tracking-widest text-xs hover:text-action-orange transition-colors inline-flex items-center">
                     View Service Map <ChevronRight size={14} className="ml-1" />
                   </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
