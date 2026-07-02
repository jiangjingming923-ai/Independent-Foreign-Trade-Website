import { Locale, locales } from '@/data/products';
import { t } from '@/lib/i18n';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <main className="section-padding"><div className="container-wide max-w-4xl rounded-3xl bg-white p-8 shadow-soft"><h1 className="text-4xl font-black">{t(locale, 'aboutTitle')}</h1><p className="mt-6 text-lg leading-8 text-slate-600">{t(locale, 'aboutBody')}</p></div></main>;
}
