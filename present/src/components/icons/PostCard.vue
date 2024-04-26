<template>
    <div class="card">
        <h1>{{ post.restuarant_name }}</h1>
        <h2>{{ post.postid }}</h2>
         

 </div>
</template>

<script setup>
const props = defineProps({
   post: Object
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