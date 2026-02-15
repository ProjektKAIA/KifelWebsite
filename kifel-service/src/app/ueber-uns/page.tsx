import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import CtaBanner from '@/components/sections/CtaBanner';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Erfahren Sie mehr über Kifel Service - Ihr Partner für Reinigung und Sicherheit in Kaarst und Umgebung.',
  alternates: { canonical: '/ueber-uns' },
  openGraph: {
    title: 'Über uns | Kifel Service',
    description: 'Erfahren Sie mehr über Kifel Service - Ihr Partner für Reinigung und Sicherheit in Kaarst und Umgebung.',
    images: [{ url: '/images/ueber-uns-kifel-kontakt.jpg', width: 1920, height: 1255, alt: 'Kifel Service Über uns' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns | Kifel Service',
    description: 'Erfahren Sie mehr über Kifel Service - Ihr Partner für Reinigung und Sicherheit in Kaarst und Umgebung.',
  },
};

const values = [
  {
    title: 'Zuverlässigkeit',
    text: 'Pünktlichkeit und Verlässlichkeit sind die Grundpfeiler unserer Arbeit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Qualität',
    text: 'Wir arbeiten nach höchsten Standards und mit modernsten Methoden.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Nachhaltigkeit',
    text: 'Umweltfreundliche Reinigungsmittel und nachhaltige Prozesse.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Kundennähe',
    text: 'Persönliche Betreuung und maßgeschneiderte Lösungen für jeden Kunden.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Hero
        title="Über uns"
        subtitle=""
        image="/images/ueber-uns-kifel-kontakt.jpg"
        mini
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Wer wir sind" centered={false} />
              <p className="text-gray-600 mb-4">
                Kifel Service e.K. ist Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen und Sicherheitsdienste in Kaarst, Neuss, Mönchengladbach und Umgebung.
              </p>
              <p className="text-gray-600 mb-4">
                Unter der Leitung von Inhaber Alexander Kifel haben wir uns auf maßgeschneiderte Reinigungs- und Sicherheitslösungen spezialisiert. Mit unserem engagierten Team stellen wir sicher, dass Ihre Immobilien stets in bestem Zustand sind und Ihre Sicherheit gewährleistet ist.
              </p>
              <p className="text-gray-600">
                Unser Motto: <strong>&ldquo;Mit reinem Herzen&rdquo;</strong> – denn wir setzen uns mit Leidenschaft für die Zufriedenheit unserer Kunden ein.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden">
              <Image src="/images/ueber-uns-kifel-kontakt.jpg" alt="Kifel Service Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Unsere Werte" subtitle="Was uns antreibt und auszeichnet" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 text-[#2b4c8c] mb-5">
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
