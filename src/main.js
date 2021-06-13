// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import vuetify from './plugins/vuetify';
import VueSwal from 'vue-swal'
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(VueSwal);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

