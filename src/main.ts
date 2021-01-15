import { createApp } from 'vue'
import {createGtm} from 'vue-gtm'

import App from './App.vue'

const app = createApp(App)
app.use(createGtm({id:'dummy'}));
app.mount('#app')
