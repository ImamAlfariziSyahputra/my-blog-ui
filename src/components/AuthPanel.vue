<template>
  <div class="
    auth-container
    shadow-lg
    d-flex
    no-gutters
    bg-light
  ">
    <div class="col-md-6 px-5 bg-light my-auto">
      <h1 class="mb-4">{{ title }}</h1>
      <slot>
        <p class="text-center">no slot content defined.</p>
      </slot>
      <!-- <div v-if="user">
        <p>Token : {{ token }}</p>
        <p>User : {{ user }}</p>
      </div> -->
    </div>
    <div class="col-md-6">
      <img src="@/assets/steal-data.jpg" class="img-fluid border-left border-dark">
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style>
.auth-container {
  margin: 6rem 12rem 4rem !important;
}
/* .auth-form {
  margin-top: 5.5rem;
} */
</style>