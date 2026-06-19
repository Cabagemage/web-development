import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Web Development`,
    short_name: siteConfig.name,
    description:
      'Full-stack web development by an independent developer. React, Next.js, TypeScript, Node.js, Golang.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070a14',
    theme_color: '#070a14',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  };
}
