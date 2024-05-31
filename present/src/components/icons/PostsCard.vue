<template> 
<div class="card">      
<h2>{{ post.user_id }}</h2>
  <h3>Created at:{{ post.created_at }}</h3>
        <h2>Rating: {{ post.rating }}</h2>
       <h2>comments: {{ post.review }}</h2> 
<likebutton/></div> 

</template>

<script setup>
import likebutton from './likebutton.vue';
const props = defineProps({
   post: Object,
   postid: Number 
})

</script>

<style>
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