import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bed-Stuy Locksmith</h3>
            <p className="text-gray-400 mb-4">Emergency locksmith services available 24/7.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:(718)568-6597">(718) 568-6597</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@locksmithbedstuy.com">info@locksmithbedstuy.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/car-lockout" className="hover:text-white">Car Lockout</Link></li>
              <li><Link href="/services/residential-lockout" className="hover:text-white">Residential Lockout</Link></li>
              <li><Link href="/services/lock-replacement" className="hover:text-white">Lock Replacement</Link></li>
              <li><Link href="/services/lock-repair" className="hover:text-white">Lock Repair</Link></li>
              <li><Link href="/services/24-hour-locksmith" className="hover:text-white">24-Hour Service</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/locations/bed-stuy" className="hover:text-white">Bed-Stuy</Link></li>
              <li><Link href="/locations/bed-stuy/crown-heights" className="hover:text-white">Crown Heights</Link></li>
              <li><Link href="/locations/williamsburg" className="hover:text-white">Williamsburg</Link></li>
              <li><Link href="/locations/greenpoint" className="hover:text-white">Greenpoint</Link></li>
              <li><Link href="/service-areas" className="hover:text-white">All Areas</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Bed-Stuy Locksmith. All rights reserved. Licensed &amp; Insured.</p>
        </div>
      </div>
    </footer>
  );
}
