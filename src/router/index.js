import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history',
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const status = store.getters['loginUser/status'];
    if (status === 'loading') {
      // 加载中
      next({
        path: '/loading',
        query: {
          returnurl: to.fullPath,
        },
      });
    } else if (status === 'login') {
      next();
    } else {
      next({
        path: '/login',
        query: {
          returnurl: to.fullPath,
        },
      });
    }
    // 需要鉴权
  } else {
    next();
  }
});

export default router;
