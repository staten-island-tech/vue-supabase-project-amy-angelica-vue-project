<template>
  <form class="ya" @submit.prevent="login()">
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
        <button type="submit">Sign Up</button>
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
import { storeSession } from '@/stores/session';
import { ref } from 'vue'
import { supabase } from '../../lib/supabaseClient.js'
const loginEmail = ref()
const loginPassword = ref()
const loginLoading = ref(false)

async function login() {
  try {
    loginLoading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.value,
      password: loginPassword.value
    })
    if (error) throw error
  /*   else {
if (storeSession.session = login) {
  router.push({ path: `/account` })
}}
    */
    }
    catch (error) {
    if (error instanceof Error) {
      alert('Username and/or password is not found in our system. Maybe try again or create an account?')
    }
  } 

}
//https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication
</script>

<style scoped></style>

