<template>
  <div>
    <form @submit.prevent="Submit" class="form">
    <router-link to="/home">Home</router-link>
        <router-link to="/account">Account</router-link>
    <h1>HomePage</h1>
    <button @click.prevent="logout">Log Out</button>
  </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { supabase } from '../../lib/supabaseClient.js'
const loginLoading = ref(false)


async function logout() {
  try {
    loginLoading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/')

  } catch (error) {
    if (error instanceof Error) {
      alert('error try again')  } 
} 
finally {
    loginLoading.value = false
  }
}
</script>

<style scoped></style>


<!-- 

<template>
  <div>
    <router-link to="/">Home</router-link>
        <router-link to="/account">Account</router-link>
    <h1>HomePage</h1>
    <button @click.prevent="logout">Log Out</button>
  </div>
</template>

<script setup>
import { storeSession } from '@/stores/session'
import { supabase } from '../../lib/supabaseClient.js'


async function logout() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
      alert(error.message)
      console.log (storeSession.session)
  } 
} 
</script>

<style scoped></style> -->