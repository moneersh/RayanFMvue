import './assets/main.css'

//Vue instance
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

//Vue router
import router from './router'
app.use(router)

//Unhead
import { createHead } from "@unhead/vue"
const head = createHead()
app.use(head)

//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

//i18n
import i18n from './i18n'
app.use(i18n)

app.mount('#app')
