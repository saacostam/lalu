<template>
    <section class="block md:hidden absolute bottom-[120px] right-4 text-white z-20 flex flex-column text-2xl items-center rounded-2xl p-2 bg-[#042259]">
        <span class="block text-lg mb-2 font-bold text-center text-[#FA62EA]">NAV<hr class="bg-[#FA62EA]"></span>
        <router-link :to="{path:'/app/home'}" :class="{'active':$route.name==='Home'}" class="mb-2">
          <img :src="`https://github.com/saacostam/lalu_fe/raw/master/public/icons/home (0).png`"  alt="Home-icon" class="d-inline">
        </router-link>
        <router-link :to="{path:'/app/library'}" :class="{'active':$route.name==='Library'||$route.name==='Playlist'}" class="mb-2">
          <img :src="`https://github.com/saacostam/lalu_fe/raw/master/public/icons/library(0).png`"  alt="Library-icon" class="d-inline">
        </router-link>
        <router-link :to="{path:'/app/artists'}" :class="{'active':$route.name==='Artists'||$route.name==='Artist'}">
          <img :src="`https://github.com/saacostam/lalu_fe/raw/master/public/icons/artist(0).png`"  alt="artist-icon" class="d-inline">
        </router-link>
    </section>
</template>

<script></script>

<style scoped>
section a{
  transition:ease-in-out transform 0.25s;;
}
section a:not(.active){
  transform: scale(0.9);
}
</style>