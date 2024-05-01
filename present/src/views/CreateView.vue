
<template>

    <form class="ye" @submit.prevent="handleRegister">
    <h1> Register with your email and password below</h1>
    <div>
      <input class="inputField" required type="email" placeholder="Your email" v-model="registerEmail" />
    </div>
    <div>
      <input class="inputField" required type="password" placeholder="Your password" v-model="registerPassword" />
    </div>
    <div class="buttons">
        <button @click="create()">Sign Up</button>
      </div>
      <div class="login">
        <p>Already have an account? Login</p>
        <router-link class="loginLink" to="/LogIn">here!</router-link>
      </div>

</form>
  <WelcomeItem></WelcomeItem>
</template>

<script setup>
  import { ref } from 'vue'
  import { supabase } from '@/components/supabaseClient.js'

  const registerLoading = ref(false)
  const registerEmail = ref('')
  const registerPassword = ref('')


 

 async function create(){
    try {
      registerLoading.value = true
      const { user, error } = await supabase.auth.signUp({
        email: registerEmail.value,
        password: registerPassword.value,
    
      }, )
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      console.log("Login Successful")
      registerLoading.value = false
    }
  }
</script>

<style  scoped>
</style> 

<!-- 
* This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
*/ 
create function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.mrbs_users (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user(); -->