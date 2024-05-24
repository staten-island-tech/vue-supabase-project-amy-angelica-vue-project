<template>
  <h1>Write A Review!:</h1>

  <div>
    <div v-if="counter == 0">
      <h2>Give a rating!</h2>
    </div>
    <div v-else>
      <h2>Rating: {{ counter }}</h2>
    </div>
    <button class="1" @click="counter = 1">1</button>
    <button class="2" @click="counter = 2">2</button>
    <button class="3" @click="counter = 3">3</button>
    <button class="4" @click="counter = 4">4</button>
    <button class="5" @click="counter = 5">5</button>
  </div>
  <button @click.once="post_it(counter)">Post Review</button>
</template>

<script setup>
import { supabase } from './supabaseClient'
import { ref } from 'vue'
const counter = ref(0)
if (counter !== 0) {
  let rating = counter
}

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
