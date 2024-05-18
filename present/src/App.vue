<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink id="navigate" to="/">Home</RouterLink>
      <RouterLink id="navigate" to="/createuser">Create</RouterLink>
      <RouterLink id="navigate" to="/account">Account</RouterLink>
      <RouterLink id="navigate" to="/loginuser">Login</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  text-align: center;
}

#navigate {
  color: black;

  margin: 0 30px;
}
</style>
