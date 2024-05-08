import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import path from 'path'
import { homedir } from 'os'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

const config = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {}
}

if (!process.env.CI) {
  config.server = {
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(`${homedir()}/.office-addin-dev-certs/localhost.key`)),
      cert: fs.readFileSync(path.resolve(`${homedir()}/.office-addin-dev-certs/localhost.crt`)),
      ca: fs.readFileSync(path.resolve(`${homedir()}/.office-addin-dev-certs/ca.crt`))
    }
  }
}

export default defineConfig(config)
