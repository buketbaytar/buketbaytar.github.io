import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-dev-transform',
      transformIndexHtml(html, ctx) {
        if (ctx.server && !html.includes('/src/main.jsx')) {
          return html.replace('</body>', '    <script type="module" src="/src/main.jsx"></script>\n  </body>')
        }
        return html
      }
    }
  ],
  base: './',
  server: {
    port: 5173,
    open: true
  }
})
