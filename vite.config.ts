import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Lib Wordie Chem Lab',
      short_name: 'Lib Wordie',
      description: 'Chemistry word puzzle game',
      theme_color: '#0f172a',
      background_color: '#020617',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),]
})
