import Link from 'next/link';
import { Locale } from '@/data/products';
import { t } from '@/lib/i18n';

const navItems = [
  ['navHome', ''],
  ['navProducts', 'products'],
  ['navAbout', 'about'],
  ['navContact', 'contact'],
  ['navInquiry', 'inquiry']
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const otherLocale = locale === 'en' ? 'zh' : 'en';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href={`/${locale}/`} className="text-xl font-bold text-brand-900">
          {t(locale, 'brand')}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map(([label, href]) => (
            <Link key={label} href={`/${locale}/${href}`} className="hover:text-brand-600">
              {t(locale, label)}
            </Link>
          ))}
        </nav>
        <Link href={`/${otherLocale}/`} className="rounded-full border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-600">
          {otherLocale === 'en' ? 'English' : '中文'}
        </Link>
      </div>
    </header>
  );
}
