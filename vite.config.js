// v2.0: 27/05/2024
// Source: dragoncillos.com
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        customMedia: true
      }
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        //en: resolve(__dirname, 'en/index.html'),
        //curriculum: resolve(__dirname, 'curriculum/marcos-de-miguel.html'),
        //curriculumEn: resolve(__dirname, 'curriculum/marcos-de-miguel-en.html'),
      },
    },
  },
})
