import { Shield, Clock, Award, Users, Heart, Phone, CheckCircle, Target, Zap } from 'lucide-react';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Bed-Stuy Locksmith | Licensed, Insured, Local Since 2010',
  description: 'About Bed-Stuy Locksmith: licensed, insured, serving the community since 2010. Meet our expert technicians and learn why we\'re trusted.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Hero */}
      <section className="bg-gray-900 text-white py-32 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            About <span className="text-action-orange">Us</span>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium italic">
            Licensed, Insured, and Local. Serving Brooklyn since 2010.
          </p>
          <div className="flex justify-center">
             <div className="bg-action-orange text-white px-8 py-3 rounded-2xl font-black shadow-lg text-sm uppercase tracking-[0.2em] italic">
                Established 2010
             </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-gray-100 border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-12 justify-center text-xs font-black uppercase tracking-[0.25em] text-gray-500 italic">
          <span className="flex items-center gap-3"><Shield size={16} className="text-safety-green" /> 100% Licensed Techs</span>
          <span className="flex items-center gap-3"><Target size={16} className="text-safety-green" /> Bed-Stuy Core Unit</span>
          <span className="flex items-center gap-3"><Clock size={16} className="text-safety-green" /> 24/7 Rapid Response</span>
        </div>
      </div>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-24 italic">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 uppercase tracking-tighter not-italic">Our Story</h2>
            <p>
              We started in 2010 with a simple mission: provide fast, honest locksmith service to Bed-Stuy residents. Over a decade later, we're still here, still committed to that mission. We've helped thousands of people get back into their cars and homes.
            </p>
            <p>
              Our team is made up of licensed, certified locksmiths. Each technician undergoes background checks and training. We stay current with modern lock technology and security systems. We're insured and bonded for your protection.
            </p>
            <p>
              Bed-Stuy is our home. We live here, work here, raise families here. We care about this community. That's why we answer calls at 3 AM. That's why we show up on holidays. We're not a national dispatch center. We're your neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { title: 'Honesty', desc: 'We tell you the truth about your lock problems and costs.', icon: <Shield size={32} className="text-action-orange" /> },
              { title: 'Speed', desc: 'We respond fast because we know emergencies don\'t wait.', icon: <Zap size={32} className="text-action-orange" /> },
              { title: 'Quality', desc: 'We use proper techniques and quality materials.', icon: <Award size={32} className="text-action-orange" /> },
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group hover:bg-gray-900 transition-colors">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-white uppercase italic tracking-tight">{value.title}</h3>
                <p className="text-gray-500 font-medium group-hover:text-gray-400 italic">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-12 uppercase italic tracking-tighter">
                Meet the <span className="text-trust-blue">Team</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'Marcus D.', role: 'Lead Technician', exp: '12 Years' },
                  { name: 'Sarah J.', role: 'Customer Relations', exp: '8 Years' },
                  { name: 'David L.', role: 'Auto Specialist', exp: '10 Years' },
                  { name: 'Robert K.', role: 'Master Locksmith', exp: '15 Years' }
                ].map((member, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-6 flex items-center justify-center text-white font-black text-3xl uppercase italic">
                      {member.name.charAt(0)}
                    </div>
                    <h4 className="font-black text-2xl text-gray-900 uppercase italic tracking-tight mb-1">{member.name}</h4>
                    <p className="text-sm text-trust-blue font-black uppercase tracking-widest italic mb-2">{member.role}</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{member.exp} Experience</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute -top-24 -right-24 text-white/5">
                 <Shield size={300} />
               </div>
               <h3 className="text-3xl md:text-4xl font-black mb-10 text-white uppercase italic tracking-tighter relative z-10">Why Bed-Stuy Trusts Us</h3>
               <div className="space-y-6 relative z-10">
                  {[
                    'Fully licensed in New York State',
                    'Insured & Bonded for your safety',
                    '15+ Years of combined expertise',
                    '4.9 Star average customer rating',
                    'Damage-Free Entry Techniques',
                    'Always transparent pricing'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-xl font-bold text-gray-300 italic">
                      <CheckCircle className="text-safety-green flex-shrink-0" size={24} />
                      {item}
                    </div>
                  ))}
               </div>
               <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                  <a href="tel:(718)568-6597">
                    <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black py-6 rounded-2xl text-2xl uppercase italic tracking-tight shadow-xl">
                      Call (718) 568-6597
                    </Button>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase italic tracking-tighter text-gray-900">
            Ready To <span className="text-action-orange">Work With Us?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="large" className="w-full bg-gray-900 text-white font-black px-12 py-8 rounded-2xl text-2xl uppercase italic hover:bg-gray-800 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

