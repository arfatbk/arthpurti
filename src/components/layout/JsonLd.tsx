import { siteConfig } from '@/config/site'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name.legal,
    alternateName: siteConfig.name.short,
    url: siteConfig.url,
    logo: "/logo.png",
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact,
      email: siteConfig.email,
      contactType: 'customer service',
    },
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chowk Bajar, Main Road, Jintur Dist.- Parbhani 431509',
      addressLocality: 'Jintur',
      addressRegion: 'Maharashtra',
      postalCode: '431509',
      addressCountry: 'IN',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
