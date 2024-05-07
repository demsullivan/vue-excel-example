import './assets/main.css'

import { createApp } from 'vue'
import { type Context, connectExcel } from 'vue-excel'
import App from '@/App.vue'
import RoutedComponent from '@/components/RoutedComponent.vue'

window.Office.onReady(async () => {
  const routes = [
    // Visible if the worksheet name is "Route by Name".
    { sheetName: 'Route by Name', component: RoutedComponent },

    // Visible if the sheet has a named reference called "route", whose value is "RoutedComponent"
    { namedRef: 'route', value: 'RoutedComponent', component: RoutedComponent },

    // Visible if the worksheet name is "Route by Function"
    {
      component: RoutedComponent,
      activated: (context: Context, worksheet: Excel.Worksheet) =>
        worksheet.name == 'Route by Function'
    }
  ]

  const vueExcel = await connectExcel(routes)

  createApp(App).use(vueExcel).mount('#app')
})
