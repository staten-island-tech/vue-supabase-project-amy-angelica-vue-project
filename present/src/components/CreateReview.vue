<template>
   <h1>Write A Review!</h1>
   <div @click.once="counter++">Upvote!</div>
   <p>Upvotes: {{ counter }}</p>
     </template>
     
     <script setup>
   
    import { ref } from 'vue'
   
   const counter = ref(0)
     </script>
     <style>
    
     </style>
     