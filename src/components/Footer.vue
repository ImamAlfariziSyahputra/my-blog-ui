<template>
  <div class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Pages</h4>
          <ul class="p-0">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Find Us</h4>
          <ul class="p-0">
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Adress</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Latest Posts</h4>
          <ul class="p-0">
            <li><a href="#">Why We Love Tech</a></li>
            <li><a href="#">Why We Love Design</a></li>
            <li><a href="#">Why We use Vue JS</a></li>
            <li><a href="#">Why Javascript is the Best</a></li>
          </ul>
        </div>
      </div>
      <hr class="bg-white">
      <p>&copy;Copyright 2021 Lazy, All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
ul {
  list-style-type: none;
}
li a{
  color: rgb(167, 167, 167);
}
li a:hover{
  text-decoration: none;
  color: rgb(109, 109, 109);
}
</style>