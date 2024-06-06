<!-- <template>
 <nav>
        <router-link to="/nothome" @click="clearSearch">Home</router-link>
        <router-link to="/account">Account</router-link>
      </nav>

      <button @click.prevent="logout">Log Out</button>
      <div class = 'searchbar'>
        <input type="text" v-model="searchy" placeholder ="search for a restaurant"> </input>
        <button @click.prevent="filterRestaurants">Enter</button>

      </div>

  <div class="container">
    <RestaurantCard
      v-for="restaurant in filterRestaurants"
      :key="restaurant.objectid"
      :restaurant="restaurant"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import RestaurantCard from '@/components/icons/RestaurantCard.vue';
import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient.js'

const restaurants = ref([])
const searchy = ref('')
const loading = ref(true)

async function getRestaurants () {
  try {
    let { data: restaurant, error} = await supabase.from ('Restaurants').select('*')
    if (error) {
      throw error;
    }
    restaurants.value = restaurant;
  } catch (error) {
    console.error (error);
  } finally {
    loading.value = false;
  }
}

onBeforeMount(() => {
  getRestaurants()
})
function filterRestaurants() {
  return restaurants.value.filter(restaurant => {
    const restaurantName = restaurant.restaurant_name.toLowerCase();
    const searchyval = searchy.value.toLowerCase();
    return restaurantName.includes(searchyval);
  });
}

function clearSearch() {
  searchy.value = ''
}

const router = useRouter()

router.beforeEach((to, from, next) => {
  if (to.path === '/nothome') {
    clearSearch()
  }
  next()
})

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
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();
    } catch (error) {
        console.log(error,"uh oh");
    }
}
getData(URL);

</script>
<style>
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
.searchbar {
  margin: 20px;
  text-align: center;
}
.searchbar input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
}
</style> -->

<template>
  <header>
    <nav>
         <router-link to="/nothome" class ="navigate">Home</router-link>
         <router-link to="/account" class ="navigate">Account</router-link>
        
       </nav>
  </header>
  
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
  padding: 1.5% 2%;
  border-radius: 25px;
  border: 1px solid #5e445f;
text-align: center;
margin-left: 45%;
}

button:hover {
  background-color: rgb(170, 131, 181);
  transition: background-color 0.7s;


}
 </style>