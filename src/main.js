import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { router } from "./router";
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from "vuelidate"


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const opts = {}

export default new Vuetify(opts)


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')