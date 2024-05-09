<template>

  <div class="container">
    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.objectid"
      :restaurant="restaurant"
    />
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
import { ref, onBeforeMount } from 'vue'
const supabase = createClient(
  'https://uzufnrmrvcxbarxfvhks.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM'
)
const restaurants = ref('')

async function getrestaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select('*')
  restaurants.value = restaurant;

  
}
onBeforeMount(() => {
  getrestaurant()
})
import RestaurantCard from '@/components/icons/RestaurantCard.vue'

</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.title {
  font-size: 50px;
  text-align: center;
}
</style>
