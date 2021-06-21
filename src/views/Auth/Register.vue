<template>
  <AuthPanel title="Ready to Sign Up">
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
      class="mb-3"
      placeholder="Password"
      required
    ></b-form-input>
    <b-form-input
      v-model="name"
      type="text"
      class="mb-3"
      placeholder="Name"
      required
    ></b-form-input>
    <b-form-select
      v-model="gender"
      :options="option"
      class="mb-3"
      required
    ></b-form-select>
    <b-form-input
      v-model="number"
      type="number"
      class="mb-3"
      placeholder="Number"
      required
    ></b-form-input>
    <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
    <b-button @click="register" variant="primary" class="mb-2" block>
      Register
    </b-button>
    <small class="text-center d-block">
      Already have accout?
      <router-link to="/login">
        Click here
      </router-link>
    </small>
  </AuthPanel>
</template>

<script>
import AuthPanel from '@/components/AuthPanel';
import { mapState } from 'vuex';

export default {
  components: {
    AuthPanel,
  },
  data() {
    return {
      email: null,
      password: null,
      name: null,
      gender: null,
      number: null,
      option: [
        { value: null, text: 'Select Gender' },
        { value: 'm', text: 'Male' },
        { value: 'f', text: 'Female' },
        { value: 'o', text: 'Others' },
      ],
      error: null,
    };
  },
  computed: {
    ...mapState('user', ['user','token']),
  },
  methods: {
    async register() {
      this.error = null;
      let data = {
        email: this.email,
        password: this.password,
        name: this.name,
        gender: this.gender,
        number: this.number,
      };
      // return console.log(data);
      try {
        await this.$store.dispatch('user/register', data);
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
  .mtc {
    margin-top: 1rem;
  }
</style>
