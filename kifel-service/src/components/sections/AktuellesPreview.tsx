import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { blogPosts } from '@/data/blogPosts';

export default function AktuellesPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Aktuelles"
          subtitle="News, Updates und Einblicke von Kifel Service"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/aktuelles/${post.slug}`}
              className="group block bg-white border border-gray-200 hover:border-slate-900 transition-colors duration-200 overflow-hidden"
            >
              {post.image && (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <time className="text-xs text-gray-400 block mb-2">
                  {new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/aktuelles"
            className="inline-block border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
          >
            Alle Beiträge
          </Link>
        </div>
      </div>
    </section>
  );
}
