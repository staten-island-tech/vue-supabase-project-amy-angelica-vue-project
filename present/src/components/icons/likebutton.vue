<template>
<button @click.once="counter++" class ="boots">Upvote!</button>
<p>Upvotes: {{ counter }}</p>
  </template>
  
  <script setup>
  import {supabase} from '../supabaseClient'
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

  <style scoped>
.boots {
  background-color: white;
  padding: 5px;
  border-radius: 25px;
  border: 1px solid #5e445f;
  margin-bottom: 15px;
  
}

p {
  background-color: white;
  font-size: 15px;
  font-weight: bold;
}

  </style>
  