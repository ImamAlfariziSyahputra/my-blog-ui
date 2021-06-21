<template>
  <div class="bg-image">
    <div class="head-container">
      <p class="head-title py-2 px-4 text-dark font-weight-bold">WELCOME TO LAZY BLOGS</p>
      <a href="#" class="head-button text-white py-2 px-4">Read More</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg-image {
  background-image: url('https://cdn.pixabay.com/photo/2021/05/15/00/42/street-6254667_960_720.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  position: relative;
}
.head-container {
  height: 35rem;
}
.head-title {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
}
.head-button {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  background-color: rgba(88, 176, 251, 1);
  font-size: 1.5rem;
  border-radius: 9999px;
}
</style>