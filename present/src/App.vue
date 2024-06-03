<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'


const session = ref()


onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  
  <RouterView />
  
</template>

<style scoped>

</style>
