<template>
  <div class="landing">
    <Carousel class="carousel"/>
    <div class="forms">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Landing/Carousel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel
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
</style>