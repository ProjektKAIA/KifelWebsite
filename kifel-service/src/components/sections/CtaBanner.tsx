import Button from '@/components/ui/Button';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export default function CtaBanner({
  title = 'Bereit für professionelle Reinigung & Sicherheit?',
  subtitle = 'Kontaktieren Sie uns für ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage!',
}: CtaBannerProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2b4c8c] to-[#1e3a6e]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-blue-100 mb-8">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/kontakt" variant="secondary" size="lg">
            Jetzt Angebot anfordern
          </Button>
          <Button href="tel:+4921312945497" variant="outline" size="lg">
            +49 2131 29 45 497
          </Button>
        </div>
      </div>
    </section>
  );
}
