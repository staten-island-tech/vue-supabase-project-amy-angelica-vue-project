<template>
<header>
  <nav>

    <router-link to="/" class="navigate">Login</router-link>
    <router-link to="/createuser" class="navigate">Register</router-link>
  </nav>
</header>
    <form class="form" @submit.prevent="create()">
    <h1>Register with your email and password </h1>
    <div>
      <div>
        <div class="inputs">
      <input
        class="inputField"
        required
        type="email"
        placeholder="Email"
        v-model="registerEmail"
      />
    </div>
    <div class="inputs">
      <input
        class="inputField"
        required
        type="password"
        placeholder="Password"
        v-model="registerPassword"
      />
    </div>
    
    </div>
      <div class="buttons">
        <button type="submit">Create Account</button>
      </div>
      <div class="alr_create">
        <p>Don't have an account?</p>
        <router-link class="createlink" to="/createuser">Register Here!</router-link>
      </div>
    </div>
    <div></div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../lib/supabaseClient.js'
import { useRouter } from 'vue-router'

const registerEmail = ref('')
const registerPassword = ref('')
const router = useRouter()

async function create() {
  try {
    const { error } = await supabase.auth.signUp({
      email: registerEmail.value,
      password: registerPassword.value
    })
    if (error) throw error
    alert('Account created successfully! Please check your email to verify your account.')
    router.push('/')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    console.log('Register Successful')
  }
}
</script>

<style scoped>
header {
  background-color: white;
  margin: 25px;
  text-align: center;
  margin-bottom: 100px;

}

h1 {
  font-size: 27px;
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

.navigate:hover {
  background-color: rgb(142, 98, 154);
}

.form {
  width: 65%;
  padding: 5%;
  border-radius: 15px;
  background-color: #aa99ad;
  margin-left: 13%;
  text-align: center;
}

.inputs {
  padding-bottom: 10px;
  background-color: white;
  
  
}

.inputField {
  width: 70%;
  padding: 10px;
  border: 1px solid #5e445f;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: rgb(237, 227, 241);
}


.buttons {
  padding: 5px;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #ffffff;

}

button {
  background-color: white;
  padding: 1.5% 2%;
  border-radius: 25px;
  border: 1px solid #5e445f;

}

button:hover {
  background-color: rgb(170, 131, 181);
  transition: background-color 0.7s;


}

.alr_create {
  padding-top: 20px;
  background-color: white;
  padding-bottom: 5%;

}

.createlink {
  background-color: #fff;
}

p{ 
  background-color: #fff;
}
</style>

