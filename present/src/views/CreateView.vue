


<template>

    <form class="ye" @submit.prevent="handleRegister">
    <h1 class="header">Supabase + Vue 3</h1>
    <p class="description">Register with your email and password below</p>
    <div>
      <input class="inputField" required type="email" placeholder="Your email" v-model="registerEmail" />
    </div>
    <div>
      <input class="inputField" required type="password" placeholder="Your password" v-model="registerPassword" />
    </div>
    <div class="buttons">
        <button @click="create()">Sign Up</button>
      </div>

</form>

  <WelcomeItem></WelcomeItem>
</template>

<script setup>
  import { ref } from 'vue'
  import { supabase } from '@/components/supabaseClient.js'

  const registerLoading = ref(false)
  const registerEmail = ref('')
  const registerPassword = ref('')

 async function create(){
    try {
      registerLoading.value = true
      const { user, error } = await supabase.auth.signUp({
        email: registerEmail.value,
        password: registerPassword.value,
        data: {
        username: registerEmail.value,
      },
    
      }, )
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      console.log("Login Successful")
      registerLoading.value = false
    }
  }
</script>

<style  scoped>
</style> 
