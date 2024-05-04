import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import path from 'path'
import { homedir } from 'os'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(`${homedir()}/.office-addin-dev-certs/localhost.key`)),
      cert: fs.readFileSync(path.resolve(`${homedir()}/.office-addin-dev-certs/localhost.crt`)),
      ca: fs.readFileSync(path.resolve(`${homedir()}/.office-addin-dev-certs/ca.crt`))
    }
  }
})
