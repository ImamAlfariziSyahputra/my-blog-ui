<template>
  <div class="pt-4 pb-5">
    <div class="form-container py-4 px-4 shadow-lg">
      <h2>Create Blog</h2>
      <b-form-group label="Title:" label-for="input-2">
        <b-form-input
          v-model="title"
          placeholder="Title..."
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Slug:" label-for="input-2">
        <b-form-input
          v-model="slug"
          required
          disabled
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Body:" label-for="input-2">
        <b-form-textarea
          id="textarea"
          v-model="body"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button variant="primary" class="form-btn">Button</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      slug: null,
      body: null,
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
  }
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