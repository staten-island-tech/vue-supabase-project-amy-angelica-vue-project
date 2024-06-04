<template>
 <nav>
        <router-link to="/nothome">Home</router-link>
        <router-link to="/account">Account</router-link>
       
      </nav>
      <button @click.prevent="logout">Log Out</button>
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
const restaurants = ref('')

async function getrestaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select('*')
  restaurants.value = restaurant;
}
onBeforeMount(() => {
  getrestaurant()
})
import RestaurantCard from '@/components/icons/RestaurantCard.vue'

import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient.js'
const router = useRouter()
const loginLoading = ref(false)


async function logout() {
  try {
    loginLoading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/')

  } catch (error) {
    if (error instanceof Error) {
      alert('error try again')  } 
} 
finally {
    loginLoading.value = false
  }
}

const URL = "https://data.cityofnewyork.us/resource/pitm-atqc.json"
async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        
    } catch (error) {
        console.log(error,"uh oh");
        
    }
}
getData(URL);

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
