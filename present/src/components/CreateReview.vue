<template>
  <h1>Write A Review!</h1>

  <div>
    <div v-if="counter == 0">
      <h2>Give a rating!</h2>
    </div>
    <div v-else>
      <h2>Rating: {{ counter }}</h2>
    </div>
    <div class="buttons">
    <button class="one" @click="counter = 1">1</button>
    <button class="two" @click="counter = 2">2</button>
    <button class="three" @click="counter = 3">3</button>
    <button class="four" @click="counter = 4">4</button>
    <button class="five" @click="counter = 5">5</button>
  </div>
  </div>
  <textarea v-model="message" placeholder="Add Review"></textarea>
  <div class="yasbutton">
  <button @click.once="post_it(counter,message)" class ="singlebutton">Post Review</button>
</div>
</template>

<script setup>
import { userstore } from '@/stores/storecreate';
import { supabase } from '../../lib/supabaseClient'
import { ref } from 'vue'
import { usethisStore } from '@/stores/storecreate';
const store = usethisStore();
const storew = userstore();
store.count++
let counter = ref('')
let message = ref('')

async function post_it(rating, message) {
  console.log(message, message.value)
  try {
    const { error } = await supabase.from('Posts')
    .insert({ 
      rating: rating,
      restaurant_id: store.restaurant_id, 
      review: message, 
      user_id: storew.user_id,

    })
    store.$patch({
      user_id:store.user_idf
    })
    console.log(store.user_id)
     clearValue() 
    console.log('hi')
    if (error) {
      throw new Error(error)
    }
  } catch (error) {
    console.log(error)
  }
}
function clearValue() {
  message.value = '';
}
</script>
<style scoped >
.one, .two, .three, .four, .five{
  padding: 5px 20px;
  margin: 10px;
  text-align: center;
  font-size: 1.2rem;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  transition: background-color 0.5s;
}

.one:hover, .two:hover, .three:hover, .four:hover, .five:hover {
  background-color: rgb(161, 130, 173);
}

.buttons{
  margin: 5px 32%;
}

textarea{
  margin-left: 20px;
  border: 2px solid black
}

.singlebutton {
 font-size: 15px;
 background-color: white;
 margin-left: 1.5%;
 padding: 2px;
}
::placeholder{
  color: black;
  font-size: 20px;
}
</style>