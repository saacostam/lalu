<template>
  <div class="auth">
    <div class="non-player-content">
      <NavBar id="navbar"/>
      <router-view class="nested-view"/>
    </div>
    <MusicPlayer id="music-player"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Auth/Layout/NavBar.vue'
import MusicPlayer from '@/components/Auth/Layout/MusicPlayer.vue'

export default {
  name: 'Auth',
  components: { NavBar, MusicPlayer },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.auth{
  width: 100vw;
  height: 100vh;
  background-color: #101010;

  display: flex;
  flex-direction: column;
}
.non-player-content{
  flex: auto;
  display: flex;
  flex-direction: row;
}
#music-player{
  flex: none;
  
  display: flex;
  flex-direction: row;
}
.nested-view{
  flex: auto;
}
.nested-view div{
  width: 100%;
}
</style>