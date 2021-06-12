<template>
  <div class="container">
    <div class="
      border border-dark rounded
      mt-5
      shadow-lg
      d-flex
      justify-content-between
      no-gutters
    ">
      <div class="col-md-6 p-5">
        <div class="mtr-7">
          <h1 class="mb-4">Welcome Back</h1>
          <!-- Email -->
          <b-form-input
            v-model="email"
            class="mb-3"
            placeholder="Email"
            required
          ></b-form-input>
          <!-- Password -->
          <b-form-input
            v-model="password"
            class="mb-4"
            placeholder="Password"
            required
          ></b-form-input>
          <b-button variant="primary" class="mb-2" block>Login</b-button>
          <small class="text-center d-block">
            Don't have accout?
            <router-link to="/register">
              Click here
            </router-link>
          </small>
        </div>
      </div>
      <div class="col-md-6">
        <img src="@/assets/steal-data.jpg" class="img-fluid border-left border-dark">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style scoped>
  .mtr-7 {
    margin-top: 5.5rem;
  }
</style>
