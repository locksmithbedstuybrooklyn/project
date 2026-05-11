import Link from 'next/link';
import NextImage from 'next/image';
import { Camera, Shield, Home, Building2, Car, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Gallery & Projects',
  description: 'Visual portfolio of our professional locksmith work in Brooklyn. Residential brownstone security, commercial access control, and automotive key programming.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/gallery' },
  openGraph: {
    title: 'Work Gallery & Projects | Bed-Stuy Locksmith',
    description: 'Visual portfolio of our professional locksmith work in Brooklyn. Residential brownstone security, commercial access control, and automotive key programming.',
    url: 'https://www.locksmithbedstuy.com/gallery',
    siteName: 'Bed-Stuy Locksmith',
    type: 'website',
    images: [{ url: 'https://www.locksmithbedstuy.com/images/og-image.webp', width: 1200, height: 630, alt: 'Bed-Stuy Locksmith - Expert Emergency Service in Brooklyn' }],
  },
};

export default function GalleryPage() {
  const galleryCategories = [
    {
      id: 'residential',
      title: 'Residential Security',
      icon: <Home className="text-blue-500" size={32} />,
      desc: 'Protecting Brooklyn homes with elegant, robust hardware.',
      images: [
        { src: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80', title: 'High-Security Deadbolt', tags: ['Residential', 'Installation'] },
        { src: 'https://images.unsplash.com/photo-1506784911079-53d9e945034b?auto=format&fit=crop&q=80', title: 'Smart Lock Integration', tags: ['Smart Home', 'Keyless'] },
        { src: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80', title: 'Mortise Lock Restoration', tags: ['Historic', 'Brownstone'] },
        { src: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80', title: 'Cylinder Replacement', tags: ['Repair', 'Security'] }
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Projects',
      icon: <Building2 className="text-action-orange" size={32} />,
      desc: 'Heavy-duty solutions for businesses and retail storefronts.',
      images: [
        { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80', title: 'Panic Bar Installation', tags: ['Safety', 'Commercial'] },
        { src: 'https://images.unsplash.com/photo-1577100078279-b3445dee627a?auto=format&fit=crop&q=80', title: 'Access Control Keypad', tags: ['Digital', 'Office'] },
        { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80', title: 'Master Key Setup', tags: ['Systems', 'Retail'] },
        { src: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80', title: 'Storefront Cylinder Swap', tags: ['High-Security', '24/7'] }
      ]
    },
    {
      id: 'automotive',
      title: 'Automotive Expertise',
      icon: <Car className="text-emerald-500" size={32} />,
      desc: 'Advanced key programming and emergency vehicle entry.',
      images: [
        { src: 'https://images.unsplash.com/photo-1549194388-2469d44ecd94?auto=format&fit=crop&q=80', title: 'Laser-Cut Key Creation', tags: ['Keys', 'Mobile'] },
        { src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80', title: 'Fob Programming', tags: ['Digital', 'Transponder'] },
        { src: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80', title: 'Ignition Cylinder Repair', tags: ['Technical', 'Diagnostic'] },
        { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80', title: 'Non-Destructive Entry', tags: ['Emergency', 'Safe'] }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Authority Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 text-sm font-black mb-8 border border-blue-400/30 uppercase italic tracking-widest">
            <Camera size={16} className="text-action-orange" />
            <span>Craftsmanship in Focus</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Project <span className="text-action-orange">Gallery</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium italic leading-tight">
            Tangible proof of our <span className="text-white font-bold underline decoration-action-orange underline-offset-8">commitment to excellence</span> and technical precision across Brooklyn.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase italic tracking-tighter leading-none">
                Seeing is <br />
                <span className="text-trust-blue">Believing</span>.
              </h2>
              <div className="space-y-6 text-xl text-gray-500 font-medium italic leading-relaxed">
                <p>
                  At Locksmith Bed Stuy, we believe in radical transparency. Our gallery is a visual testament to the quality and diversity of our work across residential, commercial, and automotive sectors.
                </p>
                <p>
                  Explore our portfolio to see the attention to detail that sets us apart—from the restoration of historic brownstone mortise locks to the programming of the most advanced 2026 vehicle transponders.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Visual Proof of Quality',
                  'Security Inspiration',
                  'Broad Technical Expertise',
                  'Proven Track Record'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-safety-green" size={24} />
                    <span className="font-black uppercase italic tracking-tight text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-lg">
                  <NextImage src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80" alt="Lock Work" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="aspect-square bg-gray-900 rounded-[2.5rem] flex items-center justify-center p-8 text-center border border-white/5">
                  <p className="text-white font-black uppercase italic tracking-widest text-sm">15+ Years <br /> Brooklyn <br /> Authority</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-action-orange rounded-[2.5rem] flex items-center justify-center p-8 text-center shadow-2xl">
                   <Shield className="text-white" size={64} />
                </div>
                <div className="aspect-[3/4] bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-lg">
                  <NextImage src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80" alt="Lock Work" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryCategories.map((cat) => (
            <div key={cat.id} className="mb-32 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                  <div className="mb-6">{cat.icon}</div>
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter">{cat.title}</h2>
                  <p className="text-xl text-gray-500 font-medium italic">{cat.desc}</p>
                </div>
                <Link href={cat.id === 'residential' ? '/services/residential-lockout' : cat.id === 'commercial' ? '/services/lock-installation' : '/services/automotive-locksmith'}>
                   <Button variant="secondary" className="border-2 border-gray-900 text-gray-900 font-black px-8 py-4 rounded-xl uppercase italic tracking-widest hover:bg-gray-900 hover:text-white transition-all text-xs">
                     Service Details
                   </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.images.map((img, i) => (
                  <Card key={i} className="p-0 overflow-hidden group rounded-[2rem] border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square relative overflow-hidden">
                      <NextImage 
                        src={img.src} 
                        alt={img.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <p className="text-white font-black uppercase italic tracking-tight text-xl leading-none mb-2">{img.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {img.tags.map((tag, j) => (
                            <span key={j} className="text-[8px] font-black uppercase tracking-widest text-action-orange bg-black/50 px-2 py-1 rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-none">Your Project <span className="text-action-orange">Starts Here</span></h2>
          <p className="text-2xl md:text-3xl text-blue-100 mb-16 font-medium italic">
            Ready to enhance your security? Let our Master Technicians handle your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 text-white font-black px-16 py-10 text-4xl rounded-[2.5rem] shadow-[0_0_50px_rgba(255,102,0,0.3)] uppercase italic tracking-tighter">
                (718) 568-6597
              </Button>
            </a>
            <Link href="/contact">
              <Button size="large" variant="secondary" className="bg-white border-2 border-white text-gray-900 hover:bg-gray-100 px-16 py-10 text-4xl rounded-[2.5rem] uppercase italic tracking-tighter">
                Contact Us
              </Button>
            </Link>
          </div>
          <p className="mt-12 text-xs font-black uppercase tracking-[0.4em] text-gray-500 italic">
            Quality Guaranteed • Professional Craftsmanship • Bed-Stuy Local
          </p>
        </div>
      </section>
    </div>
  );
}
