import BlogService from "../../api/BlogService";

export default {
  namespaced: true,
  state: {
    blogs: null,
    blog: null,
  },
  mutations: {
    SET_BLOGS(state, payload) {
      state.blogs = payload
    },
    SET_BLOG(state, payload) {
      state.blog = payload
    }
  },
  actions: {
    async getBlogs({commit}) {
      const response = await BlogService.all();
      // console.log('Get Blogs ====>');
      commit('SET_BLOGS', response.data);
      return response;
    },
    async getBlogById({commit}, blogId) {
      const response = await BlogService.show(blogId);
      // console.log('Get Blogs ====>');
      commit('SET_BLOG', response.data);
      return response;
    },
    async addBlog({commit}, payload) {
      const response = await BlogService.store(payload);
      return response;
    },
    async updateBlog({commit}, payload) {
      const response = await BlogService.update(payload);
      return console.log(payload.get('id'));
      return response;
    },
    async deleteBlog({commit}, payload) {
      const response = await BlogService.delete(payload);
      return response;
    },
  },
}