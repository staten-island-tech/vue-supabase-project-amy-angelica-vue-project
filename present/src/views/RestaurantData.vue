<template>
  <h1>hi</h1> 
  <h2>{{ id }}</h2> 
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'https://uzufnrmrvcxbarxfvhks.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM'
)
let selected_rest = ref("");
async function get_s_restaurant() {
  let { data: restaurant, error } = await supabase.from('Restaurants').select(`${route.params.restaurant_id}`)
  selected_rest.value = restaurant;
}
onBeforeMount(() => {
  get_s_restaurant()
})

</script>

<style></style>
