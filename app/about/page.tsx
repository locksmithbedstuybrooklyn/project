import { Shield, Clock, Award, Users, Heart, Phone, CheckCircle, Target, Zap, MapPin, Wrench, Star } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import Link from 'next/link';

import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Who is Locksmith Bed Stuy? We are a hyper-local, licensed Brooklyn security team providing 20-minute response times and transparent pricing since 2010.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/about' },
  openGraph: {
    title: 'About Us | Bed-Stuy Locksmith',
    description: 'Who is Locksmith Bed Stuy? We are a hyper-local, licensed Brooklyn security team providing 20-minute response times and transparent pricing since 2010.',
    url: 'https://www.locksmithbedstuy.com/about',
    siteName: 'Bed-Stuy Locksmith',
    type: 'website',
    images: [{ url: 'https://www.locksmithbedstuy.com/images/og-image.webp', width: 1200, height: 630, alt: 'Bed-Stuy Locksmith - Expert Emergency Service in Brooklyn' }],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);
  const values = [
    {
      title: 'Transparent Pricing',
      desc: 'No hidden fees. No bait-and-switch. We provide clear, upfront pricing before we ever touch your lock, so you know exactly what to expect.',
      icon: <Shield className="text-orange-500" size={32} />
    },
    {
      title: 'Bed-Stuy Specialists',
      desc: 'From restoring 100-year-old mortise locks on MacDonough Street to installing smart access control for new Fulton Street cafes, we know local architecture.',
      icon: <Wrench className="text-blue-500" size={32} />
    },
    {
      title: '20-Min Local Dispatch',
      desc: 'Because we operate directly out of Bed-Stuy (near Throop Ave), our mobile units reach emergencies in our core service area much faster than out-of-neighborhood competitors.',
      icon: <Zap className="text-yellow-500" size={32} />
    },
    {
      title: 'Precision Entry',
      desc: 'We are skilled lock-pickers. We only resort to drilling a lock as an absolute last resort, saving you the cost of unnecessary hardware replacement.',
      icon: <Target className="text-red-500" size={32} />
    },
    {
      title: 'Community First',
      desc: 'We secure the neighborhoods we live in. Your safety is personal to us, which is why we provide free security consultations to local Bed-Stuy businesses.',
      icon: <Heart className="text-pink-500" size={32} />
    },
    {
      title: 'Licensed & Insured',
      desc: 'Our technicians are fully licensed by the NYC Department of Consumer Affairs, legally bonded, and comprehensively insured for your absolute peace of mind.',
      icon: <Award className="text-emerald-500" size={32} />
    }
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-locksmith.webp" 
            alt="Locksmith Bed Stuy Professional Team"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
              YOUR LOCAL BED-STUY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                SECURITY EXPERTS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We aren't a national call center. Locksmith Bed Stuy is a dedicated team of licensed professionals operating right here in the neighborhood.
            </p>
            <div className="flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-400" size={20} />
                <span className="text-white/80 font-bold uppercase tracking-widest text-sm">Fully Licensed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-400" size={20} />
                <span className="text-white/80 font-bold uppercase tracking-widest text-sm">Local Experts Since 2010</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -rotate-2"></div>
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about-locksmith.webp" 
                  alt="Our Commitment to Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
                A Local Commitment <br />
                <span className="text-trust-blue">To Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Locksmith Bed Stuy was founded on a simple premise: Bed-Stuy residents deserve a local locksmith they can actually trust. No bait-and-switch pricing, no arriving hours late, and no destroying locks that can easily be picked.
                </p>
                <p>
                  The architecture of Bedford-Stuyvesant is unique. A generic locksmith often lacks the expertise to carefully repair a 120-year-old mortise lock on a historic brownstone without damaging the original wood. We specialize in exactly that, while also possessing the technical capability to install advanced smart-access systems for the neighborhood's newest developments.
                </p>
                <p>
                  From our headquarters near Throop Ave, our mission is to provide 20-minute emergency response to our neighbors in 11216, 11221, and 11233. We are fully licensed by the NYC DCA, deeply committed to transparent pricing, and relentless in our pursuit of securing our local community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">The principles that guide every service call and community interaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 text-white/5 opacity-20">
          <Shield size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-tight">
                Skilled Professionals <br />
                <span className="text-orange-400">You Can Rely On</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our locksmiths are not just technicians; they are dedicated security professionals passionate about their work. Each member of our team undergoes rigorous training and continuous professional development.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  'Rigorous background checks for all staff',
                  'Continuous training on smart lock technology',
                  'Expertise in historic brownstone security',
                  'Courteous, professional, and on-time service'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-200 font-medium">
                    <CheckCircle className="text-emerald-500" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                  <Star className="text-orange-400 fill-orange-400" size={18} />
                  <span className="font-bold">4.9 Star Rating</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                  <Users className="text-orange-400" size={18} />
                  <span className="font-bold">5000+ Clients Served</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl text-slate-900">
              <h3 className="text-3xl font-bold mb-8">Our Commitment to You</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Your security is our priority. We are committed to providing you with reliable, high-quality locksmith services that you can depend on.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                  <Clock className="text-trust-blue" size={32} />
                  <div>
                    <h4 className="font-bold text-xl">24/7 Availability</h4>
                    <p className="text-slate-500">We never sleep so you can rest easy.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                  <MapPin className="text-trust-blue" size={32} />
                  <div>
                    <h4 className="font-bold text-xl">Local Expertise</h4>
                    <p className="text-slate-500">Deep knowledge of Brooklyn neighborhoods.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a href="tel:(718)568-6597">
                  <Button size="large" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-16 rounded-2xl text-xl shadow-lg shadow-red-600/20">
                    Call (718) 568-6597
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="text-red-500 mx-auto mb-6 animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Your Neighbors in Brooklyn</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-16">
            We are proud to serve Bed-Stuy and the vibrant surrounding neighborhoods. We believe in building strong relationships with our neighbors, fostering a safer environment for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Bed-Stuy", "Crown Heights", "Williamsburg", "Bushwick", "Clinton Hill", "Fort Greene", "Prospect Heights"].map((loc) => (
              <span key={loc} className="px-6 py-2 bg-slate-100 rounded-full text-slate-600 font-bold text-sm uppercase tracking-widest border border-slate-200">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0f1c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">READY TO EXPERIENCE <br /><span className="text-orange-400">BETTER SECURITY?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button size="large" className="bg-white text-[#0a0f1c] hover:bg-slate-100 font-black h-16 px-12 text-xl rounded-2xl shadow-2xl">
                Get In Touch
              </Button>
            </Link>
            <a href="tel:(718)568-6597" className="text-2xl font-black hover:text-orange-400 transition-colors">
              (718) 568-6597
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);
}

