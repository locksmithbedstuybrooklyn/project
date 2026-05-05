// Nested location pages for Crown Heights and Prospect Heights
// These are served under /locations/bed-stuy/[slug]
// We redirect them via the parent [slug] route — but Next.js needs a page here too.
// Using a redirect to the flat slug route:
import { redirect } from 'next/navigation';

export const runtime = 'edge';

export default async function NestedLocationRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/locations/${slug}`);
}
