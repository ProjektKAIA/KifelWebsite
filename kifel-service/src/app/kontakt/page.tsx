import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/ui/ContactForm';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakt zu Kifel Service - Ihrem Gebäudereinigungsunternehmen in Kaarst, Mönchengladbach und Umgebung.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt | Kifel Service',
    description: 'Kontakt zu Kifel Service - Ihrem Gebäudereinigungsunternehmen in Kaarst, Mönchengladbach und Umgebung.',
    images: [{ url: '/images/ueber-uns-kifel-kontakt.jpg', width: 1920, height: 1255, alt: 'Kifel Service Kontakt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | Kifel Service',
    description: 'Kontakt zu Kifel Service - Ihrem Gebäudereinigungsunternehmen in Kaarst, Mönchengladbach und Umgebung.',
  },
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Anfrage"
        image="/images/ueber-uns-kifel-kontakt.jpg"
        compact
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Schreiben Sie uns</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontaktdaten</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    {company.legalName}<br />
                    {company.address.street}<br />
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Telefon</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-[#2b4c8c]">{company.phone}</a><br />
                    <a href={`tel:${company.mobile.replace(/\s/g, '')}`} className="hover:text-[#2b4c8c]">{company.mobile}</a>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">E-Mail</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${company.email}`} className="hover:text-[#2b4c8c]">{company.email}</a>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Social Media</h3>
                  <div className="flex gap-4">
                    <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2b4c8c]">Facebook</a>
                    <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2b4c8c]">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
