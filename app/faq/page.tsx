import { HelpCircle, Phone, ArrowRight, Shield, Clock, CreditCard, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Locksmith FAQ | Common Questions Answered | Bed-Stuy',
  description: 'Frequently asked questions about locksmith services: pricing, response time, payment, services, and more. Get answers fast.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'How fast do you respond?',
      answer: 'We aim for 20-minute arrival in most cases. Call (718) 568-6597 and we\'ll give you a specific time based on your current location.'
    },
    {
      question: 'Do you charge for the service call?',
      answer: 'No. We charge for the actual service (unlock, key cut, lock repair, etc.). The initial consultation and quote are free.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, and all major credit and debit cards for your convenience.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. We\'re fully licensed and insured in the state of New York. Your property is always protected when we work.'
    },
    {
      question: 'Can you unlock any car?',
      answer: 'We can unlock most vehicle makes and models. Some newer high-security cars may require special tools, but we are equipped for the vast majority of vehicles on the road today.'
    },
    {
      question: 'Do you damage cars when unlocking?',
      answer: 'No. We use professional-grade, non-destructive techniques to gain entry to your vehicle without causing any damage to the door or lock.'
    },
    {
      question: 'Can you make car keys?',
      answer: 'Yes. We cut and program car keys on-site for most vehicles, including transponder keys and fobs.'
    },
    {
      question: 'What about house lockouts?',
      answer: 'We handle residential lockouts as well. We can open your home door quickly and safely without damaging the frame or lock.'
    },
    {
      question: 'Do you do lock replacement?',
      answer: 'Yes. We replace old or broken locks with new, modern high-security options to keep your home or business safe.'
    },
    {
      question: 'What if I\'m locked out at 2 AM?',
      answer: 'Call us immediately. We are available 24/7, including late nights, weekends, and all holidays.'
    },
    {
      question: 'How much does a locksmith cost?',
      answer: 'Prices vary depending on the complexity of the job. We provide free, transparent quotes at /quote or over the phone at (718) 568-6597.'
    },
    {
      question: 'Do you serve my area?',
      answer: 'We serve Bed-Stuy and everything within a 5-mile radius, covering most of Brooklyn and parts of Queens. Check our locations page for more details.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Everything you need to know about our emergency locksmith services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Quick answers to the most common inquiries we receive.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-8 border-gray-100 hover:border-trust-blue transition-colors">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-trust-blue">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 text-center">
             <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
             <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
               Our team is available 24/7 to answer any other questions you might have about your specific situation.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:(718)568-6597">
                  <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto">
                    <Phone className="mr-2" size={20} />
                    Call (718) 568-6597
                  </Button>
                </a>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="large" className="w-full">
                    Contact Us
                  </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-trust-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                 <Shield className="mx-auto text-action-orange" size={40} />
                 <h4 className="text-xl font-bold">Licensed & Insured</h4>
                 <p className="text-blue-100 text-sm">Every job is protected by full liability insurance.</p>
              </div>
              <div className="space-y-4">
                 <Clock className="mx-auto text-action-orange" size={40} />
                 <h4 className="text-xl font-bold">24/7 Support</h4>
                 <p className="text-blue-100 text-sm">We never close. Day or night, we're here to help.</p>
              </div>
              <div className="space-y-4">
                 <CreditCard className="mx-auto text-action-orange" size={40} />
                 <h4 className="text-xl font-bold">No Hidden Fees</h4>
                 <p className="text-blue-100 text-sm">The price we quote is the price you pay.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

