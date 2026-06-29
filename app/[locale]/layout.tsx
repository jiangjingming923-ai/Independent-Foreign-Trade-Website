import { notFound } from 'next/navigation';
import { Locale, locales } from '@/data/products';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <SiteHeader locale={locale as Locale} />
        {children}
        <SiteFooter locale={locale as Locale} />
      </body>
    </html>
  );
}
