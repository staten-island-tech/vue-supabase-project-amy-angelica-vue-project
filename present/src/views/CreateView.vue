
<template>
    <div class="all-createuser" @submit.prevent="handleRegister">
    <h1> Register with your email and password below. </h1>
      <input class="inputField" required type="email" placeholder="Your email" v-model="form.registerEmail" />
      <input class="inputField" required type="password" placeholder="Your password" v-model="form.registerPassword" />
    <div class="buttons">
        <button @click="create_account_for_user()">Sign Up</button>
      </div>
      <div class="login">
        <p>Already have an account? Login</p>
        <router-link class="loginLink" to="/LogIn">Login Here!</router-link>
      </div>
    </div>
  <WelcomeItem></WelcomeItem>
</template>

<script setup>
  import { ref } from 'vue'
  import { supabase } from '@/supabaseClient.js'

  const registerLoading = ref(false)
  const registerEmail = ref('')
  const registerPassword = ref('')


 

 async function create_account_for_user(){
    try {
      registerLoading.value = true
      const { user, error } = await supabase.auth.signUp({
        email: registerEmail.value,
        password: registerPassword.value,
    
      }, )
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      console.log ("Register Successful")
      registerLoading.value = false
     /*  <h2>Confirm your signup</h2>

<p>Follow this link to confirm your user:</p>
<p><a href="{{ .ConfirmationURL }}">Confirm your mail</a></p> */
    }
  }
</script>

<style  scoped>
</style> ../../lib/supabaseClient.js