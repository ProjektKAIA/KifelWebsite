import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription,
    alternates: { canonical: `/aktuelles/${slug}` },
    openGraph: {
      title: `${post.title} | Kifel Service`,
      description: post.seoDescription,
      ...(post.image && {
        images: [{ url: post.image, alt: post.title }],
      }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {post.image && (
        <div className="relative h-[40vh] min-h-[300px]">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
      )}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <span key={cat} className="text-xs font-semibold text-[#2b4c8c] bg-blue-50 px-3 py-1 rounded-full">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
          <time className="text-gray-400 block mb-8">
            {new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-[#2b4c8c] prose-strong:text-slate-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 pt-8 border-t">
            <Link href="/aktuelles" className="text-[#2b4c8c] font-medium hover:underline">
              &larr; Zurück zu Aktuelles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
