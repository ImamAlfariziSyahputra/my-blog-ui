<template>
  <div class="">
    <Header />
    <Blog />
  </div>
</template>

<script>
import Header from '@/views/Home/Header';
import Blog from '@/views/Blog/Blog';

export default {
  name: "Home",
  components: {
    Header,
    Blog,
  },
};
</script>

<style scoped>

</style>
