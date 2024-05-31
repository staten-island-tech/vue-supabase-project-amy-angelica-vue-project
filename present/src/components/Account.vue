<script>

</script>

<template>
  <div class="formcontainer">
    <form class="form-widget" @submit.prevent="updateProfile">
    <div class="left">
      <label for="email">Change Email</label>
      <input id="email" type="text" />
    
      <label for="username">Change Username</label>
      <input id="username" type="text" v-model="username" />
     
     
      <button class="sub" type="button" onclick="submitForm()">submit</button>
    </div>

    <div class="right">
      <label for="pfp">Change Profile Picture</label>
      <input type="file" name="photo" id="photo" onchange="displayProfilePic()"/>
    </div>
  
    </form>  </div>  
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