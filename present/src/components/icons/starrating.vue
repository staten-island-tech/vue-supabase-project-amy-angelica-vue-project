<template>
  <div>
    <div v-if="counter == 0">
      <h2>Give a rating!</h2>
    </div>
    <div v-else>
      <h2>Rating: {{ counter }}</h2>
    </div>
    <button class="1" @click="counter = 1">1</button>
    <button class="2" @click="counter = 2">2</button>
    <button class="3" @click="counter = 3">3</button>
    <button class="4" @click="counter = 4">4</button>
    <button class="5" @click="counter = 5">5</button>
  </div>
</template>

<script setup>

</script>
