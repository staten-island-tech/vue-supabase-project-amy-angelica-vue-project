<template>
  <form class="ya" @submit.prevent="login()">
    <router-link to="/">Login</router-link>
        <router-link to="/createuser">Register</router-link>
    <h1>Login with your email and password below</h1>
    <div>
      <input
        class="inputField"
        required
        type="email"
        placeholder="Your email"
        v-model="loginEmail"
      />
      <input
        class="inputField"
        required
        type="password"
        placeholder="Your password"
        v-model="loginPassword"
      />
      <div class="buttons">
        <button type="submit">Sign In</button>
      </div>
      <div class="alr_sign">
        <p>Don't have an account?</p>
        <router-link class="createink" to="/createuser">Register Here!</router-link>
      </div>
    </div>
    <div></div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../lib/supabaseClient.js'
import { useRouter } from 'vue-router'

const loginEmail = ref()
const loginPassword = ref()
const loginLoading = ref(false)
const router = useRouter()

async function login() {
  try {
    loginLoading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.value,
      password: loginPassword.value
    })
    if (error) throw error

    router.push('/account')
  } catch (error) {
    if (error instanceof Error) {
      alert('Username and/or password is not found in our system. Maybe try again or create an account?')
    }
  } finally {
    loginLoading.value = false
  }
}
</script>

<style scoped></style>

