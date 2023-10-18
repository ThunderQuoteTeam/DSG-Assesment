import Vue from 'vue'
import App from './App.vue'
import VueSignatureCanvas from 'vue-signature-canvas';
 

import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import router from './router'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSignatureCanvas)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
