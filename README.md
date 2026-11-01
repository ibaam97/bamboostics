This is a [Next.js](https://nextjs.org) project for the BambooStic catalogue website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Product content and image assets

- Product records are defined under [`src/data/products/`](/Users/ibrahimayodeji/bamboostics/src/data/products).
- Main catalogue and product-detail pages are:
  - [`src/app/catalogue/page.tsx`](/Users/ibrahimayodeji/bamboostics/src/app/catalogue/page.tsx)
  - [`src/app/catalogue/[slug]/page.tsx`](/Users/ibrahimayodeji/bamboostics/src/app/catalogue/[slug]/page.tsx)
- Branding assets live in [`public/branding/`](/Users/ibrahimayodeji/bamboostics/public/branding).
- Product render assets live in [`public/products/renders/`](/Users/ibrahimayodeji/bamboostics/public/products/renders).

The app uses `next/image` for optimized image delivery on catalogue and product pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
