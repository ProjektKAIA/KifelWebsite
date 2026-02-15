import SectionHeading from '@/components/ui/SectionHeading';

const reviews = [
  {
    text: 'Unser Gelände war nicht mehr ansehnlich, nach Rücksprache mit dem Kifel Service haben diese innerhalb kürzester Zeit reagiert und die Arbeit unkompliziert und schnell durchgeführt! Vielen Dank und eine klare Empfehlung von uns!',
    author: 'Familie Scyko',
    rating: 5,
  },
  {
    text: 'Wir haben uns von der Firma Kifel Service unsere Wohnung Grund reinigen lassen, da diese stark verschmutzt war. Die Reinigungsleistung und das Ergebnis entsprach absolut unseren Erwartungen, die Arbeiten wurden fachmännisch und pünktlich erbracht.',
    author: 'Zapa',
    rating: 5,
  },
  {
    text: 'Sehr schnelle Rückmeldung, faire Preise und die Schnelligkeit kann meiner Meinung keiner toppen.',
    author: 'Rudi Mann',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#2b4c8c]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Das sagen unsere Kunden"
          subtitle="Echte Bewertungen von zufriedenen Kunden"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review) => (
            <div key={review.author} className="bg-white rounded-lg p-6">
              <Stars count={review.rating} />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="text-sm font-semibold text-slate-900">{review.author}</div>
              <div className="text-xs text-gray-400">Google Bewertung</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Kifel+Service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white hover:bg-white hover:text-[#2b4c8c] px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
          >
            Bewerten Sie uns auf Google
          </a>
        </div>
      </div>
    </section>
  );
}
