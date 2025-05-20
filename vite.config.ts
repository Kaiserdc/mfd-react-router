import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {VitePWA} from "vite-plugin-pwa";
import {manifest} from "./src/manifest";

export default defineConfig({
  plugins: [
      svgr(),
      react(),
      VitePWA({

          filename:'sw.js',
          strategies:'injectManifest',
          registerType:'autoUpdate',
          injectRegister:'auto',
          includeAssets:['favicon.ico','icons/*.png'],
          workbox: {
              globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          },
          manifest,
          devOptions: {
              enabled: true,
              type:'module'
          }
      })
  ],
})
