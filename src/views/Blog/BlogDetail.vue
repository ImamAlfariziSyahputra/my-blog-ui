<template>
  <div v-if="blog">
    <div class="text-center img-wrapper">
      <!-- <img :src="`http://localhost:3000/images/${blog.image_path}`" alt="" class=""> -->
      <b-img :src="`http://localhost:3000/images/${blog.image_path ? blog.image_path : 'default.jpg'}`" fluid alt="Fluid image"></b-img>
    </div>
    <div class="body">
      <div class="my-5">
        <h1>{{ blog.title }}</h1>
        <small class="d-flex justify-content-between">
          Created by, Lazy
          <div class="" v-if="user && blog.user_id == user.id">
            <router-link :to="`/blog/${blog.id}/edit`">
              <b-button variant="primary" class="mr-2">
                  <b-icon icon="pencil-square"></b-icon>
              </b-button>
            </router-link>
            <b-button variant="danger" class="" @click="deleteBlog">
              <b-icon icon="trash"></b-icon>
            </b-button>
          </div>
        </small>
      </div>
      <div class="desc mb-5">
        {{ blog.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      blogId: this.$route.params.blogId
    }
  },
  computed: {
    ...mapState('blog', ['blog']),
    ...mapState('user', ['user']),
  },
  methods: {
    async deleteBlog() {
      const data = {
        id: this.blogId,
        image_path: this.blog.image_path,
      };

      try {
        const response = await this.$store.dispatch('blog/deleteBlog', data)
        if (response.status == 200) {
          this.$router.push('/');
        } else {
          console.log('Error');
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const response = await this.$store.dispatch('blog/getBlogById', this.blogId);
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>
.img-wrapper {
  margin: 0 6rem 0;
}
.body {
  margin: 0 12rem;
}
</style>