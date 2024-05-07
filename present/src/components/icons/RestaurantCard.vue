<template>
    <router-link :to="restPath" class="card">
        <h1>{{ restaurant.restaurant_name }}</h1>
        <h2>{{ restaurant.business_address + ", " + restaurant.postcode }}</h2>
        <h2>Sidewalk Seating: {{ restaurant.approved_sidewalk_seating }}</h2>
         <h2>Road Seating: {{ restaurant.approved_road_seating }}</h2>
         

 </router-link>
</template>

<script setup>
import { computated } from "vue";
import { RouterLink } from 'vue-router'
const props = defineProps({
   restaurant: Object
})
const restPath = computated(()=>{
  return `/data/${props.restaurant.restaurant_name}`;
});
</script>

<style scoped>
.card {
   font-size: 0.5rem;
   background-color: white;
   padding: 2%;
   margin: 2rem 2rem;
   border: 3px solid black;
   width: 200px;
   height: 45vh;

 }
 h1, h2, h3 {
   background-color: white;
 } 
</style>