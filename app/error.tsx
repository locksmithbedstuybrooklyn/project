'use client';

import { useEffect } from 'react';
import Button from '@/components/common/Button';
import { RefreshCcw, Phone, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, log to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full text-red-600 mb-8">
          <AlertTriangle size={48} />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase italic">Something Went Wrong</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          An unexpected error occurred while processing your request. Our team has been notified.
        </p>
        <div className="flex flex-col gap-4">
          <Button 
            onClick={() => reset()}
            size="large" 
            className="w-full bg-trust-blue hover:bg-blue-800 font-bold py-6"
          >
            <RefreshCcw className="mr-2" size={20} />
            Try Again
          </Button>
          <a href="tel:(718)568-6597">
            <Button variant="outline" size="large" className="w-full border-action-orange text-action-orange hover:bg-action-orange hover:text-white font-bold py-6">
              <Phone className="mr-2" size={20} />
              Call for Assistance
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
