<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 no-gutters pt-4">
      <div class="col-md-8 mb-4">
        <div class="card mb-4">
          <img src="https://cdn.pixabay.com/photo/2021/06/13/06/04/squirrel-6332270_960_720.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div class="card mb-4">
          <img src="https://cdn.pixabay.com/photo/2021/06/13/06/04/squirrel-6332270_960_720.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div class="card mb-4">
          <img src="https://cdn.pixabay.com/photo/2021/06/13/06/04/squirrel-6332270_960_720.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>

      <BlogSide />
    </div>
  </div>
</template>

<script>
import BlogSide from '@/views/Blog/BlogSide';
import Api from '@/api/Api';
// import store from '@/store';

export default {
  components: {
    BlogSide,
  },
  mounted() {
    // console.log(Api.state.user.token);
  }
}
</script>

<style scoped>
.card, .card .card-body, .card img {
  border-radius: 0%;
}
.card-body {
  background-color: white;
}
</style>