import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { BookOpen, ArrowRight, Tag, Clock, User, Shield, Phone } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locksmith Tips & Guides | Bed-Stuy Blog',
  description: 'Locksmith tips, guides, and advice. Learn how to prevent lockouts, maintain locks, and handle emergencies.',
};

export default function BlogPage() {
  const categories = [
    'Car Lockouts', 'Key Replacement', 'Lock Repair', 
    'Lock Replacement', 'Lock Installation', 'Home Security', 
    'Business Security', 'Emergency Tips', 'Maintenance'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Locksmith Tips & Guides</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Expert advice on locks, security, and emergency situations from your local Bed-Stuy locksmith.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Welcome to our blog. Learn locksmith tips, guides, and advice. We share real-world knowledge from years of experience. Whether you're locked out, planning to upgrade your locks, or just curious about security, we have articles for you.
            </p>
            <p>
              Our blog covers car lockouts, residential lock problems, commercial security, and emergency tips. We explain things in plain language. No technical jargon. Just practical, useful information.
            </p>
            <p>
              New articles posted regularly. Subscribe to stay updated on locksmith news and tips.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <Card hover className="h-full border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 overflow-hidden p-0 flex flex-col">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40 group-hover:scale-110 transition-transform">
                      {post.category === 'Emergency' ? '🆘' : post.category === 'Car Lockouts' ? '🚗' : '🔐'}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-trust-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-trust-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.description}
                    </p>
                    <div className="mt-auto flex items-center text-trust-blue font-bold gap-2 text-sm">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
               <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8">Article Categories</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((cat, i) => (
                      <div key={i} className="bg-white px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-trust-blue hover:text-trust-blue cursor-pointer transition-colors flex items-center gap-2">
                        <Tag size={16} className="text-action-orange" />
                        {cat}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            <div>
               <div className="bg-trust-blue text-white p-8 rounded-3xl text-center h-full flex flex-col justify-center">
                  <Shield size={48} className="mx-auto mb-6 text-action-orange" />
                  <h3 className="text-xl font-bold mb-4">Stay Safe</h3>
                  <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                    Subscribe to our newsletter for the latest security tips and emergency advice delivered to your inbox.
                  </p>
                  <Button variant="secondary" className="w-full bg-white text-trust-blue hover:bg-blue-50">
                    Subscribe Now
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Emergency? We're Ready.</h2>
          <p className="text-xl text-gray-600 mb-10">
            Our 24/7 emergency locksmiths are standing by in Bed-Stuy.
          </p>
          <a href="tel:(718)568-6597">
            <Button size="large" className="bg-action-orange hover:bg-orange-600 px-12 py-6 text-2xl">
              (718) 568-6597
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

