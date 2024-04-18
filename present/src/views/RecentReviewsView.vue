<template>
  <div>
    <div class="container">
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.objectid" :restaurant="restaurant"/>
    </div>
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
import { onBeforeMount } from 'vue';
const supabase = createClient('https://uzufnrmrvcxbarxfvhks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM')
async function getrestaurant() {
let { data: restaurant, error } = await supabase
  .from('Restaurants')
  .select('objectid',
  'restaurant_name')
  console.log(restaurant)}
  onBeforeMount(()=>{
    getrestaurant();
  })
  import RestaurantCard from '@/components/icons/RestaurantCard.vue';
</script>

