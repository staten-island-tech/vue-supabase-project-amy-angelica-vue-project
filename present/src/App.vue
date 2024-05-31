<script setup>
/* import { RouterLink, RouterView, useRouter } from 'vue-router'
import { storeSession } from '@/stores/session.js'
import { supabase } from '../lib/supabaseClient.js'


const router = useRouter()
const sessionStore = storeSession()
const isLoggedIn = sessionStore.session !== null 

async function logout() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
      alert(error.message)
  } 
} 

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
  sessionStore.session = session
})  */
import { RouterView } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
import { storeSession } from '@/stores/session.js'

const sessionStore = storeSession()

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
  sessionStore.session = session })

</script>

<template>
  <header>
      <nav>

   
      </nav>
  </header>
  <RouterView />
 <!--  <header class="header">
    <nav>
      <template v-if="isLoggedIn">
        <router-link to="/">Home</router-link>
        <router-link to="/account">Account</router-link>
        <button @click="logout">Logout</button>
      </template>
      <template v-else>
        <router-link to="/loginuser">Login</router-link>
        <router-link to="/createuser">Register</router-link>
        <router-link to="/account">Account</router-link>

        <router-link to="/">Home</router-link>
      </template>
     </nav>
  </header>
  <main>
    <RouterView />
  </main> -->
</template>

<style scoped>

</style>
