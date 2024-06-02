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
 -->
 <template>
  <div>
    <br>
    <header class="header">
      <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/account">Account</router-link>
      </nav>
    </header>
  </div>
  <div>
    <h1 class="page">Profile</h1>
    <p>Updated Username: {{ user.username }}</p>
  </div>
  <div class="header">
    <form @submit.prevent="Submit" class="form">
      <div class="form1">
        <label for="username">Username</label>
        <!-- Corrected v-model to user.username -->
        <input type="text" required v-model="user.username" id="username" class="form2">
      </div>
      <button type="submit" class="button">Submit</button>
    </form>
  </div> 
</template><script>
import { supabase } from '../../lib/supabaseClient.js'

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
        const { user, session, error: sessionError } = supabase.auth

        if (sessionError) {
          throw new Error('Error fetching session: ' + sessionError.message)
        }

        if (!user || !session) {
          throw new Error('User not authenticated')
        }

        const { error } = await supabase
          .from('profiles')
          .update({ username: this.user.username })
          .eq('id', user.id)

        if (error) {
          throw new Error('Error updating username: ' + error.message)
        }

        console.log('Username updated successfully')
        this.user.username = ''
      } catch (error) {
        console.error('Error:', error.message)
      }
    }
  }
}
</script>
