// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './plugin/loading'
import Alert from './plugin/alert'
import Toast from './plugin/toast'

Vue.config.productionTip = false
Vue.use(Loading);
Vue.use(Alert);
Vue.use(Toast);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
