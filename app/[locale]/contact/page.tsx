import { Locale, locales } from '@/data/products';
import { InquiryForm } from '@/components/InquiryForm';
import { t } from '@/lib/i18n';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <main className="section-padding"><div className="container-wide grid gap-8 lg:grid-cols-2"><div><h1 className="text-4xl font-black">{t(locale, 'contactTitle')}</h1><p className="mt-4 text-slate-600">Email: sales@example.com<br />WhatsApp: +86 138 0000 0000</p></div><InquiryForm locale={locale} /></div></main>;
}
