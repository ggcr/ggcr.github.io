import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        whiteboards: resolve(import.meta.dirname, 'whiteboards/index.html'),
        blog: resolve(import.meta.dirname, 'blog/index.html'),
        'blog/self-distillation': resolve(import.meta.dirname, 'blog/self-distillation/index.html'),
        'blog/understanding-linear-regression-from-a-mathematics-perspective': resolve(import.meta.dirname, 'blog/understanding-linear-regression-from-a-mathematics-perspective/index.html'),
        'blog/solving-the-linear-least-squares-problem-with-the-gradient': resolve(import.meta.dirname, 'blog/solving-the-linear-least-squares-problem-with-the-gradient/index.html'),
        'blog/principal-component-analysis-pca-on-faces': resolve(import.meta.dirname, 'blog/principal-component-analysis-pca-on-faces/index.html'),
      },
    },
  },
})
