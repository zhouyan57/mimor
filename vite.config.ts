import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: '0.0.0.0' },
  test: { environment: 'jsdom' },
  plugins: [
    vue(),

    // Vite 2 plugin that fix dev server not rewriting the path includes a dot.
    // - repo: https://github.com/ivesia/vite-plugin-rewrite-all
    // - issues:
    //   - https://github.com/vitejs/vite/issues/2190
    //   - https://github.com/vitejs/vite/issues/2415
    //   - https://github.com/vitejs/vite/issues/4344
    pluginRewriteAll(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        '/favicon.ico',
        '/apple-touch-icon.png',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
      ],
      manifest: {
        name: 'Mimor',
        short_name: 'Mimor',
        description: 'Making memory a choice.',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
