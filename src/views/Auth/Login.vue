<template>
  <AuthPanel title="Welcome Back">
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
  </AuthPanel>
</template>

<script>
import { mapState } from 'vuex';
import AuthPanel from '@/components/AuthPanel'

export default {
  components: {
    AuthPanel,
  },
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
  },
};
</script>

<style scoped>
.form-contain {
  margin-top: 5.5rem;
}
</style>
