'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/common/Button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-trust-blue">Bed-Stuy Locksmith</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-trust-blue font-medium transition-colors">Services</Link>
            <Link href="/locations" className="text-gray-600 hover:text-trust-blue font-medium transition-colors">Locations</Link>
            <Link href="/about" className="text-gray-600 hover:text-trust-blue font-medium transition-colors">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-trust-blue font-medium transition-colors">Blog</Link>
            <Link href="/booking">
              <Button variant="primary" size="small" className="bg-trust-blue hover:bg-blue-800">
                Book Now
              </Button>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-trust-blue">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(718)568-6597" className="text-trust-blue font-semibold">
              (718) 568-6597
            </a>
            <Link href="/quote" className="bg-trust-blue text-white px-6 py-2 rounded-lg hover:bg-blue-900">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/services" className="block text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/locations" className="block text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link href="/blog" className="block text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/about" className="block text-xl font-bold" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/booking" className="block text-xl font-bold text-trust-blue" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            <Link href="/contact" className="block text-xl font-bold" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="tel:(718)568-6597" className="block py-2 text-trust-blue font-semibold">
              (718) 568-6597
            </a>
            <Link href="/quote" className="block bg-trust-blue text-white px-6 py-2 rounded-lg text-center">
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
