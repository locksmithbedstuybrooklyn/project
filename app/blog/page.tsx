import Link from 'next/link';
import { blogPosts } from '@/lib/content';

export const metadata = {
  title: 'Locksmith Blog | Tips, Guides & Emergency Advice | Bed-Stuy',
  description: 'Locksmith tips, guides, and emergency advice from Bed-Stuy Locksmith. Learn how to prevent lockouts, choose locks, and stay safe.',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Locksmith Tips & Guides</h1>
          <p className="text-xl text-blue-100">Expert advice on locks, security, and emergency situations from your local Bed-Stuy locksmith.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="bg-gray-100 h-40 flex items-center justify-center">
                  <span className="text-5xl">🔐</span>
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-trust-blue bg-blue-50 px-2 py-1 rounded mb-3">{post.category}</span>
                  <h2 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-trust-blue leading-snug">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.description}</p>
                  <span className="mt-4 inline-block text-trust-blue font-semibold text-sm group-hover:underline">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
