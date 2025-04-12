import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to
// use bindings during local development (when running the application with
// `next dev`). This function is only necessary during development and
// has no impact outside of that. For more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
setupDevPlatform().catch(console.error);

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Cloudflare Image Optimization
  // https://developers.cloudflare.com/images/transform-images/integrate-with-frameworks/
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },

  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
        '*.yaml': {
          loaders: ['yaml-loader'],
          as: '*.js',
        },
      },
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    config.module.rules.push({
      test: /\.ya?ml$/i,
      use: [
        {
          loader: 'yaml-loader',
        },
      ],
    });
    return config;
  },

  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
    ];
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
