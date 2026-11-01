# Repository Guidelines

## Build and validation

- `npm run dev` starts the local Next.js development server.
- `npm run build` builds the site as a static export in `out/`; production hosting should serve those files.
- `npm run lint` runs ESLint across the project. To lint one file, use `npx eslint 'src/app/catalogue/[slug]/page.tsx'`.
- `npx tsc --noEmit` runs the TypeScript check.
- There is no test script or test runner configured in `package.json`, so there is no single-test command.

## Architecture

- This is a Next.js App Router site. Routes live in `src/app/`; `src/app/layout.tsx` provides the shared metadata, fonts, navigation, and footer. The home route composes its page from reusable sections in `src/components/`.
- The site is statically exported (`output: "export"` in `next.config.ts`). The catalogue detail route, `src/app/catalogue/[slug]/page.tsx`, uses `generateStaticParams()` to create a page for every product returned by `getAllProducts()`.
- Product content is local, typed data in `src/data/products/`. `src/data/products/index.ts` is the registry and shared lookup API used by both the catalogue listing and detail pages. Standalone product records and the render-product seed collection both produce `Product` entries.
- Images are public assets referenced by URL (for example, `/products/renders/...`) and rendered with `next/image`. The product module exports common image dimensions.
- Workspace MCP servers are configured in `.vscode/mcp.json`; generated Gemini images are saved under `public/ai-generated/`.

## Repository conventions

- Keep catalogue content in the `Product` shape from `src/data/products/types.ts`; use a stable, URL-friendly `slug` as the detail-route key. Register new records through `src/data/products/index.ts` so they appear in the catalogue and are included in static route generation.
- Product entries provide descriptive image alt text and metadata; optional `galleryImages` and `sizes` support the detail page's additional views and size table. Keep referenced asset URLs consistent with files under `public/`.
- App Router components are server components by default. Add `"use client"` only to components that need browser-side state or interaction, as in `src/components/Navbar.tsx`.
- `@/*` resolves to `src/*`. Styling uses Tailwind CSS utilities; the project palette, fonts, and global styles are defined in `src/app/globals.css`.
