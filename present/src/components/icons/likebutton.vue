<template>
<button @click.once="counter++">Upvote!</button>
<p>Upvotes: {{ counter }}</p>
  </template>
  
  <script setup>
 import { ref } from 'vue'

const counter = ref(0)
  </script>

  <style scoped>
button {
  background-color: white;
  padding: 1.5% 10%;
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
  