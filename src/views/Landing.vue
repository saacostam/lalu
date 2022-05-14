<template>
  <div class="landing">
    <Carousel class="carousel"/>
    <div class="forms">
      <div class="logo">LALU</div>
      <div class="nav">
        <a class="register" @click="()=>{this.option =  'register'}" >REGISTER</a>
        <a class="login" @click="()=>{this.option =  'login'}">LOGIN</a>
      </div>

      <Register v-if="this.option === 'register'"/>
      <Login v-if="this.option === 'login'"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/landing/Carousel.vue'
import Login from '@/components/landing/Login.vue'
import Register from '@/components/landing/Register.vue'

export default {
  name: 'Landing',
  components: {
    Carousel,
    Login,
    Register
  },
  data(){
    return {
      option:'login'
    }
  }
}
</script>

<style scoped>
.landing{
  width: 100vw;
  height: 100vh;
  background-color: #101010;

  display: flex;
}
.carousel, .forms{
  flex: 1;
}
.forms{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo{
  width: 9em;
  height: 3em;
  background: #813232;
}
.nav{
  display: flex;
  flex-direction: row;
}
.nav a{
  margin: 1em;
}
.nav a:hover{
  cursor: pointer;
}
</style>