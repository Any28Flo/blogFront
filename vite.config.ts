import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ["**/*"],
  },
  includeAssets: [
    "**/*",
  ],
  manifest: {
    name: 'PWA Router',
    short_name: 'PWA Router',
    theme_color: '#ffffff',
    start_url: "/",
    display: "standalone",    
    icons: [
      {
        src: 'pwa-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },

    ],
  },
  devOptions: {
    enabled: true
    /* when using generateSW the PWA plugin will switch to classic */
   // type: 'module',
  //    navigateFallback: 'index.html',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  plugins: [
    react(),
    VitePWA(pwaOptions),

  ],
})
