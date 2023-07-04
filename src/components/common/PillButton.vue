<template>
    <button 
        class="rounded-full bg-gradient-to-r text-white font-medium
        transition-transform hover:scale-105 duration-300
        focus:outline-none focus:ring-1 focus:ring-white" 
        :class="`from-[${this.resolvedColorMode.dark}] to-[${this.resolvedColorMode.light}]`" 
    >
        {{ text }}
    </button>
</template>

<script>
import { resolveBiColorMode } from './../../config';
export default{
    props: [
        'text',
        'colorMode',
    ],
    data(){
        const resolvedColorMode = resolveBiColorMode(this.$props.colorMode);
        return {
            resolvedColorMode
        }
    },
}
</script>