<template>
<button @click.once="counter++">Upvote!</button>
<p>Upvotes: {{ counter }}</p>
  </template>
  
  <script setup>
  import { supabase } from '../supabaseClient';
 import { ref } from 'vue'
 const counter = ref(0)

    async function like_it(counter) {
  try {
    const { error } = await supabase.from('Posts')
    .insert({ 
  
      upvote: counter,

    })
    console.log('hi')
    if (error) {
      throw new Error(error)
    }
  } catch (error) {
    console.log(error)
  }
}
like_it(counter)
  </script>
  <style>
 
  </style>
  