<script setup>
import { ref, toRefs, watch } from 'vue'
import { supabase } from '../../lib/supabaseClient'

const prop = defineProps(['path', 'size'])
const { path, size } = toRefs(prop)

const emit = defineEmits(['upload', 'update:path'])
const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage.from('avatars').download(path.value)
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true
    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const filePath = `${Math.random()}.${fileExt}`

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

    if (uploadError) throw uploadError
    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    alert(error.message)
  } finally {
    uploading.value = false
  }
}

watch(path, () => {
  if (path.value) downloadImage()
})
</script>

<template>
  <div class="a">
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatarimage"
      :style="{ height: size + 'em', width: size + 'em' }"
    />
    <div v-else class="avatarno-image"> </div>

    <div class="um" >
      <label class="buttonprimaryblock" for="single">
        {{ uploading ? 'Uploading ...' : 'Upload here!' }}
      </label>
      <input
        style="visibility: hidden; position: absolute"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
  </div>
</template>
<style>
.buttonprimaryblock{
  text-align: center;
  align-items: center;
  font-size: 30px;
  background-color: rgb(237, 227, 241);
}
.a, .um{
  background-color: white;
}
.avatarimage, .avatarno-image{
  align-items: center;
  align-self: center;
}
</style>