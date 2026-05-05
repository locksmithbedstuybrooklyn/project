import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Star, Quote } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Testimonials | Bed-Stuy Locksmith Reviews | 4.9 Stars',
  description: 'Customer testimonials and reviews for Bed-Stuy Locksmith. 4.9-star rating. Read what our customers say.',
};

export default function TestimonialsPage() {
  const reviews = [
    { name: 'Maria R.', loc: 'Bed-Stuy', title: 'Fast and Professional', content: 'I was locked out of my car on a Saturday night. They arrived in 18 minutes and had me back in my car in 5 minutes. Professional, quick, and fair price. Highly recommend!' },
    { name: 'James T.', loc: 'Williamsburg', title: 'Courteous and Reliable', content: 'Called for a residential lockout. The technician was courteous, quick, and didn\'t damage my door. Will definitely call again.' },
    { name: 'David L.', loc: 'Greenpoint', title: 'Best Locksmith in Brooklyn', content: 'Best locksmith in Brooklyn. Fast response, honest pricing, and they actually know what they\'re doing. Five stars!' },
    { name: 'Sarah M.', loc: 'Crown Heights', title: 'Saved the Day', content: 'Locked out of my house with my kids inside. They responded in 15 minutes and got me back inside safely. Thank you!' },
    { name: 'Michael T.', loc: 'Prospect Heights', title: 'Trustworthy and Fair', content: 'I\'ve used them multiple times. Always trustworthy, always fair pricing, always professional. Highly recommend.' },
    { name: 'Jennifer L.', loc: 'Bushwick', title: 'No Damage, No Hassle', content: 'Called for a car lockout. They opened my car without any damage. No hassle, fair price, great service.' },
    { name: 'Robert K.', loc: 'Astoria', title: 'Available When I Needed', content: 'Locked out at 2 AM. They answered immediately and arrived within 20 minutes. Professional and fair. Thank you!' },
    { name: 'Patricia W.', loc: 'Long Island City', title: 'Honest and Reliable', content: 'They told me I could rekey my locks instead of replacing them, which saved me money. Honest and reliable. Highly recommend.' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Star size={16} fill="currentColor" />
            <span>4.9/5 Average Customer Rating</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Customer Testimonials <br />
            <span className="text-action-orange text-3xl md:text-5xl">What Our Neighbors Say</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            We're proud to serve our Brooklyn and Queens community. Read why thousands of neighbors trust us for their security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-8 py-4 text-lg font-bold">
                <Phone className="mr-2" size={20} />
                Call (718) 568-6597
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
              <p>
                We're proud of our 4.9-star customer rating. Our customers trust us because we deliver results. We respond fast. We do quality work. We charge fair prices. Read what our customers say about us.
              </p>
              <p>
                Our customers come back to us because we treat them right. We respect their property. We solve their problems. We charge fair prices. We're professional and courteous. We care about customer satisfaction.
              </p>
              <p>
                Thank you to all our customers. We appreciate your trust. We'll continue to provide excellent service. Call (718) 568-6597 for your locksmith needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
               <div className="flex justify-center gap-1 mb-6">
                 {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="#FF8C00" className="text-action-orange" />)}
               </div>
               <h3 className="text-2xl font-bold mb-4 text-center">4.9 Stars Average</h3>
               <p className="text-center text-gray-600">Based on over 1,200 verified customer reviews in Brooklyn & Queens.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {reviews.map((rev, i) => (
              <Card key={i} className="p-8 border-gray-100 shadow-lg relative overflow-hidden group hover:border-trust-blue transition-colors">
                <Quote className="absolute top-4 right-4 text-gray-100 group-hover:text-blue-50 transition-colors" size={48} />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="#FF8C00" className="text-action-orange" />)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{rev.title}</h4>
                  <p className="text-gray-600 mb-6 italic">"{rev.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-trust-blue rounded-full flex items-center justify-center text-white font-bold">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{rev.name}</p>
                      <p className="text-sm text-gray-500">{rev.loc}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               We're committed to excellent customer service. We'll continue to provide fast, professional, fair-priced locksmith service.
             </p>
             <div className="max-w-xl mx-auto text-left">
                <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Request Quote', href: '/quote' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'All Services', href: '/services' }
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <Card hover className="p-8 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-4 text-sm">{link.name}</h3>
                  <div className="flex justify-between items-center text-trust-blue">
                    <ArrowRight size={20} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
