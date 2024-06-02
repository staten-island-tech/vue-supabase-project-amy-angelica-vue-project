<template>
<form @submit.prevent="fetchRecipes" class="search-form">
      <input v-model="categoryInput" placeholder="Enter category" class="search-input"/>
      <button type="submit" id="start" class="search-button">Search</button>
    </form>
    <div class="awman">{{ awmanMessage }}</div>
  <div class="container">
    <RestaurantCard>
     <div v-for="restaurant in restaurants"
      :key="restaurant.objectid"
      :restaurant="restaurant">
      <h1>{{ restaurant.restaurant_name }}</h1>
        <h2>{{ restaurant.business_address + ", " + restaurant.postcode }}</h2>
        <h2>Sidewalk Seating: {{ restaurant.approved_sidewalk_seating }}</h2>
         <h2>Road Seating: {{ restaurant.approved_road_seating }}</h2>
         <h3>{{ restaurant.restaurant_id }}</h3>
        </div>
       </RestaurantCard>
  </div>


</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { supabase } from '@/components/supabaseClient';
import RestaurantCard from '@/components/icons/RestaurantCard.vue'

const restaurants = ref('')

async function getrestaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select('*')
  restaurants.value = restaurant;
}
onBeforeMount(() => {
  getrestaurant()
})

export default {
  data() {
    return{
      inputvalue: '',
      meals: [],
      awmanMessage: '',
    };
  },
  methods: {
    async fetchRecipes () {
      this.clearFields();
      const URL = "https://data.cityofnewyork.us/resource/pitm-atqc.json"

    }

  }
}

</script>
<style >
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
