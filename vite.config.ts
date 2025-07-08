import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import path, { resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: './.diagnostics/bundle-visualization.html'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@root': resolve(__dirname, '.')
    }
  },
  server: {
    watch: {
      // Ignore the entire src/tests directory and all its contents
      ignored: ['**/src/tests/**']
    }
  }
})
