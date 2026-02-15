import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import PartnersBar from '@/components/sections/PartnersBar';
import AktuellesPreview from '@/components/sections/AktuellesPreview';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Ihr Partner für Reinigung & Sicherheit"
        subtitle="Professionelle Reinigungsdienstleistungen und Sicherheitsdienst in Kaarst, Neuss und Mönchengladbach. Zuverlässig, gründlich und mit Leidenschaft."
        image="/images/hero/kifel-service.jpg"
        video="/Platzhalter_Hero_Video_Erstellung.mp4"
      />
      <ServicesGrid />
      <PartnersBar />
      <AktuellesPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
