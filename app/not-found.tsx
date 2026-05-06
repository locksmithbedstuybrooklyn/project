import Link from 'next/link';
import Button from '@/components/common/Button';
import { Home, Phone, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full text-action-orange mb-8">
          <AlertCircle size={48} />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase italic">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          The page you are looking for doesn't exist or has been moved as part of our security upgrades.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Button size="large" className="w-full bg-trust-blue hover:bg-blue-800 font-bold py-6">
              <Home className="mr-2" size={20} />
              Return Home
            </Button>
          </Link>
          <a href="tel:(718)568-6597">
            <Button variant="outline" size="large" className="w-full border-action-orange text-action-orange hover:bg-action-orange hover:text-white font-bold py-6">
              <Phone className="mr-2" size={20} />
              Call Emergency Line
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
