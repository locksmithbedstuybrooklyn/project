import Link from 'next/link';
import NextImage from 'next/image';
import { Phone, Star, Quote, Shield, Award, Users, ArrowRight, Zap, Target } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { testimonials } from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews | Bed-Stuy Locksmith Authority | 4.9 Stars',
  description: 'Verified customer testimonials for Bed-Stuy Locksmith. Read why Brooklyn and Queens residents trust us for 24/7 emergency lockouts and security upgrades.',
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Authority Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 text-sm font-black mb-8 border border-blue-400/30 uppercase italic tracking-widest">
            <Star size={16} className="text-action-orange fill-action-orange" />
            <span>4.9/5 Master Authority Rating</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Verified <span className="text-action-orange">Trust</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium italic leading-tight">
            Read how we anchor the <span className="text-white font-bold underline decoration-action-orange underline-offset-8">security and peace of mind</span> for thousands of Brooklyn neighbors.
          </p>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Reviews', val: '1,200+', icon: <Users size={24} /> },
                { label: 'Service Score', val: '4.9/5', icon: <Star size={24} className="fill-action-orange text-action-orange" /> },
                { label: 'Response Time', val: '18m Avg', icon: <Zap size={24} className="text-action-orange" /> },
                { label: 'Certifications', val: 'Licensed', icon: <Award size={24} className="text-safety-green" /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                   <div className="text-gray-400 mb-2">{item.icon}</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 italic">{item.label}</span>
                   <span className="text-2xl font-black text-gray-900 uppercase italic tracking-tight leading-none">{item.val}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            {/* Sidebar with Stats & CTA */}
            <aside className="lg:col-span-4 space-y-8 sticky top-32">
               <div className="bg-gray-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue/10 rounded-full -mr-16 -mt-16"></div>
                  <Quote size={64} className="text-action-orange/20 mb-8" />
                  <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight leading-tight">Our Philosophy <br /> on Feedback</h3>
                  <p className="text-blue-100 text-lg font-medium italic leading-relaxed mb-10">
                    "Every review is a technical audit of our service quality. We don't just aim for 5 stars; we aim for permanent security solutions."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-action-orange rounded-full flex items-center justify-center font-black italic shadow-lg">M</div>
                     <div>
                        <p className="font-black uppercase italic tracking-widest text-xs">Marcus D.</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Lead Technician</p>
                     </div>
                  </div>
               </div>

               <div className="bg-blue-50 border border-blue-100 p-10 rounded-[3rem]">
                  <h4 className="text-xl font-black text-gray-900 mb-6 uppercase italic tracking-tight">Need a pro?</h4>
                  <p className="text-gray-600 font-medium italic mb-10 text-sm">Experience the 5-star service for yourself. We are mobile and ready 24/7.</p>
                  <a href="tel:(718)568-6597">
                    <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black py-6 rounded-2xl text-2xl uppercase italic tracking-tighter shadow-xl">
                      (718) 568-6597
                    </Button>
                  </a>
               </div>
            </aside>

            {/* Testimonials Grid */}
            <div className="lg:col-span-8">
               <h2 className="text-3xl font-black mb-16 uppercase italic tracking-tight border-l-4 border-action-orange pl-6">Verified Neighbor Reports</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {testimonials.map((rev) => (
                   <Card key={rev.id} className="p-10 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white rounded-[2.5rem] group relative">
                      <div className="flex gap-1 mb-6">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-action-orange fill-action-orange" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed italic font-medium mb-10">
                        "{rev.content}"
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black italic shadow-md group-hover:bg-trust-blue transition-colors">
                             {rev.author.charAt(0)}
                           </div>
                           <div>
                              <p className="font-black text-gray-900 uppercase italic tracking-tight">{rev.author}</p>
                              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{rev.location}</p>
                           </div>
                        </div>
                        <span className="text-[10px] font-black text-gray-300 uppercase italic tracking-widest">
                          {rev.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                   </Card>
                 ))}
               </div>

               {/* External Links */}
               <div className="mt-24 p-12 bg-gray-50 rounded-[3rem] border border-gray-200 text-center">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase italic tracking-tighter">Read More Online</h3>
                  <p className="text-gray-500 font-medium italic mb-12">
                    We maintain profiles on all major verification platforms. Feel free to cross-reference our history of excellence.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
                     {/* Placeholder logos or links */}
                     <span className="font-black uppercase tracking-[0.3em] text-sm">Google</span>
                     <span className="font-black uppercase tracking-[0.3em] text-sm">Yelp</span>
                     <span className="font-black uppercase tracking-[0.3em] text-sm">Nextdoor</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <NextImage src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80" alt="Brooklyn Street" fill className="object-cover grayscale" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase italic tracking-tighter leading-none">Ready for <span className="text-action-orange">Elite</span> Service?</h2>
           <p className="text-xl md:text-2xl text-blue-100 mb-16 font-medium italic">
             Don't gamble with your security. Join the thousands of satisfied Brooklyn neighbors who choose Bed-Stuy Locksmith.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-action-orange hover:bg-orange-600 text-white font-black px-16 py-10 text-4xl rounded-[2.5rem] shadow-2xl uppercase italic tracking-tighter">
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button size="large" variant="secondary" className="bg-white border-2 border-white text-gray-900 hover:bg-gray-100 px-16 py-10 text-4xl rounded-[2.5rem] uppercase italic tracking-tighter">
                  Get Quote
                </Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
