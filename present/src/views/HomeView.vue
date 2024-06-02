<template>
  <div>
    <form @submit.prevent="Submit" class="form">
    <router-link to="/home">Home</router-link>
        <router-link to="/account">Account</router-link>
    <h1>HomePage</h1>
    <button @click.prevent="logout">Log Out</button>
  </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient.js'
const router = useRouter()
const loginLoading = ref(false)


async function logout() {
  try {
    loginLoading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/')

  } catch (error) {
    if (error instanceof Error) {
      alert('error try again')  } 
} 
finally {
    loginLoading.value = false
  }
}
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

<style scoped></style>
