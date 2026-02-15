export default function AppBanner() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-[#2b4c8c] to-[#0f172a] rounded-2xl p-12 text-white">
          <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Die Kifel Service App</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Bald erhalten alle Mitarbeiter Zugang zu unserer eigenen App – mit digitaler Zeiterfassung, Stundenübersicht, Dienstplänen und vielem mehr. Einfach, schnell und direkt auf dem Smartphone.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4a6bb5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Zeiterfassung
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4a6bb5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              Stundenübersicht
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4a6bb5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Dienstpläne
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
