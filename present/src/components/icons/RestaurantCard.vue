<template>
    <div class="card">
        <h1>{{ restaurant.restaurant_name }}</h1>
        <h2>{{ restaurant.business_address + ", " + restaurant.postcode }}</h2>
        <h2>Sidewalk Seating: {{ restaurant.approved_sidewalk_seating }}</h2>
         <h2>Road Seating: {{ restaurant.approved_road_seating }}</h2>
         

 </div>
</template>

<script setup>
const props = defineProps({
   restaurant: Object
})
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