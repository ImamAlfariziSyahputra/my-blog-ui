import AuthService from '../../api/AuthService';

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      if(token) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
  actions: {
    async register({commit}, payload) {
      const response = await AuthService.register(payload);
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', response.data.token);
    },
    async login({commit}, payload) {
      const response = await AuthService.login(payload);
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', response.data.token);
    }
  },
}