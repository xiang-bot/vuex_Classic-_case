import Vuex from 'vuex';
import Vue from 'vue';
import counter from './counter';
import loginUser from './loginUser';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
    loginUser,
  },
  strict: true, // 开启严格模式后，只允许通过mutation改变状态
});

window.store = store; // 把store保存到你的window对象里面

export default store;
