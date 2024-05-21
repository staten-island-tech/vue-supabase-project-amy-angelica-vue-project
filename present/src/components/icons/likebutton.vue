<template>
<button @click.once="counter++">Upvote!</button>
<p>Upvotes: {{ counter }}</p>
  </template>
  
  <script setup>
 import { ref } from 'vue'

const counter = ref(0)
  </script>
  <style>
 
  </style>
  