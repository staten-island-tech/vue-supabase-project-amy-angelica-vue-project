<template>
  <div>
    <h1>Home Page. User {{session.session}}</h1>
    <button @click.prevent="logout">Log Out</button>
  </div>
</template>

<script setup>
async function logout() {
  try {
    const { error } = await supabase.auth.signOut({
      email: loginEmail.value,
      password: loginPassword.value
    }).then(router.push('/loginuser'))
    if (error) throw error
  } catch (error) {
      alert(error.message)
  } 
}
</script>

<style scoped></style>
