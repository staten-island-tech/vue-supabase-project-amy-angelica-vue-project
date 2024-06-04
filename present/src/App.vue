<script setup>
import {RouterView } from 'vue-router'
import { supabase } from '../lib/supabaseClient.js'
import {storeSession} from '@/stores/session.js'


const sessionStore = storeSession()

supabase.auth.onAuthStateChange((event, session)=>  {
console.log (event,session)
sessionStore.session = session
})
</script>

<template>
  
  <RouterView />
  
</template>

<style scoped>

</style>
