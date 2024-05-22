<template>
  <h1>Write A Review!:</h1>

  <starrating />
  <button @click.once="post_it()">Post Review</button>
</template>

<script setup>
import { supabase } from './supabaseClient'
import starrating from './icons/starrating.vue'
import { ref } from 'vue'
const counter = ref(0)
function export_counter(){
  if (counter !==0) {
    const rating = counter
  }  
}
export_counter();
async function post_it(rating) {
  
  try {
    const { error } = await supabase.from('Posts')
    .insert({ 
      rating: rating,
      restaurant_id: 1, 
      review: 'lovely', 

    })
    console.log('hi')
    if (error) {
      throw new Error(error)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<style></style>
