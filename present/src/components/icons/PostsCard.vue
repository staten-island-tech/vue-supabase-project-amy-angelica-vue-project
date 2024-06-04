<template> 
<div class="card">      
<h2>{{ post.user_id }}</h2>
  <h3>Created at:{{ post.created_at }}</h3>
        <h2>Rating: {{ post.rating }}</h2>
       <h2>Review: {{ post.review }}</h2> 
       <h2>reply: {{ replies.id }}</h2>
<likebutton/>
<!-- <input v-model="message" placeholder="edit me" />
<button @click="reply_to(message)">Post Reply</button> -->
</div> 
</template>

<script setup>
import { supabase } from '../supabaseClient';
import { ref, onBeforeMount } from 'vue';
import likebutton from './likebutton.vue';
const props = defineProps({
   post: Object,
   postid: Number 
})
let replies = ref('');
async function get_replies() {
  try {
    let { data: reply, error } = await supabase.from('Replies').select('*');
  replies.value = reply;
    console.log(reply)
  if(error){
    throw new Error(error)
  }
  } catch (error) {
    console.log(error)
  }
  
}
onBeforeMount(() => {
  get_replies();

});

// function reply_to(message){

// }

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