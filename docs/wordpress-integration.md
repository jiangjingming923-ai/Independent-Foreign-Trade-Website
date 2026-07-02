# WordPress Integration Options

This project is optimized as a static Next.js export. For WordPress usage, choose one of these approaches:

1. Deploy the static export to a subdomain such as `trade.example.com` and link it from WordPress.
2. Embed key pages in WordPress with an iframe or reverse proxy when the main corporate site must stay on WordPress.
3. Convert the Tailwind sections into a WordPress theme and keep `data/products.ts` as the product source during development.
4. Replace `data/products.ts` with a WordPress REST API fetch if WordPress will become the production CMS.
