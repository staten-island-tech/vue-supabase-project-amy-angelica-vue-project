<!-- <template>
  <h1>Login</h1>
  <div v-if="session">
      <div class="stuff">
        <label for="email">Email:</label>
        <input id="email" type="text" v-model="email" />
      </div>
      <div class ='stuff'>
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div class="stuff">
        <label for="email">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div class="buttonContainer">
		<button @click="createAccount"> Create Account</button>
		<button @click="login"> Login </button>
		<button @click="logout"> Logout </button>
	</div> </div>
</template>


<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient';

const props = defineProps(['session'])

const loading = ref(false)
const username = ref('')
const password = ref('')
const email = ref('')


async function createAccount() {
  try {
    loading.value = true
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username:username.value
        }
      }
    })

    if (error !== 406) throw error
console.log("hahhrhrhhr")
  
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function login() {
  try {
    loading.value = true
    const theuser = await supabase.auth.getSession();
    console.log (localUser.data.session)
    const { user, error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    console.log(user)
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function logout() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>
 -->


 <script setup>
 import { supabase } from '@/components/supabaseClient.js'
 import { onMounted, ref, toRefs } from 'vue'
 
 const props = defineProps(['session'])
 const { session } = toRefs(props)
 
 const loading = ref(true)
 const username = ref('')
 const website = ref('')
 const avatar_url = ref('')
 
 onMounted(() => {
   getProfile()
 })
 
 async function getProfile() {
   try {
     loading.value = true
     const { user } = session.value
 
     const { data, error, status } = await supabase
       .from('profiles')
       .select(`username, website, avatar_url`)
       .eq('id', user.id)
       .single()
 
     if (error && status !== 406) throw error
 
     if (data) {
       username.value = data.username
       website.value = data.website
       avatar_url.value = data.avatar_url
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
       website: website.value,
       avatar_url: avatar_url.value,
       updated_at: new Date(),
     }
 
     const { error } = await supabase.from('profiles').upsert(updates)
 
     if (error) throw error
   } catch (error) {
     alert(error.message)
   } finally {
     loading.value = false
   }
 }
 
 async function signOut() {
   try {
     loading.value = true
     const { error } = await supabase.auth.signOut()
     if (error) throw error
   } catch (error) {
     alert(error.message)
   } finally {
     loading.value = false
   }
 }
 </script>
 
 <template>
   <form class="form-widget" @submit.prevent="updateProfile">
     <div>
       <label for="email">Email</label>
       <input id="email" type="text" :value="session.user.email" disabled />
     </div>
     <div>
       <label for="username">Name</label>
       <input id="username" type="text" v-model="username" />
     </div>
     <div>
       <label for="website">Website</label>
       <input id="website" type="url" v-model="website" />
     </div>
 
     <div>
       <input
         type="submit"
         class="button primary block"
         :value="loading ? 'Loading ...' : 'Update'"
         :disabled="loading"
       />
     </div>
 
     <div>
       <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
     </div>
   </form>
 </template>




















     <!--  
        <input
          type="submit"
          class="button primary block"
          :value="loading ? 'Loading ...' : 'Update'"
          :disabled="loading"
        />
      </div>

      <div>
        <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
      </div>
  </div> -->


<!-- <script setup>
import { supabase } from '@/lib/supabaseClient.js';

import { onMounted, ref, toRefs, defineProps } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')

onMounted(() => {
  if(session.value) {
  getProfile()}
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
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
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template> -->