import { defineConfig } from 'vite'

export default defineConfig({
  base: '/AMARA-CAPS/',  // <-- your GitHub repo name here
  server: {
    host: true,
    port: 5173,
    cors: true,
    strictPort: true
  }
})
