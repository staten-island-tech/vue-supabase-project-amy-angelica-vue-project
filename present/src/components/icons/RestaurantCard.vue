<template>
    <div class="card">
        <h2>Unique ID: {{ restaurant.objectid }}</h2>
        <h2>name: {{ restaurant.restaurant_name }}</h2>
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
</style>