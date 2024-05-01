<template>
  <div>
    <div v-if="!loggedIn">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label>Email:</label>
        <input type="email" v-model="email" required>
        <label>Password:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Register</button>
      </form>
    </div>
    <div v-else>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>Email:</label>
        <input type="email" v-model="loginEmail" required>
        <label>Password:</label>
        <input type="password" v-model="loginPassword" required>
        <button type="submit">Login</button>
      </form>
      <h2>Secret Content</h2>
      <p v-if="loggedIn">You can only see this if you're logged in!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/components/supabaseClient.js'

const email = ref('')
const password = ref('')
const loginEmail = ref('')
const loginPassword = ref('')
const loggedIn = ref(false)

const register = async () => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    if (error) {
      throw error
    }

    // Send verification email
    await supabase.auth.api.sendVerificationEmail(email.value)
  } catch (error) {
    console.error('Error registering:', error.message)
  }
}

const login = async () => {
  try {
    const { user, error } = await supabase.auth.signIn({
      email: loginEmail.value,
      password: loginPassword.value
    })

    if (error) {
      throw error
    }

    loggedIn.value = true
  } catch (error) {
    console.error('Error logging in:', error.message)
  }
}
</script>