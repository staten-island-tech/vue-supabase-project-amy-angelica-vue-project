<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import TheAccount from '@/components/TheAccount.vue'
import AuthAuth from './components/AuthAuth.vue'
import { supabase } from '@/components/supabaseClient.js'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
   <div class="container" style="padding: 50px 0 100px 0">
    <TheAccount v-if="session" :session="session" />
    <AuthAuth v-else />
  </div>
  
  <header class = "header">


      <nav>
        <RouterLink id = "navigate" to="/">Home</RouterLink>
        <RouterLink id = "navigate" to="/create">Create</RouterLink>
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

