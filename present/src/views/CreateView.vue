<template>
  <form class="all-createuser" @submit.prevent="create_account_for_user()">
    <router-link to="/">Login</router-link>
        <router-link to="/createuser">Register</router-link>
        <h1>Register with your email and password below.</h1>

    <input
      class="inputField"
      required
      type="email"
      placeholder="Your email"
      v-model="registerEmail"
    />
    <input
      class="inputField"
      required
      type="password"
      placeholder="Your password"
      v-model="registerPassword"
    />
    <div class="buttons">
      <button type="submit">Sign Up</button>
    </div>
  </form>
  <div class="login">
    <p>Already have an account? Login</p>
    <router-link class="loginLink" to="/loginuser">Login Here!</router-link>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../lib/supabaseClient.js'

const registerEmail = ref('')
const registerPassword = ref('')

async function create_account_for_user() {
  try {
    const { error } = await supabase.auth.signUp({
      email: registerEmail.value,
      password: registerPassword.value
    })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    console.log('Register Successful')

  }
}
</script>

<style scoped>
.inputField {
  height: 1%;
  width: 20%;
  padding: 0.75%;
  margin: 2%;
  background-color: rgb(245, 204, 228);
  text-align: center;
  border-radius: 15px;
  align-items: center;
}
h1 {
  color: white;
  background-color: rgb(114, 80, 85);
  text-align: center;
  border-radius: 45px;
  padding: 1%;
  margin: 10px;
}
</style>

