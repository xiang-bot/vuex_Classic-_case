import * as userApi from '../api/user';

export default {
  namespaced: true, // 开启命名空间不会有冲突
  state: {
    loading: false, // 是否整在登陆中
    user: null, // 当前登录的用户
  },
  getters: {
    status(state) {
      if (state.loading) {
        return 'loading';
      } if (state.user) {
        return 'login';
      }
      return 'unLogin';
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    // 这里的两个方法就是  其中payload会传过来是通过你this.$store.commit('你的方法调用的那个方法'，这里就是payload)
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    // 处理异步的函数 通过this.$store.dispath()  先点击登录的时候，
    // 通过跳转dispatch的函数，来检测看是不是与后端的数据一样，在通过commit来调用mutation来跟改上面的状态
    async login(ctx, payload) {
      // 这里的ctx 就是这整个对象
      ctx.commit('setLoading', true); // 这里的true不就是传入的payload值，让state里的loadIng变成正在登录中
      const resp = await userApi.login(payload.loginId, payload.loginPwd);
      // 通过调用api 会返回一个对象user
      ctx.commit('setUser', resp);
      ctx.commit('setLoading', false); // 最后就是你登录完了，把值变成false
      return resp;
    },
    async whoAmI(ctx) {
      ctx.commit('setLoading', true);
      const resp = await userApi.whoAmI();
      ctx.commit('setUser', resp);
      ctx.commit('setLoading', false);
    },
    async loginOut(ctx) {
      ctx.commit('setLoading', true);
      await userApi.loginOut();
      ctx.commit('setUser', null);
      ctx.commit('setLoading', false);
    },
  },
};
