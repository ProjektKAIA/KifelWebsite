import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBanner from '@/components/sections/CtaBanner';
import { reinigungServices, sicherheitServices } from '@/data/services';
import { Service } from '@/types';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Erfahren Sie alles über unsere Dienstleistungen in den Bereichen Reinigung und Security.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Kifel Service',
    description: 'Erfahren Sie alles über unsere Dienstleistungen in den Bereichen Reinigung und Security.',
    images: [{ url: '/images/hero/kifel-service.jpg', width: 1920, height: 1255, alt: 'Kifel Service Dienstleistungen' }],
  },
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-gray-200 hover:border-slate-900 transition-colors duration-200 overflow-hidden"
    >
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{service.description}</p>
        <ul className="space-y-1 mb-4">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1 h-1 bg-gray-300 rounded-full shrink-0" />
              {f}
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-xs text-gray-400">+ {service.features.length - 3} weitere</li>
          )}
        </ul>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors duration-200">
          Mehr erfahren &rarr;
        </span>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Unsere Services"
        subtitle="Professionelle Reinigung und Sicherheit aus einer Hand"
        image="/images/hero/kifel-service.jpg"
        video="/Platzhalter2.mp4"
        compact
      />

      <section className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Reinigungsservice"
            subtitle="Professionelle Reinigungslösungen für jede Anforderung"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reinigungServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Sicherheitsservice"
            subtitle="Schutz und Sicherheit für Ihr Unternehmen und Eigentum"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sicherheitServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
