import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Bed-Stuy Locksmith',
  description: 'Terms of service for Bed-Stuy Locksmith. Please read before using our services.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-trust-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">Last updated: May 4, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using the locksmithbedstuy.com website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Description</h3>
              <p>
                Bed-Stuy Locksmith provides professional locksmith services including car unlock, key replacement, ignition repair, residential lockout, lock repair, lock replacement, lock installation, and emergency services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
              <p>
                Our services are available in Bed-Stuyvesant and a 5-mile radius, including Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, and Long Island City.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing and Payment</h3>
              <p>
                Prices are subject to change without notice. We provide free estimates. Payment is due upon completion of service. We accept cash, credit cards, and debit cards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h3>
              <p>
                You may cancel a scheduled service up to 24 hours before the appointment. Cancellations made less than 24 hours before the appointment may incur a cancellation fee.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Liability Limitation</h3>
              <p>
                We are not liable for indirect, incidental, special, or consequential damages. Our liability is limited to the amount paid for services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Warranty Disclaimer</h3>
              <p>
                Services are provided "as is" without warranties. We warrant that services will be performed in a professional and workmanlike manner.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intellectual Property</h3>
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of Bed-Stuy Locksmith or its content suppliers and is protected by copyright laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Conduct</h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for illegal purposes</li>
                <li>Harass or threaten others</li>
                <li>Post spam or malicious content</li>
                <li>Attempt to gain unauthorized access</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="font-bold">Bed-Stuy Locksmith</p>
              <p>Address: 492 Throop Ave, Brooklyn, NY 11221</p>
              <p>Hours: Mon-Sun 9AM - 6PM (Emergency 24/7)</p>
              <p>Phone: (718) 568-6597</p>
              <p>Email: info@locksmithbedstuy.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
