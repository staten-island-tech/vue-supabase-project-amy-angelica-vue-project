<script setup>
import { onMounted, ref } from 'vue'
import TheAccount from '@/components/TheAccount.vue';
import AuthAuth from '@/components/AuthAuth.vue';
import { supabase } from './supabase'

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
  <div class="container" style="padding: 50px 0 100px 0">
    <TheAccount v-if="session" :session="session" />
    <AuthAuth v-else />
  </div>
</template>