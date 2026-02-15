import { NavItem } from '@/types';

export const navigation: NavItem[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Über uns', href: '/ueber-uns' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Gebäudereinigung', href: '/services/gebaeudereinigung' },
      { label: 'Büroreinigung', href: '/services/bueroreinigung' },
      { label: 'Gewerbeimmobilien', href: '/services/gewerbeimmobilien' },
      { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
      { label: 'Gartenpflege', href: '/services/gartenpflege' },
      { label: 'Objektschutz', href: '/services/objektschutz' },
      { label: 'Revierschutzfahrten', href: '/services/revierschutzfahrten' },
      { label: 'Bewachung', href: '/services/bewachung' },
      { label: 'Pfortendienst', href: '/services/pfortendienst' },
    ],
  },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Aktuelles', href: '/aktuelles' },
  { label: 'Kontakt', href: '/kontakt' },
];
