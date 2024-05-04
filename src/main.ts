import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { connectExcel } from 'vue-excel'

window.Office.onReady(async () => {
  const vueExcel = await connectExcel()

  createApp(App)
  .use(vueExcel, {})
  .mount('#app')
})
