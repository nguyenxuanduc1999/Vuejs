import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponents from './components/GlobalComponents.vue'

const app = createApp(App)

app.component('ComponentA', GlobalComponents)

app.use(router)

app.mount('#app')
