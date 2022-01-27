/** Entry .js file */
import { createApp } from 'vue'
import App from './App.vue'
import './css/callbootstrap.scss';  // include this for changing default Bootstrap V5 settings and importing custom scss fonts
import router from './util/router';

createApp(App).use(router).mount('#app');
