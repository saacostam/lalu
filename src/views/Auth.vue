<template>
  <div class="auth">
    <div class="non-player-content">
      <NavBar id="navbar"/>
      <div class="view-router-content">
        <SearchBar id="search-bar"/>
        <router-view class="nested-view px-12 py-8"/>
      </div>
    </div>
    <MusicPlayer id="music-player"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Auth/Layout/NavBar.vue'
import MusicPlayer from '@/components/Auth/Layout/MusicPlayer.vue'
import SearchBar from '@/components/Auth/Layout/SearchBar.vue'

export default {
  name: 'Auth',
  components: { NavBar, MusicPlayer, SearchBar },
  data(){
    this.$store.state.username = localStorage.getItem("username") || 'Friend';
    return {};
  }
}
</script>

<style scoped>
.auth{
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #101010;
}
.non-player-content{
  width:100vw;
  position: fixed;
  top: 0;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: row;
}
.view-router-content{
  flex: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 1444px;
  margin: 0 auto;
}
.nested-view{
  min-height: calc(100vh - 162px);
  overflow-y: auto;
  width: 100%;
  max-width: calc(100vw -  190px);
}
</style>