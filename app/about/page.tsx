import { testimonials } from '@/lib/content';
import QuoteForm from '@/components/forms/QuoteForm';
import { Shield, Clock, Award, Users, Heart, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bed-Stuy Locksmith | Licensed, Insured, Local Since 2010',
  description: 'About Bed-Stuy Locksmith: licensed, insured, serving the community since 2010. Meet our expert technicians and learn why we\'re trusted.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">About Bed-Stuy Locksmith</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Licensed, Insured, and Local. Serving our community since 2010.
          </p>
          <div className="flex justify-center">
             <div className="bg-action-orange text-white px-8 py-2 rounded-full font-bold shadow-lg">
                Est. 2010
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p>
              We started in 2010 with a simple mission: provide fast, honest locksmith service to Bed-Stuy residents. Over a decade later, we're still here, still committed to that mission. We've helped thousands of people get back into their cars and homes. We've installed locks in hundreds of businesses. We've earned trust through consistent, professional service.
            </p>
            <p>
              Our team is made up of licensed, certified locksmiths. Each technician undergoes background checks and training. We stay current with modern lock technology and security systems. We're insured and bonded for your protection. We stand behind our work with a satisfaction guarantee.
            </p>
            <p>
              Bed-Stuy is our home. We live here, work here, raise families here. We care about this community. That's why we answer calls at 3 AM. That's why we show up on holidays. That's why we charge fair prices and do quality work. We're not a big corporation. We're your neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Honesty', desc: 'We tell you the truth about your lock problems and what it costs to fix them.', icon: <Shield className="text-action-orange" /> },
              { title: 'Speed', desc: 'We respond fast because we know emergencies don\'t wait.', icon: <Clock className="text-action-orange" /> },
              { title: 'Quality', desc: 'We use proper techniques and quality materials. We do it right.', icon: <Award className="text-action-orange" /> },
              { title: 'Respect', desc: 'We respect your property, your time, and your trust.', icon: <Users className="text-action-orange" /> },
              { title: 'Community', desc: 'We\'re part of Bed-Stuy. We care about this neighborhood.', icon: <Heart className="text-action-orange" /> }
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { name: 'Marcus D.', role: 'Lead Technician', exp: '12 Years' },
                  { name: 'Sarah J.', role: 'Customer Relations', exp: '8 Years' },
                  { name: 'David L.', role: 'Auto Specialist', exp: '10 Years' },
                  { name: 'Robert K.', role: 'Master Locksmith', exp: '15 Years' }
                ].map((member, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-trust-blue font-bold text-2xl">
                      {member.name.charAt(0)}
                    </div>
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-trust-blue font-semibold">{member.role}</p>
                    <p className="text-xs text-gray-500 mt-2">{member.exp} Experience</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
               <h3 className="text-2xl font-bold mb-6 text-center">Why Bed-Stuy Trusts Us</h3>
               <div className="space-y-4">
                  {[
                    'Fully licensed in New York State',
                    'Insured & Bonded for your safety',
                    '15+ Years of combined expertise',
                    '4.9 Star average customer rating',
                    '100% Satisfaction guarantee',
                    'Always transparent pricing'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                      <CheckCircle className="text-safety-green" size={20} />
                      {item}
                    </div>
                  ))}
               </div>
               <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-600 mb-6">Need expert help right now?</p>
                  <a href="tel:(718)568-6597">
                    <Button variant="primary" size="large" className="w-full">
                      Call (718) 568-6597
                    </Button>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-trust-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Call us anytime or fill out the form for a free quote. We respond fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

