export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  // Prevent XSS injection in JSON-LD script tags by escaping '<'
  const serialized = serializeJsonLd(data);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />
  );
}
