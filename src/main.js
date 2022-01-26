import Vue from 'vue'
import App from './App.vue'
import router from './router'


import "whatwg-fetch";
import "custom-event-polyfill";
import "core-js/stable/promise";
import "core-js/stable/symbol";
import "core-js/stable/string/starts-with";
import "core-js/web/url";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
