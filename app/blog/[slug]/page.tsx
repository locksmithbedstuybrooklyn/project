import { blogPosts, services } from '@/lib/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

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

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-white/20 px-3 py-1 rounded mb-4">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-blue-200 text-lg">{post.description}</p>
          <p className="text-blue-300 text-sm mt-4">By {post.author} · {post.publishedAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {post.content.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-6">{para}</p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 bg-trust-blue text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Need a Locksmith Now?</h3>
                <p className="text-blue-200 mb-4">Call us anytime — 24/7 emergency service with 20-minute response.</p>
                <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Call (718) 568-6597
                </a>
              </div>

              {/* Related posts */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((p) => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="block border border-gray-200 rounded-lg p-4 hover:border-trust-blue hover:bg-blue-50 transition-colors">
                      <span className="text-xs font-semibold text-trust-blue uppercase">{p.category}</span>
                      <p className="font-semibold text-gray-900 text-sm mt-1 leading-snug">{p.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Emergency? Call Now</h3>
                  <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors mb-3">
                    📞 (718) 568-6597
                  </a>
                  <Link href="/quote" className="block w-full text-center border-2 border-trust-blue text-trust-blue font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                    Get Free Quote
                  </Link>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Our Services</h3>
                  <ul className="space-y-2">
                    {services.slice(0, 6).map((s) => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}`} className="text-trust-blue hover:underline text-sm">
                          {s.icon} {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
