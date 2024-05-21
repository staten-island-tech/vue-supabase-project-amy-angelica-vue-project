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
import { ref, onBeforeMount } from 'vue'
import { supabase } from '@/components/supabaseClient';
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
