import type { Metadata } from 'next';

export const runtime = 'edge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import Analytics from '@/components/common/Analytics';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Bed-Stuy Locksmith | Emergency Car & Home Unlock | 24/7',
    template: '%s | Bed-Stuy Locksmith',
  },
  description:
    'Fast emergency locksmith service in Bed-Stuy. Car unlock, key replacement, lock repair. 20-minute response. Available 24/7. Call (718) 568-6597.',
  keywords: ['locksmith', 'bed stuy', 'brooklyn', 'emergency locksmith', 'car unlock', 'lock repair'],
  metadataBase: new URL('https://www.locksmithbedstuy.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon.svg' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Bed-Stuy Locksmith | Emergency Service 24/7',
    description: 'Fast emergency locksmith service in Bed-Stuy. 20-minute response. Available 24/7.',
    type: 'website',
    url: 'https://www.locksmithbedstuy.com',
    siteName: 'Bed-Stuy Locksmith',
    images: [
      {
        url: 'https://www.locksmithbedstuy.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Bed-Stuy Locksmith - Expert Emergency Service in Brooklyn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bed-Stuy Locksmith | Emergency Service 24/7',
    description: 'Fast emergency locksmith service in Bed-Stuy. Call (718) 568-6597.',
    images: ['https://www.locksmithbedstuy.com/images/og-image.webp'],
  },
  alternates: {
    canonical: 'https://www.locksmithbedstuy.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Analytics />
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
