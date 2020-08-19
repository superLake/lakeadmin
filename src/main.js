import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.baseURL="http://localhost:8088/"
Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:8088/',
  withCredentials: true
  // baseURL:this.baseURL
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
