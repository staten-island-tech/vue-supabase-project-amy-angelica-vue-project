<!-- <template>
      <form @submit.prevent class="form">
   <router-link to="/home">Home</router-link>
        <router-link to="/account">Account</router-link>
  <div></div>
  </form>
</template>

<script setup>

</script> -->



<!-- <template>
  <div>
    <input v-model="newUsername" placeholder="New Username" />
    <button @click="updateUsername">Update Username</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const newUsername = ref('')

async function updateUsername() {
  try {
    // Update username in Supabase user table
    const { error } = await supabase
      .from('users')
      .update({ username: newUsername.value })
      .eq('id', currentUser.id)

    if (error) throw error
  } catch (error) {
    console.error('Error updating username:', error.message)
    // Handle error
  }
}

// Listen for changes in the user's username in real-time
supabase
  .from('users')
  .on('UPDATE', payload => {
    const updatedUser = payload.new
    if (updatedUser.id === currentUser.id) {
      // Update the newUsername value if it's different from the current value
      if (newUsername.value !== updatedUser.username) {
        newUsername.value = updatedUser.username
      }
    }
  })
  .subscribe()
</script>

 -->





<!-- 
<script>
import { ref } from 'vue'
import { supabase } from '../../lib/supabaseClient'

export default {
  setup() {
    const username = ref('')

    async function updateUsername() {
      try {
        const user = supabase.auth.getUser()

        if (!user) {
          console.error('User is not authenticated.')
          return
        }

        if (!user.id) {
          console.error('User ID is undefined.')
          return
        }

        // Check if user already has a username
        if (user.username) {
          console.log('User already has a username:', user.username)
          return
        }

        // If user doesn't have a username, create one
        const { error } = await supabase
          .from('profiles')
          .update({ username: username.value })
          .eq('id', user.id)

        if (error) {
          throw error
        }

        console.log('Username created successfully!')
      } catch (error) {
        console.error('Error updating username:', error.message)
      }
    }

    return { username, updateUsername }
  }
}
</script>
 --><template>
      <nav>
        <router-link to="/nothome">Home</router-link>
        <router-link to="/account">Account</router-link>
       
      </nav>
      <div>
    <h1 class="page">Profile</h1>
      </div>
      <div class="header">
    <form @submit.prevent="Submit" class="form">
      <div class="yoyo">
        <label for="username">Username</label>
        <input type="text" required v-model="user.username" id="username">
    
      </div>
      <button type="submit" class="button">Submit</button>
    </form>
    </div>
  </template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../../lib/supabaseClient.js';
export default {
  data() {
    return {
      user: {
        username: ''
      }
    };
  },
  methods: {
    async Submit() {
      try {
        const { data: { user } } = await supabase.auth.getUser()
   
        let { error } = await supabase
          .from('profiles')
          .update({ username: this.user.username })
          .eq('id', user.id)

        if (error) {
          console.log(error.message)
        } else {
          console.log('Username updated successfully')
          this.user.username = ''
        }
      } catch (error) {
        console.log('Unexpected error:', error)
      }
    }
  }
}

</script>

<style scoped>
.create-username {
  max-width: 300px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
