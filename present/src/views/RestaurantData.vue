<template>
  <h1>{{ selected_rest[0].restaurant_name }}</h1>
  <h1>{{ selected_rest[0].street }}</h1>
  <starrating/>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import starrating from "@/components/icons/starrating.vue";
const route = useRoute();
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://uzufnrmrvcxbarxfvhks.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM'
)
let selected_rest = ref('');
async function get_s_restaurant() {
  try {
    let { data: restaurant, error } = await supabase.from('Restaurants').select('*').eq('restaurant_id', `${route.params.restaurant_id}`);
  selected_rest.value = restaurant;
  console.log(restaurant)
  if(error){
    throw new Error(error)
  }
  } catch (error) {
    console.log(error)
  }
  
}
onBeforeMount(() => {
  get_s_restaurant();
})

</script>

<style></style>
