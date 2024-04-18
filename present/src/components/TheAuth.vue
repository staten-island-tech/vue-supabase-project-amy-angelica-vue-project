<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
 
const supabase = createClient('https://uzufnrmrvcxbarxfvhks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM')

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
console.log(email, password)
    if (error) throw error
    alert('ok')
    

  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <p class="description">Sign in</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input class="inputField" required type="password" placeholder="Your password" v-model="password" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'enter'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>