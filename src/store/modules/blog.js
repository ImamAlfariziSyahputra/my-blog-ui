import BlogService from "../../api/BlogService";

export default {
  namespaced: true,
  state: {
    blogs: null,
  },
  mutations: {
    SET_BLOGS(state, payload) {
      state.blogs = payload
    }
  },
  actions: {
    async addBlog({commit}, payload) {
      const response = await BlogService.store(payload);
      // commit('SET_BLOGS', response.data);
      return response;
    }
  },
}