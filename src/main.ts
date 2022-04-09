import { createApp } from 'vue'
import App from './App.vue'
import qui from "qi-design-ui"
const app = createApp(App)
app.use(qui)
app.mount('#app')
