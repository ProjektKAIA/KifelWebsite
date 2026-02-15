import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  image?: string;
}

export default function Card({ title, description, icon, href, image }: CardProps) {
  const content = (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#2b4c8c]/30 hover:-translate-y-1">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      )}
      <div className="p-6">
        {icon && <span className="text-4xl mb-4 block">{icon}</span>}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#2b4c8c] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
