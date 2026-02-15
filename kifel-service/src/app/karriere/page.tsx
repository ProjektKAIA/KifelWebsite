import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AppBanner from '@/components/sections/AppBanner';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Karriere',
  description: 'Sie möchten Karriere machen? Dann sind Sie bei Kifel Service in Kaarst genau richtig.',
  alternates: { canonical: '/karriere' },
  openGraph: {
    title: 'Karriere | Kifel Service',
    description: 'Sie möchten Karriere machen? Dann sind Sie bei Kifel Service in Kaarst genau richtig.',
    images: [{ url: '/images/hero/kifel-service.jpg', width: 1920, height: 1255, alt: 'Karriere bei Kifel Service' }],
  },
};

const benefits = [
  { icon: '💰', title: 'Faire Vergütung', text: 'Leistungsgerechte Bezahlung und pünktliche Gehaltszahlungen.' },
  { icon: '📈', title: 'Weiterbildung', text: 'Regelmäßige Schulungen und Weiterbildungsmöglichkeiten.' },
  { icon: '🤝', title: 'Teamgeist', text: 'Ein kollegiales Arbeitsumfeld mit flachen Hierarchien.' },
  { icon: '🕐', title: 'Flexible Zeiten', text: 'Verschiedene Arbeitszeitmodelle für Ihre Work-Life-Balance.' },
  { icon: '📱', title: 'Eigene Mitarbeiter-App', text: 'Digitale Zeiterfassung, Stundenübersicht und Dienstpläne – bald direkt auf Ihrem Smartphone.' },
];

const openPositions = [
  { title: 'Reinigungskraft (m/w/d)', type: 'Vollzeit / Teilzeit', location: 'Kaarst, Neuss, Mönchengladbach' },
  { title: 'Sicherheitsmitarbeiter (m/w/d)', type: 'Vollzeit', location: 'Kaarst und Umgebung' },
  { title: 'Hausmeister (m/w/d)', type: 'Vollzeit / Teilzeit', location: 'Kaarst, Neuss' },
];

export default function KarrierePage() {
  return (
    <>
      <Hero
        title="Karriere bei Kifel Service"
        subtitle="Werden Sie Teil unseres Teams"
        image="/images/hero/kifel-service.jpg"
        compact
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Warum Kifel Service?"
            subtitle="Entdecken Sie die Vorteile einer Karriere bei uns"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                <span className="text-4xl block mb-4">{b.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Offene Stellen"
            subtitle="Finden Sie Ihre nächste berufliche Herausforderung"
          />
          <div className="space-y-4">
            {openPositions.map((pos) => (
              <div key={pos.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{pos.title}</h3>
                  <p className="text-gray-500 text-sm">{pos.type} &middot; {pos.location}</p>
                </div>
                <Button href="/kontakt" variant="primary" size="sm">Jetzt bewerben</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppBanner />

      <CtaBanner
        title="Keine passende Stelle gefunden?"
        subtitle="Senden Sie uns Ihre Initiativbewerbung – wir freuen uns, von Ihnen zu hören!"
      />
    </>
  );
}
