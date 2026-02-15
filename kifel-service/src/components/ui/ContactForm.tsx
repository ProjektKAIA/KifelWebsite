'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-teal-800 mb-2">Nachricht gesendet!</h3>
        <p className="text-teal-600">Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2b4c8c] focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">E-Mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2b4c8c] focus:border-transparent outline-none transition"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2b4c8c] focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2b4c8c] focus:border-transparent outline-none transition"
          >
            <option value="">Bitte wählen...</option>
            <option value="gebaeudereinigung">Gebäudereinigung</option>
            <option value="bueroreinigung">Büroreinigung</option>
            <option value="gewerbeimmobilien">Gewerbeimmobilien</option>
            <option value="hausmeisterservice">Hausmeisterservice</option>
            <option value="gartenpflege">Gartenpflege</option>
            <option value="objektschutz">Objektschutz</option>
            <option value="revierschutzfahrten">Revierschutzfahrten</option>
            <option value="bewachung">Bewachung</option>
            <option value="pfortendienst">Pfortendienst</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Nachricht *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2b4c8c] focus:border-transparent outline-none transition resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm">Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>
      )}
      <Button type="submit" variant="primary" size="lg">
        {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  );
}
