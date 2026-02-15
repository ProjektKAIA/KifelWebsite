import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import FloatingCta from '@/components/ui/FloatingCta';

export const metadata: Metadata = {
  title: {
    default: 'Kifel Service Reinigungsdienstleistungen | Sicherheitsdienst Kaarst',
    template: '%s | Kifel Service',
  },
  description:
    'Kifel Service ist Ihr Partner für professionelle Reinigungsdienstleistungen und Sicherheitsdienst in Kaarst und Umgebung.',
  metadataBase: new URL('https://kifel-service.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Kifel Service',
    title: 'Kifel Service Reinigungsdienstleistungen | Sicherheitsdienst Kaarst',
    description:
      'Kifel Service ist Ihr Partner für professionelle Reinigungsdienstleistungen und Sicherheitsdienst in Kaarst und Umgebung.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kifel Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kifel Service Reinigungsdienstleistungen | Sicherheitsdienst Kaarst',
    description:
      'Kifel Service ist Ihr Partner für professionelle Reinigungsdienstleistungen und Sicherheitsdienst in Kaarst und Umgebung.',
  },
  other: {
    'geo.region': 'DE-NW',
    'geo.placename': 'Kaarst',
    'geo.position': '51.2292;6.6256',
    ICBM: '51.2292, 6.6256',
    language: 'de-DE',
    'revisit-after': '7 days',
    'content-language': 'de',
  },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://kifel-service.com/#localbusiness',
        name: 'Kifel Service e.K.',
        legalName: 'Kifel Service e.K.',
        description:
          'Professionelle Reinigungsdienstleistungen und Sicherheitsdienst in Kaarst, Neuss und Mönchengladbach.',
        url: 'https://kifel-service.com',
        telephone: '+49 2131 29 45 497',
        email: 'info@kifel-service.de',
        image: 'https://kifel-service.com/images/logo/icon.png',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://kifel-service.com/#logo',
          url: 'https://kifel-service.com/images/logo/icon.png',
          width: 500,
          height: 500,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Justus-Liebig-Straße 3',
          addressLocality: 'Kaarst',
          postalCode: '41564',
          addressRegion: 'NW',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 51.2292,
          longitude: 6.6256,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '08:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '08:00',
            closes: '15:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Kaarst' },
          { '@type': 'City', name: 'Neuss' },
          { '@type': 'City', name: 'Mönchengladbach' },
          { '@type': 'City', name: 'Düsseldorf' },
        ],
        sameAs: [
          'https://www.facebook.com/KifelService/',
          'https://www.instagram.com/kifel.service/',
        ],
        priceRange: '€€',
        taxID: 'DE-122/5310/5752',
        founder: {
          '@type': 'Person',
          name: 'Alexander Kifel',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '3',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Familie Scyko' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Vielen Dank an Kifel Service für die tolle und schnelle Arbeit! Alles war super sauber und ordentlich.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Zapa' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Sehr professioneller Service. Pünktlich, zuverlässig und freundlich. Kann ich nur weiterempfehlen!',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Rudi Mann' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody: 'Hervorragende Arbeit! Das Team von Kifel Service hat unsere Erwartungen übertroffen.',
          },
        ],
        paymentAccepted: ['Überweisung', 'Rechnung'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Dienstleistungen',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Reinigungsservice',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gebäudereinigung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büroreinigung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gewerbeimmobilien' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hausmeisterservice' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gartenpflege' } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Sicherheitsservice',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Objektschutz' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revierschutzfahrten' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bewachung' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pfortendienst' } },
              ],
            },
          ],
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://kifel-service.com/#organization',
        name: 'Kifel Service',
        url: 'https://kifel-service.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kifel-service.com/images/logo/icon.png',
          width: 500,
          height: 500,
        },
        sameAs: [
          'https://www.facebook.com/KifelService/',
          'https://www.instagram.com/kifel.service/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kifel-service.com/#website',
        url: 'https://kifel-service.com/',
        name: 'Kifel Service',
        inLanguage: 'de',
        publisher: {
          '@id': 'https://kifel-service.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://kifel-service.com/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://kifel-service.com/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://kifel-service.com/' },
          { '@type': 'ListItem', position: 2, name: 'Dienstleistungen', item: 'https://kifel-service.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Über uns', item: 'https://kifel-service.com/ueber-uns' },
          { '@type': 'ListItem', position: 4, name: 'Aktuelles', item: 'https://kifel-service.com/aktuelles' },
          { '@type': 'ListItem', position: 5, name: 'Karriere', item: 'https://kifel-service.com/karriere' },
          { '@type': 'ListItem', position: 6, name: 'Kontakt', item: 'https://kifel-service.com/kontakt' },
        ],
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingCta />
        <CookieConsent />
      </body>
    </html>
  );
}
