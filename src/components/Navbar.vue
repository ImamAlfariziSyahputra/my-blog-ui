<template>
  <div class="nav-container">
    <b-navbar 
      toggleable="lg"
      type="light" 
      variant="light" 
      fixed="top" 
      class="shadow navbar-light py-2 px-5"
    >
      <!-- <div class="container"> -->
        <b-navbar-brand href="#" class="brand font-weight-bold">LAZY BLOGS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="pt-1 ml-4">
          <b-navbar-nav>
            <b-nav-item href="#" class="pr-3">
              <router-link to="/">
                Home
              </router-link>
            </b-nav-item>
            <b-nav-item href="#" class="pr-3">
              <router-link to="/">
                About
              </router-link>
            </b-nav-item>
            <b-nav-item href="#" class="pr-3">
              <router-link to="/">
                Contact
              </router-link>
            </b-nav-item>
            <b-nav-item class="pr-3" v-if="user">
              <router-link to="/blog/create">Create Blog</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav v-if="!user">
              <b-nav-item class="pr-3">
                <router-link to="/register">Register</router-link>
              </b-nav-item>
              <b-nav-item class="pr-3">
                <router-link to="/login">Login</router-link>
              </b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown right v-if="user">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em class="text-uppercase">{{ user.name }}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      <!-- </div> -->
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    logout() {
      try {
        this.$store.commit('user/SET_TOKEN', null);
        this.$store.commit('user/SET_USER', null);
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
}
</script>

<style scoped>
.brand {
  font-size: 1.5rem !important;
}
</style>