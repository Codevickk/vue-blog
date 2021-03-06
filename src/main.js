import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/normalize.css';
import './assets/styles/scss/main.scss';
import './registerServiceWorker'

createApp(App).use(router).mount('#app')
