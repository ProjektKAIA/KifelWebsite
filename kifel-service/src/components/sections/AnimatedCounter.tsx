'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

const counters: CounterItem[] = [
  { value: 10, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 500, suffix: '+', label: 'Zufriedene Kunden' },
  { value: 9, suffix: '', label: 'Dienstleistungen' },
  { value: 100, suffix: '%', label: 'Einsatzbereitschaft' },
];

function Counter({ item, inView }: { item: CounterItem; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = Math.ceil(item.value / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= item.value) {
        setCount(item.value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, item.value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#4a6bb5] mb-2">
        {count}{item.suffix}
      </div>
      <div className="text-gray-300 font-medium">{item.label}</div>
    </div>
  );
}

export default function AnimatedCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {counters.map((item) => (
            <Counter key={item.label} item={item} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
