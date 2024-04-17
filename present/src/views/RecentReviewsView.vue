<template>
  <div>
  </div>
</template>

<script setup>

// async function getrestaurant() {
//   let res = await fetch ("https://data.cityofnewyork.us/resource/pitm-atqc.json")
//   let data = await res.json();
//   restaurants.value = data;
//   const test = data.filter((da)=> da.restaurant_name == "Pomp and Circumstance Hospitality")
//   console.log(test)
// }
// onBeforeMount(()=>{
//   getrestaurant();
// })
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://uzufnrmrvcxbarxfvhks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM')

let { data: Restaurants, error } = await supabase
  .from('Restaurants')
  .select('Legal Business Name')
</script>

