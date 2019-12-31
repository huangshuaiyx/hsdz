// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入Lazyload
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);
//引入vuex
import store from "./store/index.js"
//引入element
import Element from 'element-ui';
Vue.use(Element);
//axios
import axios from 'axios';
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios)
//全局
axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
