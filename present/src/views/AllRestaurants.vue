<!-- <template>
<form @submit.prevent="fetchRecipes" class="search-form">
      <input v-model="categoryInput" placeholder="Enter category" class="search-input"/>
      <button type="submit" id="start" class="search-button">Search</button>
    </form>
    <div class="awman">{{ awmanMessage }}</div>
  <div class="container">
    <RestaurantCard>
     <div v-for="sam in same"
      :key="sam.objectid"
      :sam="sam">
      <h1>{{ sam.restaurant_name }}</h1>
        <h2>{{ sam.business_address + ", " + sam.postcode }}</h2>
        <h2>Sidewalk Seating: {{ sam.approved_sidewalk_seating }}</h2>
         <h2>Road Seating: {{ sam.approved_road_seating }}</h2>
         <h3>{{ sam.restaurant_id }}</h3>
        </div>
       </RestaurantCard>
  </div>


</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { supabase } from '@/components/supabaseClient';
import RestaurantCard from '@/components/icons/RestaurantCard.vue'

const restaurants = ref('')

/* async function getrestaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select('*')
  restaurants.value = restaurant;
}
onBeforeMount(() => {
  getrestaurant()
}) */

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
      const same = [];
      try {
        const response = await fetch (URL);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        const all = await response.json();
        for (let i=0; i< all.length; i++){
          const each = all.meals[i];
          if (each.strCategory.toLowerCase() === this.categoryInput.toLowerCase()){
            same.push(each);
          }
        }if (same.length === 0) {
          this.awmanMessage = "Nothing Found. Seach Something Else?";

        } else {
          this.meals = same;
        }
      } catch (error) {
        console.log (error, "UH OH");
        this.awmanMessage = "Error Nothing Found";
      }
      this.clearValue();
    },
    clearFields() {
      this.meals = [];
      this.awmanMessage='';
    },
clearValue() {
  this.categoryInput = '';
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
</style> -->

<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import RestSearch from '@/components/RestSearch.vue';
import { ref, onMounted } from 'vue';

const URL = "https://data.cityofnewyork.us/resource/pitm-atqc.json";
const restaurants = ref([]);

// Fetching data on component mount
onMounted(async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    restaurants.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const filteredRestaurants = ref([]);

const updateSearchQuery = (query) => {
  filteredRestaurants.value = restaurants.value.filter(restaurant =>
    restaurant.restaurant_name.toLowerCase().includes(query.toLowerCase())
  );
};
</script>

<template>
  <main>
    <TheWelcome />
    <RestSearch @updateSearchQuery="updateSearchQuery" />
    <div class="container">
      <RestaurantCard v-for="restaurant in filteredRestaurants" :key="restaurant.objectid" :restaurant="restaurant" />
    </div>
  </main>
</template>