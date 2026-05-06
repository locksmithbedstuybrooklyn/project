import React from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { Phone, Calendar, ClipboardList } from 'lucide-react';

export function renderContent(content: string) {
  const parts = content.split(/(\[\[CTA:.*?\]\])/g);

  return parts.map((part, index) => {
    if (part.startsWith('[[CTA:')) {
      const type = part.match(/\[\[CTA:(.*?)\]\]/)?.[1];
      
      switch (type) {
        case 'PHONE':
          return (
            <div key={index} className="my-12 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-blue-950 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-2">Emergency Response Needed?</h3>
                  <p className="text-blue-200 font-medium">Our mobile units are currently active in your neighborhood.</p>
                </div>
                <a href="tel:(718)568-6597" className="w-full md:w-auto">
                  <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black px-10 py-6 rounded-2xl text-xl shadow-xl hover:scale-105 transition-all uppercase italic">
                    <Phone className="mr-2 inline-block" size={24} />
                    (718) 568-6597
                  </Button>
                </a>
              </div>
            </div>
          );
        case 'QUOTE':
          return (
            <div key={index} className="my-12 p-8 md:p-12 bg-white border-4 border-trust-blue rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-trust-blue uppercase italic tracking-tight mb-2">Get an Expert Quote</h3>
                  <p className="text-gray-600 font-medium">Transparent, flat-rate estimates for any project.</p>
                </div>
                <Link href="/quote" className="w-full md:w-auto">
                  <Button size="large" className="w-full bg-trust-blue hover:bg-blue-800 text-white font-black px-10 py-6 rounded-2xl text-xl shadow-lg hover:scale-105 transition-all uppercase italic">
                    <ClipboardList className="mr-2 inline-block" size={24} />
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          );
        case 'BOOKING':
          return (
            <div key={index} className="my-12 p-8 md:p-12 bg-safety-green/10 border-4 border-safety-green rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-safety-green/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tight mb-2">Schedule Your Upgrade</h3>
                  <p className="text-gray-600 font-medium">Book a technician for non-emergency installations.</p>
                </div>
                <Link href="/booking" className="w-full md:w-auto">
                  <Button size="large" className="w-full bg-safety-green hover:bg-green-700 text-white font-black px-10 py-6 rounded-2xl text-xl shadow-lg hover:scale-105 transition-all uppercase italic">
                    <Calendar className="mr-2 inline-block" size={24} />
                    Book Service
                  </Button>
                </Link>
              </div>
            </div>
          );
        default:
          return null;
      }
    }

    // Process headers and paragraphs
    const lines = part.split('\n');
    return lines.map((line, lIndex) => {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '');
        const id = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
        return <h2 key={`${index}-${lIndex}`} id={id} className="text-3xl md:text-4xl font-black text-gray-900 mt-16 mb-8 uppercase italic tracking-tight leading-tight scroll-mt-32 border-l-8 border-action-orange pl-6">{title}</h2>;
      }
      if (line.startsWith('### ')) {
        const title = line.replace('### ', '');
        return <h3 key={`${index}-${lIndex}`} className="text-xl md:text-2xl font-bold text-gray-900 mt-12 mb-6 uppercase italic tracking-tight">{title}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={`${index}-${lIndex}`} className="ml-6 mb-3 text-gray-700 list-disc pl-2 font-medium">{processLinks(line.replace('- ', ''))}</li>;
      }
      if (line.trim() === '') return <br key={`${index}-${lIndex}`} />;
      
      return <p key={`${index}-${lIndex}`} className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">{processLinks(line)}</p>;
    });
  });
}

function processLinks(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <Link key={i} href={match[2]} className="text-trust-blue font-bold border-b-2 border-trust-blue/20 hover:border-trust-blue transition-colors">
          {match[1]}
        </Link>
      );
    }
    return part;
  });
}
