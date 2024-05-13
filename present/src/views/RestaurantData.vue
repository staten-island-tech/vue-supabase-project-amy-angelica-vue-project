<template>
  <h1>hi</h1> 
  <h1>{{ restaurant.restaurant_id }}</h1>
  <h1>{{ restaurant.restaurant_name }}</h1>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://uzufnrmrvcxbarxfvhks.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM'
)
let selected_rest = ref("");
async function get_s_restaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select(`*`)
  selected_rest.value = restaurant;
  console.log(restaurant)
}
onMounted(() => {
  get_s_restaurant();
})

</script>

<style></style>
