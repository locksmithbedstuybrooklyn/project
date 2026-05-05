export const metadata = {
  title: 'Privacy Policy | Bed-Stuy Locksmith',
  description: 'Privacy policy for Bed-Stuy Locksmith. How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: May 4, 2026</p>

      {[
        {
          heading: 'Your Privacy Matters',
          body: 'Bed-Stuy Locksmith ("we," "us," or "our") operates locksmithbedstuy.com. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.',
        },
        {
          heading: 'Information We Collect',
          body: 'We may collect: Personal Information (name, phone number, email address, location, vehicle information when you request a quote); Usage Information (pages visited, time spent, links clicked); Device Information (device type, browser type, IP address).',
        },
        {
          heading: 'How We Use Your Information',
          body: 'We use your information to: provide locksmith services; respond to inquiries and requests; send service updates and confirmations; improve our website and services; comply with legal obligations.',
        },
        {
          heading: 'Information Sharing',
          body: 'We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and providing services, subject to confidentiality agreements.',
        },
        {
          heading: 'Data Security',
          body: 'We implement appropriate security measures to protect your personal information. We use HTTPS encryption on our website. However, no method of transmission over the internet is 100% secure.',
        },
        {
          heading: 'Your Rights',
          body: 'You have the right to access, update, or delete your personal information. Contact us at info@locksmithbedstuy.com to exercise these rights.',
        },
        {
          heading: 'Contact Us',
          body: 'If you have questions about this Privacy Policy, contact us at: Bed-Stuy Locksmith | Phone: (718) 568-6597 | Email: info@locksmithbedstuy.com',
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
