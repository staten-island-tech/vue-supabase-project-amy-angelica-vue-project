<template>
    <div>
      <div class="container">
        
        <PostCard v-for="post in posts" :key="post.post_id" :post="post"/>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import { createClient } from '@supabase/supabase-js'
  import { ref, onBeforeMount } from 'vue';
  const supabase = createClient('https://uzufnrmrvcxbarxfvhks.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZucm1ydmN4YmFyeGZ2aGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNTE5NzcsImV4cCI6MjAyNzcyNzk3N30.-iz6vsmlLmImNAIyNjVGPy-q0dznZNeT9W_sRbEJ2mM')
  const posts = ref("")
  async function getpost() {
  let { data: post, error } = await supabase
    .from('Posts')
    .select('*')
    posts.value = post}
    onBeforeMount(()=>{
      getpost();
    })
    import PostCard from '@/components/icons/PostCard.vue';
</script>
  <style  scoped>
  
    .container {
      display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-around;
    
  }
  .title{
    font-size: 50px;
    text-align: center;
  }
  </style>