<template>
  <div>
    <main>
        <div class="bg-[url('/assets/login/hero-1.png')] bg-cover bg-center"></div>
        <section 
            class="bg-gradient-to-br from-black to-neutral-800
            w-full min-h-screen flex flex-column flex-center justify-center"
        >
            <div class="mx-auto flex flex-column items-center p-8">
                <Logo class="ml-6" width="280"/>
                <span class="text-white block mb-2 text-lg">Nice to see you again!</span>
                <form @submit.prevent="simulateLogin" class="w-72 my-8">
                  <span class="block text-white mb-2 text-center">Username*</span>
                  <input  class="appearance-none block w-full border rounded p-2 leading-tight focus:outline-none bg-transparent font-thin text-white" v-model="this.username" required>
                  <span class="block text-xs mt-2 text-neutral-400 text-center mb-4">* Only for the demo purposes</span>
                  <PillButton text="Jump In!" @click="simulateLogin" colorMode="primary" class="mt-2 py-2 w-full text-sm" type="submit"/>
                </form>
            </div>
        </section>
    </main>
  </div>
</template>

<script>
import {Logo, PillButton} from './../components';
import { COLORS_CONFIG } from '../config';
export default {
  name: 'Landing',
  components: {
    Logo,
    PillButton,
  },
  data(){
    const username = localStorage.getItem('username');
    return {
        username:  username || '',
        primaryColor: COLORS_CONFIG.PRIMARY,
    }
  },
  methods: {
    simulateLogin(){
      localStorage.setItem('username', this.username);
      this.$router.push('/app');
    }
  }
}
</script>
