<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 no-gutters pt-4" v-if="blogs">
        <div class="col-md-8 mb-3">
          <div class="card mb-4" v-for="blog in blogs" :key="blog.id">
            <img :src="`http://localhost:3000/images/${blog.image_path ? blog.image_path : ''}`" class="card-img-top" alt="post-image">
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
  computed: {
    ...mapState('blog', ['blogs']),
  },
  mounted() {
    this.$store.dispatch('blog/getBlogs')
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