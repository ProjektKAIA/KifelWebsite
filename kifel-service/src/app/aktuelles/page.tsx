import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import AppBanner from '@/components/sections/AppBanner';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Aktuelles',
  description: 'Im Bereich Aktuelles finden Sie News, Updates und aktuelle Beiträge von Kifel Service.',
  alternates: { canonical: '/aktuelles' },
  openGraph: {
    title: 'Aktuelles | Kifel Service',
    description: 'Im Bereich Aktuelles finden Sie News, Updates und aktuelle Beiträge von Kifel Service.',
    images: [{ url: '/images/blog/neue-website-aktuelles.jpg', width: 1920, height: 1255, alt: 'Kifel Service Aktuelles' }],
  },
};

export default function AktuellesPage() {
  return (
    <>
      <Hero
        title="Aktuelles"
        subtitle=""
        image="/images/hero/kifel-service.jpg"
        mini
      />
      <AppBanner />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/aktuelles/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((cat) => (
                        <span key={cat} className="text-xs font-semibold text-[#2b4c8c] bg-blue-50 px-2 py-1 rounded">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <time className="text-sm text-gray-400 block mb-2">
                      {new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#2b4c8c] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
