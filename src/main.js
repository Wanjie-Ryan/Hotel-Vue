import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
const app = createApp(App)
app.use(VueToast)
app.mount('#app')
// app.use(router)

