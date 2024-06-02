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
import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient.js'
const router = useRouter()
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
