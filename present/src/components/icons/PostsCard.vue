<template> 
<div class="card">      
<h2>{{ post.user_id }}</h2>
  <h3>Created at:{{ post.created_at }}</h3>
        <h2>Rating: {{ post.rating }}</h2>
       <h2>Review: {{ post.review }}</h2> 
<likebutton/>
<!-- <input v-model="message" placeholder="edit me" />
<button @click="reply_to(message)">Post Reply</button> -->
</div> 
</template>

<script setup>import likebutton from './likebutton.vue';
const props = defineProps({
   post: Object,
   postid: Number 
})


</script>
<style scoped>
.card {
   font-size: 0.5rem;
   background-color: white;
   padding: 2%;
   margin: 2rem 2rem;
   border: 3px solid black;
   width: 30%;
 
 }

 h1, h2, h3 {
   background-color: white;
   transition: color 0.5s;
   text-align: center;
padding-top: 3%;
padding-bottom: 3%;

 }


button {
  background-color: white;
  padding: 1.5% 2%;
  border-radius: 25px;
  border: 1px solid #5e445f;

}

button:hover {
  background-color: rgb(170, 131, 181);
  transition: background-color 0.7s;


}
</style>