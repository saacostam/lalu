<template>
    <router-link class="w-48 shrink-0 cursor-pointer hover:no-underline select-none" :to="`/app/artist/${name}`">
        <img :src="fImgSrc" 
            class="w-100 rounded-full hover:shadow hover:bg-neutral-900" :class="`hover:shadow-[${shadowColor}]`" 
            :alt="name" width="112" height="112"
        >
        <section class="p-2">
            <span class="text-sm text-white block text-center">{{ name }}</span>
        </section>
    </router-link>
</template>

<script>
import { COLORS_CONFIG } from '../../config';
export default {
    props: [
        'name',
        'imgSrc',
        'src',
    ],
    data(){
        return {
            fImgSrc: this.$props['imgSrc'] || 'https://picsum.photos/120',
            shadowColor: COLORS_CONFIG.PRIMARY,
        }
    }
}
</script>