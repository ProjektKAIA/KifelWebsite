'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
        <div className="pt-20 pb-6 px-6">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex-1 py-3 text-slate-700 font-medium hover:text-[#2b4c8c] transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.href ? null : item.href)}
                      className="p-2 text-slate-400"
                    >
                      <svg className={`w-4 h-4 transition-transform ${expandedItem === item.href ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && expandedItem === item.href && (
                  <div className="pl-4 space-y-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-slate-500 hover:text-[#2b4c8c] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t">
            <Link
              href="/kontakt"
              onClick={onClose}
              className="block w-full bg-[#2b4c8c] hover:bg-[#1e3a6e] text-white text-center px-6 py-3 rounded-lg font-bold transition-all"
            >
              Kostenlos anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
