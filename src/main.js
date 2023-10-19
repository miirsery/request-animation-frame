import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import {router} from "./router.js";

const app = createApp(App)

app.use(router)

app.mount('#app')
