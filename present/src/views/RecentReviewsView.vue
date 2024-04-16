<template>
  <div>
    <form @submit.prevent="onSubmit"></form>
  </div>
</template>

<script setup>
import {ref, onBeforeMount} from "vue";
const restaurants = ref("")
async function getrestaurant() {
  let res = await fetch ("https://data.cityofnewyork.us/resource/pitm-atqc.json")
  let data = await res.json();
  restaurants.value = data;
  const test = data.filter((da)=> da.restaurant_name == "Pomp and Circumstance Hospitality")
  console.log(test)
}
onBeforeMount(()=>{
  getrestaurant();
})
</script>

