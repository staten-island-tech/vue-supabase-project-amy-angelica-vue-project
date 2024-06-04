<template>
  <h1>Write A Review!</h1>

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
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
  <button @click.once="post_it(counter,message)">Post Review</button>
</template>

<script setup>
import { supabase } from '../../lib/supabaseClient'
import { ref } from 'vue'
import { usethisStore } from '@/stores/storecreate';
const store = usethisStore();
store.count++
const counter = ref(0)
if (counter !== 0) {
}
let message = ref('')

async function post_it(rating, message) {
  console.log(message, message.value)
  try {
    const { error } = await supabase.from('Posts')
    .insert({ 
      rating: rating,
      restaurant_id: store.restaurant_id, 
      review: message, 

    })
     clearValue() 
    console.log('hi')
    if (error) {
      throw new Error(error)
    }
  } catch (error) {
    console.log(error)
  }
}
function clearValue() {
  message.value = '';
}
</script>
<style></style>