import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'File System',
    short_name: 'File System',
    description: 'Upload your files mate',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-dark.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-dark.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}