<template>
  <div class="pt-4 pb-5">
    <div class="form-wrapper col-sm-10 col-md-10 col-lg-8 mx-auto py-4 px-4 shadow-lg">
      <h2>Edit Blog</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Title -->
          <ValidationProvider 
            name="Title" 
            rules="required" 
            v-slot="{ errors }"
          >
            <b-form-group label="Title :" class="mb-0">
              <b-form-input
                v-model="title"
                placeholder="Title..."
                required
              ></b-form-input>
            </b-form-group>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <!-- Slug -->
          <ValidationProvider 
            name="Slug" 
            rules="required" 
            v-slot="{ errors }"
          >
            <b-form-group label="Slug :" class="mb-0 mt-2">
              <b-form-input
                v-model="slug"
                required
                disabled
              ></b-form-input>
            </b-form-group>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <!-- Image -->
          <ValidationProvider 
            name="Image" 
            rules="" 
            v-slot="{ errors }"
          >
            <b-form-group label="Image :" class="mb-0 mt-2">
              <b-form-file
                v-model="newImage"
                :state="Boolean(newImage)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-form-group>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <!-- <b-img thumbnail fluid 
            class="d-block mx-auto shadow mt-3"
            :src="`http://localhost:3000/images/${blog.image_path ? blog.image_path : 'default.jpg'}`" style="max-height:200px;"
            alt="image"
          ></b-img> -->
          <!-- Description -->
          <ValidationProvider 
            name="Description" 
            rules="required" 
            v-slot="{ errors }"
          >
            <b-form-group label="Description :" class="mb-0 mt-2">
              <b-form-textarea
                id="textarea"
                v-model="description"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
          <div class="d-flex justify-content-end mt-3">
            <b-button type="submit" variant="primary" class="form-btn">Submit</b-button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      blogId: this.$route.params.blogId,
      slug: null,
      title: null,
      description: null,
      oldImage: null,
      newImage: null,
      error: null,
    }
  },
  computed: {
    ...mapState('blog', ['blog']),
  },
  watch: {
    file: function(val) {
      console.log(val.name);
    },
    title: function(val) {
      val = val
        .toLowerCase() // !LowerCase
        .replace(/\s+/g, "-") // !space to -
        // .replace(/&/g, `-and-`) // !& to and
        .replace(/--/g, `-`); // -- to -
      this.slug = val
    }
  },
  methods: {
    async onSubmit() {
      this.error = null;

      const data = {
        id: this.blogId,
        slug: this.slug,
        title: this.title,
        description: this.description,
        image_path: this.oldImage,
      };

      // if (this.newImage) {
      //   data.image_path = this.newImage;
      // }

      console.log(data);

      const formData = new FormData();
      formData.append('file', this.newImage);

      const entries = Object.entries(data)
      for (const [key, value] of entries) {
        formData.append(key, value);
      }

      try {
        const response = await this.$store.dispatch('blog/updateBlog', formData);
        // !useless this.$store.commit('blog/SET_BLOGS', response.data);
        this.$router.push('/');
      } catch (err) {
        console.log(err.response.data.message);
        this.error = err.response.data.message;
      }
    },
    setData(data) {
      this.slug = data.slug
      this.title = data.title
      this.oldImage = data.image_path
      this.description = data.description
    },
  },
  async mounted() {
    try {
      const response = await this.$store.dispatch('blog/getBlogById', this.blogId);
      // console.log(response.data);
      this.setData(response.data);
    } catch (err) {
      console.log(err);
    }
  },
}
</script>

<style>
.form-wrapper {
  /* margin-left: 20rem;
  margin-right: 20rem; */
  background-color: white;
}
.form-btn {
  width: 14rem;
  height: 2.7rem;
  border-radius: 0% !important;
}
</style>