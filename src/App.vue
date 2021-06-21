<template>
  <div id="app">
    <Navbar />
    <router-view class="view"/>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapState('user', ['isLoggedIn']),
  }
}
</script>

<style>
.view {
  margin-top: 4rem;
}
</style>
