<template>
      <form @submit.prevent class="form">
   <router-link to="/home">Home</router-link>
        <router-link to="/account">Account</router-link>
  <div></div>
  </form>
</template>

<script setup></script>

<!-- <template>
  <div>
    <input v-model="newUsername" placeholder="New Username" />
    <button @click="updateUsername">Update Username</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const newUsername = ref('')

async function updateUsername() {
  try {
    // Update username in Supabase user table
    const { error } = await supabase
      .from('users')
      .update({ username: newUsername.value })
      .eq('id', currentUser.id)

    if (error) throw error
  } catch (error) {
    console.error('Error updating username:', error.message)
    // Handle error
  }
}

// Listen for changes in the user's username in real-time
supabase
  .from('users')
  .on('UPDATE', payload => {
    const updatedUser = payload.new
    if (updatedUser.id === currentUser.id) {
      // Update the newUsername value if it's different from the current value
      if (newUsername.value !== updatedUser.username) {
        newUsername.value = updatedUser.username
      }
    }
  })
  .subscribe()
</script>

 -->


<style scoped></style>
