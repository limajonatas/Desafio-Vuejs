import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes.js';
import store from './store/index.js';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')