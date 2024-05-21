<template>
   <h1>Write A Review!</h1>
   <button @click="post_it()">click</button>
   <starrating/>

     </template>
     
     <script setup>
     import { supabase } from './supabaseClient';
import starrating from './icons/starrating.vue';

async function post_it() {
  try {
    const { error } = await supabase.from('Posts')
  .insert({restaurant_id: 1, review: "lovely"})
  console.log("hi")
  if(error){
    throw new Error(error)
  }
  } catch (error) {
    console.log(error)
  }
  
}


  </script>
     <style>
    
     </style>
     