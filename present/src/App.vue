<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/TheAuth.vue'
import {createClient} from '@supabase/supabase-js'

const session = ref()
/* const supabase = createClient('https://uzufnrmrvcxbarxfvhks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM')



onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})*/
</script>

<template>
  <header class = "header">


      <nav>
        <RouterLink id = "navigate" to="/">All Restaurants</RouterLink>
        <RouterLink id = "navigate" to="/posts">Review Posts</RouterLink>
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
