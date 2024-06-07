<template>
  <header>
    <nav>
         <router-link to="/nothome" class ="navigate">Home</router-link>
         <router-link to="/account" class ="navigate">Account</router-link>
        
       </nav>
  </header>
       <button @click.prevent="logout">Log Out</button>
     
       <form @submit.prevent="fetchRestaurants" class="search-form">
      <input v-model="categoryInput" placeholder="Enter Restaurant name" class="search-input"/>
      <button type="submit" id="start" class="search-button">Search</button>
    </form>
    <div class="awman">{{ awmanMessage }}</div>

   <div class="container">
     <RestaurantCard
       v-for="restaurant in restaurants"
       :key="restaurant.objectid"
       :restaurant="restaurant"
     />
   </div>
 </template>
 <script setup>
 import { ref, onBeforeMount } from 'vue';
 import RestaurantCard from '@/components/icons/RestaurantCard.vue';
 import { useRouter } from 'vue-router';
 import { supabase } from '../../lib/supabaseClient.js';
 
 const router = useRouter();
 const loginLoading = ref(false);
 const restaurants = ref([]);  // Changed from an empty string to an array
 const categoryInput = ref('');
 const awmanMessage = ref('');
 
 async function getRestaurants() {
  const { data: restaurant, error } = await supabase.from('Restaurants').select('*');
  if (error) {
    console.error("Error fetching restaurants:", error);
  } else {
    restaurants.value = restaurant;
  }
}

onBeforeMount(() => {
  getRestaurants();
});

 async function logout() {
   try {
     loginLoading.value = true;
     const { error } = await supabase.auth.signOut();
     if (error) throw error;
     router.push('/');
   } catch (error) {
     if (error instanceof Error) {
       alert('error try again');
     }
   } finally {
     loginLoading.value = false;
   }
 }
 
async function fetchRestaurants() {
  clearFields();
  try {
    const { data: restaurant, error } = await supabase.from('Restaurants').select('*');
    if (error) {
      throw new Error(error.message);
    }
    
    const matchedRestaurants = [];
    for (const rest of restaurant) {
      if (rest.restaurant_name.toLowerCase().includes(categoryInput.value.toLowerCase())) {
        matchedRestaurants.push(rest);
      }
    }
    
    if (matchedRestaurants.length === 0) {
      awmanMessage.value = "Nothing Found. Search Something Else?";
    } else {
      restaurants.value = matchedRestaurants;
    }
  } catch (error) {
    console.error("Error fetching filtered restaurants:", error);
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
 
 
 <style >
 header {
   background-color: white;
   margin: 25px;
   text-align: center;
   margin-bottom: 50px;
 
 }
 
 
 .navigate {
   padding: 10px 70px;
   margin: 50px;
   text-align: center;
   font-size: 1.2rem;
   background-color: rgb(215, 158, 221);
   color: white;
   border-radius: 10px;
   transition: background-color 0.5s;
   
 }
 .navigate:hover {
  background-color: rgb(142, 98, 154);
}
 
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


button {
  background-color: white;
  padding: 1% 2%;
  border-radius: 25px;
  border: 1px solid #5e445f;
text-align: center;
margin-left: 45%;
}

button:hover {
  background-color: rgb(170, 131, 181);
  transition: background-color 0.7s;

}

#start {
  padding: 4px;
  margin-left: 40px;
  border-radius: 0;
}
 </style>