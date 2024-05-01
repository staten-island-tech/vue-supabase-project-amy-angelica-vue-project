<template>


    <form class="ya" @submit.prevent="login()">
    <h1 class="header">Supabase + Vue 3</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <div>
      <input class="inputField" required type="email" placeholder="Your email" v-model="loginEmail" />
      <input class="inputField" required type="password" placeholder="Your password" v-model="loginPassword" />
      <div class="buttons">
        <button @click="login()">Sign Up</button>
      </div>
      
    </div>
    <div>
    </div>
 
</form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/components/supabaseClient.js'
const loginEmail = ref('')
const loginPassword = ref('')
const loginLoading = ref(false)

async function login () {
    try {
      loginLoading.value = true
      const { error } = await supabase.auth.signInWithOtp({
        email: loginEmail.value,
        password: loginPassword.value,
      }, {
        redirectTo: 'http://localhost:5173/account', 
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loginLoading.value = false
    }
  }
 
 
</script>

<style scoped>

</style>