import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import News from '../views/News.vue';
import Loading from '../views/Loading.vue';
import User from '../views/User.vue';

export default [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/News',
    component: News,
    meta: {
      auth: true,
    },
  },
  {
    path: '/User',
    component: User,
    meta: {
      auth: true,
      // 这里的auth就是判断看你有没有权限进入到这个页面
    },
  },
  { path: '/loading', component: Loading },
];
