import { Locale, locales } from '@/data/products';
import { InquiryForm } from '@/components/InquiryForm';
import { t } from '@/lib/i18n';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function InquiryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <main className="section-padding"><div className="container-wide max-w-3xl"><h1 className="mb-8 text-4xl font-black">{t(locale, 'inquiryTitle')}</h1><InquiryForm locale={locale} /></div></main>;
}
