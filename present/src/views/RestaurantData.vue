<template>
  <h1>{{ selected_rest[0].restaurant_name }}</h1>
  <h2>{{ selected_rest[0].street }}</h2>
  <div class="container">
    <h1>Reviews</h1>
    <PostsCard
      v-for="post in posts"
      :key="post.postid"
      :post="post"
    />
  </div>
  <CreateReview/>
</template>

<script setup>
import CreateReview from "@/components/CreateReview.vue";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { supabase } from "@/components/supabaseClient";
let selected_rest = ref('');
async function get_s_restaurant() {
  try {
    let { data: restaurant, error } = await supabase.from('Restaurants').select('*').eq('restaurant_id', `${route.params.restaurant_id}`);
  selected_rest.value = restaurant;
 
  if(error){
    throw new Error(error)
  }
  } catch (error) {
    console.log(error)
  }
  
}
onBeforeMount(() => {
  get_s_restaurant();
});
  let posts = ref('');
async function get_posts() {

  try {
    let { data: post, error } = await supabase.from('Posts').select('*').eq('restaurant_id', `${route.params.restaurant_id}`);
  posts.value = post;
  if(error){
    throw new Error(error)
  }
  } catch (error) {
    console.log(error)
  }
  
}
onBeforeMount(() => {
  get_posts();
});
import PostsCard from "@/components/icons/PostsCard.vue";
</script>

<style></style>
