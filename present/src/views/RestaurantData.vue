<template>
  <h1>{{ selected_rest[0].restaurant_name }}</h1>
  <h2>{{ selected_rest[0].street }}</h2>
  <h1>Reviews</h1>
  
  <div class="container">
    
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
import { usethisStore } from "@/stores/storecreate";
const store = usethisStore();
const route = useRoute();
import { supabase } from "@/components/supabaseClient";
let selected_rest = ref('');
async function get_s_restaurant() {
  try {
    let { data: restaurant, error } = await supabase.from('Restaurants').select('*').eq('restaurant_id', `${route.params.restaurant_id}`);
  selected_rest.value = restaurant;
    store.$patch({
      restaurant:  restaurant[0].restaurant_name,
      restaurant_id: restaurant[0].restaurant_id,
    })
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

<style>
.container {
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
