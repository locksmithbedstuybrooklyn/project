import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bed-Stuy Locksmith',
  description: 'Privacy policy for Bed-Stuy Locksmith. How we protect your personal information.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-trust-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">Last updated: May 4, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
              <p>
                Bed-Stuy Locksmith ("we," "us," "our," or "Company") operates the locksmithbedstuy.com website. We are committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and protection of your personal information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information</strong>: Name, phone number, email address, location, vehicle information (when you request a quote or service).</li>
                <li><strong>Usage Information</strong>: Information about how you use our website, including pages visited, time spent, and links clicked.</li>
                <li><strong>Device Information</strong>: Device type, browser type, IP address, and operating system.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide locksmith services</li>
                <li>Respond to inquiries and requests</li>
                <li>Send service updates and confirmations</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Information Sharing</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and providing services, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information. We use HTTPS encryption on our website. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information. Contact us at info@locksmithbedstuy.com to exercise these rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes by updating the date at the top of this page.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="font-bold">Bed-Stuy Locksmith</p>
              <p>Phone: (718) 568-6597</p>
              <p>Email: info@locksmithbedstuy.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
