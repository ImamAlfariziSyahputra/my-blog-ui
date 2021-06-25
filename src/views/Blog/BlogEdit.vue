<template>
  <div class="pt-4 pb-5">
    <div class="form-container py-4 px-4 shadow-lg">
      <h2>Create Blog</h2>
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
          <!-- <ValidationProvider 
            name="Image" 
            rules="required" 
            v-slot="{ errors }"
          >
            <b-form-group label="Image :" class="mb-0 mt-2">
              <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-form-group>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider> -->
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
export default {
  data() {
    return {
      blogId: this.$route.params.blogId,
      slug: null,
      title: null,
      description: null,
      error: null,
      file: null,
    }
  },
  watch: {
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
        // file: formData
      };

      try {
        const response = await this.$store.dispatch('blog/updateBlog', data);
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
.form-container {
  margin-left: 20rem;
  margin-right: 20rem;
  background-color: white;
}
.form-btn {
  width: 14rem;
  height: 2.7rem;
  border-radius: 0% !important;
}
</style>