<template>
  <div></div>
</template>

<script setup>//https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication

</script>

<style scoped></style>
<!-- 
<template>
  <div>
    <h1>Account Information</h1>
    <div>
      <p>Email: {{ user.email }}</p>
      <p>Username: {{ user.username }}</p>
      <img :src="user.avatarUrl" alt="Avatar" width="100" height="100" />
    </div>
    <form @submit.prevent="createUsername">
      <input v-model="newUsername" placeholder="New Username" />
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../lib/supabaseClient.js'
import { storeSession } from '@/stores/session'

const user = storeSession.session?.user || {}
const newUsername = ref('')

async function createUsername() {
  try {
    const { data, error } = await supabase.from('profiles').insert([
      { id: user.id, username: newUsername.value }
    ])

    if (error) throw error

    // Update user information in Pinia store
    storeSession.session = {
      ...storeSession.session,
      user: {
        ...user,
        username: newUsername.value
      }
    }

    alert('Username created successfully!')
  } catch (error) {
    console.error('Error creating username:', error.message)
    alert('Failed to create username. Please try again later.')
  }
}





//https://dev.to/aaronksaunders/supabase-quickstart-vue-js-5f23
</script> -->