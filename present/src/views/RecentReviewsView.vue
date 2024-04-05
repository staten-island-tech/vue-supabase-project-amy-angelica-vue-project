<template>
  <main>
  </main>
</template>

<script setup>
import {ref, onBeforeMount} from "vue";
const restaurants = ref("")
async function getrestaurant() {
  let res = await fetch ("https://data.cityofnewyork.us/resource/pitm-atqc.json")
  let data = await res.json();
  restaurants.value = data;
  console.log(data.Array);
}
onBeforeMount(()=>{
  getrestaurant();
})
</script>

