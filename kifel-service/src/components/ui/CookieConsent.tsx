'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const cookieInfo = [
  {
    key: 'necessary' as const,
    label: 'Notwendig',
    description: 'Diese Cookies sind technisch erforderlich und ermöglichen grundlegende Funktionen wie Seitennavigation und Cookie-Einstellungen. Sie können nicht deaktiviert werden.',
    provider: 'Kifel Service',
    duration: 'Session / 1 Jahr',
    required: true,
  },
  {
    key: 'analytics' as const,
    label: 'Statistik',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt werden.',
    provider: 'Google Analytics',
    duration: '2 Jahre',
    required: false,
  },
  {
    key: 'marketing' as const,
    label: 'Marketing',
    description: 'Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen anzuzeigen.',
    provider: 'Google Ads, Meta',
    duration: '1 Jahr',
    required: false,
  },
];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveAndClose = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setVisible(false);
  };

  const acceptAll = () => {
    saveAndClose({ necessary: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    saveAndClose({ necessary: true, analytics: false, marketing: false });
  };

  const saveSelection = () => {
    saveAndClose({ ...preferences, necessary: true });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white max-w-lg w-full mx-4 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Cookie-Einstellungen</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website. Einige sind technisch notwendig, andere helfen uns, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.
          </p>

          {/* Buttons - gleichwertig gestaltet (TDDDG-konform) */}
          <div className="flex flex-col gap-3 mb-4">
            <button
              onClick={acceptAll}
              className="w-full py-3 text-sm font-semibold bg-[#2b4c8c] hover:bg-[#1e3a6e] text-white transition-colors"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={rejectAll}
              className="w-full py-3 text-sm font-semibold bg-[#2b4c8c] hover:bg-[#1e3a6e] text-white transition-colors"
            >
              Alle ablehnen
            </button>
          </div>

          {/* Details Toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-center text-sm text-gray-400 hover:text-slate-900 transition-colors mb-2"
          >
            {showDetails ? 'Details ausblenden' : 'Individuelle Einstellungen'}
          </button>

          {/* Granulare Einstellungen */}
          {showDetails && (
            <div className="border-t border-gray-100 pt-4 mt-2 space-y-4">
              {cookieInfo.map((cookie) => (
                <div key={cookie.key} className="border border-gray-100 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-900">{cookie.label}</span>
                    {cookie.required ? (
                      <span className="text-xs text-gray-400">Immer aktiv</span>
                    ) : (
                      <button
                        onClick={() =>
                          setPreferences((prev) => ({ ...prev, [cookie.key]: !prev[cookie.key] }))
                        }
                        className={`relative w-10 h-5 rounded-full transition-colors ${
                          preferences[cookie.key] ? 'bg-[#2b4c8c]' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences[cookie.key] ? 'translate-x-5' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{cookie.description}</p>
                  <div className="flex gap-4 text-xs text-gray-400">
                    <span>Anbieter: {cookie.provider}</span>
                    <span>Dauer: {cookie.duration}</span>
                  </div>
                </div>
              ))}

              <button
                onClick={saveSelection}
                className="w-full py-3 text-sm font-semibold border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
              >
                Auswahl speichern
              </button>
            </div>
          )}

          {/* Pflicht-Links */}
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400">
            <Link href="/datenschutz" className="hover:text-slate-900 transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-slate-900 transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
