<script setup>
import TheAccount from '@/components/TheAccount.vue'

</script>

<template>
  <h1>You can onyl view if logged in. </h1>
  <TheAccount></TheAccount>
</template>
<!-- 
<template>
  <div class="about">
    <h1>This is protected content</h1>
	<p id="account"> Account: {{  account.data.session.user.email  }}</p>
	<p> Protect the secret password: **TMX$$ </p>
  </div>
</template>

<script setup>
import { supabase } from '../clients/supabase';
import { ref } from "vue";


const account = ref();
getSession();

async function getSession() {
	account.value = await supabase.auth.getSession();
	console.log(account.value)
}
</script>

<style>
#account {
	color: green;
}
</style> -->
<!-- <template>
	<h1> Unauthorized </h1>
	<RouterLink to="/login">Login</RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script> -->