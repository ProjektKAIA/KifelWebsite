import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Kifel Service e.K. - Alle rechtlichen Angaben zu unserer Website.',
  alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-slate-900 mb-2">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-600">
                <strong>Kifel Service e.K.</strong><br />
                Justus-Liebig-Straße 3<br />
                41564 Kaarst
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Tel.: +49 2131 29 45 497<br />
                Mobil.: +49 176 14 679 638
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                info@kifel-service.de<br />
                www.kifel-service.de
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                <strong>Inhaber:</strong><br />
                Alexander Kifel
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Registergericht: Amtsgericht Neuss<br />
                Registernummer: HRA 8115<br />
                Steuernummer: 122 5310 5752
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Für den Inhalt verantwortlich:<br />
                Alexander Kifel
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                <strong>Technische Realisierung:</strong><br />
                <a href="https://kaiashapes.de" target="_blank" rel="noopener noreferrer" className="text-[#2b4c8c] hover:underline">KAIAShapes</a><br />
                kaiashapes.de
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8 text-gray-600">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Haftung für Inhalte</h3>
              <p>Die Inhalte unserer Seiten und dieses Impressum wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">Haftung für Links</h3>
              <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">Urheberrecht</h3>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
