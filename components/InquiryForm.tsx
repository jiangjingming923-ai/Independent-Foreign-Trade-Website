import { Locale, products } from '@/data/products';
import { t } from '@/lib/i18n';

export function InquiryForm({ locale }: { locale: Locale }) {
  return (
    <form name="inquiry" method="POST" data-netlify="true" className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft">
      <input type="hidden" name="form-name" value="inquiry" />
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        {t(locale, 'formName')}
        <input name="name" required className="rounded-xl border border-slate-300 px-4 py-3" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        {t(locale, 'formEmail')}
        <input name="email" type="email" required className="rounded-xl border border-slate-300 px-4 py-3" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        {t(locale, 'formCompany')}
        <input name="company" className="rounded-xl border border-slate-300 px-4 py-3" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Product
        <select name="product" className="rounded-xl border border-slate-300 px-4 py-3">
          {products.map((product) => (
            <option key={product.slug}>{product.name[locale]}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        {t(locale, 'formMessage')}
        <textarea name="message" rows={5} required className="rounded-xl border border-slate-300 px-4 py-3" />
      </label>
      <button className="rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-500">{t(locale, 'formSubmit')}</button>
    </form>
  );
}
