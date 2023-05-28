import { createApp } from 'vue'
import './assets/css/styles.css'
import 'remixicon/fonts/remixicon.css';
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app');

