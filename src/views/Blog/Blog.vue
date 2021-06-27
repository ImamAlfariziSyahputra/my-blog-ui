<template>
  <div class="container">
    <div class="d-flex justify-content-lg-between mt-3">
      <b-form-input
        class=""
        style="border-radius: 0%"
        v-model="searchBlog"
        placeholder="Search blogs..."
        required
      ></b-form-input>
    </div>
    <div class="row row-cols-1 row-cols-md-2 no-gutters pt-4" v-if="blogs">
        <div class="col-sm-8 col-md-8 mb-3">
          <div class="card mb-4" v-for="blog in blogs" :key="blog.id">
            <img :src="`http://localhost:3000/images/${blog.image_path ? blog.image_path : 'default.jpg'}`" class="card-img-top" alt="post-image">
            <div class="card-body">
              <router-link 
                :to="`/blog/${blog.id}`" 
                class="text-decoration-none text-dark"
              >
                <h5 class="card-title">{{ blog.title }}</h5>
              </router-link>
              <p class="card-text">{{ blog.description }}</p>
            </div>
          </div>
        </div>
        <BlogSide />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BlogSide from '@/views/Blog/BlogSide';

export default {
  components: {
    BlogSide,
  },
  data() {
    return {
      searchBlog: null,
    }
  },
  computed: {
    ...mapState('blog', ['blogs']),
  },
  watch: {
    searchBlog: function (val) {
      
    }
  },
  async mounted() {
    const response = await this.$store.dispatch('blog/getBlogs');
  }
}
</script>

<style scoped>
.card, .card .card-body, .card img {
  border-radius: 0%;
}
.card-body {
  background-color: white;
}
</style>