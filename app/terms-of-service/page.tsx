export const metadata = {
  title: 'Terms of Service | Bed-Stuy Locksmith',
  description: 'Terms of service for Bed-Stuy Locksmith. Please read before using our services.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: May 4, 2026</p>

      {[
        {
          heading: 'Agreement to Terms',
          body: 'By accessing and using locksmithbedstuy.com and our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.',
        },
        {
          heading: 'Service Description',
          body: 'Bed-Stuy Locksmith provides professional locksmith services including car unlock, key replacement, ignition repair, residential lockout, lock repair, lock replacement, lock installation, and emergency services.',
        },
        {
          heading: 'Service Area',
          body: 'Our services are available in Bed-Stuyvesant and a 5-mile radius, including Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, and Long Island City.',
        },
        {
          heading: 'Pricing and Payment',
          body: 'Prices are subject to change without notice. We provide free estimates. Payment is due upon completion of service. We accept cash, credit cards, and debit cards.',
        },
        {
          heading: 'Cancellation Policy',
          body: 'You may cancel a scheduled service up to 24 hours before the appointment. Cancellations made less than 24 hours before the appointment may incur a cancellation fee.',
        },
        {
          heading: 'Liability Limitation',
          body: 'We are not liable for indirect, incidental, special, or consequential damages. Our liability is limited to the amount paid for services.',
        },
        {
          heading: 'Warranty Disclaimer',
          body: 'Services are provided "as is" without warranties. We warrant that services will be performed in a professional and workmanlike manner.',
        },
        {
          heading: 'Governing Law',
          body: 'These Terms of Service are governed by the laws of the State of New York.',
        },
        {
          heading: 'Contact Us',
          body: 'Questions about these Terms? Contact us: Bed-Stuy Locksmith | Phone: (718) 568-6597 | Email: info@locksmithbedstuy.com',
        },
      ].map(({ heading, body }) => (
        <section key={heading} className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-gray-900">{heading}</h2>
          <p className="text-gray-700 leading-relaxed">{body}</p>
        </section>
      ))}
    </div>
  );
}
