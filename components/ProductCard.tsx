import Image from 'next/image';
import Link from 'next/link';
import { Locale, Product } from '@/data/products';

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <Link href={`/${locale}/products/${product.slug}/`} className="group rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden rounded-2xl bg-brand-50">
        <Image src={product.image} alt={product.name[locale]} fill className="object-contain p-6" />
      </div>
      <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand-600">{product.category}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-950">{product.name[locale]}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{product.summary[locale]}</p>
    </Link>
  );
}
