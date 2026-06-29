import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'GlobalTrade Pro | Independent Foreign Trade Website',
  description: 'Multilingual B2B export website with product catalog, inquiry forms and SEO-ready static deployment.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
