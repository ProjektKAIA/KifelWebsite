'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  compact?: boolean;
  mini?: boolean;
}

export default function Hero({ title, subtitle, image, video, compact = false, mini = false }: HeroProps) {
  if (mini) {
    return (
      <section className="bg-white pt-24 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 text-center">{title}</h1>
      </section>
    );
  }
  if (compact) {
    return (
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={image}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <Image src={image} alt="Kifel Service – Reinigung und Sicherheit in Kaarst" fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <Image src={image} alt="Kifel Service – Reinigung und Sicherheit in Kaarst" fill className="object-cover" priority />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-[#2b4c8c] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            Reinigung & Sicherheit aus einer Hand
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/kontakt" variant="primary" size="lg">
              Kostenlos anfragen
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Unsere Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
