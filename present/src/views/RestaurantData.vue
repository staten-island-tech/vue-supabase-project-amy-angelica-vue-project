<template>
  <header>
    <nav>
        <router-link to="/nothome" class ="navigate">Home</router-link>
        <router-link to="/account" class="navigate">Account</router-link>
       
      </nav>
  </header>
   
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
import { supabase } from "../../lib/supabaseClient";
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

h1{
  font-size: 35px;
  margin: 5px 15px;
}

h2{
  font-size: 25px;
  margin: 5px 15px;}

header {
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
</style>
