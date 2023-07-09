<template>
  <div class="max-h-fit max-h-md-screen">
    <div class="block md:flex flex-md-row max-h-fit max-h-md-screen overflow-y-auto md:overflow-clip"
      :style="`
        height:calc( 100vh - ${layoutConfig.musicPlayerHeight}px );
        min-height:calc( 100vh - ${layoutConfig.musicPlayerHeight}px );
      `"
    >
      <NavBar
        :style="`
          width:${isMobileLayout ? 0: layoutConfig.navbarWidth}px;
          min-width:${isMobileLayout ? 0: layoutConfig.navbarWidth}px;
        `"
        class="hidden md:block"
      />
      <div
        :style="`
          ${isMobileLayout ? '' : `width:calc( 100vw - ${layoutConfig.navbarWidth}px)`};
          ${isMobileLayout ? '' : `min-width:calc( 100vw - ${layoutConfig.navbarWidth}px)`};
        `"
        class="overflow-clip md:overflow-y-auto"
      >
        <SearchBar/>
        <router-view class="px-12 py-8"/>
      </div>
    </div>
    <MusicPlayer/>
    <MobileNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Auth/Layout/NavBar.vue'
import MusicPlayer from '@/components/Auth/Layout/MusicPlayer.vue'
import SearchBar from '@/components/Auth/Layout/SearchBar.vue'
import MobileNav from '@/components/Auth/Layout/MobileNav.vue'
import { LayoutConfig } from './../classes';

export default {
  name: 'Auth',
  components: { NavBar, MusicPlayer, SearchBar, MobileNav },
  mounted(){
    window.addEventListener("resize", this.resizeEventHandler);
    this.resizeEventHandler();
  },
  unmounted(){
    window.removeEventListener("resize", this.resizeEventHandler);
  },
  data(){
    this.$store.state.username = localStorage.getItem("username") || 'Friend';
    return {
      layoutConfig: new LayoutConfig(),
      isMobileLayout: false,
      windowWidth: 0,
    };
  },
  methods: {
    resizeEventHandler(){
      this.isMobileLayout = window.innerWidth < 768;
    }
  }
}
</script>