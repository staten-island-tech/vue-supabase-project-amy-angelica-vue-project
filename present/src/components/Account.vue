<script setup>
import { supabase } from '../router/supabase'
import { onMounted, ref, toRefs } from 'vue'
import {defineProps} from 'vue'
import Avatar from '../components/Avatar.vue'


const props = defineProps(['session'])
const { session } = toRefs(props)

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

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
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

</script>

<template>
  <div class="formcontainer">
    <form class="form-widget" @submit.prevent="updateProfile">
    <div class="left">
 
    
      <label for="username">Change Username</label>
      <input id="username" type="text" v-model="username" />
     
     
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <form class="form-widget" @submit.prevent="updateProfile">
    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
  </form>
  
    </form>  </div>   
    <!-- :value="session.user.email" -->

</template>
<style scoped>
.formcontainer{
  justify-content: center;
  display: flex;
  align-items: center;
  min-height: 100vh;
}
.form-widget{
  background-color: antiquewhite;
  box-sizing: border-box;
}
.left{
  flex: 1;
  padding-right: 20px;
  padding-bottom: 10px;
}

.right{
  flex: 1;
  padding-left: 20px;
}
#app{
  display: flex;
}
input, select{
  width: 100%;;
  padding: 10px;
}
.sub{
  margin-top: 10px;
}
</style>