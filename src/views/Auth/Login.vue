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
            type="email"
            class="mb-3"
            placeholder="Email"
            required
          ></b-form-input>
          <!-- Password -->
          <b-form-input
            v-model="password"
            type="password"
            class="mb-4"
            placeholder="Password"
            required
          ></b-form-input>
          <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
          <b-button @click="login" variant="primary" class="mb-2" block>Login</b-button>
          <small class="text-center d-block">
            Don't have accout?
            <router-link to="/register">
              Click here
            </router-link>
          </small>
          <div v-if="user">
            <p>Token : {{ token }}</p>
            <p>User : {{ user }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="@/assets/steal-data.jpg" class="img-fluid border-left border-dark">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  computed: {
    ...mapState('user', ['user','token']),
  },
  methods: {
    async login() {
      this.error = null;
      let data = {
        email: this.email,
        password: this.password,
      };
      // return console.log(data);
      try {
        await this.$store.dispatch('user/login', data);
        this.$router.push('/');
      } catch (err) {
        console.log(err.response.data.message);
        this.error = err.response.data.message;
      }
    }
  }
};
</script>

<style scoped>
  .mtr-7 {
    margin-top: 5.5rem;
  }
</style>
