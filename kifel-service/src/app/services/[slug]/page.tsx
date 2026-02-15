import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Button from '@/components/ui/Button';
import CtaBanner from '@/components/sections/CtaBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.seoDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | Kifel Service`,
      description: service.seoDescription,
      ...(service.image && {
        images: [{ url: service.image, alt: service.title }],
      }),
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-white pt-24 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 text-center">{service.title}</h1>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          {service.image && (
            <div className="relative h-[400px] mb-12 overflow-hidden">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority />
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 mb-2">{service.description}</p>
            <p className="text-base text-gray-700 leading-relaxed mb-12">{service.longDescription}</p>

            <div className="border border-gray-200 p-8 mb-12">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Unsere Leistungen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2b4c8c] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button href="/kontakt" variant="primary" size="lg">
                Jetzt Angebot anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
