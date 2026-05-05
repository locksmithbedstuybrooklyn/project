import { generateLocalBusinessSchema } from '@/lib/schema';

export default function LocalBusinessSchema() {
  const schema = generateLocalBusinessSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
