/**
 * TecHacks 5.0 website on Next.js.
 *
 * The whole site is one hand-built page, public/index.html, with its images, swag,
 * documents and the TecHacks FX zip next to it in public/. Next.js serves that page
 * at "/" and every file in public/ as is, so Vercel deploys it with no build-time
 * changes to the page itself. Pages inside the site are hash routes (#tracks, #fx …).
 */
const PAGES = 'tracks|schedule|prizes|arcade|board|crew|swag|share|fx|sponsors|partners|faq|mypass';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async rewrites() {
    return {
      // Serve the site at the root URL.
      beforeFiles: [{ source: '/', destination: '/index.html' }]
    };
  },

  async redirects() {
    return [
      // Friendly links such as techacks.tech/fx or /register open the right page of the site.
      { source: `/:page(${PAGES})`, destination: '/#:page', permanent: false },
      { source: '/register', destination: '/#board', permanent: false },
      { source: '/index.html', destination: '/', permanent: true }
    ];
  },

  async headers() {
    return [
      {
        source: '/:dir(img|swag|docs)/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }]
      },
      {
        source: '/fx/:file*',
        headers: [
          { key: 'Content-Type', value: 'application/zip' },
          { key: 'Content-Disposition', value: 'attachment' }
        ]
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      }
    ];
  }
};

export default nextConfig;
