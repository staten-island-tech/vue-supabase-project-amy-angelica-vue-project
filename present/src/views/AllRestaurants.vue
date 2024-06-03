<template>
  <div>
    <form @submit.prevent="fetchRestaurants" class="search-form">
      <input v-model="categoryInput" placeholder="Enter Restaurant name" class="search-input"/>
      <button type="submit" id="start" class="search-button">Search</button>
    </form>
    <div class="awman">{{ awmanMessage }}</div>
    <div class="container">
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.objectid" :restaurant="restaurant" />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { supabase } from '@/components/supabaseClient'; 
import RestaurantCard from '@/components/icons/RestaurantCard.vue';

const restaurants = ref([]);
const categoryInput = ref('');
const awmanMessage = ref('');

async function getrestaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select('*')
  restaurants.value = restaurant;
}
onBeforeMount(() => {
  getrestaurant()
})
async function fetchRestaurants() {
  clearFields();
  const URL = "https://data.cityofnewyork.us/resource/pitm-atqc.json";
  const same = [];
  try {
    const response = await fetch(URL);
    if (response.status !== 200) { 
      throw new Error(response.statusText);
    }
    const allRestaurants = await response.json();
    allRestaurants.forEach(restaurant => {
      if (restaurant.restaurant_name.toLowerCase() === categoryInput.value.toLowerCase()) {
        same.push(restaurant);
      }
    });
    if (same.length === 0) {
      awmanMessage.value = "Nothing Found. Search Something Else?";
    } else {
      restaurants.value = same;
    }
  } catch (error) {
    console.error(error, "UH OH");
    awmanMessage.value = "Error: Nothing Found";
  }
  clearValue();
}

function clearFields() {
  restaurants.value = [];
  awmanMessage.value = '';
}

function clearValue() {
  categoryInput.value = '';
}
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

