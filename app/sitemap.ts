import type { MetadataRoute } from 'next';
import { locales, products } from '@/data/products';

const baseUrl = 'https://example.com';
const staticRoutes = ['', 'products', 'about', 'contact', 'inquiry'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.flatMap((locale) => [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}/${locale}/${route}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${baseUrl}/${locale}/products/${product.slug}`, lastModified: new Date() }))
  ]);

  return routes;
}
