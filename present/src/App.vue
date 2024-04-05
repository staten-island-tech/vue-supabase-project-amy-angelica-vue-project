<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class = "header">


      <nav>
        <RouterLink id = "navigate" to="/">Recent Reviews</RouterLink>
        <RouterLink id = "navigate" to="/create">Review</RouterLink>
        <RouterLink id = "navigate" to="/account">Account</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  text-align: center;
}


#navigate { 
  padding-left: 30px;
  padding-right: 30px;
}
</style>
