import type { Metadata } from 'next';
import { ProductCard } from '@/components/ProductCard';
import { Locale, locales, products } from '@/data/products';
import { t } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: `${t(locale, 'productCatalog')} | ${t(locale, 'brand')}`, description: t(locale, 'configurationNote') };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <main className="section-padding">
      <div className="container-wide">
        <h1 className="text-4xl font-black text-slate-950">{t(locale, 'productCatalog')}</h1>
        <p className="mt-4 max-w-2xl text-slate-600">{t(locale, 'configurationNote')}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}
        </div>
      </div>
    </main>
  );
}
