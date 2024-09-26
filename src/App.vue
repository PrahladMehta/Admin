<script setup>

</script>

<template>

<div class="admin-layout">
        <nav class="navbar">
          <div class="navbar-brand">AdminDash</div>
          <ul class="navbar-menu">
          <router-link to="/"><li><a href="#" >Home</a></li></router-link>  
         <router-link to="/product"><li><a href="#">Products</a></li></router-link>   
         <router-link to="/analytics"><li><a href="#">Analytics</a></li></router-link>    
         <router-link to="/sellers">   <li><a href="#">Seller</a></li></router-link>   
         </ul>
          <div class="navbar-user">
            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
            <span class="user-name">Admin User</span>
          </div>
        </nav>

        </div>

  <router-view></router-view>

</template>

<style scoped>

</style>
