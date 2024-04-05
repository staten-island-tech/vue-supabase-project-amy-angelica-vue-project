<script setup>
import TheWelcome from '../components/TheWelcome.vue'

const URL = "https://data.cityofnewyork.us/resource/pitm-atqc.json"
async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        
    } catch (error) {
        console.log(error,"uh oh");
        
    }
}
getData(URL);

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
