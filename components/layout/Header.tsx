'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '@/components/common/Button';
import MasterBadge from '@/components/common/MasterBadge';
import { Menu, X, Phone, Clock, Shield, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Trust Bar */}
      <div className="hidden md:block bg-gray-950 text-white py-2 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] italic">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Clock size={12} className="text-action-orange" /> 20-Min Response</span>
              <div className="hidden md:flex items-center gap-4">
                <span className="flex items-center gap-2"><Shield size={12} className="text-safety-green" /> Licensed NYC #2103442</span>
                <MasterBadge variant="compact" />
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-action-orange">24/7 Emergency Dispatch</span>
              <a href="tel:(718)568-6597" className="hover:text-action-orange transition-colors">(718) 568-6597</a>
            </div>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-3 shadow-lg' 
            : 'bg-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter transition-all group-hover:text-trust-blue">
                Bed-Stuy <span className="text-action-orange">Locksmith</span>
              </span>
            </Link>
 
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Locations', href: '/locations' },
                { name: 'Pricing', href: '/price-estimator' },
                { name: 'Blog', href: '/blog' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs font-black uppercase italic tracking-widest text-gray-500 hover:text-trust-blue transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-action-orange group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
 
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="tel:(718)568-6597" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-action-orange text-white flex items-center justify-center animate-pulse">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Expert Dispatch</span>
                  <span className="text-lg font-black text-gray-900 tracking-tight italic">(718) 568-6597</span>
                </div>
              </a>
              <Link href="/quote">
                <Button size="medium" className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-xl uppercase italic tracking-tight shadow-lg">
                  Free Quote
                </Button>
              </Link>
            </div>
 
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:(718)568-6597" className="w-10 h-10 rounded-full bg-action-orange text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform" aria-label="Call Now">
                <Phone size={18} />
              </a>
              <button
                className="p-2 text-gray-900 hover:text-action-orange transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
 
        {/* Mobile Navigation */}
        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="p-8 space-y-8">
            <nav className="space-y-6">
              {[
                { name: 'All Services', href: '/services' },
                { name: 'Service Areas', href: '/locations' },
                { name: 'Price Estimator', href: '/price-estimator' },
                { name: 'Helpful Guides', href: '/blog' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="flex items-center justify-between text-2xl font-black uppercase italic tracking-tighter text-gray-900 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={32} className="text-action-orange group-hover:translate-x-2 transition-all" />
                </Link>
              ))}
            </nav>
            
            <div className="pt-12 space-y-6">
              <a href="tel:(718)568-6597" className="block">
                <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black py-6 rounded-2xl text-xl uppercase italic shadow-2xl">
                  Call Dispatch
                </Button>
              </a>
              <Link href="/quote" className="block" onClick={() => setIsMenuOpen(false)}>
                <Button size="large" variant="secondary" className="w-full bg-gray-900 text-white font-black py-6 rounded-2xl text-xl uppercase italic">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
