import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales, products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { t } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${t(locale, 'brand')} | ${t(locale, 'heroTitle')}`,
    description: t(locale, 'heroSubtitle'),
    alternates: { languages: { en: '/en/', zh: '/zh/' } }
  };
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t(locale, 'brand'),
    url: 'https://example.com',
    contactPoint: { '@type': 'ContactPoint', email: 'sales@example.com', contactType: 'sales' }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <section className="section-padding bg-gradient-to-br from-brand-50 to-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-brand-600">OEM · ODM · Global Logistics</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{t(locale, 'heroTitle')}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t(locale, 'heroSubtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${locale}/inquiry/`} className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white">{t(locale, 'heroCta')}</Link>
              <Link href={`/${locale}/products/`} className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800">{t(locale, 'heroProducts')}</Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-3">
              {['24h Response', 'Factory Audit', 'Export Docs'].map((item) => <div key={item} className="rounded-2xl bg-brand-50 p-5 text-center font-bold text-brand-900">{item}</div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-black text-slate-950">{t(locale, 'featuredProducts')}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide grid gap-6 md:grid-cols-3">
          {['Verified supplier documentation', 'Multilingual sales support', 'Static pages for fast SEO'].map((item) => <div key={item} className="rounded-3xl border border-slate-200 p-6"><h3 className="font-bold text-slate-950">{item}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{t(locale, 'whyTitle')}</p></div>)}
        </div>
      </section>
    </main>
  );
}
