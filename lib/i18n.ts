import { defaultLocale, Locale, locales } from '@/data/products';

export const dictionaries: Record<Locale, Record<string, string>> = {
  en: {
    brand: 'GlobalTrade Pro',
    navHome: 'Home',
    navProducts: 'Products',
    navAbout: 'About',
    navContact: 'Contact',
    navInquiry: 'Inquiry',
    heroTitle: 'Export-ready products for global B2B buyers',
    heroSubtitle: 'A modern independent foreign trade website template with multilingual content, SEO, product catalog and inquiry conversion flows.',
    heroCta: 'Send Inquiry',
    heroProducts: 'View Products',
    featuredProducts: 'Featured Products',
    whyTitle: 'Why buyers choose us',
    aboutTitle: 'About GlobalTrade Pro',
    aboutBody: 'We help manufacturers present export-ready products, certifications and services through a fast static website that can be deployed to Vercel, Netlify or embedded into WordPress pages.',
    contactTitle: 'Contact Us',
    inquiryTitle: 'Product Inquiry',
    formName: 'Name',
    formEmail: 'Email',
    formCompany: 'Company',
    formMessage: 'Message',
    formSubmit: 'Submit Inquiry',
    productCatalog: 'Product Catalog',
    productDetails: 'Product Details',
    configurationNote: 'Product data is managed in data/products.ts for easy catalog updates.'
  },
  zh: {
    brand: '环球外贸站',
    navHome: '首页',
    navProducts: '产品列表',
    navAbout: '关于我们',
    navContact: '联系我们',
    navInquiry: '询盘表单',
    heroTitle: '面向全球 B2B 买家的外贸独立站',
    heroSubtitle: '现代化外贸独立站模板，内置多语言内容、SEO、产品目录与询盘转化流程。',
    heroCta: '发送询盘',
    heroProducts: '查看产品',
    featuredProducts: '精选产品',
    whyTitle: '为什么采购商选择我们',
    aboutTitle: '关于环球外贸站',
    aboutBody: '我们帮助制造企业通过高速静态网站展示出口产品、认证与服务，可部署到 Vercel、Netlify，也可嵌入 WordPress 页面。',
    contactTitle: '联系我们',
    inquiryTitle: '产品询盘',
    formName: '姓名',
    formEmail: '邮箱',
    formCompany: '公司',
    formMessage: '需求说明',
    formSubmit: '提交询盘',
    productCatalog: '产品目录',
    productDetails: '产品详情',
    configurationNote: '产品数据集中维护在 data/products.ts，便于更新产品目录。'
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function t(locale: Locale, key: string) {
  return dictionaries[locale][key] ?? dictionaries[defaultLocale][key] ?? key;
}
