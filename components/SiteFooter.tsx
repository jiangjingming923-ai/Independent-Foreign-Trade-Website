import Link from 'next/link';
import { Locale } from '@/data/products';
import { t } from '@/lib/i18n';

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-wide grid gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{t(locale, 'brand')}</p>
          <p className="mt-3 text-sm text-brand-100">{t(locale, 'configurationNote')}</p>
        </div>
        <div className="text-sm text-brand-100">
          <p>Email: sales@example.com</p>
          <p>WhatsApp: +86 138 0000 0000</p>
          <p>Address: Export Industrial Park, Shenzhen, China</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href={`/${locale}/products/`}>Products</Link>
          <Link href={`/${locale}/about/`}>About</Link>
          <Link href={`/${locale}/contact/`}>Contact</Link>
          <Link href={`/${locale}/inquiry/`}>Inquiry</Link>
        </div>
      </div>
    </footer>
  );
}
