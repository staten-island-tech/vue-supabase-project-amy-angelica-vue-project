<template>
    <div>
      <h1>Email Verification</h1>
      <p v-if="verificationStatus === 'success'">Your email has been verified successfully!</p>
      <p v-else-if="verificationStatus === 'error'">There was an error verifying your email. Please try again.</p>
      <p v-else>Verifying your email...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../../lib/supabaseClient.js'
  
  const verificationStatus = ref('')
  
  async function verifyEmail() {
    try {
      const { error } = await supabase.auth.verifyEmail()
      if (error) {
        verificationStatus.value = 'error'
      } else {
        verificationStatus.value = 'success'
      }
    } catch (err) {
      verificationStatus.value = 'error'
    }
  }
  
  onMounted(() => {
    verifyEmail()})


  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
  