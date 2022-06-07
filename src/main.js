import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as apolloProvider from './apollo.provider'

createApp(App).use(apolloProvider.provider).use(store).use(router).mount('#app')