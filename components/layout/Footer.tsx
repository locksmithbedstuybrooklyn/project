import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Star, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-action-orange via-trust-blue to-action-orange opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Authority */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">
              Bed-Stuy <span className="text-action-orange">Locksmith</span>
            </h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
              Reliable local locksmith service in Brooklyn. We provide fast, damage-free entry and hardware installation. Licensed and insured since 2010.
            </p>
            <div className="space-y-4">
              <a href="tel:(718)568-6597" className="group flex items-center gap-4 text-xl font-black italic hover:text-action-orange transition-colors">
                <div className="w-10 h-10 rounded-xl bg-action-orange/10 flex items-center justify-center text-action-orange group-hover:bg-action-orange group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                (718) 568-6597
              </a>
              <div className="flex items-center gap-4 text-gray-400 text-sm font-medium italic">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-action-orange">
                  <MapPin size={18} />
                </div>
                492 Throop Ave, Brooklyn, NY 11221
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-sm font-medium italic">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-action-orange">
                  <Clock size={18} />
                </div>
                Mon-Sun 9AM - 6PM (Emergency 24/7)
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-xs font-black uppercase tracking-widest italic">
                <Shield size={14} className="text-safety-green" /> DCWP License #2103442-DCA
              </div>
            </div>
          </div>

          {/* Service Pillars */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-8 italic">Service Pillars</h4>
            <ul className="space-y-3">
              {[
                { name: 'Automotive Systems', href: '/services/automotive-locksmith' },
                { name: 'Residential Locks', href: '/services/residential-lockout' },
                { name: 'Hardware Installation', href: '/services/lock-installation' },
                { name: 'Cylinder Rekeying', href: '/services/lock-rekeying' },
                { name: 'High-Security Upgrade', href: '/services/lock-replacement' },
                { name: '24/7 Rapid Response', href: '/services/24-hour-emergency-locksmith' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2 transition-all italic uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-action-orange group-hover:scale-150 transition-all"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhood Hubs */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-8 italic">Service Areas</h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                'Bed-Stuy', 'Crown Heights', 'Williamsburg', 
                'Bushwick', 'Greenpoint', 'Prospect Heights'
              ].map((loc) => (
                <li key={loc}>
                  <Link href={`/locations/${loc.toLowerCase().replace(/\s+/g, '-')}`} className="group text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2 transition-all italic uppercase tracking-tight">
                    <MapPin size={14} className="text-gray-700 group-hover:text-action-orange" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge & Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-8 italic">Resource Center</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Contact Dispatch', href: '/contact' },
                { name: 'Technical Blog', href: '/blog' },
                { name: 'Work Gallery', href: '/gallery' },
                { name: 'Customer Reviews', href: '/testimonials' },
                { name: 'Security Audits', href: '/quote' },
                { name: 'Online Booking', href: '/booking' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2 transition-all italic uppercase tracking-tight">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-action-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600 italic">
              <span className="flex items-center gap-2"><Star size={12} className="text-action-orange" /> 4.9/5 Rating</span>
              <span className="flex items-center gap-2"><Clock size={12} className="text-trust-blue" /> 20-Min Response</span>
              <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> Licensed &amp; Insured</span>
            </div>
            <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic text-center md:text-right mt-6 md:mt-0">
              &copy; {new Date().getFullYear()} BED-STUY LOCKSMITH. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
