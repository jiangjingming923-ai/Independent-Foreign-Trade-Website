import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProduct, Locale, locales, products } from '@/data/products';
import { t } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: `${product.name[locale]} | ${t(locale, 'brand')}`, description: product.summary[locale] };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[locale],
    description: product.description[locale],
    brand: { '@type': 'Brand', name: t(locale, 'brand') },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'USD' }
  };

  return (
    <main className="section-padding">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="container-wide grid gap-10 lg:grid-cols-2">
        <div className="relative min-h-96 rounded-[2rem] bg-white shadow-soft">
          <Image src={product.image} alt={product.name[locale]} fill className="object-contain p-10" />
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-brand-600">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">{product.name[locale]}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.description[locale]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {product.specs.map((spec) => <span key={spec} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-900">{spec}</span>)}
          </div>
          <h2 className="mt-8 text-2xl font-bold">{t(locale, 'productDetails')}</h2>
          <ul className="mt-4 grid gap-3 text-slate-700">
            {product.features[locale].map((feature) => <li key={feature}>✓ {feature}</li>)}
          </ul>
          <Link href={`/${locale}/inquiry/`} className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 font-semibold text-white">{t(locale, 'heroCta')}</Link>
        </div>
      </div>
    </main>
  );
}
