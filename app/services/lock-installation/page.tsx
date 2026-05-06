import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Lock, Key, Settings, Zap, Home, Building2, Smartphone } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Installation Services | Bed-Stuy | Smart & Secure',
  description: 'Expert lock installation for residential & commercial. Deadbolts, smart locks, mortise, and high-security hardware. 30-day guarantee. Call (718) 568-6597.',
};

export default function LockInstallationPage() {
  const faqs = [
    { q: "How much does lock installation cost?", a: "Door knobs: $50-150. Deadbolts: $75-200. Mortise: $150-400. Smart: $200-600. Commercial: $500-2000+." },
    { q: "Can I install locks myself?", a: "You can, but professional installation ensures proper alignment and security. We recommend professional installation for maximum security." },
    { q: "How long does professional installation take?", a: "Door knobs: 15-20 minutes. Deadbolts: 30-45 minutes. Mortise: 1-2 hours. Smart: 30-60 minutes." },
    { q: "What's the difference between deadbolts and door knobs?", a: "Deadbolts provide superior security with a bolt that extends deep into the frame. Door knobs are simpler but much easier to bypass." },
    { q: "Are smart locks secure?", a: "Yes, quality smart locks from brands like Schlage or Yale are very secure. They use advanced encryption and robust mechanical hardware." },
    { q: "Do you install smart locks?", a: "Yes, we install all major smart lock brands and can help with app setup and integration." },
    { q: "What's the best type of lock for my door?", a: "For exterior doors, we always recommend at least a Grade 1 deadbolt. We assess your door type to recommend the best fit." },
    { q: "How high should a deadbolt be installed?", a: "Standard height is 36-48 inches from the floor, typically 6-12 inches above the door knob." },
    { q: "Can you install locks on apartment doors?", a: "Yes, we install locks on apartment doors with landlord permission." },
    { q: "Do you install commercial lock systems?", a: "Yes, we design and install complete commercial systems including master keys and access control." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-400/30">
            <Lock size={16} />
            <span>Premium Security Hardware</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Professional Lock <br />
            <span className="text-action-orange uppercase">Installation Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            Upgrade your security with expert installation of deadbolts, smart locks, and commercial hardware. Precision fit, guaranteed performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="tel:(718)568-6597" className="w-full sm:w-auto">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full text-lg font-bold py-6 px-10">
                <Phone className="mr-2" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote" className="w-full sm:w-auto">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full text-lg py-6 px-10 backdrop-blur-sm">
                Get Installation Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Secure Your Property with Professional Installation</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bed-Stuy Locksmith provides professional lock installation for all lock types and applications. Whether you need basic door knob installation, high-security deadbolts, smart locks, or commercial access control systems, our licensed technicians ensure proper installation with optimal security. We serve Bed-Stuy and surrounding areas with transparent pricing and a 30-day satisfaction guarantee.
            </p>
          </div>

          {/* Section 1 & 2: Knobs & Deadbolts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <Card className="p-10 border-gray-100 hover:shadow-xl transition-shadow">
              <Home className="text-trust-blue mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Residential Hardware</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Standard home security starts with quality door knobs and deadbolts. We install Grade 1 and Grade 2 hardware that resists forced entry.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-safety-green" size={18} /> Deadbolt Installation ($75-200)</li>
                <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-safety-green" size={18} /> Door Knob Replacement ($50-150)</li>
                <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-safety-green" size={18} /> Strike Plate Reinforcement</li>
              </ul>
              <Link href="/quote">
                <Button variant="outline" className="w-full border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white">Request Home Install</Button>
              </Link>
            </Card>

            <Card className="p-10 border-gray-100 hover:shadow-xl transition-shadow">
              <Smartphone className="text-trust-blue mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Smart Lock Systems</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience keyless convenience. We install and configure smart locks from August, Yale, Schlage, and more.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-safety-green" size={18} /> Keypad & Biometric Locks</li>
                <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-safety-green" size={18} /> App Integration & Setup</li>
                <li className="flex items-center gap-2 font-medium"><CheckCircle className="text-safety-green" size={18} /> WiFi & Bluetooth Config</li>
              </ul>
              <Link href="/quote">
                <Button variant="outline" className="w-full border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white">Go Smart Today</Button>
              </Link>
            </Card>
          </div>

          {/* Section 3 & 5: Mortise & High-Security */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Protection: Mortise & High-Security</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For those who demand the highest level of physical protection, we specialize in <strong>Mortise locks</strong> and <strong>High-Security cylinders</strong>. Mortise locks are built into the door itself, providing incredible resistance to prying and impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our High-Security options feature anti-pick, anti-drill, and anti-bump technology, ensuring your most valuable spaces remain inaccessible to intruders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Complex Pocket Cutting",
                  "Anti-Pick Mechanisms",
                  "Hardened Steel Pins",
                  "Restricted Keyways",
                  "Professional Alignment",
                  "Lifetime Hardware Options"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-trust-blue" size={18} />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100">
               <QuoteForm />
            </div>
          </div>

          {/* Section 6: Commercial */}
          <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-action-orange/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Building2 className="text-action-orange mb-8" size={64} />
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Commercial Access Solutions</h2>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                  Protect your business with enterprise-grade security. We design and install complete commercial lock systems for offices, retail, and industrial spaces.
                </p>
                <div className="space-y-4">
                   {["Master Key Systems", "Access Control (Keycard/Fob)", "Panic Bar & Exit Devices", "Heavy-Duty Grade 1 Hardware"].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle className="text-action-orange" size={24} />
                       <span className="text-lg font-bold">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-6">Commercial Benefits</h4>
                <div className="space-y-6 text-blue-100">
                  <p>Our commercial installations are designed for high-traffic durability and granular access control, ensuring your employees and assets are always secure.</p>
                  <a href="tel:(718)568-6597" className="block">
                    <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full font-bold">Consult an Expert</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-gray-400">Installation FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="group">
                  <div className="bg-white border-b border-gray-100 py-8 px-4 group-hover:bg-gray-50 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">The Professional Advantage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision Alignment", desc: "We ensure every bolt and latch aligns perfectly with the strike plate for effortless locking." },
              { title: "Security Optimization", desc: "We don't just install; we evaluate your door frame strength and recommend reinforcements." },
              { title: "Full Warranty", desc: "All our installations are backed by a 30-day labor guarantee and manufacturer hardware warranties." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-trust-blue mx-auto mb-6">
                  <Shield size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-trust-blue text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Future Today</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional installation is the foundation of real security. Don't leave your safety to chance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-12 py-6 text-xl">
                <Phone className="mr-2" size={24} />
                Call (718) 568-6597
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Lock Repair", href: "/services/lock-repair" },
              { name: "Lock Replacement", href: "/services/lock-replacement" },
              { name: "Rekeying Services", href: "/services/lock-rekeying" },
              { name: "Emergency Services", href: "/services/24-hour-emergency-locksmith" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-trust-blue font-bold hover:text-blue-800 flex items-center gap-2">
                {link.name} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
