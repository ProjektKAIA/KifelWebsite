'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { reinigungServices, sicherheitServices } from '@/data/services';
import { Service } from '@/types';

const categories = [
  { key: 'reinigung', label: 'Reinigung', services: reinigungServices },
  { key: 'sicherheit', label: 'Sicherheit', services: sicherheitServices },
] as const;

function ServiceItem({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-gray-200 hover:border-slate-900 transition-colors duration-200 overflow-hidden"
    >
      {service.image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors duration-200">
          Mehr erfahren &rarr;
        </span>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<'reinigung' | 'sicherheit'>('reinigung');

  const activeServices = categories.find(c => c.key === activeCategory)!.services;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Unsere Dienstleistungen"
          subtitle="Von professioneller Gebäudereinigung bis zum Sicherheitsdienst – maßgeschneiderte Lösungen für Ihr Unternehmen."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-8 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 border-b-2 -mb-px ${
                  activeCategory === cat.key
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service) => (
            <ServiceItem key={service.slug} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
          >
            Alle Dienstleistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
