import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
Vue.config.productionTip = false
const watermark = require('./common/js/watermark.js')
watermark(document.getElementById('watermark'), 'hufozhou')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
