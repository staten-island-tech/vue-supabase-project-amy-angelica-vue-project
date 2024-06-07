<script setup>
import { supabase } from '../../lib/supabaseClient'
import { onMounted, ref } from 'vue'
import Avatar from '@/components/Avatar.vue'
import { storeSession } from '@/stores/session';
import { usethisStore } from '@/stores/storecreate';
import { userstore } from '@/stores/storecreate';
import { user_array } from '@/stores/storecreate';
const storew = userstore();
const store = usethisStore();

const sessionStore = storeSession()
const session = ref(sessionStore.session)

const loading = ref(true)
const username = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value
    console.log(user)
    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      avatar_url.value = data.avatar_url
    //   store.$patch({
    //   user_id: user.id,
    // })
    // storew.$patch({
    //   user_id: user.id,
    // })
        user_array.push(user.id)
console.log(user_array)
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
    await getProfile()
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <header>
    <nav>
      <router-link to="/nothome" class="navigate">Home</router-link>
        <router-link to="/account" class="navigate">Account</router-link>
    </nav>
  </header>
 
  
    <form class="form" @submit.prevent="updateProfile()">
      <h3>Welcome, {{ username }}!</h3>
    <div class="left">
 <div class="inputs">
      <input
        class="inputField"
        required
        type="username"
        placeholder="Username"
        v-model="username"
      />
    </div>
    <div class="inputs">
      <input
        type="submit"
        class="buttonblock"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>
   
    </div>

    <form class="pfp" @submit.prevent="updateProfile">
     <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
  </form>
  
    </form>    

</template>
<style scoped>

header {
  background-color: white;
  margin: 25px;
  text-align: center;
  margin-bottom: 100px;

}

h3 {
  font-size: 23px;
  padding: 4%;
  background-color: white;

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


.inputs {
  padding-bottom: 20px;
  background-color: white;
}


.buttonblock {
  background-color: white;
  padding: 1.5% 2%;
  border-radius: 25px;
  border: 1px solid #5e445f;

}

.buttonblock:hover {
  background-color: rgb(170, 131, 181);
  transition: background-color 0.7s;

}

.inputField {
  width: 70%;
  padding: 10px;
  border: 1px solid #5e445f;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: rgb(237, 227, 241);
}


.navigate:hover {
  background-color: rgb(142, 98, 154);
}

.form {
  width: 65%;
  border: 15px solid rgb(130, 112, 131);
  margin-left: 15%;
  text-align: center;
  background-color: white;
}
.pfp{
  text-align: center;
  background-color:rgb(255, 255, 255) ;
}


</style>