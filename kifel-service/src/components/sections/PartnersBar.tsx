import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const referenzen = [
  { name: 'Allianz', logo: '/images/referenzen/allianz.jpg', url: 'https://www.allianz.de/' },
  { name: 'Baufinovo', logo: '/images/referenzen/baufinovo.jpg', url: 'https://www.baufinovo.de/' },
  { name: 'BNI', logo: '/images/referenzen/bni.jpg', url: 'https://bni.de/' },
  { name: 'Feller Fenster', logo: '/images/referenzen/feller.jpg', url: 'https://www.feller-fenster.de/' },
  { name: 'safe TEC Consulting', logo: '/images/referenzen/safe-tec.jpg', url: 'https://www.safe-tec-consulting.de/' },
  { name: 'Lebenshilfe Rhein-Kreis Neuss', logo: '/images/referenzen/lebenshilfe.jpg', url: 'https://ggmbh.lebenshilfe-rhein-kreis-neuss.de/' },
];

const partners = [
  { name: 'National Inkasso', logo: '/images/partners/national-inkasso.png' },
  { name: 'Endress Brandschutz', logo: '/images/partners/endress.png' },
];

export default function PartnersBar() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Unsere Referenzen" subtitle="Vertrauen durch zufriedene Kunden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {referenzen.map((ref) => (
            <a
              key={ref.name}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white border border-gray-200 hover:border-[#2b4c8c]/30 rounded-lg p-8 h-40 transition-colors duration-200"
            >
              <Image src={ref.logo} alt={ref.name} width={280} height={140} className="object-contain max-h-24 w-auto" />
            </a>
          ))}
        </div>

        <SectionHeading title="Unsere Partner" subtitle="Starke Partnerschaften für beste Ergebnisse" />
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-8 h-32 w-72"
            >
              <Image src={partner.logo} alt={partner.name} width={240} height={100} className="object-contain max-h-20 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
