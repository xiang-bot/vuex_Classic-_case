import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from './router';
import App from './App.vue';
import store from './store';

store.dispatch('loginUser/whoAmI');
// 这个就是如果你上一次登录过了，那下次就会直接调用这个函数

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router: VueRouter,
  store,
  render(h) { return h(App); },
}).$mount('#app');
